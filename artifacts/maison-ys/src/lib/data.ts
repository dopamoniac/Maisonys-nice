export type Collection = {
  key: string;
  name: string;
  tagline: string;
};

export const collections: Collection[] = [
  {
    key: "noire",
    name: "Collection Noire",
    tagline: "Ombres, mystère et présence absolue",
  },
  {
    key: "pierre",
    name: "Collection Pierre",
    tagline: "Clarté, lumière et raffinement minéral",
  },
  {
    key: "doree",
    name: "Collection Dorée",
    tagline: "Chaleur, opulence et sensualité orientale",
  },
];

export type Fragrance = {
  name: string;
  family: string;
  volume: string;
  description: string;
  imageKey: string;
  collectionKey: string;
  mood: string;
  tagline: string;
  shortDescription: string;
  sensations: string[];
  usages: string[];
  benefits: string[];
  conclusion: string;
};

export const fragrances: Fragrance[] = [
  {
    name: "Moula",
    family: "Boisé Aromatique",
    volume: "50 ML",
    description: "L'oud et le cèdre en conversation silencieuse — une présence ancienne rendue moderne.",
    imageKey: "moula",
    collectionKey: "noire",
    mood: "Chic / Chaleureux",
    tagline: "L'élégance chaude d'un parfum qui impose le respect.",
    shortDescription: "Boisé, épicé, raffiné — une présence classe qui ne cherche pas à en faire trop.",
    sensations: [
      "Ouverture chaude et légèrement épicée",
      "Cœur élégant et structuré",
      "Fond boisé et enveloppant qui tient longtemps",
    ],
    usages: [
      "Soirées et occasions importantes",
      "Pour une image soignée et haut de gamme",
      "Amateurs de parfums élégants et non sucrés",
    ],
    benefits: [
      "Parfum raffiné et polyvalent",
      "Sillage présent mais maîtrisé",
      "Excellente tenue — Extrait de Parfum",
      "Image luxe et sophistiquée",
    ],
    conclusion: "Si vous cherchez un parfum élégant, chaleureux et distingué, MOULA est un choix sûr qui renforce votre présence.",
  },
  {
    name: "Kirke",
    family: "Oriental Épicé",
    volume: "50 ML",
    description: "Safran et encens — mythique, magnétique, impossible à ignorer.",
    imageKey: "kirke",
    collectionKey: "noire",
    mood: "Fruité / Accrocheur",
    tagline: "Une explosion fruitée qui marque et qui reste.",
    shortDescription: "Vibrant, sucré, intense — un parfum qui se remarque et attire les compliments.",
    sensations: [
      "Ouverture fruitée et sucrée très présente",
      "Cœur chaud et enveloppant",
      "Fond sensuel qui tient toute la journée",
    ],
    usages: [
      "Soirées et sorties",
      "Pour se faire remarquer",
      "Amateurs de parfums intenses",
    ],
    benefits: [
      "Parfum très accrocheur",
      "Sillage puissant et durable",
      "Excellente tenue — Extrait de Parfum",
      "Signature moderne et audacieuse",
    ],
    conclusion: "Si vous aimez les parfums fruités, puissants et qui attirent les compliments, KIRKE est un choix évident.",
  },
  {
    name: "Chronic R",
    family: "Boisé Musqué",
    volume: "50 ML",
    description: "Une intensité silencieuse. Bois et musc en équilibre parfait.",
    imageKey: "chronicr",
    collectionKey: "noire",
    mood: "Frais / Quotidien",
    tagline: "La fraîcheur maîtrisée, du matin au soir.",
    shortDescription: "Frais, propre, légèrement boisé — une élégance naturelle pour tous les jours.",
    sensations: [
      "Ouverture fraîche et agréable",
      "Cœur propre et légèrement boisé",
      "Fond doux et discret qui tient sur la durée",
    ],
    usages: [
      "Au quotidien",
      "Travail ou rendez-vous",
      "Pour hommes et femmes",
    ],
    benefits: [
      "Parfum facile à porter",
      "Sensation de fraîcheur durable",
      "Bonne tenue — Extrait de Parfum",
      "Discret mais soigné",
    ],
    conclusion: "Si vous cherchez un parfum propre, élégant et facile à porter au quotidien, CHRONIC R est un excellent choix.",
  },
  {
    name: "Rêve",
    family: "Floral Doux",
    volume: "50 ML",
    description: "Un rêve tissé de jasmin, de musc blanc et de lumière crépusculaire.",
    imageKey: "reve",
    collectionKey: "pierre",
    mood: "Doux / Apaisant",
    tagline: "Une douceur qui accompagne, jamais envahissante.",
    shortDescription: "Léger, propre, apaisant — un parfum subtil pour une présence soignée au quotidien.",
    sensations: [
      "Ouverture douce et légère",
      "Cœur propre et élégant",
      "Fond subtil et apaisant qui tient dans le temps",
    ],
    usages: [
      "Au quotidien",
      "Pour une présence légère et soignée",
      "Amateurs de parfums subtils",
    ],
    benefits: [
      "Parfum facile à porter",
      "Sensation de confort et de propreté",
      "Bonne tenue — Extrait de Parfum",
      "Discret mais élégant",
    ],
    conclusion: "Si vous cherchez un parfum doux, léger et agréable au quotidien, RÊVE est un choix sûr et sans risque.",
  },
  {
    name: "Aicha",
    family: "Floral Oriental",
    volume: "50 ML",
    description: "Des pétales de rose sur un ambre chaud — la féminité élevée au rang de poésie.",
    imageKey: "aicha",
    collectionKey: "pierre",
    mood: "Puissant / Signature",
    tagline: "Pour ceux qui veulent marquer les esprits.",
    shortDescription: "Intense, épicé, profondément sensuel — une présence qui s'impose et ne s'oublie pas.",
    sensations: [
      "Ouverture intense et légèrement épicée",
      "Cœur chaud et élégant",
      "Fond profond, sensuel et très durable",
    ],
    usages: [
      "Soirées et occasions spéciales",
      "Pour se démarquer",
      "Amateurs de parfums présents et affirmés",
    ],
    benefits: [
      "Parfum intense et marquant",
      "Sillage puissant et durable",
      "Excellente tenue — Extrait de Parfum",
      "Identité forte et distinctive",
    ],
    conclusion: "Si vous voulez affirmer votre présence et marquer les esprits, AICHA est fait pour vous.",
  },
  {
    name: "Baccarat",
    family: "Oud Précieux",
    volume: "50 ML",
    description: "Le summum de la collection. Une opulence pure — un extrait digne de la légende.",
    imageKey: "baccarat",
    collectionKey: "pierre",
    mood: "Élégant / Facile",
    tagline: "Un choix sans risque, une élégance sans effort.",
    shortDescription: "Doux, chaud et boisé — un parfum polyvalent que tout le monde apprécie.",
    sensations: [
      "Ouverture douce et légèrement sucrée",
      "Cœur chaud et enveloppant",
      "Fond boisé et ambré à longue tenue",
    ],
    usages: [
      "Au quotidien comme en soirée",
      "Pour hommes et femmes",
      "Toutes saisons, toutes occasions",
    ],
    benefits: [
      "Facile à porter, plaît au plus grand nombre",
      "Sillage présent mais non agressif",
      "Excellente tenue — Extrait de Parfum",
      "Parfum polyvalent et sans prise de risque",
    ],
    conclusion: "Si vous cherchez un parfum sûr, élégant et qui fait toujours bonne impression, BACCARAT est un choix évident.",
  },
  {
    name: "Coco Vanille",
    family: "Oriental Gourmand",
    volume: "50 ML",
    description: "Une douceur crémeuse et chaude — enveloppante, addictive, inoubliable.",
    imageKey: "cocovanille",
    collectionKey: "doree",
    mood: "Gourmand / Cocooning",
    tagline: "La douceur qui enveloppe, la chaleur qui réconforte.",
    shortDescription: "Crémeux, sucré et enveloppant — un parfum qui rassure et séduit à la fois.",
    sensations: [
      "Ouverture douce et sucrée",
      "Cœur crémeux et gourmand",
      "Fond chaud et enveloppant à longue tenue",
    ],
    usages: [
      "En hiver ou en soirée",
      "Moments cocooning",
      "Amateurs de parfums sucrés et chaleureux",
    ],
    benefits: [
      "Parfum gourmand très apprécié",
      "Sensation chaleureuse et réconfortante",
      "Excellente tenue — Extrait de Parfum",
      "Sillage doux mais présent",
    ],
    conclusion: "Si vous aimez les parfums sucrés, doux et enveloppants, COCO VANILLE est un choix sûr qui plaît immédiatement.",
  },
  {
    name: "Sucre",
    family: "Oriental Sucré",
    volume: "50 ML",
    description: "La douceur d'une canne à sucre rare, distillée en quelque chose d'intemporel.",
    imageKey: "sucre",
    collectionKey: "doree",
    mood: "Sucré / Plaisir Immédiat",
    tagline: "Simple, addictif, irrésistible.",
    shortDescription: "Doux, sucré, gourmand — un parfum qui enveloppe la peau et invite à s'en approcher.",
    sensations: [
      "Ouverture très sucrée et douce",
      "Cœur gourmand et agréable",
      "Fond léger mais durable",
    ],
    usages: [
      "Au quotidien",
      "Pour une ambiance chaleureuse",
      "Amateurs de parfums sucrés",
    ],
    benefits: [
      "Parfum simple et efficace",
      "Très agréable et facile à porter",
      "Bonne tenue — Extrait de Parfum",
      "Sillage doux et attirant",
    ],
    conclusion: "Si vous aimez les parfums sucrés, doux et gourmands, SUCRE est un choix évident qui plaît sans effort.",
  },
  {
    name: "Rose Vanille",
    family: "Floral Gourmand",
    volume: "50 ML",
    description: "La rose embrassée par la vanille — une dualité de force et de tendresse.",
    imageKey: "rosevanille",
    collectionKey: "doree",
    mood: "Floral / Gourmand",
    tagline: "La rose embrassée par la vanille — douceur et séduction.",
    shortDescription: "Floral, sucré, féminin — l'équilibre parfait entre raffinement et gourmandise.",
    sensations: [
      "Ouverture florale douce à la rose",
      "Cœur légèrement sucré et élégant",
      "Fond chaud et vanillé qui tient longtemps",
    ],
    usages: [
      "Au quotidien ou en soirée",
      "Pour une présence douce mais séduisante",
      "Amatrices de parfums floraux et sucrés",
    ],
    benefits: [
      "Équilibre parfait entre floral et gourmand",
      "Très agréable et facile à porter",
      "Excellente tenue — Extrait de Parfum",
      "Sillage doux mais séduisant",
    ],
    conclusion: "Si vous aimez les parfums doux, féminins et légèrement sucrés, ROSE VANILLE est un choix évident qui plaît immédiatement.",
  },
];

