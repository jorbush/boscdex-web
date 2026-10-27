export interface Mushroom {
  id: string;
  scientificName: string;
  dexNumber: string;
  name: {
    ca: string;
    es: string;
    en: string;
  };
  edibility: string;
  rarityTier: 1 | 2 | 3 | 4 | 5;
  rarityName: {
    ca: string;
    es: string;
    en: string;
  };
  image: string;
  isGourmet: boolean;
  season: {
    ca: string;
    es: string;
    en: string;
  };
  elevation: string;
  hostTrees: string[];
  toxicLookalike?: {
    id: string;
    scientificName: string;
    name: { ca: string; es: string; en: string };
    dangerLevel: 'toxic' | 'deadly';
    keyDifference: {
      ca: string;
      es: string;
      en: string;
    };
  } | null;
}

export interface Tree {
  id: string;
  scientificName: string;
  leafType: 'needle' | 'deciduous' | 'evergreen';
  name: {
    ca: string;
    es: string;
    en: string;
  };
  image: string;
  elevation: string;
  mycorrhizalPartners: string[];
  description: {
    ca: string;
    es: string;
    en: string;
  };
}

export const INDICATOR_TREES: Tree[] = [
  {
    id: 'pinus_sylvestris',
    scientificName: 'Pinus sylvestris',
    leafType: 'needle',
    name: {
      ca: 'Pi roig',
      es: 'Pino silvestre',
      en: 'Scots Pine',
    },
    image: '/assets/trees/pinus_sylvestris.png',
    elevation: '800m – 2.000m',
    mycorrhizalPartners: ['lactarius_deliciosus', 'boletus_edulis', 'craterellus_lutescens', 'tricholoma_terreum'],
    description: {
      ca: 'L\'arbre rei dels boletaires al Pirineu i Prepirineu. Escorça ataronjada a la part alta del tronc. Hàbitat predilecte dels millors rovellons i ceps de tardor.',
      es: 'El árbol rey de los seteros en el Pirineo. Corteza anaranjada en la parte alta. Hábitat predilecto de los mejores níscalos y boletus.',
      en: 'The quintessential mountain pine of the Pyrenees. Salmon-orange upper bark. The prime mycorrhizal host for saffron milk caps and porcini.',
    },
  },
  {
    id: 'pinus_halepensis',
    scientificName: 'Pinus halepensis',
    leafType: 'needle',
    name: {
      ca: 'Pi blanc',
      es: 'Pino carrasco',
      en: 'Aleppo Pine',
    },
    image: '/assets/trees/pinus_halepensis.png',
    elevation: '0m – 1.000m',
    mycorrhizalPartners: ['lactarius_deliciosus', 'tricholoma_terreum', 'suillus_granulatus'],
    description: {
      ca: 'El pi mediterrani per excel·lència a la costa i prelitoral català. Capçades clares i pinyes persistents. Productor clau de rovellons primerencs a la tardor.',
      es: 'El pino mediterráneo por excelencia en la costa y prelitoral. Productor clave de níscalos tempranos en otoño.',
      en: 'The Mediterranean lowland pine widespread along coastal and prelitoral ranges. Vital host for early-season coastal saffron milk caps.',
    },
  },
  {
    id: 'quercus_ilex',
    scientificName: 'Quercus ilex',
    leafType: 'evergreen',
    name: {
      ca: 'Alzina',
      es: 'Encina',
      en: 'Holm Oak',
    },
    image: '/assets/trees/quercus_ilex.png',
    elevation: '0m – 1.400m',
    mycorrhizalPartners: ['amanita_caesarea', 'cantharellus_cibarius', 'craterellus_cornucopioides', 'tuber_melanosporum'],
    description: {
      ca: 'Arbre perenne sagrat de la conca mediterrània. Bosc ombrívol i humit amb terra de fullaraca densa. Bressol del preuat Ou de Reig i de la Tòfona Negra.',
      es: 'Árbol perenne sagrado de la cuenca mediterránea. Suelo umbrío con densa hojarasca. Cuna de la codiciada Oronja y la Trufa Negra.',
      en: 'Sacred Mediterranean evergreen oak with rich leaf litter. Primary mycorrhizal guardian of Caesar\'s Mushroom and Black Truffle.',
    },
  },
  {
    id: 'fagus_sylvatica',
    scientificName: 'Fagus sylvatica',
    leafType: 'deciduous',
    name: {
      ca: 'Faig',
      es: 'Haya',
      en: 'European Beech',
    },
    image: '/assets/trees/fagus_sylvatica.png',
    elevation: '700m – 1.700m',
    mycorrhizalPartners: ['boletus_edulis', 'craterellus_cornucopioides', 'cantharellus_cibarius'],
    description: {
      ca: 'Forma fagedes monumentals a indrets humits com el Montseny, Ripollès i la Garrotxa. Les seves catifes de fulles marrons alberguen els ceps més espectaculars.',
      es: 'Forma hayedos monumentales en zonas húmedas como Montseny y Garrotxa. Sus alfombras de hojas albergan boletus espectaculares.',
      en: 'Forms monumental cool-temperate beech forests across Montseny, Ripollès and Garrotxa. Thick russet leaf blankets shelter prime King Boletes.',
    },
  },
  {
    id: 'castanea_sativa',
    scientificName: 'Castanea sativa',
    leafType: 'deciduous',
    name: {
      ca: 'Castanyer',
      es: 'Castaño',
      en: 'Sweet Chestnut',
    },
    image: '/assets/trees/castanea_sativa.png',
    elevation: '400m – 1.200m',
    mycorrhizalPartners: ['boletus_edulis', 'cantharellus_cibarius', 'amanita_caesarea'],
    description: {
      ca: 'Arbre de fulla caduca dentada i fruit en pelló punxant. Present a zones silícies del Montseny i les Guilleries. Productor mític de ceps i rossinyols d\'octubre.',
      es: 'Árbol caducifolio de hoja dentada. Presente en Montseny y Guilleries. Productor mítico de boletus y rebozuelos.',
      en: 'Deciduous tree with toothed leaves and spiky burrs. Thrives on acidic soils of Montseny and Guilleries, producing legendary autumn boletes and chanterelles.',
    },
  },
];

