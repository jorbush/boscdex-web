const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('website/src/data/raw_species.json', 'utf8'));
const seed = fs.readFileSync('boscdex/lib/data/database/seed/seed_data.dart', 'utf8');

const gourmetSet = new Set([
  'tuber_melanosporum',
  'infundibulicybe_geotropa',
  'boletus_pinophilus',
  'neoboletus_luridiformis',
  'boletus_reticulatus',
  'hygrophorus_marzuolus',
  'russula_aurea',
  'craterellus_tubaeformis',
  'agaricus_arvensis',
  'hydnum_rufescens',
  'boletus_edulis',
  'boletus_aereus',
  'amanita_caesarea',
  'cantharellus_cibarius',
  'craterellus_cornucopioides',
  'craterellus_lutescens',
  'cyclocybe_aegerita',
  'tricholoma_portentosum',
  'tuber_aestivum',
  'amanita_rubescens',
  'imleria_badia',
  'lactarius_vinosus',
  'cantharellus_subpruinosus',
  'leccinum_aurantiacum'
]);

const treePairs = [...seed.matchAll(/boletId:\s*Value\('([^']+)'\),\s*arbreId:\s*Value\('([^']+)'\)/g)];
const boletTrees = {};
treePairs.forEach(p => {
  if (!boletTrees[p[1]]) boletTrees[p[1]] = [];
  if (!boletTrees[p[1]].includes(p[2])) boletTrees[p[1]].push(p[2]);
});

const lookalikePairs = [...seed.matchAll(/boletId:\s*Value\('([^']+)'\),\s*lookalikeBoletId:\s*Value\('([^']+)'\),\s*comparisonNotes:\s*Value\(\s*'([\s\S]*?)'\s*\)/g)];
const lookalikesMap = {};
lookalikePairs.forEach(lp => {
  lookalikesMap[lp[1]] = {
    lookalikeId: lp[2],
    notes: lp[3].replace(/\\'/g, "'")
  };
});

const monthNames = {
  ca: ["", "Gen", "Feb", "Març", "Abr", "Maig", "Juny", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
  es: ["", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  en: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};

function formatSeason(str, lang) {
  try {
    const months = JSON.parse(str);
    if (!Array.isArray(months) || months.length === 0) return "Tardor";
    return months.map(m => monthNames[lang][m] || m).join(" – ");
  } catch(e) {
    return "Tardor";
  }
}

const rarityNames = {
  comu: { ca: "Comú", es: "Común", en: "Common" },
  molt_comu: { ca: "Molt comú", es: "Muy común", en: "Very common" },
  poc_frequent: { ca: "Poc freqüent", es: "Poco frecuente", en: "Uncommon" },
  rar: { ca: "Rar", es: "Raro", en: "Rare" },
  rara: { ca: "Rar", es: "Raro", en: "Rare" },
  llegendari: { ca: "Llegendari", es: "Legendario", en: "Legendary" }
};

const processed = raw.map(m => {
  const isGourmet = gourmetSet.has(m.id);
  const hostTrees = boletTrees[m.id] || [];
  const lookalike = lookalikesMap[m.id];
  const dexStr = "#" + String(m.dexNumber).padStart(3, "0");

  let lookalikeObj = null;
  if (lookalike) {
    const target = raw.find(r => r.id === lookalike.lookalikeId);
    if (target) {
      lookalikeObj = {
        id: target.id,
        scientificName: target.scientificName,
        name: target.name,
        dangerLevel: target.edibility === "mortal" ? "deadly" : "toxic",
        keyDifference: {
          ca: lookalike.notes,
          es: lookalike.notes,
          en: lookalike.notes
        }
      };
    }
  }

  return {
    id: m.id,
    scientificName: m.scientificName,
    dexNumber: dexStr,
    name: m.name,
    edibility: m.edibility,
    rarityTier: m.rarityTier === "llegendari" ? 5 : m.rarityTier === "rar" || m.rarityTier === "rara" ? 3 : m.rarityTier === "poc_frequent" ? 2 : 1,
    rarityName: rarityNames[m.rarityTier] || { ca: "Comú", es: "Común", en: "Common" },
    image: `/assets/mushrooms/${m.id}.png`,
    isGourmet,
    season: {
      ca: formatSeason(m.fruitingSeason, "ca"),
      es: formatSeason(m.fruitingSeason, "es"),
      en: formatSeason(m.fruitingSeason, "en")
    },
    elevation: m.altitude,
    hostTrees,
    toxicLookalike: lookalikeObj
  };
});

const content = `export interface Mushroom {
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
      ca: 'L\\'arbre rei dels boletaires al Pirineu i Prepirineu. Escorça ataronjada a la part alta del tronc. Hàbitat predilecte dels millors rovellons i ceps de tardor.',
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
      en: 'Sacred Mediterranean evergreen oak with rich leaf litter. Primary mycorrhizal guardian of Caesar\\'s Mushroom and Black Truffle.',
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
      ca: 'Arbre de fulla caduca dentada i fruit en pelló punxant. Present a zones silícies del Montseny i les Guilleries. Productor mític de ceps i rossinyols d\\'octubre.',
      es: 'Árbol caducifolio de hoja dentada. Presente en Montseny y Guilleries. Productor mítico de boletus y rebozuelos.',
      en: 'Deciduous tree with toothed leaves and spiky burrs. Thrives on acidic soils of Montseny and Guilleries, producing legendary autumn boletes and chanterelles.',
    },
  },
];

export const MUSHROOMS: Mushroom[] = ` + JSON.stringify(processed, null, 2) + `;\n`;

fs.writeFileSync('website/src/data/species.ts', content);
console.log('Successfully wrote species.ts with ' + processed.length + ' species!');
