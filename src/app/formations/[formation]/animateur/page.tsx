/**
 * Tableau de bord de l’animateur — l’écran projeté en salle.
 *
 * Il remplace trois béquilles du déroulé d’origine : l’onglet « Réponses » de
 * Microsoft Forms (résultats du sondage et de la satisfaction), l’espace
 * Teams / OneNote (mur des restitutions), et les QR codes des diapositives 2
 * et 25, désormais fabriqués ici à partir de l’adresse réelle du site.
 *
 * Deux décisions structurent la page.
 *
 *  1. L’autorisation se joue côté serveur, avant tout rendu. Sans elle, la page
 *     ne rend que le verrou : ni compteur, ni libellé de séance, ni même
 *     l’existence d’une collecte configurée ne transparaît.
 *
 *  2. Les QR codes sont produits ici, pas dans le navigateur. Ils ne dépendent
 *     que de l’adresse du site et des chemins des formulaires : les calculer au
 *     rendu évite d’embarquer une librairie de tracé dans le paquet client, et
 *     l’écran de projection les affiche sans attendre.
 *
 * Composant serveur : aucun hook, tout l’interactif est délégué aux deux
 * composants client.
 */

import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import QRCode from "qrcode";

import ConnexionAnimateur from "@/components/ConnexionAnimateur";
import TableauDeBordAnimateur, {
  type LienFormulaire,
} from "@/components/TableauDeBordAnimateur";
import { animateurAutorise, codeAnimateurConfigure } from "@/lib/animateur";
import { collecteConfiguree } from "@/lib/db";
import { getFormation } from "@/lib/formations";

/*
  La page dépend d’un cookie et de l’état de la base : elle ne peut être ni
  pré-rendue au moment du build, ni servie depuis un cache.
*/
export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ formation: string }>;
}

