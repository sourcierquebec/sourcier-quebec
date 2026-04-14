export const site = {
  meta: {
    brand: 'Sourcier Québec',
    baseline: "Sourcier professionnel au Québec",
  },

  hero: {
    slogan: "L'expertise de l'eau au service de votre terrain",
    slogansAlt: [
      "Ne laissez pas le hasard décider pour vous",
      "La précision au service de l'eau",
    ],
    accroche:
      "Localisation précise de veines d'eau pour vos projets de forage résidentiels, agricoles et municipaux.",
    cta: { label: 'Demander une estimation', href: '#contact' },
  },

  piliers: [
    {
      num: '01',
      titre: 'La Précision',
      texte:
        "Déterminer le point de forage exact sur votre propriété. Mon expertise permet de cibler l'endroit le plus pertinent qui répond spécifiquement à vos besoins en eau.",
    },
    {
      num: '02',
      titre: "L'Économie",
      texte:
        "Un sourcier vous fait économiser des milliers de dollars. En évitant les forages infructueux, les suppléments de creusement inutiles ou pire encore les trous secs. Vous optimisez votre investissement dès le premier mètre.",
    },
    {
      num: '03',
      titre: "L'Aide à la décision",
      texte:
        "Obtenez un portrait concret de votre sous-sol et grâce à mon analyse décidez avec confiance s'il est opportun d'entreprendre un forage et si le projet répond à vos attentes de débit.",
    },
  ],

  about: {
    intro:
      "Je propose la détection précise des sources d'eau, nappes phréatiques et veines d'eau, pour les particuliers, agriculteurs et professionnels du forage.",
    parcours:
      "Sourcier professionnel formé en France, je mets une décennie d'expérience en tant que passionné de la sourcellerie au service de la détection de vos ressources souterraines.",
    methode:
      "Mon travail consiste à localiser avec précision les veines d'eau, à en déterminer la profondeur et le débit potentiel. Alliant une sensibilité affinée à une méthodologie rigoureuse, j'accompagne mes clients dans la réussite de leurs projets de forage, en apportant une réponse claire et fiable avant chaque intervention.",
    points: [
      {
        titre: 'Expérience',
        texte:
          "Plus de 10 ans de pratique dans le domaine de la détection d'eau. Formation certifiante de sourcier professionnel en France.",
      },
      {
        titre: 'Engagement',
        texte:
          "Une démarche rigoureuse qui respecte vos critères (débit, emplacement) tout en se conformant aux règlements municipaux en vigueur.",
      },
      {
        titre: 'Rapport détaillé',
        texte:
          "À la fin de chaque intervention, je vous fournis un rapport complet. Ce document professionnel peut être transmis directement à votre foreur pour guider ses travaux.",
      },
    ],
  },

  forfaits: [
    {
      id: 'residentiel',
      nom: 'Résidentiel',
      prix: 250,
      surface: "Jusqu'à 5 000 m²",
      cible: 'Idéal pour les projets de puits artésiens domestiques.',
      inclusions: [
        "Détection d'une veine d'eau optimale",
        'Estimation de la profondeur et du débit',
        'Pose d\'un repère sur le terrain',
      ],
    },
    {
      id: 'agricole',
      nom: 'Agricole / Grand Terrain',
      prix: 350,
      surface: "Jusqu'à 10 000 m²",
      cible: 'Analyse complète pour besoins en débit élevé.',
      inclusions: [
        'Identification de plusieurs points de forage potentiels',
        'Estimation de la profondeur et du débit',
        'Pose des repères sur le terrain',
      ],
    },
    {
      id: 'municipal',
      nom: 'Municipal',
      prix: 550,
      surface: 'Projet dédié',
      cible:
        "Idéal pour les projets d'approvisionnement en eau potable d'une municipalité.",
      inclusions: [
        "Détection d'une veine d'eau optimale",
        'Estimation de la profondeur et du débit',
        'Pose d\'un repère sur le terrain',
      ],
    },
  ],

  zone: {
    base: 'La Pocatière',
    coords: '47.3667° N · 70.0333° O',
    regions: ['Chaudière-Appalaches', 'Bas-Saint-Laurent'],
    autre: 'Déplacement possible partout au Québec sur demande.',
    rayonInclus: '20 km autour de La Pocatière',
    tarifKm: '0,75 $ / km supplémentaire + temps de déplacement',
    note:
      'Les prix affichés sont sujets à changement. Une estimation écrite sera fournie avant chaque intervention.',
  },

  faq: [
    {
      q: 'Est-ce un don ou une technique ?',
      r: "Il s'agit d'une sensibilité développée et d'une technique de détection des variations géophysiques du sol. C'est une expertise qui s'affine avec les années de pratique.",
    },
    {
      q: 'Pourquoi faire appel à un sourcier avant le foreur ?',
      r: "Faire appel à un sourcier en amont d'un forage permet d'obtenir une orientation supplémentaire dans la recherche d'eau avant d'engager des travaux plus coûteux. Le sourcier intervient pour identifier des zones potentielles d'eau souterraine. Le sourcier ne remplace pas le foreur ni les méthodes techniques, mais agit comme un outil d'aide à la décision en amont du projet.",
    },
    {
      q: 'Respectez-vous les distances légales ?',
      r: 'Oui, ma recherche tient compte des règlements municipaux (distances par rapport aux installations septiques, limites de terrain, etc.).',
    },
    {
      q: 'Que contient le rapport final ?',
      r: "Le point précis de forage, un croquis de la prospection, une estimation de la profondeur de la veine d'eau et une évaluation du débit.",
    },
  ],

  temoignages: {
    intro:
      'Les témoignages proviennent directement des avis laissés sur la fiche Google Business Profile de Sourcier Québec.',
    placeholders: [
      {
        auteur: 'Client résidentiel',
        texte:
          "Travail sérieux et méthodique. Le point de forage suggéré s'est avéré exact — débit au rendez-vous.",
      },
      {
        auteur: 'Exploitation agricole',
        texte:
          "Grâce à l'intervention préalable, nous avons évité un forage à sec. Approche rigoureuse et rapport clair.",
      },
      {
        auteur: 'Projet municipal',
        texte:
          "Un allié précieux avant d'engager les équipements lourds. Recommandation sans réserve.",
      },
    ],
  },

  contact: {
    adresse: '413d rue Lafontaine, La Pocatière, QC G0R 1Z0',
    tel: '1 (418) 356-6638',
    telRaw: '+14183566638',
    email: 'sourcierquebec@gmail.com',
    horaires: 'Du lundi au vendredi, 9 h 00 – 17 h 00',
  },

  legal: {
    clause:
      "La sourcellerie est une discipline basée sur la détection sensorielle et l'expérience de terrain. Malgré toute la précision apportée à la recherche, Sourcier Québec est tenu à une obligation de moyens et non de résultat. Aucune garantie contractuelle ne peut être offerte quant à la présence effective d'eau, au débit final exact ou à la potabilité de l'eau après forage.",
  },
} as const;

export type SiteContent = typeof site;
