-- ---------------------------------------------------------------------------
-- Plateforme de formation — Lycée Montaigne, Beit Chabab
-- Schéma de la collecte des réponses (remplace Microsoft Forms et Teams/OneNote).
--
-- Trois tables seulement, appliquées par `npm run db:init`. Le script est
-- idempotent : chaque instruction est écrite en « create ... if not exists »,
-- on peut donc la rejouer sans risque sur une base déjà en service.
--
-- Anonymat : aucune colonne nominative. Les questionnaires d'entrée et de
-- satisfaction n'ont jamais comporté de champ d'identité (annexes A et B du
-- déroulé) et n'en comportent pas davantage ici. Seule la restitution par
-- groupe possède une colonne « membres », renseignée volontairement par le
-- groupe lui-même.
-- ---------------------------------------------------------------------------

-- Une session de formation = une occurrence d'une formation, un jour donné.
-- Les réponses sont toujours rattachées à une session : deux groupes formés à
-- deux dates différentes ne se mélangent donc jamais dans le tableau de bord.
create table if not exists formation_session (
  id serial primary key,
  formation text not null,
  libelle text not null,
  ouverte boolean not null default true,
  creee_le timestamptz not null default now()
);

-- Une réponse anonyme à l'un des deux questionnaires :
--   'sondage'      — sondage d'entrée, rempli pendant l'installation ;
--   'satisfaction' — enquête de satisfaction, remplie avant de quitter la salle.
-- Le détail est stocké en jsonb (identifiant de question -> valeur), pour que
-- l'ajout d'une question au contenu ne demande aucune migration de schéma.
-- L'agrégation est faite en TypeScript : le volume se compte en dizaines de
-- lignes par session.
create table if not exists formation_reponse (
  id serial primary key,
  session_id integer not null references formation_session(id) on delete cascade,
  formation text not null,
  questionnaire text not null check (questionnaire in ('sondage','satisfaction')),
  reponses jsonb not null,
  envoye_le timestamptz not null default now()
);

-- La trame de restitution de l'atelier disciplinaire, une ligne par groupe.
-- Elle remplace la page Teams/OneNote par discipline : ce que le groupe a
-- produit, avec quel outil, ce qu'il a dû corriger et ce qui appelle une
-- vigilance. C'est la seule table où figure un texte saisi volontairement par
-- les participants (colonne « membres ») ; elle reste facultative.
create table if not exists formation_restitution (
  id serial primary key,
  session_id integer not null references formation_session(id) on delete cascade,
  formation text not null,
  discipline text not null,
  niveau text,
  membres text,
  outil text not null,
  ressource text not null,
  requete text,
  corrections text,
  vigilance text,
  envoye_le timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Index
--
-- Toutes les lectures du tableau de bord partent soit d'une formation
-- (« quelle est la session ouverte ? »), soit d'une session (« toutes les
-- réponses de cette session »). Ces trois index couvrent ces accès.
-- ---------------------------------------------------------------------------

-- Retrouver la session ouverte d'une formation, et lister l'historique.
create index if not exists formation_session_formation_idx
  on formation_session (formation, creee_le desc);

-- Charger les réponses d'une session, questionnaire par questionnaire.
create index if not exists formation_reponse_session_idx
  on formation_reponse (session_id, questionnaire, envoye_le);

-- Charger les restitutions d'une session, dans l'ordre d'envoi.
create index if not exists formation_restitution_session_idx
  on formation_restitution (session_id, envoye_le);

-- ---------------------------------------------------------------------------
-- Commentaires de catalogue (visibles avec \d+ sous psql).
-- ---------------------------------------------------------------------------

comment on table formation_session is
  'Une occurrence de formation (une date, un groupe). Les réponses s''y rattachent.';
comment on table formation_reponse is
  'Réponses anonymes aux questionnaires d''entrée et de satisfaction (jsonb).';
comment on table formation_restitution is
  'Trame de restitution de l''atelier disciplinaire, une ligne par groupe.';

comment on column formation_session.libelle is
  'Nom lisible de la session, ex. « Pré-rentrée 2026 — groupe du matin ».';
comment on column formation_session.ouverte is
  'Une session fermée n''accepte plus de réponse ; elle reste consultable.';
comment on column formation_reponse.reponses is
  'Identifiant de question -> valeur (texte, liste de textes, ou nombre).';
comment on column formation_restitution.membres is
  'Prénoms des membres du groupe, saisis volontairement. Jamais de donnée d''élève.';
