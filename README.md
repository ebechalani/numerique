# Numérique — plateforme de formation du Lycée Montaigne

Site des formations du référent numérique (Lycée Montaigne, Beit Chabab, Liban).
Les enseignants y suivent une formation module par module, y répondent aux
questions posées en séance et y retrouvent les ressources après coup.

Première formation publiée : **« IA et usages numériques — Comprendre ·
Encadrer · Utiliser »** (pré-rentrée 2026, deux heures), transcrite depuis le
diaporama, la fiche outils et le déroulé animateur.

## Ce que le site permet

- **Suivre la formation** : sept modules, une barre de progression enregistrée
  dans le navigateur, navigation module précédent / suivant.
- **Répondre aux questions** : vrai/faux, cas pratiques classés selon le feu
  tricolore de la charte, listes de vérification, constructeur de requêtes.
  Les réponses interactives restent locales au navigateur.
- **Répondre aux questionnaires de la séance** : sondage d’entrée, enquête de
  satisfaction et trame de restitution des ateliers, collectés sur le site
  (anonymes, sans application externe).
- **Tableau de bord animateur** : résultats agrégés en direct, mode
  projection, QR codes vers les questionnaires, ouverture et fermeture des
  séances.
- **Assistant IA** : répond aux questions des enseignants uniquement à partir
  du contenu de la formation, et cite le module ou la ressource source.
- **Ressources** : fiche outils, bibliothèque de requêtes, questions
  fréquentes, déroulé animateur.

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # facultatif, voir plus bas
npm run dev                  # http://localhost:3000
```

Autres commandes :

```bash
npm run lint      # ESLint
npm run build     # compilation de production
npm run start     # sert la version compilée
npm run db:init   # applique db/schema.sql à DATABASE_URL (rejouable)
```

## Configuration

Aucune variable n’est obligatoire. Sans elles, le site compile et se consulte
normalement ; seule la fonction concernée est désactivée et la page l’annonce.

| Variable            | Active                                                   |
| ------------------- | -------------------------------------------------------- |
| `ANTHROPIC_API_KEY` | l’assistant IA                                           |
| `DATABASE_URL`      | la collecte des réponses (Postgres)                      |
| `CODE_ANIMATEUR`    | l’accès au tableau de bord animateur                     |

Le détail de chaque variable est commenté dans `.env.example`.

## Déploiement

Le projet est une application Next.js standard, prévue pour Vercel :

1. Importer le dépôt dans Vercel.
2. Renseigner les variables ci-dessus dans *Project Settings → Environment
   Variables*. Pour Postgres, l’onglet *Storage* crée la base et injecte
   `DATABASE_URL` automatiquement.
3. Appliquer le schéma une fois, depuis un poste ayant `DATABASE_URL` dans
   `.env.local` : `npm run db:init`.

## Organisation du code

```
src/
  app/                      pages et routes API (App Router)
    formations/[formation]/ page de formation, modules, ressources,
                            questionnaires participants, tableau animateur
    api/                    assistant, réponses, restitutions, animateur
  content/
    types.ts                contrat de contenu (blocs, modules, questionnaires)
    formations/<slug>/      contenu d’une formation, décrit en données
  components/               rendu des blocs, interactifs, formulaires, graphiques
  lib/
    formations.ts           registre des formations et accès au contenu
    corpus.ts               corpus de l’assistant, dérivé du même contenu
    progression.ts          progression locale (localStorage)
    db.ts, animateur.ts     accès Postgres, session animateur
db/schema.sql               schéma de la collecte
scripts/init-db.mjs         application du schéma
```

Tout le contenu pédagogique est écrit en données, jamais en JSX : les pages,
le corpus de l’assistant et l’agrégation des résultats partent de la même
source.

## Ajouter une formation

1. Créer `src/content/formations/<slug>/index.ts` exportant un objet
   `Formation` (voir `src/content/types.ts`), avec ses modules dans
   `modules/` et, au besoin, ses ressources dans `ressources/`.
2. L’ajouter au tableau `formations` de `src/lib/formations.ts`.
3. Si la formation a des ressources propres, brancher leur construction dans
   `construireBlocs` du même fichier.

Le catalogue, les pages de modules, la progression et le corpus de
l’assistant la prennent en compte sans autre modification.