export const metadata: Metadata = {
  title: "Tableau de bord animateur",
  description: "Réservé à l’animateur de la séance.",
  // Un écran protégé n’a rien à faire dans l’index d’un moteur de recherche.
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/* Adresses publiques des formulaires                                  */
/* ------------------------------------------------------------------ */

/**
 * Chemins des trois formulaires que la salle remplit.
 *
 * Réunis ici : ce sont eux qui sont encodés dans les QR codes et recopiés à la
 * main par les participants sans téléphone. Si une route est renommée, c’est le
 * seul endroit à corriger.
 */
function cheminsDesFormulaires(formation: string) {
  const participer = `/formations/${formation}/participer`;
  return {
    sondage: `${participer}/sondage`,
    restitution: `${participer}/restitution`,
    satisfaction: `${participer}/satisfaction`,
  } as const;
}

/**
 * Origine réelle du site, telle que la salle la voit.
 *
 * Un QR code doit mener à l’adresse que les téléphones peuvent joindre : en
 * salle, c’est souvent l’adresse du poste de l’animateur sur le réseau local,
 * jamais « localhost ». On la lit donc dans les en-têtes de la requête plutôt
 * que dans une variable d’environnement, qu’il faudrait penser à changer.
 *
 * Derrière un relais (Vercel, nginx), « x-forwarded-host » et
 * « x-forwarded-proto » portent l’adresse publique ; l’un comme l’autre peuvent
 * contenir une liste, dont seule la première valeur nous intéresse.
 */
async function origineDuSite(): Promise<string> {
  const entetes = await headers();

  const premiereValeur = (brut: string | null): string | null => {
    const valeur = brut?.split(",")[0]?.trim();
    return valeur && valeur.length > 0 ? valeur : null;
  };

  const hote =
    premiereValeur(entetes.get("x-forwarded-host")) ??
    premiereValeur(entetes.get("host")) ??
    "localhost:3000";

  // En local, le site est servi en clair : http est le défaut, pas un défaut.
  const protocole = premiereValeur(entetes.get("x-forwarded-proto")) ?? "http";

  return `${protocole}://${hote}`;
}

/**
 * QR code d’une adresse, en SVG.
 *
 * Le SVG est choisi contre l’image matricielle : il reste net à toute échelle
 * de projection, là où un PNG se pixelliserait sur un mur. Correction d’erreur
 * « M » : le code reste lisible partiellement masqué, sans la densité de
 * modules d’un niveau supérieur — c’est ce qui permet de le scanner depuis le
 * fond de la salle.
 *
 * L’encre du site remplace le noir pur ; le blanc de fond, lui, est conservé,
 * car c’est le contraste avec lui qui rend le code scannable.
 *
 * En cas d’échec, la fonction renvoie `null` : le tableau de bord affiche alors
 * la seule adresse en clair, qui suffit à faire entrer la salle dans le
 * formulaire.
 */
async function qrCodeDe(url: string): Promise<string | null> {
  try {
    return await QRCode.toString(url, {
      type: "svg",
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#16243b", light: "#ffffff" },
    });
  } catch (souci) {
    console.error("[animateur] QR code impossible à produire :", souci);
    return null;
  }
}

/* ------------------------------------------------------------------ */
/* Encadré : aucun code d’accès défini                                 */
/* ------------------------------------------------------------------ */

/**
 * Sans CODE_ANIMATEUR, il n’y a aucun secret à comparer : le tableau de bord
 * reste fermé, et proposer un champ de saisie serait un leurre. On explique
 * donc la marche à suivre plutôt que d’afficher un verrou que rien n’ouvre.
 */
function CodeAbsent() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="rounded-[--radius-carte] border border-trait bg-craie p-6 sm:p-8">
        <p className="text-sm text-accent">Espace animateur</p>

        <h1 className="mt-3 font-serif text-2xl leading-tight text-encre">
          Aucun code d’accès n’est défini
        </h1>

        <p className="mt-4 leading-relaxed text-graphite">
          Le tableau de bord affiche les réponses de la salle : il ne s’ouvre
          qu’avec un code, et aucun code n’est configuré sur ce site. Il reste
          donc fermé — c’est le comportement voulu, pas une panne.
        </p>

        <h2 className="mt-8 font-serif text-lg text-encre">Comment l’ouvrir</h2>

        <ol className="mt-3 space-y-3 text-sm leading-relaxed text-graphite">
          <li>
            <span className="font-medium text-encre">1. Choisir un code.</span>{" "}
            Une phrase courte, connue de l’animateur seul, changée à chaque
            session.
          </li>
          <li>
            <span className="font-medium text-encre">
              2. Le déclarer dans l’environnement
            </span>{" "}
            sous le nom{" "}
            <code className="rounded bg-voile px-1.5 py-0.5 font-mono text-[0.8125rem] text-encre">
              CODE_ANIMATEUR
            </code>{" "}
            : dans le fichier{" "}
            <code className="rounded bg-voile px-1.5 py-0.5 font-mono text-[0.8125rem] text-encre">
              .env.local
            </code>{" "}
            en local, dans les variables du projet en production.
          </li>
          <li>
            <span className="font-medium text-encre">
              3. Redémarrer le site,
            </span>{" "}
            puis revenir sur cette page : le champ de saisie apparaîtra.
          </li>
        </ol>

        <p className="mt-8 border-t border-trait pt-5 text-sm leading-relaxed text-estompe">
          Les formulaires de la salle — sondage d’entrée, restitution de groupe,
          enquête de satisfaction — ne dépendent pas de ce code : ils restent en
          accès libre.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default async function PageAnimateur({ params }: Props) {
  const { formation: slug } = await params;
  const formation = getFormation(slug);

  if (!formation) notFound();

  /*
    L’autorisation d’abord, le reste ensuite : rien de ce qui suit ne doit être
    calculé — encore moins rendu — pour un visiteur qui n’a pas le code.
  */
  if (!(await animateurAutorise())) {
    return codeAnimateurConfigure() ? <ConnexionAnimateur /> : <CodeAbsent />;
  }

  const origine = await origineDuSite();
  const chemins = cheminsDesFormulaires(formation.slug);

  /*
    Les trois formulaires dans l’ordre de la séance : le sondage à l’arrivée, la
    restitution à la fin de l’atelier disciplinaire, la satisfaction avant de
    quitter la salle. Les QR sont calculés de front — ils ne dépendent pas les
    uns des autres.
  */
  const definitions: Array<Omit<LienFormulaire, "qr">> = [
    {
      cle: "sondage",
      titre: "Sondage d’entrée",
      moment: "À l’arrivée",
      chemin: chemins.sondage,
      url: `${origine}${chemins.sondage}`,
    },
    {
      cle: "restitution",
      titre: "Restitution du groupe",
      moment: "Fin de l’atelier",
      chemin: chemins.restitution,
      url: `${origine}${chemins.restitution}`,
    },
    {
      cle: "satisfaction",
      titre: "Enquête de satisfaction",
      moment: "Avant de sortir",
      chemin: chemins.satisfaction,
      url: `${origine}${chemins.satisfaction}`,
    },
  ];

  const codes = await Promise.all(
    definitions.map((definition) => qrCodeDe(definition.url)),
  );

  const liens: LienFormulaire[] = definitions.map((definition, rang) => ({
    ...definition,
    qr: codes[rang],
  }));

  return (
    <TableauDeBordAnimateur
      formation={formation.slug}
      titreFormation={formation.titre}
      sessionFormation={formation.session}
      liens={liens}
      collecteConfiguree={collecteConfiguree()}
    />
  );
}