export const MUSHROOMS: Mushroom[] = [
  {
    "id": "lactarius_deliciosus",
    "scientificName": "Lactarius deliciosus",
    "dexNumber": "#001",
    "name": {
      "ca": "Rovelló / Pinetell",
      "es": "Níscalo / Robellón",
      "en": "Saffron Milk Cap"
    },
    "edibility": "excellent",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/lactarius_deliciosus.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "400m – 1800m",
    "hostTrees": [
      "pinus_sylvestris",
      "pinus_halepensis"
    ],
    "toxicLookalike": {
      "id": "paxillus_involutus",
      "scientificName": "Paxillus involutus",
      "name": {
        "ca": "Paxil·le / Fals rovelló d\\",
        "es": "Paxilo enrollado / Falso níscalo pardo",
        "en": "Brown Roll-Rim / Poison Paxillus"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "El mortal Paxil·le té marge fortament enrotllat, làmines que s'oxiden a marró fosc i mai desprèn làtex taronja; el Rovelló raja sempre làtex taronja viu i té carn massissa immutable a taronja.",
        "es": "El mortal Paxil·le té marge fortament enrotllat, làmines que s'oxiden a marró fosc i mai desprèn làtex taronja; el Rovelló raja sempre làtex taronja viu i té carn massissa immutable a taronja.",
        "en": "El mortal Paxil·le té marge fortament enrotllat, làmines que s'oxiden a marró fosc i mai desprèn làtex taronja; el Rovelló raja sempre làtex taronja viu i té carn massissa immutable a taronja."
      }
    }
  },
  {
    "id": "boletus_edulis",
    "scientificName": "Boletus edulis",
    "dexNumber": "#002",
    "name": {
      "ca": "Cep",
      "es": "Boleto / Hongo calabaza",
      "en": "Penny Bun / Porcini"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/boletus_edulis.png",
    "isGourmet": true,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "600m – 1800m",
    "hostTrees": [
      "fagus_sylvatica",
      "castanea_sativa",
      "quercus_ilex"
    ],
    "toxicLookalike": {
      "id": "tylopilus_felleus",
      "scientificName": "Tylopilus felleus",
      "name": {
        "ca": "Mataparent amarg / Cep amarg",
        "es": "Boleto amargo / Hongo amargo",
        "en": "Bitter Bolete"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El Mataparent amarg té porus rosats a la maduresa i un reticle marró fosc prominent al peu; a més té un sabor extremadament amarg que arruïna qualsevol guisat.",
        "es": "El Mataparent amarg té porus rosats a la maduresa i un reticle marró fosc prominent al peu; a més té un sabor extremadament amarg que arruïna qualsevol guisat.",
        "en": "El Mataparent amarg té porus rosats a la maduresa i un reticle marró fosc prominent al peu; a més té un sabor extremadament amarg que arruïna qualsevol guisat."
      }
    }
  },
  {
    "id": "cantharellus_cibarius",
    "scientificName": "Cantharellus cibarius",
    "dexNumber": "#003",
    "name": {
      "ca": "Rossinyol",
      "es": "Rebozuelo / Chantarela",
      "en": "Golden Chanterelle"
    },
    "edibility": "excellent",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/cantharellus_cibarius.png",
    "isGourmet": true,
    "season": {
      "ca": "Juny – Jul – Ago – Set – Oct – Nov",
      "es": "Jun – Jul – Ago – Sep – Oct – Nov",
      "en": "Jun – Jul – Aug – Sep – Oct – Nov"
    },
    "elevation": "200m – 1500m",
    "hostTrees": [
      "fagus_sylvatica",
      "quercus_ilex",
      "castanea_sativa"
    ],
    "toxicLookalike": {
      "id": "omphalotus_olearius",
      "scientificName": "Omphalotus olearius",
      "name": {
        "ca": "Gírgola d\\",
        "es": "Seta de olivo",
        "en": "Jack-o\\"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "La Gírgola d'olivera creix en fusta i té làmines veritables (no plecs), a més brilla en la foscor (bioluminescència).",
        "es": "La Gírgola d'olivera creix en fusta i té làmines veritables (no plecs), a més brilla en la foscor (bioluminescència).",
        "en": "La Gírgola d'olivera creix en fusta i té làmines veritables (no plecs), a més brilla en la foscor (bioluminescència)."
      }
    }
  },
  {
    "id": "amanita_caesarea",
    "scientificName": "Amanita caesarea",
    "dexNumber": "#004",
    "name": {
      "ca": "Ou de reig",
      "es": "Oronja / Huevo de rey",
      "en": "Caesar\\"
    },
    "edibility": "excellent",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/amanita_caesarea.png",
    "isGourmet": true,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "200m – 1000m",
    "hostTrees": [
      "quercus_ilex",
      "castanea_sativa"
    ],
    "toxicLookalike": {
      "id": "amanita_citrina",
      "scientificName": "Amanita citrina",
      "name": {
        "ca": "Farinera groga / Reig de la mort fals",
        "es": "Oronja de limón / Amanita citrina",
        "en": "False Death Cap"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "L'Ou de reig té barret taronja viu, làmines i peu groc daurat lluminós; la Farinera groga té barret groc llimona pàl·lid amb plaques fosques, làmines blanques i forta olor de patata crua.",
        "es": "L'Ou de reig té barret taronja viu, làmines i peu groc daurat lluminós; la Farinera groga té barret groc llimona pàl·lid amb plaques fosques, làmines blanques i forta olor de patata crua.",
        "en": "L'Ou de reig té barret taronja viu, làmines i peu groc daurat lluminós; la Farinera groga té barret groc llimona pàl·lid amb plaques fosques, làmines blanques i forta olor de patata crua."
      }
    }
  },
  {
    "id": "craterellus_cornucopioides",
    "scientificName": "Craterellus cornucopioides",
    "dexNumber": "#005",
    "name": {
      "ca": "Trompeta de la mort",
      "es": "Trompeta de los muertos",
      "en": "Black Trumpet / Horn of Plenty"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/craterellus_cornucopioides.png",
    "isGourmet": true,
    "season": {
      "ca": "Set – Oct – Nov – Des",
      "es": "Sep – Oct – Nov – Dic",
      "en": "Sep – Oct – Nov – Dec"
    },
    "elevation": "400m – 1400m",
    "hostTrees": [
      "fagus_sylvatica",
      "quercus_ilex"
    ],
    "toxicLookalike": null
  },
  {
    "id": "macrolepiota_procera",
    "scientificName": "Macrolepiota procera",
    "dexNumber": "#006",
    "name": {
      "ca": "Apagallums",
      "es": "Parasol",
      "en": "Parasol Mushroom"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/macrolepiota_procera.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "100m – 1200m",
    "hostTrees": [],
    "toxicLookalike": {
      "id": "amanita_pantherina",
      "scientificName": "Amanita pantherina",
      "name": {
        "ca": "Pantera / Reig bord pigat",
        "es": "Amanita pantera",
        "en": "Panther Cap"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "L'Apagallums té un anell doble mòbil que llisca pel peu i mai té volva; la Pantera és molt tòxica, té un anell fix i una volva dissociada en anells concèntrics a la base del peu.",
        "es": "L'Apagallums té un anell doble mòbil que llisca pel peu i mai té volva; la Pantera és molt tòxica, té un anell fix i una volva dissociada en anells concèntrics a la base del peu.",
        "en": "L'Apagallums té un anell doble mòbil que llisca pel peu i mai té volva; la Pantera és molt tòxica, té un anell fix i una volva dissociada en anells concèntrics a la base del peu."
      }
    }
  },
  {
    "id": "tricholoma_terreum",
    "scientificName": "Tricholoma terreum",
    "dexNumber": "#007",
    "name": {
      "ca": "Fredolic",
      "es": "Negrilla",
      "en": "Grey Knight"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/tricholoma_terreum.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "400m – 1600m",
    "hostTrees": [
      "pinus_sylvestris",
      "pinus_halepensis"
    ],
    "toxicLookalike": {
      "id": "tricholoma_saponaceum",
      "scientificName": "Tricholoma saponaceum",
      "name": {
        "ca": "Bolet de sabó / Fredolic de sabó",
        "es": "Tricoloma jabonoso / Seta de jabón",
        "en": "Soapy Knight / Soap-scented Toadstool"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El tòxic Bolet de sabó fa una forta olor de detergent de rentar la roba o sabó i té la base del peu tenyida de rosa; el Fredolic fa olor suau fúngica i no té mai tons rosats al peu.",
        "es": "El tòxic Bolet de sabó fa una forta olor de detergent de rentar la roba o sabó i té la base del peu tenyida de rosa; el Fredolic fa olor suau fúngica i no té mai tons rosats al peu.",
        "en": "El tòxic Bolet de sabó fa una forta olor de detergent de rentar la roba o sabó i té la base del peu tenyida de rosa; el Fredolic fa olor suau fúngica i no té mai tons rosats al peu."
      }
    }
  },
  {
    "id": "calocybe_gambosa",
    "scientificName": "Calocybe gambosa",
    "dexNumber": "#008",
    "name": {
      "ca": "Moixernó",
      "es": "Seta de San Jorge / Perrechico",
      "en": "St. George\\"
    },
    "edibility": "comestible",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/calocybe_gambosa.png",
    "isGourmet": false,
    "season": {
      "ca": "Abr – Maig – Juny",
      "es": "Abr – May – Jun",
      "en": "Apr – May – Jun"
    },
    "elevation": "600m – 1400m",
    "hostTrees": [
      "quercus_ilex"
    ],
    "toxicLookalike": {
      "id": "inocybe_erubescens",
      "scientificName": "Inocybe erubescens",
      "name": {
        "ca": "Inòcibe de Patouillard",
        "es": "Inocibe de Patouillard / Bruja roja",
        "en": "Deadly Fibrecap / Red-staining Inocybe"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "El mortal Inòcibe de Patouillard té barret cònic amb umbó agut i s'enrogeix intensament (vermell maó) en fregar-lo; el Moixernó té barret convex massís que mai enrogeix i forta olor de farina.",
        "es": "El mortal Inòcibe de Patouillard té barret cònic amb umbó agut i s'enrogeix intensament (vermell maó) en fregar-lo; el Moixernó té barret convex massís que mai enrogeix i forta olor de farina.",
        "en": "El mortal Inòcibe de Patouillard té barret cònic amb umbó agut i s'enrogeix intensament (vermell maó) en fregar-lo; el Moixernó té barret convex massís que mai enrogeix i forta olor de farina."
      }
    }
  },
  {
    "id": "pleurotus_ostreatus",
    "scientificName": "Pleurotus ostreatus",
    "dexNumber": "#009",
    "name": {
      "ca": "Gírgola",
      "es": "Seta de ostra",
      "en": "Oyster Mushroom"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/pleurotus_ostreatus.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des – Gen – Feb",
      "es": "Oct – Nov – Dic – Ene – Feb",
      "en": "Oct – Nov – Dec – Jan – Feb"
    },
    "elevation": "0m – 1200m",
    "hostTrees": [
      "fagus_sylvatica"
    ],
    "toxicLookalike": {
      "id": "galerina_marginata",
      "scientificName": "Galerina marginata",
      "name": {
        "ca": "Galerina mortal / Galerina vironosa",
        "es": "Galerina mortal / Galerina rebordeada",
        "en": "Funeral Bell / Deadly Galerina"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La mortal Galerina vironosa és petita, ocre-marró, té anell membranós i espores marró rovell; la Gírgola és molt més gran, gris-blavosa, sense anell i amb esporada blanca.",
        "es": "La mortal Galerina vironosa és petita, ocre-marró, té anell membranós i espores marró rovell; la Gírgola és molt més gran, gris-blavosa, sense anell i amb esporada blanca.",
        "en": "La mortal Galerina vironosa és petita, ocre-marró, té anell membranós i espores marró rovell; la Gírgola és molt més gran, gris-blavosa, sense anell i amb esporada blanca."
      }
    }
  },
  {
    "id": "hydnum_repandum",
    "scientificName": "Hydnum repandum",
    "dexNumber": "#010",
    "name": {
      "ca": "Llengua de bou",
      "es": "Lengua de vaca",
      "en": "Wood Hedgehog / Sweet Tooth"
    },
    "edibility": "comestible",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/hydnum_repandum.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "400m – 1400m",
    "hostTrees": [
      "fagus_sylvatica",
      "quercus_ilex"
    ],
    "toxicLookalike": null
  },
  {
    "id": "hygrophorus_latitabundus",
    "scientificName": "Hygrophorus latitabundus",
    "dexNumber": "#011",
    "name": {
      "ca": "Llenega negra",
      "es": "Higróforo negro / Llanega negra",
      "en": "Black Slimy Cap"
    },
    "edibility": "comestible",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/hygrophorus_latitabundus.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "400m – 1200m",
    "hostTrees": [
      "pinus_halepensis",
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "craterellus_lutescens",
    "scientificName": "Craterellus lutescens",
    "dexNumber": "#012",
    "name": {
      "ca": "Camagroc",
      "es": "Trompeta amarilla / Rebozuelo anaranjado",
      "en": "Yellow Foot / Trumpet Chanterelle"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/craterellus_lutescens.png",
    "isGourmet": true,
    "season": {
      "ca": "Set – Oct – Nov – Des",
      "es": "Sep – Oct – Nov – Dic",
      "en": "Sep – Oct – Nov – Dec"
    },
    "elevation": "400m – 1600m",
    "hostTrees": [
      "pinus_sylvestris",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "suillus_luteus",
    "scientificName": "Suillus luteus",
    "dexNumber": "#013",
    "name": {
      "ca": "Llenegot",
      "es": "Boleto anillado / Baboso",
      "en": "Slippery Jack"
    },
    "edibility": "sense_valor",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/suillus_luteus.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "400m – 1800m",
    "hostTrees": [
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "russula_cyanoxantha",
    "scientificName": "Russula cyanoxantha",
    "dexNumber": "#014",
    "name": {
      "ca": "Llora verda",
      "es": "Carbonera",
      "en": "Charcoal Burner"
    },
    "edibility": "sense_valor",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/russula_cyanoxantha.png",
    "isGourmet": false,
    "season": {
      "ca": "Juny – Jul – Ago – Set – Oct",
      "es": "Jun – Jul – Ago – Sep – Oct",
      "en": "Jun – Jul – Aug – Sep – Oct"
    },
    "elevation": "200m – 1400m",
    "hostTrees": [
      "fagus_sylvatica",
      "quercus_ilex"
    ],
    "toxicLookalike": {
      "id": "tricholoma_equestre",
      "scientificName": "Tricholoma equestre",
      "name": {
        "ca": "Groguet / Verderol / Bolet dels cavallers",
        "es": "Seta de los caballeros / Verderol",
        "en": "Yellow Knight / Man on Horseback"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El Groguet té làmines groc sofre i carn fibrosa; la Llora verda té làmines blanques lardàcies i carn trencadissa com guix.",
        "es": "El Groguet té làmines groc sofre i carn fibrosa; la Llora verda té làmines blanques lardàcies i carn trencadissa com guix.",
        "en": "El Groguet té làmines groc sofre i carn fibrosa; la Llora verda té làmines blanques lardàcies i carn trencadissa com guix."
      }
    }
  },
  {
    "id": "amanita_muscaria",
    "scientificName": "Amanita muscaria",
    "dexNumber": "#015",
    "name": {
      "ca": "Reig bord",
      "es": "Matamoscas",
      "en": "Fly Agaric"
    },
    "edibility": "toxic",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/amanita_muscaria.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "400m – 1800m",
    "hostTrees": [
      "pinus_sylvestris",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "omphalotus_olearius",
    "scientificName": "Omphalotus olearius",
    "dexNumber": "#016",
    "name": {
      "ca": "Gírgola d\\",
      "es": "Seta de olivo",
      "en": "Jack-o\\"
    },
    "edibility": "toxic",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/omphalotus_olearius.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "0m – 800m",
    "hostTrees": [
      "quercus_ilex"
    ],
    "toxicLookalike": null
  },
  {
    "id": "entoloma_sinuatum",
    "scientificName": "Entoloma sinuatum",
    "dexNumber": "#017",
    "name": {
      "ca": "Pèrfid",
      "es": "Pérfida / Engañosa",
      "en": "Livid Pinkgill"
    },
    "edibility": "toxic",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/entoloma_sinuatum.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "200m – 1200m",
    "hostTrees": [
      "quercus_ilex",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "amanita_phalloides",
    "scientificName": "Amanita phalloides",
    "dexNumber": "#018",
    "name": {
      "ca": "Farinera borda",
      "es": "Oronja verde / Cicuta verde",
      "en": "Death Cap"
    },
    "edibility": "mortal",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/amanita_phalloides.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "200m – 1400m",
    "hostTrees": [
      "quercus_ilex",
      "fagus_sylvatica",
      "castanea_sativa"
    ],
    "toxicLookalike": null
  },
  {
    "id": "amanita_verna",
    "scientificName": "Amanita verna",
    "dexNumber": "#019",
    "name": {
      "ca": "Cicuta blanca",
      "es": "Oronja blanca / Cicuta blanca",
      "en": "Fool\\"
    },
    "edibility": "mortal",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/amanita_verna.png",
    "isGourmet": false,
    "season": {
      "ca": "Abr – Maig – Juny",
      "es": "Abr – May – Jun",
      "en": "Apr – May – Jun"
    },
    "elevation": "200m – 1000m",
    "hostTrees": [
      "quercus_ilex"
    ],
    "toxicLookalike": null
  },
  {
    "id": "cortinarius_orellanus",
    "scientificName": "Cortinarius orellanus",
    "dexNumber": "#020",
    "name": {
      "ca": "Cortinari de muntanya",
      "es": "Cortinario de montaña",
      "en": "Fool\\"
    },
    "edibility": "mortal",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/cortinarius_orellanus.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "400m – 1400m",
    "hostTrees": [
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "lactarius_sanguifluus",
    "scientificName": "Lactarius sanguifluus",
    "dexNumber": "#021",
    "name": {
      "ca": "Vinader / Rovelló de sang",
      "es": "Níscalo de sangre",
      "en": "Bloody Milk Cap"
    },
    "edibility": "excellent",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/lactarius_sanguifluus.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "300m – 1600m",
    "hostTrees": [
      "pinus_sylvestris",
      "pinus_halepensis"
    ],
    "toxicLookalike": {
      "id": "lactarius_torminosus",
      "scientificName": "Lactarius torminosus",
      "name": {
        "ca": "Cabra / Rovelló bord",
        "es": "Falso níscalo peludo / Lactario de abedul",
        "en": "Woolly Milkcap"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "La Cabra o Rovelló bord té el marge del barret densament llanós i pelut (barbat) i exsuda làtex blanc molt coent; el Rovelló d'obaga (de sang) té el marge llis i làtex de color sang vinós.",
        "es": "La Cabra o Rovelló bord té el marge del barret densament llanós i pelut (barbat) i exsuda làtex blanc molt coent; el Rovelló d'obaga (de sang) té el marge llis i làtex de color sang vinós.",
        "en": "La Cabra o Rovelló bord té el marge del barret densament llanós i pelut (barbat) i exsuda làtex blanc molt coent; el Rovelló d'obaga (de sang) té el marge llis i làtex de color sang vinós."
      }
    }
  },
  {
    "id": "chroogomphus_rutilus",
    "scientificName": "Chroogomphus rutilus",
    "dexNumber": "#022",
    "name": {
      "ca": "Cama de perdiu",
      "es": "Pata de perdiz / Piquigrueso",
      "en": "Copper Spike / Pine Spike"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/chroogomphus_rutilus.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov – Des",
      "es": "Sep – Oct – Nov – Dic",
      "en": "Sep – Oct – Nov – Dec"
    },
    "elevation": "400m – 1800m",
    "hostTrees": [
      "pinus_sylvestris",
      "pinus_halepensis"
    ],
    "toxicLookalike": {
      "id": "cortinarius_orellanus",
      "scientificName": "Cortinarius orellanus",
      "name": {
        "ca": "Cortinari de muntanya",
        "es": "Cortinario de montaña",
        "en": "Fool\\"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La Cama de perdiu té làmines molt decurrents i carn que es torna violàcia/negrosa al foc, sense cortina; el Cortinari mortal té làmines adnates/escotades de color rovell i cortina filamentosa.",
        "es": "La Cama de perdiu té làmines molt decurrents i carn que es torna violàcia/negrosa al foc, sense cortina; el Cortinari mortal té làmines adnates/escotades de color rovell i cortina filamentosa.",
        "en": "La Cama de perdiu té làmines molt decurrents i carn que es torna violàcia/negrosa al foc, sense cortina; el Cortinari mortal té làmines adnates/escotades de color rovell i cortina filamentosa."
      }
    }
  },
  {
    "id": "marasmius_oreades",
    "scientificName": "Marasmius oreades",
    "dexNumber": "#023",
    "name": {
      "ca": "Carrereta / Cama-sec",
      "es": "Senderuela / Carrerilla",
      "en": "Fairy Ring Champignon / Scotch Bonnet"
    },
    "edibility": "excellent",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/marasmius_oreades.png",
    "isGourmet": false,
    "season": {
      "ca": "Maig – Juny – Set – Oct – Nov",
      "es": "May – Jun – Sep – Oct – Nov",
      "en": "May – Jun – Sep – Oct – Nov"
    },
    "elevation": "300m – 2000m",
    "hostTrees": [],
    "toxicLookalike": {
      "id": "inocybe_erubescens",
      "scientificName": "Inocybe erubescens",
      "name": {
        "ca": "Inòcibe de Patouillard",
        "es": "Inocibe de Patouillard / Bruja roja",
        "en": "Deadly Fibrecap / Red-staining Inocybe"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "El mortal Inòcibe de Patouillard és més robust, té làmines marronoses i s'enrogeix amb taques vermelloses vives; la Carrereta mai enrogeix i té peu molt elàstic i tenaç que es pot cargolar.",
        "es": "El mortal Inòcibe de Patouillard és més robust, té làmines marronoses i s'enrogeix amb taques vermelloses vives; la Carrereta mai enrogeix i té peu molt elàstic i tenaç que es pot cargolar.",
        "en": "El mortal Inòcibe de Patouillard és més robust, té làmines marronoses i s'enrogeix amb taques vermelloses vives; la Carrereta mai enrogeix i té peu molt elàstic i tenaç que es pot cargolar."
      }
    }
  },
  {
    "id": "lactarius_chrysorrheus",
    "scientificName": "Lactarius chrysorrheus",
    "dexNumber": "#024",
    "name": {
      "ca": "Lleterola de llet groga / Fals rovelló",
      "es": "Falso níscalo / Lactario de leche dorada",
      "en": "Yellow-drop Milkcap"
    },
    "edibility": "toxic",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/lactarius_chrysorrheus.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "100m – 1400m",
    "hostTrees": [
      "quercus_ilex",
      "pinus_sylvestris",
      "pinus_halepensis"
    ],
    "toxicLookalike": null
  },
  {
    "id": "lepista_nuda",
    "scientificName": "Lepista nuda",
    "dexNumber": "#025",
    "name": {
      "ca": "Pé blau / Pua blava",
      "es": "Pie azul",
      "en": "Wood Blewit"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/lepista_nuda.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "200m – 1600m",
    "hostTrees": [
      "pinus_sylvestris",
      "fagus_sylvatica",
      "quercus_ilex"
    ],
    "toxicLookalike": null
  },
  {
    "id": "rubroboletus_satanas",
    "scientificName": "Rubroboletus satanas",
    "dexNumber": "#026",
    "name": {
      "ca": "Mataparent de Satanàs",
      "es": "Boleto de Satanás",
      "en": "Satan\\"
    },
    "edibility": "toxic",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/rubroboletus_satanas.png",
    "isGourmet": false,
    "season": {
      "ca": "Jul – Ago – Set – Oct",
      "es": "Jul – Ago – Sep – Oct",
      "en": "Jul – Aug – Sep – Oct"
    },
    "elevation": "100m – 1100m",
    "hostTrees": [
      "quercus_ilex",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "russula_virescens",
    "scientificName": "Russula virescens",
    "dexNumber": "#027",
    "name": {
      "ca": "Palometa / Llora pigada",
      "es": "Gibelurdiñ / Seta de cura",
      "en": "Green-cracked Brittlegill"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/russula_virescens.png",
    "isGourmet": false,
    "season": {
      "ca": "Juny – Jul – Ago – Set – Oct",
      "es": "Jun – Jul – Ago – Sep – Oct",
      "en": "Jun – Jul – Aug – Sep – Oct"
    },
    "elevation": "100m – 1300m",
    "hostTrees": [
      "quercus_ilex",
      "fagus_sylvatica",
      "castanea_sativa"
    ],
    "toxicLookalike": {
      "id": "amanita_phalloides",
      "scientificName": "Amanita phalloides",
      "name": {
        "ca": "Farinera borda",
        "es": "Oronja verde / Cicuta verde",
        "en": "Death Cap"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La Palometa té carn trencadissa com el guix, barret verd clivellat en mosaic i mai té anell ni volva; la Farinera borda és mortal i té sempre anell, volva i carn fibrosa.",
        "es": "La Palometa té carn trencadissa com el guix, barret verd clivellat en mosaic i mai té anell ni volva; la Farinera borda és mortal i té sempre anell, volva i carn fibrosa.",
        "en": "La Palometa té carn trencadissa com el guix, barret verd clivellat en mosaic i mai té anell ni volva; la Farinera borda és mortal i té sempre anell, volva i carn fibrosa."
      }
    }
  },
  {
    "id": "hygrophorus_eburneus",
    "scientificName": "Hygrophorus eburneus",
    "dexNumber": "#028",
    "name": {
      "ca": "Llenega blanca / Mocosa blanca",
      "es": "Higróforo blanco / Llanega blanca",
      "en": "Ivory Woodwax"
    },
    "edibility": "comestible",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/hygrophorus_eburneus.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "300m – 1500m",
    "hostTrees": [
      "fagus_sylvatica",
      "quercus_ilex"
    ],
    "toxicLookalike": {
      "id": "amanita_virosa",
      "scientificName": "Amanita virosa",
      "name": {
        "ca": "Farinera pudent / Àngel de la mort",
        "es": "Cicuta fétida / Ángel de la muerte",
        "en": "Destroying Angel"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La mortal Farinera pudent té anell i volva prominent en sac a la base; la Llenega blanca té làmines ceroses decurrents, barret viscós i mai té anell ni volva.",
        "es": "La mortal Farinera pudent té anell i volva prominent en sac a la base; la Llenega blanca té làmines ceroses decurrents, barret viscós i mai té anell ni volva.",
        "en": "La mortal Farinera pudent té anell i volva prominent en sac a la base; la Llenega blanca té làmines ceroses decurrents, barret viscós i mai té anell ni volva."
      }
    }
  },
  {
    "id": "tricholoma_pardinum",
    "scientificName": "Tricholoma pardinum",
    "dexNumber": "#029",
    "name": {
      "ca": "Fredolic bord / Griset bord",
      "es": "Tricoloma atigrado / Negrilla bastarda",
      "en": "Poison Knight / Tiger Tricholoma"
    },
    "edibility": "toxic",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/tricholoma_pardinum.png",
    "isGourmet": false,
    "season": {
      "ca": "Ago – Set – Oct – Nov",
      "es": "Ago – Sep – Oct – Nov",
      "en": "Aug – Sep – Oct – Nov"
    },
    "elevation": "800m – 1900m",
    "hostTrees": [
      "fagus_sylvatica",
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "morchella_esculenta",
    "scientificName": "Morchella esculenta",
    "dexNumber": "#030",
    "name": {
      "ca": "Múrgola / Rabassola",
      "es": "Colmenilla / Morchela común",
      "en": "Morel / Yellow Morel"
    },
    "edibility": "excellent",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/morchella_esculenta.png",
    "isGourmet": false,
    "season": {
      "ca": "Març – Abr – Maig",
      "es": "Mar – Abr – May",
      "en": "Mar – Apr – May"
    },
    "elevation": "200m – 1600m",
    "hostTrees": [
      "fagus_sylvatica"
    ],
    "toxicLookalike": {
      "id": "gyromitra_esculenta",
      "scientificName": "Gyromitra esculenta",
      "name": {
        "ca": "Bolet de greix / Falsa múrgola",
        "es": "Bonete / Falsa colmenilla",
        "en": "False Morel / Brain Mushroom"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La Múrgola té cel·les o alvèols regulars com una bresca d'abelles, mentre que el Bolet de greix té plecs cerebriformes ondulats com un cervell i és mortal.",
        "es": "La Múrgola té cel·les o alvèols regulars com una bresca d'abelles, mentre que el Bolet de greix té plecs cerebriformes ondulats com un cervell i és mortal.",
        "en": "La Múrgola té cel·les o alvèols regulars com una bresca d'abelles, mentre que el Bolet de greix té plecs cerebriformes ondulats com un cervell i és mortal."
      }
    }
  },
  {
    "id": "agaricus_campestris",
    "scientificName": "Agaricus campestris",
    "dexNumber": "#031",
    "name": {
      "ca": "Xampinyó silvestre / Guisana",
      "es": "Champiñón silvestre / Campestre",
      "en": "Field Mushroom / Meadow Mushroom"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/agaricus_campestris.png",
    "isGourmet": false,
    "season": {
      "ca": "Maig – Juny – Set – Oct – Nov",
      "es": "May – Jun – Sep – Oct – Nov",
      "en": "May – Jun – Sep – Oct – Nov"
    },
    "elevation": "50m – 1600m",
    "hostTrees": [
      "pinus_halepensis"
    ],
    "toxicLookalike": {
      "id": "amanita_virosa",
      "scientificName": "Amanita virosa",
      "name": {
        "ca": "Farinera pudent / Àngel de la mort",
        "es": "Cicuta fétida / Ángel de la muerte",
        "en": "Destroying Angel"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La mortal Farinera pudent té làmines blanques pures i volva en sac; el Xampinyó silvestre té làmines rosades a marró xocolata i mai té volva.",
        "es": "La mortal Farinera pudent té làmines blanques pures i volva en sac; el Xampinyó silvestre té làmines rosades a marró xocolata i mai té volva.",
        "en": "La mortal Farinera pudent té làmines blanques pures i volva en sac; el Xampinyó silvestre té làmines rosades a marró xocolata i mai té volva."
      }
    }
  },
  {
    "id": "agaricus_xanthodermus",
    "scientificName": "Agaricus xanthodermus",
    "dexNumber": "#032",
    "name": {
      "ca": "Xampinyó groguenc / Xampinyó pudent",
      "es": "Champiñón amarilleante / Nocivo",
      "en": "Yellow-staining Mushroom"
    },
    "edibility": "toxic",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/agaricus_xanthodermus.png",
    "isGourmet": false,
    "season": {
      "ca": "Maig – Juny – Set – Oct – Nov",
      "es": "May – Jun – Sep – Oct – Nov",
      "en": "May – Jun – Sep – Oct – Nov"
    },
    "elevation": "50m – 1400m",
    "hostTrees": [
      "pinus_halepensis"
    ],
    "toxicLookalike": null
  },
  {
    "id": "psathyrella_candolleana",
    "scientificName": "Candolleomyces candolleanus",
    "dexNumber": "#033",
    "name": {
      "ca": "Candol·lea / Psatirel·la de Candolle",
      "es": "Psatirela de Candolle",
      "en": "Candolle\\"
    },
    "edibility": "sense_valor",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/psathyrella_candolleana.png",
    "isGourmet": false,
    "season": {
      "ca": "Abr – Maig – Juny – Set – Oct – Nov",
      "es": "Abr – May – Jun – Sep – Oct – Nov",
      "en": "Apr – May – Jun – Sep – Oct – Nov"
    },
    "elevation": "50m – 1500m",
    "hostTrees": [
      "pinus_halepensis"
    ],
    "toxicLookalike": null
  },
  {
    "id": "suillus_granulatus",
    "scientificName": "Suillus granulatus",
    "dexNumber": "#034",
    "name": {
      "ca": "Molleric clapat / Pinetell de pi blanc",
      "es": "Boleto granulado / Hongo de pino",
      "en": "Weeping Bolete"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/suillus_granulatus.png",
    "isGourmet": false,
    "season": {
      "ca": "Maig – Juny – Set – Oct – Nov – Des",
      "es": "May – Jun – Sep – Oct – Nov – Dic",
      "en": "May – Jun – Sep – Oct – Nov – Dec"
    },
    "elevation": "50m – 1200m",
    "hostTrees": [
      "pinus_halepensis",
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "hygrophorus_russula",
    "scientificName": "Hygrophorus russula",
    "dexNumber": "#035",
    "name": {
      "ca": "Carlet / Escarlet",
      "es": "Higróforo escarlata / Carleta",
      "en": "False Chanterelle / Russula Woodwax"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/hygrophorus_russula.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "100m – 1100m",
    "hostTrees": [
      "quercus_ilex",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "boletus_aereus",
    "scientificName": "Boletus aereus",
    "dexNumber": "#036",
    "name": {
      "ca": "Cep negre / Sureny fosc",
      "es": "Boleto negro / Hongo negro",
      "en": "Dark Bolete / Queen Bolete"
    },
    "edibility": "excellent",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/boletus_aereus.png",
    "isGourmet": true,
    "season": {
      "ca": "Juny – Jul – Set – Oct – Nov",
      "es": "Jun – Jul – Sep – Oct – Nov",
      "en": "Jun – Jul – Sep – Oct – Nov"
    },
    "elevation": "100m – 1000m",
    "hostTrees": [
      "quercus_ilex",
      "castanea_sativa"
    ],
    "toxicLookalike": {
      "id": "rubroboletus_satanas",
      "scientificName": "Rubroboletus satanas",
      "name": {
        "ca": "Mataparent de Satanàs",
        "es": "Boleto de Satanás",
        "en": "Satan\\"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El Mataparent de Satanàs té barret blanquinós o grisenc, porus vermells i blaveja ràpidament al tall; el Cep negre té barret bronze o xocolata fosc, porus blancs o groguencs i carn immutable que no blaveja mai.",
        "es": "El Mataparent de Satanàs té barret blanquinós o grisenc, porus vermells i blaveja ràpidament al tall; el Cep negre té barret bronze o xocolata fosc, porus blancs o groguencs i carn immutable que no blaveja mai.",
        "en": "El Mataparent de Satanàs té barret blanquinós o grisenc, porus vermells i blaveja ràpidament al tall; el Cep negre té barret bronze o xocolata fosc, porus blancs o groguencs i carn immutable que no blaveja mai."
      }
    }
  },
  {
    "id": "coprinus_comatus",
    "scientificName": "Coprinus comatus",
    "dexNumber": "#037",
    "name": {
      "ca": "Bolet de tinta / Braguer de vaca",
      "es": "Coprino barbudo / Barbuda",
      "en": "Shaggy Mane / Lawyer\\"
    },
    "edibility": "comestible",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/coprinus_comatus.png",
    "isGourmet": false,
    "season": {
      "ca": "Abr – Maig – Set – Oct – Nov",
      "es": "Abr – May – Sep – Oct – Nov",
      "en": "Apr – May – Sep – Oct – Nov"
    },
    "elevation": "50m – 1700m",
    "hostTrees": [],
    "toxicLookalike": null
  },
  {
    "id": "lactarius_torminosus",
    "scientificName": "Lactarius torminosus",
    "dexNumber": "#038",
    "name": {
      "ca": "Cabra / Rovelló bord",
      "es": "Falso níscalo peludo / Lactario de abedul",
      "en": "Woolly Milkcap"
    },
    "edibility": "toxic",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/lactarius_torminosus.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "400m – 1800m",
    "hostTrees": [
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "amanita_pantherina",
    "scientificName": "Amanita pantherina",
    "dexNumber": "#039",
    "name": {
      "ca": "Pantera / Reig bord pigat",
      "es": "Amanita pantera",
      "en": "Panther Cap"
    },
    "edibility": "toxic",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/amanita_pantherina.png",
    "isGourmet": false,
    "season": {
      "ca": "Juny – Jul – Set – Oct – Nov",
      "es": "Jun – Jul – Sep – Oct – Nov",
      "en": "Jun – Jul – Sep – Oct – Nov"
    },
    "elevation": "100m – 1500m",
    "hostTrees": [
      "pinus_halepensis",
      "quercus_ilex"
    ],
    "toxicLookalike": null
  },
  {
    "id": "gyromitra_esculenta",
    "scientificName": "Gyromitra esculenta",
    "dexNumber": "#040",
    "name": {
      "ca": "Bolet de greix / Falsa múrgola",
      "es": "Bonete / Falsa colmenilla",
      "en": "False Morel / Brain Mushroom"
    },
    "edibility": "mortal",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/gyromitra_esculenta.png",
    "isGourmet": false,
    "season": {
      "ca": "Març – Abr – Maig",
      "es": "Mar – Abr – May",
      "en": "Mar – Apr – May"
    },
    "elevation": "600m – 2000m",
    "hostTrees": [
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "hygrophorus_personii",
    "scientificName": "Hygrophorus personii",
    "dexNumber": "#041",
    "name": {
      "ca": "Llenega d\\",
      "es": "Higróforo de encina / Llanega de encina",
      "en": "Dark Woodwax / Oak Woodwax"
    },
    "edibility": "comestible",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/hygrophorus_personii.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "100m – 1200m",
    "hostTrees": [
      "quercus_ilex"
    ],
    "toxicLookalike": {
      "id": "amanita_phalloides",
      "scientificName": "Amanita phalloides",
      "name": {
        "ca": "Farinera borda",
        "es": "Oronja verde / Cicuta verde",
        "en": "Death Cap"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La mortal Farinera borda té làmines lliures, anell i volva membranosa en sac; la Llenega d'alzina té làmines gruixudes ceroses i beina viscosa tigrada sense volva.",
        "es": "La mortal Farinera borda té làmines lliures, anell i volva membranosa en sac; la Llenega d'alzina té làmines gruixudes ceroses i beina viscosa tigrada sense volva.",
        "en": "La mortal Farinera borda té làmines lliures, anell i volva membranosa en sac; la Llenega d'alzina té làmines gruixudes ceroses i beina viscosa tigrada sense volva."
      }
    }
  },
  {
    "id": "pleurotus_eryngii",
    "scientificName": "Pleurotus eryngii",
    "dexNumber": "#042",
    "name": {
      "ca": "Gírgola de panical / Bolet de card",
      "es": "Seta de cardo",
      "en": "King Oyster / King Trumpet"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/pleurotus_eryngii.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov – Des – Març – Abr – Maig",
      "es": "Sep – Oct – Nov – Dic – Mar – Abr – May",
      "en": "Sep – Oct – Nov – Dec – Mar – Apr – May"
    },
    "elevation": "100m – 1400m",
    "hostTrees": [],
    "toxicLookalike": null
  },
  {
    "id": "lactarius_semisanguifluus",
    "scientificName": "Lactarius semisanguifluus",
    "dexNumber": "#043",
    "name": {
      "ca": "Pinetell de sang / Rovelló de pi negre",
      "es": "Níscalo semirrojo / Falso níscalo de sangre",
      "en": "Highland Saffron Milkcap / Half-blood Milkcap"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/lactarius_semisanguifluus.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov",
      "es": "Sep – Oct – Nov",
      "en": "Sep – Oct – Nov"
    },
    "elevation": "800m – 2000m",
    "hostTrees": [
      "pinus_sylvestris"
    ],
    "toxicLookalike": {
      "id": "lactarius_torminosus",
      "scientificName": "Lactarius torminosus",
      "name": {
        "ca": "Cabra / Rovelló bord",
        "es": "Falso níscalo peludo / Lactario de abedul",
        "en": "Woolly Milkcap"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "La Cabra té marge barbós molt pelut i làtex blanc acre immutable; el Pinetell de sang té marge llis i làtex vinós.",
        "es": "La Cabra té marge barbós molt pelut i làtex blanc acre immutable; el Pinetell de sang té marge llis i làtex vinós.",
        "en": "La Cabra té marge barbós molt pelut i làtex blanc acre immutable; el Pinetell de sang té marge llis i làtex vinós."
      }
    }
  },
  {
    "id": "suillus_bellinii",
    "scientificName": "Suillus bellinii",
    "dexNumber": "#044",
    "name": {
      "ca": "Pinet de pi bord / Molleric de Bellini",
      "es": "Boleto de Bellini / Hongo de pino blanco",
      "en": "Bellini\\"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/suillus_bellinii.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "0m – 800m",
    "hostTrees": [
      "pinus_halepensis"
    ],
    "toxicLookalike": null
  },
  {
    "id": "tricholoma_equestre",
    "scientificName": "Tricholoma equestre",
    "dexNumber": "#045",
    "name": {
      "ca": "Groguet / Verderol / Bolet dels cavallers",
      "es": "Seta de los caballeros / Verderol",
      "en": "Yellow Knight / Man on Horseback"
    },
    "edibility": "toxic",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/tricholoma_equestre.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "200m – 1600m",
    "hostTrees": [
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "amanita_virosa",
    "scientificName": "Amanita virosa",
    "dexNumber": "#046",
    "name": {
      "ca": "Farinera pudent / Àngel de la mort",
      "es": "Cicuta fétida / Ángel de la muerte",
      "en": "Destroying Angel"
    },
    "edibility": "mortal",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/amanita_virosa.png",
    "isGourmet": false,
    "season": {
      "ca": "Jul – Ago – Set – Oct",
      "es": "Jul – Ago – Sep – Oct",
      "en": "Jul – Aug – Sep – Oct"
    },
    "elevation": "700m – 1900m",
    "hostTrees": [
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "galerina_marginata",
    "scientificName": "Galerina marginata",
    "dexNumber": "#047",
    "name": {
      "ca": "Galerina mortal / Galerina vironosa",
      "es": "Galerina mortal / Galerina rebordeada",
      "en": "Funeral Bell / Deadly Galerina"
    },
    "edibility": "mortal",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/galerina_marginata.png",
    "isGourmet": false,
    "season": {
      "ca": "Ago – Set – Oct – Nov",
      "es": "Ago – Sep – Oct – Nov",
      "en": "Aug – Sep – Oct – Nov"
    },
    "elevation": "400m – 1900m",
    "hostTrees": [
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "tuber_melanosporum",
    "scientificName": "Tuber melanosporum",
    "dexNumber": "#048",
    "name": {
      "ca": "Tòfona negra / Trufa negra",
      "es": "Trufa negra",
      "en": "Black Truffle / Périgord Truffle"
    },
    "edibility": "excellent",
    "rarityTier": 5,
    "rarityName": {
      "ca": "Llegendari",
      "es": "Legendario",
      "en": "Legendary"
    },
    "image": "/assets/mushrooms/tuber_melanosporum.png",
    "isGourmet": true,
    "season": {
      "ca": "Nov – Des – Gen – Feb – Març",
      "es": "Nov – Dic – Ene – Feb – Mar",
      "en": "Nov – Dec – Jan – Feb – Mar"
    },
    "elevation": "400m – 1400m",
    "hostTrees": [
      "quercus_ilex"
    ],
    "toxicLookalike": {
      "id": "scleroderma_citrinum",
      "scientificName": "Scleroderma citrinum",
      "name": {
        "ca": "Patac d\\",
        "es": "Falsa trufa / Patata de tierra",
        "en": "Common Earthball / Pigskin Poison Puffball"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "La Tòfona negra és subterrània i aromàtica amb gleba negrosa marbrada per venes blanques; el Patac d'ase té pell dura berrugosa groga i gleba negra homogènia sense vetes blanques.",
        "es": "La Tòfona negra és subterrània i aromàtica amb gleba negrosa marbrada per venes blanques; el Patac d'ase té pell dura berrugosa groga i gleba negra homogènia sense vetes blanques.",
        "en": "La Tòfona negra és subterrània i aromàtica amb gleba negrosa marbrada per venes blanques; el Patac d'ase té pell dura berrugosa groga i gleba negra homogènia sense vetes blanques."
      }
    }
  },
  {
    "id": "infundibulicybe_geotropa",
    "scientificName": "Infundibulicybe geotropa",
    "dexNumber": "#049",
    "name": {
      "ca": "Pampa / Candela de bruixa / Cap d\\",
      "es": "Platera / Cabeza de fraile",
      "en": "Trooping Funnel / Monk\\"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/infundibulicybe_geotropa.png",
    "isGourmet": true,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "300m – 1500m",
    "hostTrees": [
      "quercus_ilex",
      "pinus_sylvestris"
    ],
    "toxicLookalike": {
      "id": "clitocybe_nebularis",
      "scientificName": "Clitocybe nebularis",
      "name": {
        "ca": "Pampa de boira / Boira / Burell",
        "es": "Pardilla / Seta de brezo",
        "en": "Clouded Agaric / Clouded Funnel"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "La Pampa és de color beix ocre amb un mamelló central prominent (umbó); la Pampa de boira té un barret pla o deprimit gris cendra sense mamelló i és tòxica/indigesta.",
        "es": "La Pampa és de color beix ocre amb un mamelló central prominent (umbó); la Pampa de boira té un barret pla o deprimit gris cendra sense mamelló i és tòxica/indigesta.",
        "en": "La Pampa és de color beix ocre amb un mamelló central prominent (umbó); la Pampa de boira té un barret pla o deprimit gris cendra sense mamelló i és tòxica/indigesta."
      }
    }
  },
  {
    "id": "boletus_pinophilus",
    "scientificName": "Boletus pinophilus",
    "dexNumber": "#050",
    "name": {
      "ca": "Cep vermell / Cep de pi / Sureny vermell",
      "es": "Boleto pinícola / Hongo de pino",
      "en": "Pine Bolete"
    },
    "edibility": "excellent",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/boletus_pinophilus.png",
    "isGourmet": true,
    "season": {
      "ca": "Ago – Set – Oct – Nov",
      "es": "Ago – Sep – Oct – Nov",
      "en": "Aug – Sep – Oct – Nov"
    },
    "elevation": "800m – 2100m",
    "hostTrees": [
      "pinus_sylvestris",
      "fagus_sylvatica"
    ],
    "toxicLookalike": {
      "id": "tylopilus_felleus",
      "scientificName": "Tylopilus felleus",
      "name": {
        "ca": "Mataparent amarg / Cep amarg",
        "es": "Boleto amargo / Hongo amargo",
        "en": "Bitter Bolete"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El Mataparent amarg té porus rosats de madur i reticle fosc marcat al peu, a diferència dels porus groguencs-oliva del Cep vermell, i és immensament amarg.",
        "es": "El Mataparent amarg té porus rosats de madur i reticle fosc marcat al peu, a diferència dels porus groguencs-oliva del Cep vermell, i és immensament amarg.",
        "en": "El Mataparent amarg té porus rosats de madur i reticle fosc marcat al peu, a diferència dels porus groguencs-oliva del Cep vermell, i és immensament amarg."
      }
    }
  },
  {
    "id": "neoboletus_luridiformis",
    "scientificName": "Neoboletus luridiformis",
    "dexNumber": "#051",
    "name": {
      "ca": "Mataparent de peu vermell / Bolet de bou",
      "es": "Boleto de pie rojo",
      "en": "Scarletina Bolete / Dotted-Stem Bolete"
    },
    "edibility": "comestible",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/neoboletus_luridiformis.png",
    "isGourmet": true,
    "season": {
      "ca": "Jul – Ago – Set – Oct – Nov",
      "es": "Jul – Ago – Sep – Oct – Nov",
      "en": "Jul – Aug – Sep – Oct – Nov"
    },
    "elevation": "600m – 1900m",
    "hostTrees": [
      "fagus_sylvatica",
      "pinus_sylvestris"
    ],
    "toxicLookalike": {
      "id": "rubroboletus_satanas",
      "scientificName": "Rubroboletus satanas",
      "name": {
        "ca": "Mataparent de Satanàs",
        "es": "Boleto de Satanás",
        "en": "Satan\\"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El molt tòxic Mataparent de Satanàs té barret blanquinós-grisenc i reticle vermell al peu; el Mataparent de peu vermell té barret marró xocolata vellutat i peu pigallat de puntets sense xarxa.",
        "es": "El molt tòxic Mataparent de Satanàs té barret blanquinós-grisenc i reticle vermell al peu; el Mataparent de peu vermell té barret marró xocolata vellutat i peu pigallat de puntets sense xarxa.",
        "en": "El molt tòxic Mataparent de Satanàs té barret blanquinós-grisenc i reticle vermell al peu; el Mataparent de peu vermell té barret marró xocolata vellutat i peu pigallat de puntets sense xarxa."
      }
    }
  },
  {
    "id": "boletus_reticulatus",
    "scientificName": "Boletus reticulatus",
    "dexNumber": "#052",
    "name": {
      "ca": "Cep d\\",
      "es": "Boleto reticulado / Boleto de verano",
      "en": "Summer Bolete"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/boletus_reticulatus.png",
    "isGourmet": true,
    "season": {
      "ca": "Maig – Juny – Jul – Ago – Set – Oct",
      "es": "May – Jun – Jul – Ago – Sep – Oct",
      "en": "May – Jun – Jul – Aug – Sep – Oct"
    },
    "elevation": "200m – 1400m",
    "hostTrees": [
      "quercus_ilex",
      "castanea_sativa"
    ],
    "toxicLookalike": {
      "id": "tylopilus_felleus",
      "scientificName": "Tylopilus felleus",
      "name": {
        "ca": "Mataparent amarg / Cep amarg",
        "es": "Boleto amargo / Hongo amargo",
        "en": "Bitter Bolete"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El Mataparent amarg té porus rosats de madur i un reticle marró fosc amb malles amples al peu; a diferència del reticle blanc fi del Cep d'estiu, és insuportablement amarg.",
        "es": "El Mataparent amarg té porus rosats de madur i un reticle marró fosc amb malles amples al peu; a diferència del reticle blanc fi del Cep d'estiu, és insuportablement amarg.",
        "en": "El Mataparent amarg té porus rosats de madur i un reticle marró fosc amb malles amples al peu; a diferència del reticle blanc fi del Cep d'estiu, és insuportablement amarg."
      }
    }
  },
  {
    "id": "hygrophorus_marzuolus",
    "scientificName": "Hygrophorus marzuolus",
    "dexNumber": "#053",
    "name": {
      "ca": "Marçot / Bolet de març",
      "es": "Marzuelo / Seta de marzo",
      "en": "March Mushroom / Snowdrop Woodwax"
    },
    "edibility": "excellent",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/hygrophorus_marzuolus.png",
    "isGourmet": true,
    "season": {
      "ca": "Feb – Març – Abr",
      "es": "Feb – Mar – Abr",
      "en": "Feb – Mar – Apr"
    },
    "elevation": "700m – 1800m",
    "hostTrees": [
      "pinus_sylvestris",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "russula_aurea",
    "scientificName": "Russula aurea",
    "dexNumber": "#054",
    "name": {
      "ca": "Llora daurada / Cuaverda daurada",
      "es": "Rúsula dorada",
      "en": "Gilded Brittlegill"
    },
    "edibility": "excellent",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/russula_aurea.png",
    "isGourmet": true,
    "season": {
      "ca": "Juny – Jul – Ago – Set – Oct",
      "es": "Jun – Jul – Ago – Sep – Oct",
      "en": "Jun – Jul – Aug – Sep – Oct"
    },
    "elevation": "300m – 1500m",
    "hostTrees": [
      "castanea_sativa",
      "quercus_ilex"
    ],
    "toxicLookalike": {
      "id": "russula_emetica",
      "scientificName": "Russula emetica",
      "name": {
        "ca": "Rússula emètica / Cua cremosa",
        "es": "Rúsula emética",
        "en": "The Sickener / Vomiting Russula"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "La Llora daurada té làmines i peu d'un groc daurat lluminós i carn dolça; la Rússula emètica té làmines i peu d'un blanc immaculat i és extremadament picant i tòxica.",
        "es": "La Llora daurada té làmines i peu d'un groc daurat lluminós i carn dolça; la Rússula emètica té làmines i peu d'un blanc immaculat i és extremadament picant i tòxica.",
        "en": "La Llora daurada té làmines i peu d'un groc daurat lluminós i carn dolça; la Rússula emètica té làmines i peu d'un blanc immaculat i és extremadament picant i tòxica."
      }
    }
  },
  {
    "id": "craterellus_tubaeformis",
    "scientificName": "Craterellus tubaeformis",
    "dexNumber": "#055",
    "name": {
      "ca": "Rossinyol de bosc / Trompeta groga / Rossinyolic",
      "es": "Trompeta amarilla / Angula de monte",
      "en": "Trumpet Chanterelle / Yellowfoot"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/craterellus_tubaeformis.png",
    "isGourmet": true,
    "season": {
      "ca": "Set – Oct – Nov – Des",
      "es": "Sep – Oct – Nov – Dic",
      "en": "Sep – Oct – Nov – Dec"
    },
    "elevation": "400m – 1800m",
    "hostTrees": [
      "pinus_sylvestris",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "agaricus_arvensis",
    "scientificName": "Agaricus arvensis",
    "dexNumber": "#056",
    "name": {
      "ca": "Bola de neu / Xampinyó d\\",
      "es": "Champiñón anisado / Bola de nieve",
      "en": "Horse Mushroom"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/agaricus_arvensis.png",
    "isGourmet": true,
    "season": {
      "ca": "Maig – Juny – Set – Oct – Nov",
      "es": "May – Jun – Sep – Oct – Nov",
      "en": "May – Jun – Sep – Oct – Nov"
    },
    "elevation": "200m – 1700m",
    "hostTrees": [
      "pinus_sylvestris"
    ],
    "toxicLookalike": {
      "id": "amanita_virosa",
      "scientificName": "Amanita virosa",
      "name": {
        "ca": "Farinera pudent / Àngel de la mort",
        "es": "Cicuta fétida / Ángel de la muerte",
        "en": "Destroying Angel"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La mortal Farinera pudent és completament blanca, té peu llanós-esquamós, anell penjant i volva en sac; la Bola de neu mai té volva i les làmines enfosqueixen a xocolata.",
        "es": "La mortal Farinera pudent és completament blanca, té peu llanós-esquamós, anell penjant i volva en sac; la Bola de neu mai té volva i les làmines enfosqueixen a xocolata.",
        "en": "La mortal Farinera pudent és completament blanca, té peu llanós-esquamós, anell penjant i volva en sac; la Bola de neu mai té volva i les làmines enfosqueixen a xocolata."
      }
    }
  },
  {
    "id": "hydnum_rufescens",
    "scientificName": "Hydnum rufescens",
    "dexNumber": "#057",
    "name": {
      "ca": "Llengua de bou rogenca / Llengua de gat",
      "es": "Lengua de vaca rojiza / Gamuza rojiza",
      "en": "Terracotta Hedgehog / Rufous Wood Hedgehog"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/hydnum_rufescens.png",
    "isGourmet": true,
    "season": {
      "ca": "Set – Oct – Nov – Des",
      "es": "Sep – Oct – Nov – Dic",
      "en": "Sep – Oct – Nov – Dec"
    },
    "elevation": "300m – 1700m",
    "hostTrees": [
      "pinus_sylvestris",
      "pinus_halepensis"
    ],
    "toxicLookalike": null
  },
  {
    "id": "scleroderma_citrinum",
    "scientificName": "Scleroderma citrinum",
    "dexNumber": "#058",
    "name": {
      "ca": "Patac d\\",
      "es": "Falsa trufa / Patata de tierra",
      "en": "Common Earthball / Pigskin Poison Puffball"
    },
    "edibility": "toxic",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/scleroderma_citrinum.png",
    "isGourmet": false,
    "season": {
      "ca": "Ago – Set – Oct – Nov – Des",
      "es": "Ago – Sep – Oct – Nov – Dic",
      "en": "Aug – Sep – Oct – Nov – Dec"
    },
    "elevation": "200m – 1600m",
    "hostTrees": [
      "quercus_ilex",
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "clitocybe_nebularis",
    "scientificName": "Clitocybe nebularis",
    "dexNumber": "#059",
    "name": {
      "ca": "Pampa de boira / Boira / Burell",
      "es": "Pardilla / Seta de brezo",
      "en": "Clouded Agaric / Clouded Funnel"
    },
    "edibility": "toxic",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/clitocybe_nebularis.png",
    "isGourmet": false,
    "season": {
      "ca": "Oct – Nov – Des",
      "es": "Oct – Nov – Dic",
      "en": "Oct – Nov – Dec"
    },
    "elevation": "300m – 1600m",
    "hostTrees": [
      "fagus_sylvatica",
      "pinus_sylvestris"
    ],
    "toxicLookalike": {
      "id": "entoloma_sinuatum",
      "scientificName": "Entoloma sinuatum",
      "name": {
        "ca": "Pèrfid",
        "es": "Pérfida / Engañosa",
        "en": "Livid Pinkgill"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El molt tòxic Pèrfid té làmines groguenques a rosades escotades i olor de farina rància; la Pampa de boira té làmines blanquinoses decurrents i forta olor de fenc/boira.",
        "es": "El molt tòxic Pèrfid té làmines groguenques a rosades escotades i olor de farina rància; la Pampa de boira té làmines blanquinoses decurrents i forta olor de fenc/boira.",
        "en": "El molt tòxic Pèrfid té làmines groguenques a rosades escotades i olor de farina rància; la Pampa de boira té làmines blanquinoses decurrents i forta olor de fenc/boira."
      }
    }
  },
  {
    "id": "tylopilus_felleus",
    "scientificName": "Tylopilus felleus",
    "dexNumber": "#060",
    "name": {
      "ca": "Mataparent amarg / Cep amarg",
      "es": "Boleto amargo / Hongo amargo",
      "en": "Bitter Bolete"
    },
    "edibility": "sense_valor",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/tylopilus_felleus.png",
    "isGourmet": false,
    "season": {
      "ca": "Jul – Ago – Set – Oct – Nov",
      "es": "Jul – Ago – Sep – Oct – Nov",
      "en": "Jul – Aug – Sep – Oct – Nov"
    },
    "elevation": "500m – 1700m",
    "hostTrees": [
      "pinus_sylvestris",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "suillellus_luridus",
    "scientificName": "Suillellus luridus",
    "dexNumber": "#061",
    "name": {
      "ca": "Mataparent de bou / Fals bolet de bou",
      "es": "Boleto lúrido",
      "en": "Lurid Bolete"
    },
    "edibility": "toxic",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/suillellus_luridus.png",
    "isGourmet": false,
    "season": {
      "ca": "Juny – Jul – Ago – Set – Oct – Nov",
      "es": "Jun – Jul – Ago – Sep – Oct – Nov",
      "en": "Jun – Jul – Aug – Sep – Oct – Nov"
    },
    "elevation": "200m – 1500m",
    "hostTrees": [
      "quercus_ilex",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "russula_emetica",
    "scientificName": "Russula emetica",
    "dexNumber": "#062",
    "name": {
      "ca": "Rússula emètica / Cua cremosa",
      "es": "Rúsula emética",
      "en": "The Sickener / Vomiting Russula"
    },
    "edibility": "toxic",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/russula_emetica.png",
    "isGourmet": false,
    "season": {
      "ca": "Jul – Ago – Set – Oct – Nov",
      "es": "Jul – Ago – Sep – Oct – Nov",
      "en": "Jul – Aug – Sep – Oct – Nov"
    },
    "elevation": "500m – 1900m",
    "hostTrees": [
      "pinus_sylvestris"
    ],
    "toxicLookalike": null
  },
  {
    "id": "cyclocybe_aegerita",
    "scientificName": "Cyclocybe aegerita",
    "dexNumber": "#063",
    "name": {
      "ca": "Pollancró / Bolet de pollanc",
      "es": "Seta de chopo",
      "en": "Poplar Fieldcap / Chestnut Mushroom"
    },
    "edibility": "excellent",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/cyclocybe_aegerita.png",
    "isGourmet": true,
    "season": {
      "ca": "Abr – Maig – Juny – Jul – Ago – Set – Oct – Nov",
      "es": "Abr – May – Jun – Jul – Ago – Sep – Oct – Nov",
      "en": "Apr – May – Jun – Jul – Aug – Sep – Oct – Nov"
    },
    "elevation": "50m – 1200m",
    "hostTrees": [
      "castanea_sativa",
      "fagus_sylvatica"
    ],
    "toxicLookalike": {
      "id": "galerina_marginata",
      "scientificName": "Galerina marginata",
      "name": {
        "ca": "Galerina mortal / Galerina vironosa",
        "es": "Galerina mortal / Galerina rebordeada",
        "en": "Funeral Bell / Deadly Galerina"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La mortal Galerina marginata creix sobre fusta de coníferes i és més petita; el Pollancró creix en feixos densos sobre fusta de ribera (pollancres, salzes) amb barrets carnosos.",
        "es": "La mortal Galerina marginata creix sobre fusta de coníferes i és més petita; el Pollancró creix en feixos densos sobre fusta de ribera (pollancres, salzes) amb barrets carnosos.",
        "en": "La mortal Galerina marginata creix sobre fusta de coníferes i és més petita; el Pollancró creix en feixos densos sobre fusta de ribera (pollancres, salzes) amb barrets carnosos."
      }
    }
  },
  {
    "id": "tricholoma_portentosum",
    "scientificName": "Tricholoma portentosum",
    "dexNumber": "#064",
    "name": {
      "ca": "Fredolic d\\",
      "es": "Capuchina / Negrilla anisada",
      "en": "Charbonnier / Sooty Knight"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/tricholoma_portentosum.png",
    "isGourmet": true,
    "season": {
      "ca": "Set – Oct – Nov – Des",
      "es": "Sep – Oct – Nov – Dic",
      "en": "Sep – Oct – Nov – Dec"
    },
    "elevation": "700m – 1900m",
    "hostTrees": [
      "pinus_sylvestris"
    ],
    "toxicLookalike": {
      "id": "tricholoma_saponaceum",
      "scientificName": "Tricholoma saponaceum",
      "name": {
        "ca": "Bolet de sabó / Fredolic de sabó",
        "es": "Tricoloma jabonoso / Seta de jabón",
        "en": "Soapy Knight / Soap-scented Toadstool"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El tòxic Bolet de sabó fa una forta olor de detergent de rentar la roba i té la base del peu tenyida de rosa; el Fredolic d'anís fa una suau olor de farina i anís.",
        "es": "El tòxic Bolet de sabó fa una forta olor de detergent de rentar la roba i té la base del peu tenyida de rosa; el Fredolic d'anís fa una suau olor de farina i anís.",
        "en": "El tòxic Bolet de sabó fa una forta olor de detergent de rentar la roba i té la base del peu tenyida de rosa; el Fredolic d'anís fa una suau olor de farina i anís."
      }
    }
  },
  {
    "id": "tuber_aestivum",
    "scientificName": "Tuber aestivum",
    "dexNumber": "#065",
    "name": {
      "ca": "Tòfona d\\",
      "es": "Trufa de verano / Trufa de San Juan",
      "en": "Summer Truffle / Burgundy Truffle"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/tuber_aestivum.png",
    "isGourmet": true,
    "season": {
      "ca": "Maig – Juny – Jul – Ago – Set",
      "es": "May – Jun – Jul – Ago – Sep",
      "en": "May – Jun – Jul – Aug – Sep"
    },
    "elevation": "200m – 1300m",
    "hostTrees": [
      "quercus_ilex",
      "fagus_sylvatica"
    ],
    "toxicLookalike": {
      "id": "scleroderma_citrinum",
      "scientificName": "Scleroderma citrinum",
      "name": {
        "ca": "Patac d\\",
        "es": "Falsa trufa / Patata de tierra",
        "en": "Common Earthball / Pigskin Poison Puffball"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El tòxic Patac d'ase té pell groguenca amb berrugues fosques i interior negre massís sense venes; la Tòfona d'estiu té peridi negre amb berrugues piramidals i interior avellana vetejat de blanc.",
        "es": "El tòxic Patac d'ase té pell groguenca amb berrugues fosques i interior negre massís sense venes; la Tòfona d'estiu té peridi negre amb berrugues piramidals i interior avellana vetejat de blanc.",
        "en": "El tòxic Patac d'ase té pell groguenca amb berrugues fosques i interior negre massís sense venes; la Tòfona d'estiu té peridi negre amb berrugues piramidals i interior avellana vetejat de blanc."
      }
    }
  },
  {
    "id": "amanita_rubescens",
    "scientificName": "Amanita rubescens",
    "dexNumber": "#066",
    "name": {
      "ca": "Cua de cavall / Vinosa",
      "es": "Amanita vinosa / Roscón",
      "en": "The Blusher"
    },
    "edibility": "comestible",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/amanita_rubescens.png",
    "isGourmet": true,
    "season": {
      "ca": "Maig – Juny – Jul – Ago – Set – Oct – Nov",
      "es": "May – Jun – Jul – Ago – Sep – Oct – Nov",
      "en": "May – Jun – Jul – Aug – Sep – Oct – Nov"
    },
    "elevation": "100m – 1500m",
    "hostTrees": [
      "castanea_sativa",
      "quercus_ilex",
      "fagus_sylvatica",
      "pinus_sylvestris"
    ],
    "toxicLookalike": {
      "id": "amanita_citrina",
      "scientificName": "Amanita citrina",
      "name": {
        "ca": "Farinera groga / Reig de la mort fals",
        "es": "Oronja de limón / Amanita citrina",
        "en": "False Death Cap"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "La Farinera groga fa forta olor de patata crua i té un bulb marginat molt abrupte sense enrogiment; la Vinosa no té bulb marginat i s'enrogeix ràpidament amb l'edat.",
        "es": "La Farinera groga fa forta olor de patata crua i té un bulb marginat molt abrupte sense enrogiment; la Vinosa no té bulb marginat i s'enrogeix ràpidament amb l'edat.",
        "en": "La Farinera groga fa forta olor de patata crua i té un bulb marginat molt abrupte sense enrogiment; la Vinosa no té bulb marginat i s'enrogeix ràpidament amb l'edat."
      }
    }
  },
  {
    "id": "imleria_badia",
    "scientificName": "Imleria badia",
    "dexNumber": "#067",
    "name": {
      "ca": "Bolet de baia / Cep de baia / Molleric de baia",
      "es": "Boleto bayo",
      "en": "Bay Bolete"
    },
    "edibility": "excellent",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/imleria_badia.png",
    "isGourmet": true,
    "season": {
      "ca": "Ago – Set – Oct – Nov",
      "es": "Ago – Sep – Oct – Nov",
      "en": "Aug – Sep – Oct – Nov"
    },
    "elevation": "400m – 1800m",
    "hostTrees": [
      "pinus_sylvestris",
      "castanea_sativa"
    ],
    "toxicLookalike": {
      "id": "tylopilus_felleus",
      "scientificName": "Tylopilus felleus",
      "name": {
        "ca": "Mataparent amarg / Cep amarg",
        "es": "Boleto amargo / Hongo amargo",
        "en": "Bitter Bolete"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "El Mataparent amarg té porus de color rosa brut en madurar i un reticle marró fosc molt evident al peu; el Bolet de baia té porus grocs que blavegen i peu fibrós sense reticle.",
        "es": "El Mataparent amarg té porus de color rosa brut en madurar i un reticle marró fosc molt evident al peu; el Bolet de baia té porus grocs que blavegen i peu fibrós sense reticle.",
        "en": "El Mataparent amarg té porus de color rosa brut en madurar i un reticle marró fosc molt evident al peu; el Bolet de baia té porus grocs que blavegen i peu fibrós sense reticle."
      }
    }
  },
  {
    "id": "lactarius_vinosus",
    "scientificName": "Lactarius vinosus",
    "dexNumber": "#068",
    "name": {
      "ca": "Rovelló de sang vinosa / Lleterola vinosa",
      "es": "Níscalo de sangre vinosa",
      "en": "Wine-Staining Milkcap"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/lactarius_vinosus.png",
    "isGourmet": true,
    "season": {
      "ca": "Set – Oct – Nov – Des",
      "es": "Sep – Oct – Nov – Dic",
      "en": "Sep – Oct – Nov – Dec"
    },
    "elevation": "100m – 1000m",
    "hostTrees": [
      "pinus_halepensis"
    ],
    "toxicLookalike": {
      "id": "paxillus_involutus",
      "scientificName": "Paxillus involutus",
      "name": {
        "ca": "Paxil·le / Fals rovelló d\\",
        "es": "Paxilo enrollado / Falso níscalo pardo",
        "en": "Brown Roll-Rim / Poison Paxillus"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "El mortal Paxil·le té marge fortament enrotllat, làmines que s'oxiden a bru en fregar-les i no té làtex; el Rovelló de sang vinosa raja làtex color vi negre fosc o remolatxa.",
        "es": "El mortal Paxil·le té marge fortament enrotllat, làmines que s'oxiden a bru en fregar-les i no té làtex; el Rovelló de sang vinosa raja làtex color vi negre fosc o remolatxa.",
        "en": "El mortal Paxil·le té marge fortament enrotllat, làmines que s'oxiden a bru en fregar-les i no té làtex; el Rovelló de sang vinosa raja làtex color vi negre fosc o remolatxa."
      }
    }
  },
  {
    "id": "cantharellus_subpruinosus",
    "scientificName": "Cantharellus subpruinosus",
    "dexNumber": "#069",
    "name": {
      "ca": "Rossinyol blanc / Rossinyol de roure",
      "es": "Rebozuelo blanco / Cantarela pruinosa",
      "en": "Frosted Chanterelle / Pale Oak Chanterelle"
    },
    "edibility": "excellent",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/cantharellus_subpruinosus.png",
    "isGourmet": true,
    "season": {
      "ca": "Maig – Juny – Set – Oct – Nov",
      "es": "May – Jun – Sep – Oct – Nov",
      "en": "May – Jun – Sep – Oct – Nov"
    },
    "elevation": "150m – 1200m",
    "hostTrees": [
      "quercus_ilex",
      "castanea_sativa"
    ],
    "toxicLookalike": {
      "id": "omphalotus_olearius",
      "scientificName": "Omphalotus olearius",
      "name": {
        "ca": "Gírgola d\\",
        "es": "Seta de olivo",
        "en": "Jack-o\\"
      },
      "dangerLevel": "toxic",
      "keyDifference": {
        "ca": "La molt tòxica Gírgola d'olivera creix en troncs i té làmines veritables fines i atapeïdes; el Rossinyol blanc creix a terra sota roures i té plecs venosos gruixuts amb barret pruïnós.",
        "es": "La molt tòxica Gírgola d'olivera creix en troncs i té làmines veritables fines i atapeïdes; el Rossinyol blanc creix a terra sota roures i té plecs venosos gruixuts amb barret pruïnós.",
        "en": "La molt tòxica Gírgola d'olivera creix en troncs i té làmines veritables fines i atapeïdes; el Rossinyol blanc creix a terra sota roures i té plecs venosos gruixuts amb barret pruïnós."
      }
    }
  },
  {
    "id": "leccinum_aurantiacum",
    "scientificName": "Leccinum aurantiacum",
    "dexNumber": "#070",
    "name": {
      "ca": "Cep vermelló / Pell de taronja / Bolet vermell",
      "es": "Boleto anaranjado / Boleto de álamo",
      "en": "Orange Oak Bolete / Red-capped Scaber Stalk"
    },
    "edibility": "comestible",
    "rarityTier": 2,
    "rarityName": {
      "ca": "Poc freqüent",
      "es": "Poco frecuente",
      "en": "Uncommon"
    },
    "image": "/assets/mushrooms/leccinum_aurantiacum.png",
    "isGourmet": true,
    "season": {
      "ca": "Juny – Jul – Ago – Set – Oct",
      "es": "Jun – Jul – Ago – Sep – Oct",
      "en": "Jun – Jul – Aug – Sep – Oct"
    },
    "elevation": "400m – 1700m",
    "hostTrees": [
      "quercus_ilex",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "hypholoma_fasciculare",
    "scientificName": "Hypholoma fasciculare",
    "dexNumber": "#071",
    "name": {
      "ca": "Bolet de pi amarg / Fals pollancró / Bolet de sofre",
      "es": "Hifoloma de láminas verdes / Falso chopo amargo",
      "en": "Sulphur Tuft / Clustered Woodlover"
    },
    "edibility": "toxic",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Molt comú",
      "es": "Muy común",
      "en": "Very common"
    },
    "image": "/assets/mushrooms/hypholoma_fasciculare.png",
    "isGourmet": false,
    "season": {
      "ca": "Abr – Maig – Juny – Jul – Ago – Set – Oct – Nov – Des",
      "es": "Abr – May – Jun – Jul – Ago – Sep – Oct – Nov – Dic",
      "en": "Apr – May – Jun – Jul – Aug – Sep – Oct – Nov – Dec"
    },
    "elevation": "50m – 1800m",
    "hostTrees": [
      "pinus_sylvestris",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "paxillus_involutus",
    "scientificName": "Paxillus involutus",
    "dexNumber": "#072",
    "name": {
      "ca": "Paxil·le / Fals rovelló d\\",
      "es": "Paxilo enrollado / Falso níscalo pardo",
      "en": "Brown Roll-Rim / Poison Paxillus"
    },
    "edibility": "mortal",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/paxillus_involutus.png",
    "isGourmet": false,
    "season": {
      "ca": "Ago – Set – Oct – Nov",
      "es": "Ago – Sep – Oct – Nov",
      "en": "Aug – Sep – Oct – Nov"
    },
    "elevation": "200m – 1800m",
    "hostTrees": [
      "pinus_sylvestris",
      "fagus_sylvatica"
    ],
    "toxicLookalike": null
  },
  {
    "id": "amanita_citrina",
    "scientificName": "Amanita citrina",
    "dexNumber": "#073",
    "name": {
      "ca": "Farinera groga / Reig de la mort fals",
      "es": "Oronja de limón / Amanita citrina",
      "en": "False Death Cap"
    },
    "edibility": "sense_valor",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Comú",
      "es": "Común",
      "en": "Common"
    },
    "image": "/assets/mushrooms/amanita_citrina.png",
    "isGourmet": false,
    "season": {
      "ca": "Ago – Set – Oct – Nov – Des",
      "es": "Ago – Sep – Oct – Nov – Dic",
      "en": "Aug – Sep – Oct – Nov – Dec"
    },
    "elevation": "100m – 1400m",
    "hostTrees": [
      "quercus_ilex",
      "pinus_sylvestris",
      "fagus_sylvatica"
    ],
    "toxicLookalike": {
      "id": "amanita_phalloides",
      "scientificName": "Amanita phalloides",
      "name": {
        "ca": "Farinera borda",
        "es": "Oronja verde / Cicuta verde",
        "en": "Death Cap"
      },
      "dangerLevel": "deadly",
      "keyDifference": {
        "ca": "La Farinera groga té un bulb marginat molt abrupte i fa forta olor de patata crua; la mortal Farinera borda té volva membranosa en sac lliure, barret verd oliva fibril·lós i olor agradable de mel de jove.",
        "es": "La Farinera groga té un bulb marginat molt abrupte i fa forta olor de patata crua; la mortal Farinera borda té volva membranosa en sac lliure, barret verd oliva fibril·lós i olor agradable de mel de jove.",
        "en": "La Farinera groga té un bulb marginat molt abrupte i fa forta olor de patata crua; la mortal Farinera borda té volva membranosa en sac lliure, barret verd oliva fibril·lós i olor agradable de mel de jove."
      }
    }
  },
  {
    "id": "tricholoma_saponaceum",
    "scientificName": "Tricholoma saponaceum",
    "dexNumber": "#074",
    "name": {
      "ca": "Bolet de sabó / Fredolic de sabó",
      "es": "Tricoloma jabonoso / Seta de jabón",
      "en": "Soapy Knight / Soap-scented Toadstool"
    },
    "edibility": "toxic",
    "rarityTier": 1,
    "rarityName": {
      "ca": "Molt comú",
      "es": "Muy común",
      "en": "Very common"
    },
    "image": "/assets/mushrooms/tricholoma_saponaceum.png",
    "isGourmet": false,
    "season": {
      "ca": "Set – Oct – Nov – Des",
      "es": "Sep – Oct – Nov – Dic",
      "en": "Sep – Oct – Nov – Dec"
    },
    "elevation": "200m – 1800m",
    "hostTrees": [
      "fagus_sylvatica",
      "pinus_sylvestris",
      "quercus_ilex"
    ],
    "toxicLookalike": null
  },
  {
    "id": "inocybe_erubescens",
    "scientificName": "Inocybe erubescens",
    "dexNumber": "#075",
    "name": {
      "ca": "Inòcibe de Patouillard",
      "es": "Inocibe de Patouillard / Bruja roja",
      "en": "Deadly Fibrecap / Red-staining Inocybe"
    },
    "edibility": "mortal",
    "rarityTier": 3,
    "rarityName": {
      "ca": "Rar",
      "es": "Raro",
      "en": "Rare"
    },
    "image": "/assets/mushrooms/inocybe_erubescens.png",
    "isGourmet": false,
    "season": {
      "ca": "Abr – Maig – Juny – Jul",
      "es": "Abr – May – Jun – Jul",
      "en": "Apr – May – Jun – Jul"
    },
    "elevation": "200m – 1400m",
    "hostTrees": [
      "fagus_sylvatica",
      "quercus_ilex"
    ],
    "toxicLookalike": null
  }
];
