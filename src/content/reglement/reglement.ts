import type { ChapitreReglement } from "./types";

/**
 * Le règlement intérieur du 2nd degré (collège-lycée), année 2026-2027,
 * transcrit article par article depuis le document officiel.
 *
 * Le texte est repris mot pour mot : seuls les artefacts d'extraction du PDF
 * ont été corrigés (espaces au milieu d'un mot, césures, retours à la ligne).
 * Les tournures et les coquilles du document sont conservées, la numérotation
 * imprimée aussi — y compris là où le document réutilise un numéro, voir
 * REMARQUES_NUMEROTATION.
 *
 * Fichier engendré à partir du PDF puis relu ; il n'est pas destiné à être
 * modifié à la main, sauf pour corriger une divergence avec le document
 * officiel. En cas de doute, le document signé par la famille fait foi.
 */
export const CHAPITRES: ChapitreReglement[] = [
  {
    numero: "0",
    titre: "Préambule",
    articles: [
      {
        numero: "",
        titre: "Préambule",
        blocs: [
          {
            type: "paragraphe",
            texte: "Le lycée Montaigne est un établissement d’enseignement privé, affilié à la MLF et homologué, partenaire de l’AEFE.",
          },
          {
            type: "liste",
            items: [
              "Apporter aux élève les connaissances, les compétences et la formation intellectuelle nécessaires à la poursuite de leurs études supérieures.",
              "Préparer les jeunes, dans un climat de confiance et de tolérance, à leur vie de citoyens autonome et responsable.",
            ],
            texte: "Il poursuit deux objectifs :",
          },
          {
            type: "paragraphe",
            texte: "Le présent règlement intérieur (RI) établit les dispositions qui régissent le fonctionnement du Lycée Montaigne. Il définit les droits et les devoirs des élèves inscrits au collège et au lycée.",
          },
          {
            type: "liste",
            items: [
              "Neutralité politique, idéologique et religieuse.",
              "Devoir d’égalité, de tolérance, de respect d’autrui et de ses convictions.",
              "Travail, ponctualité et assiduité.",
              "Respect des biens et des locaux mis à la disposition de tous.",
              "Réprobation de toute forme de violence qu’elle soit d’ordre psychologique, physique, verbale ou morale.",
            ],
            texte: "Ce règlement s’inscrit dans le respect des principes laïques. Il est porteur des valeurs qui y sont attachées :",
          },
          {
            type: "paragraphe",
            texte: "Le présent Règlement Intérieur a pour but d’assurer le bon fonctionnement de l'établissement, de bonnes relations entre les élèves et entre les élèves et les personnels ainsi que la sécurité des personnes et des biens.",
          },
          {
            type: "paragraphe",
            texte: "Toutes les dispositions du règlement intérieur s’appliquent pleinement lors du transport scolaire, des activités périscolaires, des projets, des sorties et voyages au sein ou en dehors de l’établissement et au cours des classes virtuelles éventuelles.",
          },
          {
            type: "paragraphe",
            texte: "L'inscription d'un enfant au Lycée Montaigne vaut, pour lui-même et pour sa famille, adhésion aux dispositions du présent règlement ainsi qu’aux projets présentés par l’équipe pédagogique, et engagement à s’y conformer pleinement.",
          },
        ],
      },
    ],
  },
  {
    numero: "1",
    titre: "1. Les droits des élèves",
    articles: [
      {
        numero: "1.1",
        titre: "Le droit à l'intégrité physique et morale",
        blocs: [
          {
            type: "paragraphe",
            texte: "L'établissement se porte garant de l'intégrité physique et morale de ses élèves. Il veille à leur sécurité au sein de ses locaux, à la non-discrimination, au respect des opinions et de la laïcité et mène notamment une politique active de sensibilisation à la lutte contre le harcèlement.",
          },
        ],
      },
      {
        numero: "1.2",
        titre: "Le droit à l'exercice de la citoyenneté (droit d'être représenté)",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les élèves sont représentés par des délégués, qui bénéficient d’une formation et sont les interlocuteurs privilégiés de l'équipe éducative et de l’administration. Plus généralement, les représentants des élèves participent aux travaux des conseils de classe et aux différentes instances dans lesquelles ils siègent, en particulier le Conseil de Vie Collégienne (CVC O) et le Conseil de Vie Lycéenne (CVL).",
          },
        ],
      },
      {
        numero: "1.3",
        titre: "Le droit d'expression",
        blocs: [
          {
            type: "paragraphe",
            texte: "Il a pour objet de contribuer à la formation citoyenne et à l'information des élèves. Il s'exerce durant les heures de vie de classe ou de réunions demandées par les élèves délégués aux adultes concernés. Il peut aussi s’exercer en cours, sous la supervision de l’enseignant. Tout affichage est assuré, sous le contrôle de la Proviseure Déléguée ou de son représentant, sur les panneaux prévus à cet effet et ne peut être anonyme.",
          },
          {
            type: "paragraphe",
            texte: "Les publications (écrites, sonores, vidéo, etc.) réalisées par les élèves peuvent être librement diffusées dans l'établissement après accord de la Direction qui peut suspendre ou interdire la publication dans l'établissement.",
          },
        ],
      },
    ],
  },
  {
    numero: "2",
    titre: "2. Organisation et fonctionnement de l’établissement",
    articles: [
      {
        numero: "2.1",
        titre: "Usage du téléphone portable (voir 4.7)",
        blocs: [
          {
            type: "paragraphe",
            texte: "L’usage du téléphone portable est interdit dans l’enceinte du Lycée Montaigne ainsi que lors les activités périphériques, sauf sur demande expresse d’un personnel éducatif ou d’un enseignant. Il en est de même pour les systèmes d'écoute musicale, et autres objets connectés.",
          },
        ],
      },
      {
        numero: "2.2",
        titre: "Les horaires",
        blocs: [
          {
            type: "paragraphe",
            texte: "Au Lycée Montaigne, pour le 2nd degré, les cours ont lieu du lundi au vendredi de 7h45 à 15h25 sur sept périodes de 50 et 55 minutes, tous les jours ouvrables, selon la grille ci-dessous.",
          },
          {
            type: "paragraphe",
            texte: "Les élèves du lycée qui suivent un ou plusieurs enseignements optionnels ou complémentaires pourront avoir cours de 15h25 à 17h05. Cependant le service de transport scolaire n’est pas assuré à au-delà de la fin de H7 (15h25).",
          },
          {
            type: "tableau",
            entetes: [
              "Période",
              "Heure début",
              "Heure fin",
            ],
            lignes: [
              [
                "H1",
                "7h45",
                "8h35",
              ],
              [
                "H2",
                "8h40",
                "9h30",
              ],
              [
                "H3",
                "9h35",
                "10h25",
              ],
              [
                "Récréation 1",
                "10h25",
                "10h50",
              ],
              [
                "H4",
                "10h55",
                "11h45",
              ],
              [
                "H5",
                "11h50",
                "12h40",
              ],
              [
                "Récréation 2",
                "12h40",
                "13h30",
              ],
              [
                "H6",
                "13h35",
                "14h30",
              ],
              [
                "H7",
                "14h30",
                "15h25",
              ],
              [
                "H8",
                "15h30",
                "16h20",
              ],
              [
                "H9",
                "16h20",
                "17h05",
              ],
            ],
          },
        ],
      },
      {
        numero: "2.3",
        titre: "Les entrées et sorties",
        blocs: [
          {
            type: "paragraphe",
            texte: "L’entrée se fait par la porte principale de l’établissement.",
          },
          {
            type: "paragraphe",
            texte: "La sortie des élèves du collège et du lycée s’effectue par la porte principale à 15h25, ou à 17h05 pour les lycéens qui suivent une option.",
          },
        ],
      },
      {
        numero: "2.4",
        titre: "Retards",
        blocs: [
          {
            type: "paragraphe",
            texte: "Au-delà de 7h45, l’entrée ne peut être qu’exceptionnelle. Les élèves doivent se diriger vers le bureau de la vie scolaire pour obtenir un billet de retard ou le faire signer dans leur carnet de vie scolaire pour les collégiens. Le carnet de vie scolaire devra être signé ensuite par les parents. Il leur sera interdit d’assister à la première heure de cours et ils intègrent leur classe à la deuxième heure. Les parents seront avertis par le bureau de la vie scolaire, et toute récidive injustifiée sera sanctionnée.",
          },
          {
            type: "paragraphe",
            texte: "Dans la journée, au-delà de cinq minutes de retard après la sonnerie, l’élève sera refusé en classe et devra se présenter au bureau de la vie scolaire pour être pris en charge. Un billet de retard sera transmis à l’élève pour être admis au cours suivant.",
          },
          {
            type: "paragraphe",
            texte: "Les retards répétitifs feront l'objet de punitions ou de sanctions.",
          },
        ],
      },
      {
        numero: "2.5",
        titre: "Sorties anticipées exceptionnelles",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les sorties anticipées à l’initiative des parents doivent faire l’objet d’une demande préalable par écrit sur Pronote. Cette demande sera envoyée à la vie scolaire 24h à l’avance par le biais de Pronote ou d’un courriel.",
          },
          {
            type: "paragraphe",
            texte: "Il en est de même pour une dispense exceptionnelle de transport scolaire ou d’activité périscolaire.",
          },
        ],
      },
      {
        numero: "2.6",
        titre: "Régime de sortie des collégiens et lycéens",
        blocs: [],
      },
      {
        numero: "2.6.1",
        titre: "Collégiens",
        blocs: [
          {
            type: "liste",
            items: [
              "Régime 1 : quel que soit leur emploi du temps, les élèves sont présents tous les jours de 7h45 à 15h20.",
              "Régime 2 : si son emploi du temps annuel comporte une heure de permanence en H1 ou en H7, l’élève est autorisé à l’année, sous la responsabilité de ses parents, à arriver pour sa première heure de cours effective ou à partir à la fin de la dernière heure effective de cours",
            ],
            texte: "Deux régimes sont proposés aux familles des collégiens :",
          },
        ],
      },
      {
        numero: "2.6.2",
        titre: "Lycéens",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les élèves ne peuvent être autorisés à sortir de l’établissement durant la journée.",
          },
          {
            type: "paragraphe",
            texte: "S’il n’y a pas cours, les parents des lycéens désirant permettre une arrivée tardive ou une sortie autonome à leur enfant en fin de journée, devront signer une autorisation en début d’année scolaire et la remettre au bureau de la vie scolaire qui se chargera de le mentionner sur la carte de lycéen. Une autorisation complémentaire sera demandée en cas de sortie durant un temps de permanence avant un cours d’option (après 12h40).",
          },
          {
            type: "paragraphe",
            texte: "L’assurance de l’établissement ne couvre pas l’élève pendant sa sortie de l’établissement.",
          },
        ],
      },
      {
        numero: "2.7",
        titre: "Intercours, récréations et déplacements des élèves dans l’établissement",
        blocs: [
          {
            type: "paragraphe",
            texte: "Aux sonneries de début de récréation, les élèves quittent leur salle de classe et descendent dans la cour ou dans les espaces autorisés.",
          },
          {
            type: "paragraphe",
            texte: "Aucun élève n'est autorisé à rester dans une salle de classe en dehors de la présence d'un adulte, ou à jouer dans les couloirs, escaliers ou toilettes. Toutefois en cas de pluie, les élèves seront dirigés par la vie scolaire dans des espaces spécifiques.",
          },
          {
            type: "paragraphe",
            texte: "Pour des raisons de sécurité, les autorisations pour se rendre aux toilettes pendant les heures de classe ne peuvent être qu'exceptionnelles.",
          },
          {
            type: "paragraphe",
            texte: "L'interclasse permet à l'élève de se préparer, rapidement et calmement au cours suivant. L’élève ne doit pas sortir de classe.",
          },
          {
            type: "paragraphe",
            texte: "Le passage aux toilettes à ce moment doit être exceptionnel et réalisé après autorisation du professeur en charge de la classe.",
          },
          {
            type: "paragraphe",
            texte: "Avant et après les cours d’EPS, les vestiaires sont le lieu d’habillage et de déshabillage.",
          },
          {
            type: "paragraphe",
            texte: "Les élèves disposent de 5 minutes en début des cours pour se mettre en tenue et 10 minutes en fin des cours pour se rhabiller.",
          },
          {
            type: "paragraphe",
            texte: "L’accès aux vestiaires est interdit pendant la séance d’EPS.",
          },
          {
            type: "paragraphe",
            texte: "Lorsque les cours du second degré se déroulent au Bâtiment B, en aucun cas les collégiens et lycéens ne doivent utiliser les toilettes du bâtiment B",
          },
        ],
      },
      {
        numero: "2.8",
        titre: "Le service de transport scolaire",
        blocs: [
          {
            type: "paragraphe",
            texte: "Un service de transport scolaire est proposé par l’établissement le matin et à la fin de la 7eme période. L’usage du transport scolaire est soumis à inscription.",
          },
          {
            type: "paragraphe",
            texte: "Le règlement intérieur s’applique aux transports scolaires : pendant le transport, les élèves sont placés sous l'autorité des accompagnateurs. Les consignes des accompagnateurs et des chauffeurs doivent être respectées.",
          },
          {
            type: "paragraphe",
            texte: "Afin de ne pas retarder le départ des transports scolaires, les familles doivent veiller à amener leurs enfants à l'heure au point de départ. Le soir, les élèves doivent monter et rester dans le bus dès la fin de leurs cours.",
          },
          {
            type: "paragraphe",
            texte: "Toute modification doit être communiquée via Pronote ou par mail à la vie scolaire 24 heures avant.",
          },
          {
            type: "paragraphe",
            texte: "Il est interdit, de se faire accompagner par des camarades qui n’y sont pas inscrits en temps ordinaire.",
          },
          {
            type: "paragraphe",
            texte: "Les manquements à ces règles, pourront entraîner punitions, sanctions, voire une radiation temporaire ou définitive du service des transports.",
          },
        ],
      },
      {
        numero: "2.9",
        titre: "Les activités périscolaires",
        blocs: [
          {
            type: "liste",
            items: [
              "L’âge des élèves accueillis ;",
              "La nature des activités proposées ;",
              "Les conditions de mise en œuvre des activités physiques ou sportives ;",
              "La répartition des temps d'activités et de repos ;",
              "Les modalités de participation des élèves ;",
              "La nature des locaux et des espaces.",
            ],
            texte: "L’établissement propose un programme d’activités au début de chaque année. Ce programme prend en considération :",
          },
          {
            type: "paragraphe",
            texte: "Le Règlement intérieur s’applique intégralement aux activités périscolaires.",
          },
        ],
      },
      {
        numero: "2.1",
        titre: "Les assurances",
        blocs: [
          {
            type: "paragraphe",
            texte: "Le Lycée Montaigne a souscrit une assurance qui couvre les élèves inscrits contre tous les accidents corporels provenant d’une cause fortuite extérieure et violente dont ils seraient victimes durant leur présence au Lycée.",
          },
          {
            type: "paragraphe",
            texte: "Cette assurance n'est valable que pendant le temps des activités scolaires ou périscolaires organisées par l’établissement : répétitions, travaux de laboratoires, sorties pédagogiques, visites extérieures, excursions instructives ou récréatives, activités culturelles et sportives, etc., ainsi que lors des transports scolaires pour les élèves qui y sont inscrits. Elle ne s’applique pas lors éventuelles des sorties temporaires des lycéens hors de l’établissement en autonomie.",
          },
        ],
      },
      {
        numero: "2.2",
        titre: "Les sorties et voyages scolaires encadrés par des personnels de l'établissement",
        blocs: [
          {
            type: "paragraphe",
            texte: "Le Règlement Intérieur s’applique également lors des sorties et voyages scolaires. Il est possible que dans le cadre de sorties ou voyages scolaires un additif soit précisé sur des points particuliers qui ne seraient pas abordés dans le RI ou qui nécessiteraient des ajustements. Dans ce cas, l’additif devra être signé par l’élève et sa famille, afin que l’élève puisse y participer.",
          },
          {
            type: "paragraphe",
            texte: "Il est rappelé que lors de ces sorties ou voyages, l’élève est un représentant de l’établissement et porteur de ses valeurs. Il se doit, à ce titre, d’adopter un comportement exemplaire sous peine de sanctions.",
          },
        ],
      },
    ],
  },
  {
    numero: "3",
    titre: "3. Suivi des élèves",
    articles: [
      {
        numero: "3.1",
        titre: "Communication entre les parents et l’équipe éducative",
        blocs: [],
      },
      {
        numero: "3.1.1",
        titre: "Carnet de correspondance et carnet de vie scolaire",
        blocs: [
          {
            type: "paragraphe",
            texte: "Le carnet de correspondance est dématérialisé sur Pronote. Les observations et encouragements des enseignants y sont notifiés.",
          },
          {
            type: "paragraphe",
            texte: "Les parents doivent consulter Pronote quotidiennement. Pour cela, ils disposent d'identifiants qui leurs sont propres et valent signature. Il leur est vivement recommandé de ne pas les transmettre à leurs enfants.",
          },
          {
            type: "paragraphe",
            texte: "Les absences, retards, et communications avec l’équipe éducative se feront par le biais de Pronote à travers la rubrique COMMUNICATION.",
          },
          {
            type: "paragraphe",
            texte: "A la rentrée, les collégiens auront un carnet de vie scolaire qu’ils devront avoir avec eux à chaque cours. Dans ce carnet, « passeport de l’élève dans l’établissement », devra être signé par lui et ses parents. Le calendrier annuel et son emploi du temps y seront portés. À tout moment il pourra être saisi par un adulte de l’établissement en cas de comportement inapproprié, afin de pouvoir mettre ensuite une observation sur Pronote. Il sera aussi utilisé lors des passages à l’infirmerie et pour les billets de retard.",
          },
        ],
      },
      {
        numero: "3.1.2",
        titre: "Communication parents-professeurs",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les parents sont tenus informés des progrès ou des problèmes rencontrés par l'enfant lors d’entretiens directs avec les professeurs de la classe, sur rendez-vous.",
          },
          {
            type: "paragraphe",
            texte: "La correspondance entre les familles et les professeurs et la prise de rendez-vous se fait par Pronote. Les parents sont tenus de partager rapidement des informations qui pourraient affecter les enfants.",
          },
          {
            type: "paragraphe",
            texte: "Les enseignants répondent dès que possible aux communications adressées par les parents.",
          },
          {
            type: "paragraphe",
            texte: "L’un des deux parents, au moins, devra se présenter aux réunions en personne. En aucun cas, il ne pourra se faire représenter par une tierce personne.",
          },
        ],
      },
      {
        numero: "3.1.3",
        titre: "Les Projets d’accompagnement personnalisés (PAP)",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les élèves à besoins particulier peuvent bénéficier de la mise en place d’un accompagnement spécifique, sur production d’un bilan réalisé par un spécialiste mettant en évidence l’existence d’un trouble des apprentissages.",
          },
          {
            type: "paragraphe",
            texte: "Dans la mesure du possible, l’élève est pleinement associé aux réunions relatives à la mise en place du PAP dont il est partie prenante.",
          },
        ],
      },
      {
        numero: "3.1.4",
        titre: "L’évaluation au collège et au lycée et les conseils de classe",
        blocs: [
          {
            type: "paragraphe",
            texte: "Ce chapitre du règlement intérieur tient lieu de projet d’évaluation.",
          },
          {
            type: "paragraphe",
            texte: "L’évaluation se fait de façon continue. Elle identifie les compétences visées et mesure leur degré d’acquisition. Elle peut être orale ou écrite. La date des évaluations est fixée et communiquée à l’élève par le professeur de la discipline sur Pronote. Un tableau récapitulatif par période peut être communiqué par la responsable administrative.",
          },
          {
            type: "paragraphe",
            texte: "Un bulletin dont le contenu est délibéré en conseil de classe est remis aux parents via Pronote trois fois par an pour les classes évaluées en trimestre (collège et terminale) et deux fois par an pour les classes de lycées sont évaluées en semestre.",
          },
          {
            type: "paragraphe",
            texte: "Concernant l’orientation et le passage dans la classe supérieure, les délibérations ont lieu lors des conseils de classe, selon les réglementations en vigueur. La cheffe d’établissement est cependant seule habilitée à décider de la réinscription d’un élève.",
          },
          {
            type: "paragraphe",
            texte: "Une moyenne annuelle de 10 est le seuil conditionnel pour une réinscription en classe supérieure au collège et au lycée.",
          },
          {
            type: "paragraphe",
            texte: "Toute moyenne annuelle strictement inférieure à 10/20 dans une matière de base, compromettra le passage dans la classe supérieure.",
          },
          {
            type: "paragraphe",
            texte: "Toute fraude lors d’une évaluation sera sanctionnée. L’élève en possession d’un téléphone portable ou de tout objet connecté lors d’une évaluation est réputé fraudeur.",
          },
          {
            type: "paragraphe",
            texte: "Remarque : durant les évaluations des classes de 1ère et Terminale, les téléphones et les montres connectées doivent être déposés éteints dans une boîte placée sur le bureau du professeur.",
          },
          {
            type: "paragraphe",
            texte: "Après analyse de la situation de fraude par la CPE en lien avec l’enseignant, la note de zéro pourra être attribuée avec l’accord de la Proviseure déléguée.",
          },
          {
            type: "liste",
            items: [
              "Des encouragements, des compliments ou des félicitations afin de valoriser la qualité du travail, l’exemplarité du comportement et les résultats obtenus par un élève.",
              "Mise en garde comportement ou Mise en garde travail afin de notifier à l’élève la nécessité d’améliorer son attitude face au travail.",
            ],
            texte: "Le conseil de classe peut proposer les mentions suivantes :",
          },
          {
            type: "paragraphe",
            texte: "Un avertissement pour manque de travail, d’assiduité ou de comportement peut être attribué par la cheffe d’établissement ou la Proviseure déléguée sur proposition du conseil de classe",
          },
          {
            type: "paragraphe",
            texte: "En cas d’absence d’amélioration lors de l’un des trimestres suivants de l’année scolaire, un blâme peut être attribué. Dans ce cas, la réinscription pour l’année scolaire suivante est compromise.",
          },
        ],
      },
      {
        numero: "3.1.5",
        titre: "Les mesures positives d’encouragement",
        blocs: [
          {
            type: "paragraphe",
            texte: "Elles visent à valoriser des actions et des initiatives dans lesquelles les élèves ont pu faire preuve de civisme, d’implication dans le domaine de la citoyenneté et de la vie du Lycée, d’esprit de solidarité, de responsabilité tant vis-à-vis d’eux-mêmes que de leurs camarades.",
          },
          {
            type: "paragraphe",
            texte: "La valorisation des actions des élèves dans les parcours et les différents domaines sportif, artistique, culturel, citoyen, etc., est de nature à renforcer leur sentiment d’appartenance à l’établissement et à développer leur participation à la vie collective. Elle se fait à travers la mention de l’investissement sur le bulletin.",
          },
          {
            type: "paragraphe",
            texte: "Des attestations peuvent être établies et remises par l’établissement à un élève s’étant distingué dans un domaine particulier (culturel, sportif, délégation lycéenne, comportement social…) ou par sa participation à la vie collective.",
          },
          {
            type: "paragraphe",
            texte: "Au quotidien, l’élève peut être valorisé sur Pronote (rubrique « encouragement »).",
          },
        ],
      },
      {
        numero: "3.1.6",
        titre: "Absences lors d’une évaluation",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les élèves ne peuvent pas se soustraire aux différentes évaluations qui leur sont données au cours de leur scolarité. Un certificat médical pourra être exigé.",
          },
          {
            type: "paragraphe",
            texte: "Toute absence à une évaluation prévue doit faire l´objet d´une excuse écrite parentale via Pronote au professeur concerné et à la vie scolaire. La régularisation administrative à la vie scolaire est incontournable.",
          },
          {
            type: "paragraphe",
            texte: "Quel que soit le motif, le professeur ou la CPE pourront décider de mettre en place une épreuve de remplacement dès le retour de l’élève, qui se devra d’être prêt à cette évaluation. Les contrôles non faits peuvent faire l’objet d’une remarque particulière dans l’appréciation du professeur. Les évaluations de rattrapage pourront se dérouler après 15h35. Une absence à l’évaluation pour conduire à l’attribution de la note de zéro. Toute absence avant une évaluation ou une semaine des examens ou examens blancs devra être justifiée par un rapport médical.",
          },
          {
            type: "paragraphe",
            texte: "Plus spécifiquement en 1ère et terminale, dans un certain nombre de disciplines la note de contrôle continu est adoptée pour la note du baccalauréat. Ceci nécessite l’attention particulière de l’établissement sur la représentativité de la moyenne annuelle de l’élève, candidat au baccalauréat. A ce titre, le respect des règles ci-dessus sera particulièrement strict.",
          },
        ],
      },
      {
        numero: "3.2",
        titre: "Le service médical",
        blocs: [
          {
            type: "paragraphe",
            texte: "Tout élève a accès au service de santé scolaire et peut s'y rendre, après avoir retiré un billet à la vie scolaire.",
          },
          {
            type: "paragraphe",
            texte: "Tout passage à l’infirmerie fera l’objet d’une annotation sur Pronote par l’infirmière qui devra être visée par la famille.",
          },
          {
            type: "paragraphe",
            texte: "L'équipe médicale donne les soins nécessaires et décide si l'élève peut retourner en classe ou doit être pris en charge par ses responsables légaux.",
          },
          {
            type: "paragraphe",
            texte: "Le service d’infirmerie ne peut se substituer au médecin de famille. Sauf dans le cas d’un PPS (plan personnalisé de scolarisation), un élève ne doit en aucun cas conserver de médicament avec lui dans l’établissement (voir 4.7). La prise de médicaments ne peut s’effectuer que sous le contrôle de l’infirmière et sur présentation de la prescription médicale.",
          },
          {
            type: "paragraphe",
            texte: "En cas d'urgence, la Direction du Lycée Montaigne prend les mesures opportunes concernant le transfert vers un centre hospitalier, sauf indication contraire de la famille.",
          },
          {
            type: "paragraphe",
            texte: "Toute pathologie sévère doit être signalée au service de santé scolaire. Les parents s'engagent à présenter le rapport médical confidentiel qui en fait état. Cette démarche doit être reconduite chaque début d'année scolaire et au cours de l'année en cas d'évolution de la pathologie.",
          },
          {
            type: "paragraphe",
            texte: "Toute maladie contagieuse, aussitôt relevée, doit être portée à la connaissance du service de santé scolaire. Les parents s'engagent à prendre contact dans les plus brefs délais avec l’infirmière du Lycée. L'élève sera réintégré en classe après présentation d’un certificat de non-contagion au service de santé scolaire.",
          },
        ],
      },
      {
        numero: "3.2.1",
        titre: "Procédure de sortie d'un élève malade",
        blocs: [
          {
            type: "liste",
            items: [
              "L’élève ressent un malaise et en informe son enseignant.",
              "L’enseignant autorise l’élève à se rendre à la vie scolaire.",
              "La vie scolaire remet un billet de passage à l’élève pour l’infirmerie (lycée) ou renseigne le carnet de vie scolaire (collège).",
            ],
            texte: "1ère étape : Signalement et passage à l’infirmerie",
          },
          {
            type: "paragraphe",
            texte: "2ème étape : Évaluation et prise de décision",
          },
          {
            type: "paragraphe",
            texte: "L’infirmière examine l’élève et évalue son état de santé et décide si l’élève doit rentrer à la maison ou pas.",
          },
          {
            type: "liste",
            items: [
              "Soit son état lui permet de retourner en classe : il le fait en attendant l’arrivée de ses parents, muni d’un billet de l’infirmière (lycée) ou de son carnet de vie scolaire renseigné (collège).",
              "Soit son état ne lui permet pas de retourner en classe : il reste sous surveillance à l’infirmerie.",
            ],
            texte: "Deux situations sont possibles :",
          },
          {
            type: "paragraphe",
            texte: "Dans les deux cas l’infirmière contacte les parents.",
          },
          {
            type: "paragraphe",
            texte: "3ère étape : Départ de l’élève",
          },
          {
            type: "paragraphe",
            texte: "Si le départ de l’élève est décidé avec les parents : l’infirmière contacte la vie scolaire et l’accueil, pour organiser sa sortie. Les parents viennent chercher leur enfant, ou confirment qu’il peut rentrer seul en taxi. Dans ce, cas, l’infirmière demandera aux parents un mail d’autorisation d’accompagnement par taxi et transmettra à la vie scolaire.",
          },
          {
            type: "paragraphe",
            texte: "Quand les parents ou le taxi arrivent, le portier informe l’accueil, qui à son tour avertit la vie scolaire qui se charge d’appeler l’élève.",
          },
          {
            type: "paragraphe",
            texte: "L’école enregistre son absence et assure un suivi si nécessaire.",
          },
        ],
      },
    ],
  },
  {
    numero: "4",
    titre: "4. Les devoirs des élèves",
    articles: [
      {
        numero: "4.1",
        titre: "Le métier d’élève : l’assiduité de travail",
        blocs: [
          {
            type: "paragraphe",
            texte: "Pour tirer pleinement profit de l'enseignement qui lui est dispensé, l’élève est tenu d’être présent en cours et à toutes les évaluations, d’apprendre régulièrement ses leçons, de réaliser les travaux demandés en classe ou à la maison et d’apporter son matériel scolaire à toutes les séances.",
          },
          {
            type: "paragraphe",
            texte: "Concernant les enseignements optionnels : le non-respect de l’assiduité de travail, un comportement inapproprié récurrent ou des absences répétitives, pourront conduire une exclusion définitive du cours par la Direction.",
          },
        ],
      },
      {
        numero: "4.2",
        titre: "Les absences",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les élèves sont soumis à une obligation d’assiduité sur l’année entière.",
          },
          {
            type: "paragraphe",
            texte: "Une absence en cours ne peut être qu'exceptionnelle et dûment motivée par des raisons de santé ou familiales.",
          },
        ],
      },
      {
        numero: "4.2.1",
        titre: "Information de l’établissement par les parents en cas d’absence",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les parents sont priés de prévenir l'établissement via Pronote en s’adressant à la vie scolaire avant 9h.",
          },
          {
            type: "paragraphe",
            texte: "A son retour, l'élève devra présenter une justification de sa famille et/ou un certificat médical pour une absence qui dépasserait les 2 jours.",
          },
          {
            type: "paragraphe",
            texte: "Un élève absent en début de journée ne peut intégrer l’établissement qu’exceptionnellement dans la journée. Il devra aller chercher un billet à la vie scolaire avant de rentrer en classe.",
          },
        ],
      },
      {
        numero: "4.2.1",
        titre: "Absences répétées",
        blocs: [
          {
            type: "paragraphe",
            texte: "En cas d’absences répétées, la CPE, en accord avec la Direction, organisera une rencontre avec les parents, l’élève, le professeur principal et/ou le professeur de la discipline concernée. Une commission éducative pourra être mise en place.",
          },
        ],
      },
      {
        numero: "4.2.2",
        titre: "Absences prévisibles",
        blocs: [
          {
            type: "paragraphe",
            texte: "Si un élève doit s'absenter de façon prévisible, les responsables légaux devront présenter une demande par le biais de Pronote ou d’un courriel adressé au service de vie scolaire. Cette autorisation ne sera accordée que dans les cas tout à fait justifiés et exceptionnels. Cette absence sera alors placée sous la responsabilité de la famille à qui il appartiendra de veiller à ce que les cours soient rattrapés. Les évaluations devront être suivies aux conditions de l’établissement.",
          },
        ],
      },
      {
        numero: "4.2.3",
        titre: "Inaptitude à la pratique d’une activité physique et absences en EPS",
        blocs: [
          {
            type: "paragraphe",
            texte: "Une inaptitude est l’incapacité temporaire pour un élève de pratiquer l’EPS. Elle peut être totale ou partielle et doit faire l’objet d’une demande de la part des parents à l’infirmière et a la vie scolaire par le biais de Pronote. L’infirmière informera le professeur. Cependant, elle ne dispense en aucun cas l'élève de l'obligation d'être présent au cours d'EPS. L’enseignant établira un projet adapté pour l’élève concerné.",
          },
          {
            type: "paragraphe",
            texte: "L’établissement se réserve le droit de demander l’expertise du médecin scolaire pour toute inaptitude prononcée par un professionnel extérieur.",
          },
        ],
      },
      {
        numero: "4.2.4",
        titre: "L’absence à un contrôle - Voir Ch 3.1.6",
        blocs: [],
      },
      {
        numero: "4.3",
        titre: "Cas particulier des options au lycée",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les enseignements optionnels et complément du programme Libanais ont lieu de 15h30 à 17h30. L’assiduité est obligatoire. Le règlement intérieur s’applique pleinement (notamment l’interdiction de manger en cours ou de perturber la séance).",
          },
          {
            type: "paragraphe",
            texte: "Un comportement inapproprié ou des absences répétées non justifiées pourront entraîner l’exclusion de l’option choisie.",
          },
        ],
      },
      {
        numero: "4.4",
        titre: "La tenue vestimentaire",
        blocs: [
          {
            type: "paragraphe",
            texte: "Le respect est le principe élémentaire de la vie en collectivité.",
          },
          {
            type: "paragraphe",
            texte: "Les élèves ont envers eux-mêmes et vis-à-vis des autres un devoir de respect qui doit transparaître dans une tenue vestimentaire décente et appropriée à un établissement scolaire et par un comportement correct. La Direction de l'établissement peut, si elle estime que la tenue d'un(e) élève est inadaptée, contacter sa famille afin de lui procurer, immédiatement, un vêtement de rechange.",
          },
          {
            type: "paragraphe",
            texte: "Il est demandé de se découvrir la tête à l’intérieur des bâtiments.",
          },
          {
            type: "paragraphe",
            texte: "Pantalons déchirés, claquettes, babouches, tong, « crocs », etc. sont interdits dans l’établissement.",
          },
          {
            type: "paragraphe",
            texte: "Le port d’une blouse blanche en coton est obligatoire pour les TP de sciences. En cas d’oubli, l’élève ne pourra pas participer à l’activité, pour des raisons de sécurité.",
          },
          {
            type: "paragraphe",
            texte: "En cours d’EPS, la tenue sportive de l’établissement est obligatoire pour tous les élèves. En cas d’oubli, il sera demandé aux parents d’apporter la tenue à leur enfant. L’élève ne pourra pas participer à l’activité. L’élève sera noté absent et le motif considéré irrecevable. L’élève s’exposera donc à des sanctions.",
          },
          {
            type: "paragraphe",
            texte: "Pour des raisons de sécurité liées à la pratique du sport, les chaussures de sport doivent impérativement être serrées par des lacets ou des «velcro». De même, les bijoux, montres, chaînes de cou, piercings, etc., doivent être ôtés.",
          },
          {
            type: "paragraphe",
            texte: "Il est demandé aux élèves d’avoir une tenue de rechange quand les activités se déroulent lors d'intempéries ou de grosses chaleurs.",
          },
          {
            type: "paragraphe",
            texte: "L’élève veillera également à se munir d’une gourde ou d’une bouteille d’eau.",
          },
        ],
      },
      {
        numero: "4.5",
        titre: "Le comportement",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les incivilités (brimades, insultes, bousculades, discriminations, etc.) et les actes de violence (agressions physiques et morales, menaces, harcèlement, racket, etc.) ne peuvent être tolérés, car ils représentent des atteintes à la dignité et à l'intégrité des personnes. Toute forme de bizutage est interdite.",
          },
          {
            type: "paragraphe",
            texte: "L'élève est tenu au respect de ses camarades et des personnels de l'établissement en présentiel ou de façon numérique (réseaux sociaux).",
          },
          {
            type: "paragraphe",
            texte: "Les jeux de balle sont limités aux temps des récréations et ne peuvent avoir lieu que dans les zones sportives de la cour et sur autorisation de la vie scolaire. Il est interdit aux élèves d'apporter des balles dures dans l'établissement. Si nécessaire, elles leur seront fournies dans le contexte d'activités encadrées.",
          },
          {
            type: "paragraphe",
            texte: "La pratique de rollers dans l'établissement, de skateboards ou tout objet glissant similaire est interdite, sauf dans le cadre des activités périscolaires ou pédagogiques.",
          },
          {
            type: "paragraphe",
            texte: "Dans tous les espaces d'apprentissage et de vie collective, et notamment lors des déplacements chacun a le devoir de respecter les conditions de travail des autres, en évitant toute forme de nuisance sonore.",
          },
          {
            type: "paragraphe",
            texte: "Il est strictement interdit de manger dans les espaces à vocation pédagogique (salles de classe, salles d'étude, CCC, gymnase, etc.), ainsi que dans les couloirs et escaliers pour des raisons de sécurité. Des autorisations exceptionnelles peuvent être données en cas de conditions météorologiques difficiles.",
          },
        ],
      },
      {
        numero: "4.6",
        titre: "Le matériel",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les élèves se doivent de respecter les locaux, le mobilier et les diverses installations mises à leur service.",
          },
          {
            type: "paragraphe",
            texte: "Ils veillent à la propreté de la classe. Ils prennent soin du matériel et en sont responsables (livres, cahiers, etc.).",
          },
          {
            type: "paragraphe",
            texte: "En cas d'abus, il sera demandé à l'élève concerné de réaliser un temps de nettoyage de l'espace.",
          },
          {
            type: "paragraphe",
            texte: "Toute dégradation devra être réparée. Les familles des élèves auront à régler le montant des frais de dégradation.",
          },
          {
            type: "paragraphe",
            texte: "Il leur est aussi demandé dans un souci écologique et économique de lutter contre toute forme de gaspillage (lumière, eau, etc.).",
          },
          {
            type: "paragraphe",
            texte: "Des outils informatiques sont mis à la disposition des élèves par l'établissement. Les règles d'utilisation sont affichées dans les salles affectées à leur usage. Les utilisateurs des outils informatiques de l'école doivent s'engager à respecter cette charte.",
          },
        ],
      },
      {
        numero: "4.7",
        titre: "Le téléphone portable et les objets interdits",
        blocs: [
          {
            type: "paragraphe",
            texte: "Pour des raisons de sécurité, la détention de tout produit ou objet dangereux ou étranger à la pratique scolaire est prohibée y compris une arme factice destinée à un déguisement.",
          },
          {
            type: "paragraphe",
            texte: "Il est interdit d'avoir en sa possession des médicaments (voir 3.2 Le service médical).",
          },
          {
            type: "paragraphe",
            texte: "Il est interdit de fumer dans l'établissement et ses abords.",
          },
          {
            type: "paragraphe",
            texte: "Il est aussi interdit d'y introduire, détenir ou consommer toute substance illicite ou boisson alcoolisée. Enfin pour des raisons de santé, les boissons gazeuses sucrées et/ou énergisantes sont strictement interdites.",
          },
          {
            type: "paragraphe",
            texte: "Objets de valeurs (voir 6.3) : la détention d'argent ou objets de valeur dans l'établissement est interdite. L'établissement ne pourra pas être tenu responsable en cas de vol.",
          },
        ],
      },
      {
        numero: "4.7.1",
        titre: "Principe général et dérogations",
        blocs: [
          {
            type: "paragraphe",
            texte: "L'usage des téléphones portables et de tout appareil personnel connecté (montres, écouteurs, tablettes, etc.) est strictement interdit dans l'enceinte de l'établissement, y compris dans les espaces extérieurs, pendant tout le temps scolaire.",
          },
          {
            type: "paragraphe",
            texte: "À leur arrivée, les élèves doivent impérativement éteindre leur téléphone et le déposer dans les boîtes sécurisées prévues, selon l'organisation de la vie scolaire.",
          },
          {
            type: "paragraphe",
            texte: "En cas d'infraction, l'appareil sera confisqué et remis au représentant légal. En cas de récidive, une sanction pourra être prononcée.",
          },
          {
            type: "paragraphe",
            texte: "À titre exceptionnel, une dérogation peut être accordée aux élèves du lycée, selon des conditions fixées par la direction. Elle est individuelle, encadrée et révocable à tout moment en cas d'usage inapproprié.",
          },
          {
            type: "paragraphe",
            texte: "Un usage ponctuel peut être autorisé à des fins pédagogiques, uniquement à la demande explicite d'un professeur, pour une activité précise et limitée, sous sa responsabilité.",
          },
          {
            type: "paragraphe",
            texte: "Durant les évaluations, la détention ou l'usage d'un téléphone ou objet connecté est strictement interdit. Tout manquement entraîne la note de 0/20, assortie d'une sanction en cas de récidive.",
          },
        ],
      },
      {
        numero: "4.7.2",
        titre: "Interdiction des enregistrements et captations",
        blocs: [
          {
            type: "paragraphe",
            texte: "Il est strictement interdit d'enregistrer des conversations, de capter des images, de réaliser des photos, vidéos ou tout autre enregistrement sonore ou visuel dans l'établissement sans autorisation expresse de la direction.",
          },
          {
            type: "paragraphe",
            texte: "Cette interdiction concerne toute la communauté scolaire et vise à garantir le respect de la vie privée, de la dignité et de l'image de chacun.",
          },
          {
            type: "paragraphe",
            texte: "La diffusion, le partage ou la modification de ces contenus, par quelque moyen que ce soit, est également interdite.",
          },
          {
            type: "paragraphe",
            texte: "Les usages liés à l'intelligence artificielle sont encadrés par une charte spécifique annexée au présent règlement ayant la même valeur que le présent règlement. En cas de diffusion de deepfake ou d'enregistrement portant atteinte à un membre de la communauté ou à l'établissement, la direction pourra réunir un conseil de discipline et/ou refuser la réinscription de l'élève à la rentrée suivante.",
          },
        ],
      },
      {
        numero: "4.7.3",
        titre: "Contrôle du téléphone en cas de suspicion",
        blocs: [
          {
            type: "paragraphe",
            texte: "En cas de suspicion d'usage non conforme, l'élève pourra être invité à présenter son appareil à un membre de l'équipe éducative ou de direction.",
          },
          {
            type: "paragraphe",
            texte: "L'établissement ne procède à aucune fouille ni consultation du contenu sans l'accord de l'élève et, le cas échéant, de ses représentants légaux. Tout refus de se soumettre à cette demande est susceptible d'entraîner une mesure éducative ou disciplinaire.",
          },
        ],
      },
      {
        numero: "4.7.4",
        titre: "Responsabilité",
        blocs: [
          {
            type: "paragraphe",
            texte: "L'établissement met à disposition des dispositifs de rangement collectif. Toutefois, chaque élève demeure responsable de son matériel personnel.",
          },
        ],
      },
    ],
  },
  {
    numero: "5",
    titre: "5. Les procédures disciplinaires",
    articles: [
      {
        numero: "5",
        titre: "LES PROCÉDURES DISCIPLINAIRES",
        blocs: [
          {
            type: "paragraphe",
            texte: "Tout manquement au règlement intérieur justifie la mise en œuvre d'une procédure disciplinaire. Un système progressif de pénalisation est établi et vise à faire comprendre à l'élève, qu'il doit adopter de lui-même un comportement compatible avec les exigences de son travail individuel et de la vie collective. Ainsi lui sera facilité l'apprentissage de l'autonomie. Les punitions et sanctions sont notifiées à la famille et à l’équipe éducative via Pronote.",
          },
        ],
      },
      {
        numero: "5.1",
        titre: "Pratiques face au non-respect du règlement intérieur",
        blocs: [],
      },
      {
        numero: "5.1.1",
        titre: "Les punitions scolaires",
        blocs: [
          {
            type: "paragraphe",
            texte: "Elles sont adoptées à l'initiative du personnel de l'établissement, elles concernent des faits mineurs. Les punitions infligées doivent respecter la personne de l'élève et sa dignité. Sont proscrites en conséquence toutes les formes de violence physique ou verbale, toute attitude humiliante, vexatoire ou dégradante à l'égard des élèves.",
          },
          {
            type: "liste",
            items: [
              "devoir supplémentaire en rapport avec la situation d’apprentissage,",
              "présentation d'excuses orales ou écrites par l'élève,",
              "observation écrite sur Pronote qui peut aboutir à une punition si nécessaire,",
              "retenue dans l'établissement après les cours, avec un travail à effectuer, donné par le professeur,",
              "retenue pour effectuer une mesure de responsabilisation ou d’intérêt général,",
              "exclusion ponctuelle d'un cours, justifiée par un manquement grave, elle doit demeurer tout à fait exceptionnelle. Elle donne lieu systématiquement à un rapport d’incident, établi immédiatement par le professeur, remis au service de la vie scolaire, puis en copie à la Cheffe d'établissement, à la Proviseure Déléguée et aux parents. L'élève sera accompagné à la vie scolaire par un camarade pour y être pris en charge.",
              "Travail communautaire.",
            ],
            texte: "Il convient également de distinguer les punitions relatives au comportement des élèves de l'évaluation de leur travail personnel :",
          },
        ],
      },
      {
        numero: "5.1.2",
        titre: "Les sanctions disciplinaires",
        blocs: [
          {
            type: "paragraphe",
            texte: "Elles sont prises à l'initiative de la Proviseure Déléguée et sont adaptées à des manquements graves aux obligations scolaires. Leur application doit répondre au principe de proportionnalité et d'individualisation. Elles sont notifiées par écrit, dans tous les cas, aux responsables légaux de l'élève et peuvent être prononcées avec sursis.",
          },
          {
            type: "liste",
            items: [
              "Avertissement,",
              "Mesure de responsabilisation : elle consiste à participer, en dehors des heures d’enseignement, à des activités culturelles, de solidarité ou de formation à des fins éducatives. Sa durée ne peut excéder vingt heures,",
              "Blâme de travail ou de comportement,",
              "Exclusion temporaire de l'établissement (d'une durée allant de 1 à 8 jours), à l’interne ou à l’externe,",
              "Exclusion temporaire supérieure à 8 jours ou exclusion définitive de l'établissement, à l'issue de la comparution devant le conseil de discipline.",
            ],
            texte: "Ces sanctions sont hiérarchisées comme suit :",
          },
          {
            type: "paragraphe",
            texte: "À tout moment de l'année, si un élève a été sanctionné, la réinscription pour l’année scolaire suivante sera compromise. La Cheffe d’établissement informera la famille suffisamment tôt de la non réinscription de l’élève afin que cette dernière puisse prendre les dispositions nécessaires pour une scolarisation dans un autre établissement. Elle peut être accordée, à titre exceptionnel, suite à un entretien entre la Cheffe d’établissement, la Proviseure Déléguée, la famille et l’élève.",
          },
          {
            type: "paragraphe",
            texte: "Aucune sanction disciplinaire n'est prononcée sans que l'élève n’ait été informé et entendu. Les parents seront également informés et le cas échéant entendus à leur demande.",
          },
        ],
      },
      {
        numero: "5.1.3",
        titre: "La commission éducative",
        blocs: [
          {
            type: "paragraphe",
            texte: "La commission éducative permet aux membres d'une équipe pédagogique ou éducative d'examiner ensemble la situation d'un élève dont le comportement est inadapté aux règles de vie dans l'établissement. Cette commission est particulièrement adaptée et pertinente pour le cas d'élèves ayant des attitudes perturbatrices répétitives qui relèvent souvent de manquements mineurs, mais dont l'accumulation constitue une gêne pour la communauté et pour l'élève lui-même dans ses apprentissages.",
          },
          {
            type: "paragraphe",
            texte: "Elle est réunie sur proposition du professeur principal, du service de vie scolaire ou de la Proviseure Déléguée.",
          },
          {
            type: "paragraphe",
            texte: "Devant cette commission, l'élève devra justifier son attitude. La finalité de cette procédure est d'amener l'élève à prendre conscience des conséquences de son comportement et à intérioriser le sens des règles qui régissent le fonctionnement de la vie sociale dans l'établissement.",
          },
          {
            type: "paragraphe",
            texte: "La commission de vie scolaire est composée de la Cheffe d’établissement, de la Proviseure Déléguée, du professeur principal, d’un représentant du service de la vie scolaire, d’un ou de plusieurs représentants de l’équipe enseignante, éventuellement d’un représentant du service médical.",
          },
          {
            type: "paragraphe",
            texte: "Les différents membres de cette commission sont tenus de respecter la confidentialité des débats.",
          },
          {
            type: "paragraphe",
            texte: "Enfin, cette commission éducative a vocation d’impulser une dynamique positive, à l’élève et à sa famille et, par voie de conséquence, pour l’ensemble des élèves de la classe et pour les personnels : c’est l’essence même de la mission éducative du Lycée Montaigne.",
          },
        ],
      },
      {
        numero: "5.1.4",
        titre: "Le Conseil de discipline",
        blocs: [
          {
            type: "paragraphe",
            texte: "Le conseil de discipline est compétent, dès lors qu'il est saisi, pour prononcer toutes les sanctions prévues au règlement intérieur de l'établissement. Le conseil de discipline est présidé par la cheffe d'établissement ou, en cas d'absence ou d'empêchement de celui-ci, par son adjoint (ou l’adjoint désigné par la cheffe d'établissement en cas de pluralité d'adjoints).",
          },
          {
            type: "paragraphe",
            texte: "La voix du président du conseil de discipline est prépondérante en cas de partage égal des voix.",
          },
          {
            type: "paragraphe",
            texte: "Le président conduit la procédure et les débats dans le respect du contradictoire avec le souci de donner à l’intervention du conseil de discipline une portée éducative.",
          },
          {
            type: "paragraphe",
            texte: "Le conseil de discipline peut entendre, au besoin, des personnels qualifiés, susceptibles d'éclairer ses travaux : adjoint à la cheffe d'établissement, personnel social ou de santé, psychologue scolaire, etc.",
          },
          {
            type: "paragraphe",
            texte: "Le conseil de discipline délibère valablement même en l’absence de l'élève et/ou de son représentant légal lorsque l'élève est mineur.",
          },
          {
            type: "paragraphe",
            texte: "La décision du conseil de discipline est prise en présence des seuls membres du conseil ayant voix délibérative. Tous les votes se font à bulletins secrets, à la majorité des suffrages exprimés. Les abstentions, les bulletins blancs et nuls ne sont pas comptés.",
          },
          {
            type: "paragraphe",
            texte: "Les membres du conseil de discipline et les personnes ayant pris part aux délibérations de celui-ci sont soumis à l’obligation du secret pour tous les faits et documents dont ils ont eu connaissance.",
          },
        ],
      },
    ],
  },
  {
    numero: "6",
    titre: "6. La sécurité des biens et des personnes",
    articles: [
      {
        numero: "6.1",
        titre: "Plan Particulier de Mise en sûreté (PPMS)",
        blocs: [
          {
            type: "paragraphe",
            texte: "Les consignes de sécurité sont affichées dans les salles. Les usagers sont invités à en prendre connaissance et à les respecter dans leur intégralité. Un plan particulier de mise en sureté (PPMS) est mis à jour chaque année. Des exercices relatifs au PPMS sont effectués plusieurs fois dans l’année.",
          },
        ],
      },
      {
        numero: "6.2",
        titre: "Personnes extérieures à l’établissement, parents d’élèves : entrées et sorties, déplacements dans l’établissement",
        blocs: [
          {
            type: "paragraphe",
            texte: "Toute personne extérieure à l’établissement doit se présenter à l’accueil afin d’informer de sa présence et d’être dirigée vers son interlocuteur. Un badge visiteur lui sera remis. En particulier, l’accès des parents à l’établissement se fait sur rendez-vous.",
          },
        ],
      },
      {
        numero: "6.3",
        titre: "Objets de valeurs",
        blocs: [
          {
            type: "paragraphe",
            texte: "Il est fortement déconseillé d'apporter des sommes d'argent ou des objets de valeur. L'établissement ne peut être reconnu comme responsable de la dégradation ou du vol d’un bien.",
          },
          {
            type: "paragraphe",
            texte: "Pour cette raison, il est demandé aux parents de venir payer les frais de scolarité ou de voyage eux-mêmes et de ne pas remettre d’importantes sommes d’argent en liquide à leurs enfants.",
          },
        ],
      },
    ],
  },
  {
    numero: "7",
    titre: "7. Acceptation du règlement intérieur de l’établissement",
    articles: [
      {
        numero: "7",
        titre: "ACCEPTATION du RÈGLEMENT INTÉRIEUR de l'ÉTABLISSEMENT",
        blocs: [
          {
            type: "paragraphe",
            texte: "L'inscription d'un enfant au Lycée Montaigne vaut, pour lui-même et pour sa famille, adhésion aux dispositions du présent règlement ainsi qu’aux projets présentés par l’équipe pédagogique et engagement à s’y conformer pleinement.",
          },
          {
            type: "paragraphe",
            texte: "Chaque membre de l'établissement s'engage à respecter les modalités définies par ce Règlement Intérieur.",
          },
          {
            type: "liste",
            items: [
              "Adhésion aux dispositions du présent règlement,",
              "Engagement de s'y conformer pleinement.",
            ],
            texte: "L'inscription d'un élève dans l'établissement vaut pour lui-même comme pour sa famille :",
          },
          {
            type: "paragraphe",
            texte: "La révision annuelle du présent règlement est soumise à l'instruction et à l'aval du conseil d'établissement.",
          },
          {
            type: "paragraphe",
            texte: "Signature de l’élève",
          },
          {
            type: "paragraphe",
            texte: "Signature des responsables légaux",
          },
        ],
      },
    ],
  },
];

/** Anomalies de numérotation du document, signalées à la lecture. */
export const REMARQUES_NUMEROTATION: string[] = [
  "Le numéro « 2.1 » désigne deux articles : « Usage du téléphone portable » et, plus loin, « Les assurances ».",
  "Le numéro « 2.2 » désigne deux articles : « Les horaires » et, plus loin, « Les sorties et voyages scolaires encadrés par des personnels de l’établissement ».",
  "Le numéro « 4.2.1 » désigne deux articles consécutifs : « Information de l’établissement par les parents en cas d’absence » et « Absences répétées ».",
  "Les liens « RI 2.1 », « RI 2.2 » et « RI 4.2.1 » posés par les corrigés mènent au premier des deux articles.",
];

/** Référence affichée en tête de la section. */
export const REFERENCE_REGLEMENT = {
  titre: "Règlement intérieur du 2nd degré",
  precision: "Collège et lycée",
  annee: "Année scolaire 2026-2027",
  etablissement: "Lycée Montaigne — Beit Chabab, Liban",
};
