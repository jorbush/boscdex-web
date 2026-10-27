export type Locale = 'ca' | 'es' | 'en';

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    species: string;
    safety: string;
    iosGuide: string;
    docs: string;
    download: string;
    github: string;
  };
  hero: {
    badge: string;
    tagline: string;
    title: string;
    titleHighlight: string;
    description: string;
    downloadApk: string;
    iosGuideBtn: string;
    viewGithub: string;
    exploreDex: string;
    stats: {
      species: string;
      speciesLabel: string;
      trees: string;
      treesLabel: string;
      lookalikes: string;
      lookalikesLabel: string;
      offline: string;
      offlineLabel: string;
    };
  };
  interactivePreview: {
    title: string;
    subtitle: string;
    tabs: {
      album: string;
      scanner: string;
      journal: string;
      safety: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      tag: string;
      description: string;
      color: string;
    }>;
  };
  safety: {
    title: string;
    subtitle: string;
    badge: string;
    disclaimerTitle: string;
    disclaimerText: string;
    algorithmTitle: string;
    algorithmText: string;
    zeroTolerance: string;
    zeroToleranceText: string;
    pairsTitle: string;
    pairsSubtitle: string;
  };
  dex: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filters: {
      all: string;
      edible: string;
      gourmet: string;
      toxic: string;
      trees: string;
    };
    showingCount: string;
    loadMore: string;
    season: string;
    habitat: string;
    hostTree: string;
    rarity: string;
  };
  iosGuide: {
    badge: string;
    title: string;
    subtitle: string;
    whyTitle: string;
    whyText: string;
    stepsTitle: string;
    steps: Array<{
      step: string;
      title: string;
      desc: string;
    }>;
    expiryWarningTitle: string;
    expiryWarningText: string;
    expirySolution: string;
  };
  download: {
    title: string;
    subtitle: string;
    arm64Title: string;
    arm64Desc: string;
    arm64Badge: string;
    universalTitle: string;
    universalDesc: string;
    universalBadge: string;
    btnDownload: string;
    githubRelease: string;
    buildFromSource: string;
    requirements: string;
  };
  docs: {
    title: string;
    subtitle: string;
    edgeMlTitle: string;
    edgeMlDesc: string;
    offlineDbTitle: string;
    offlineDbDesc: string;
    ethicsTitle: string;
    ethicsDesc: string;
  };
  footer: {
    disclaimer: string;
    rights: string;
    openSource: string;
  };
}

export const translations: Record<Locale, Translation> = {
  ca: {
    meta: {
      title: 'Boscdex 🍄 — La Pokédex micològica del boletaire de Catalunya',
      description: 'Guia de camp 100% offline per a boletaires a Catalunya amb 75 espècies de bolets, IA a l\'extrem (Edge ML), mapa retro de Catalunya i alertes de seguretat.',
    },
    nav: {
      features: 'Funcions',
      species: 'Catàleg',
      safety: 'Seguretat',
      iosGuide: 'Guia iOS',
      docs: 'Docs & IA',
      download: 'Descarrega APK',
      github: 'GitHub',
    },
    hero: {
      badge: '100% OFFLINE • PRIVACITAT TOTAL • CODI OBERT',
      tagline: 'La Pokédex micològica de Catalunya',
      title: 'El Pokédex del boletaire per explorar el',
      titleHighlight: 'bosc català',
      description: 'Boscdex és una guia de camp gamificada i 100% offline dissenyada per a boletaires i excursionistes. Combina l\'emoció de col·lecció d\'un Pokédex (75 bolets, fites, nivells de raresa, insígnies) amb protocols crítics de seguretat al bosc (alertes de confusions mortals) i ecologia simbiòtica amb arbres indicadors.',
      downloadApk: 'Descarrega APK (Android)',
      iosGuideBtn: 'Com instal·lar a iOS (iPhone)',
      viewGithub: 'Codi a GitHub',
      exploreDex: 'Explorar els 75 bolets',
      stats: {
        species: '75',
        speciesLabel: 'Bolets autòctons catalogats',
        trees: '5',
        treesLabel: 'Arbres indicadors',
        lookalikes: '28',
        lookalikesLabel: 'Parelles de risc',
        offline: '100%',
        offlineLabel: 'Sense connexió ni núvol',
      },
    },
    interactivePreview: {
      title: 'L\'aplicació en acció',
      subtitle: 'Explora les 3 seccions reals de Boscdex (Boscdex, Escanejar, Diari)',
      tabs: {
        album: '🕹️ 1. Boscdex (Catàleg)',
        scanner: '📸 2. Escanejar (Edge-AI)',
        journal: '📓 3. Diari (Llista & Mapa)',
        safety: '⚠️ Alerta de Seguretat',
      },
    },
    features: {
      title: 'Per què Boscdex?',
      subtitle: 'Dissenyat a Catalunya per protegir les teves clapes i fer de cada sortida una aventura',
      items: [
        {
          icon: '🔌',
          title: '100% Offline & Privat',
          tag: 'Zero Núvol',
          description: 'Funciona sense cobertura ni dades a la vall més remota. Les coordenades GPS i les fotos de les teves clapes secretes mai surten del teu dispositiu.',
          color: 'forest',
        },
        {
          icon: '⚡',
          title: 'IA Edge-ML Local (~30ms)',
          tag: 'Sense Servidors',
          description: 'Models de visió per computador MobileNetV3 quantitzats en INT8 que s\'executen directament sobre la CPU/NPU del teu mòbil en temps real.',
          color: 'arcade-cyan',
        },
        {
          icon: '🎮',
          title: 'Catàleg de 75 Bolets Autòctons',
          tag: 'Gamificació Pokédex',
          description: '75 espècies de bolets amb siluetes fosques per desbloquejar, 5 nivells de raresa (des de Comú fins a Llegendari) i 14 insígnies d\'assoliment.',
          color: 'quest-gold',
        },
        {
          icon: '🌲',
          title: 'Arbres Indicadors Simbiòtics',
          tag: 'Ecologia Forestal',
          description: 'Aprèn a llegir el bosc: el pi roig amb els rovellons, les alzines amb els ous de reig, i les fagedes amb els millors ceps.',
          color: 'forest-pine',
        },
        {
          icon: '🛑',
          title: 'Porta de Seguretat Estricta',
          tag: 'Prevenció de Bolets Mortals',
          description: 'Regla de tolerància zero: si una espècie mortal (com la farinera borda) té més del 10% de probabilitat, s\'activa l\'alerta d\'alts riscos automàticament.',
          color: 'arcade-red',
        },
        {
          icon: '🗺️',
          title: 'Mapa Pixel Art de Catalunya',
          tag: '16-bit Retro HUD',
          description: 'Mapa regional interactiu amb pins d\'espècies pixelats, registre d\'altitud i quadern de camp il·lustrat amb les teves pròpies captures.',
          color: 'arcade-purple',
        },
      ],
    },
    safety: {
      title: 'La Seguretat Primer',
      subtitle: 'La micologia exigeix màxim rigor. Boscdex incorpora una arquitectura de seguretat pionera',
      badge: 'ALERTA DE CONFUSIÓ PERILLOSA',
      disclaimerTitle: 'Avís Micològic Obligatori',
      disclaimerText: 'Cap intel·ligència artificial pot substituir l\'ull expert d\'un micòleg humà. La ingesta de bolets tòxics com Amanita phalloides pot ser letal. No consumeixis mai cap bolet sense una validació en persona d\'un professional.',
      algorithmTitle: 'Algoritme SafetyGateService',
      algorithmText: 'Avaluació automàtica en 4 capes: filtre de toxicitat mortal al 10%, avís d\'incertesa morfològica per sota del 70%, visualitzador de dobles perillosos i llista de comprovació botànica obligatòria.',
      zeroTolerance: 'Regla de Tolerància Zero (≥ 10%)',
      zeroToleranceText: 'Si qualsevol de les 3 primeres prediccions del model és una espècie letal (Farinera borda, Cicuta blanca, Farinera pudent, Cortinari de muntanya, Galerina mortal o Falsa múrgola) amb una certesa mínima del 10%, l\'estat s\'eleva a PERILL absolut.',
      pairsTitle: 'Exemples de Confusions Crítiques a Catalunya',
      pairsSubtitle: '28 parelles catalogades amb claus diagnòstiques directes',
    },
    dex: {
      title: 'El Catàleg Boscdex',
      subtitle: 'Descobreix la col·lecció completa dels 75 bolets autòctons catalogats a l\'aplicació',
      searchPlaceholder: 'Cerca per nom comú o científic (ex: Rovelló, Boletus, Amanita)...',
      filters: {
        all: 'Tots els bolets',
        edible: 'Comestibles',
        gourmet: 'Gourmet ⭐',
        toxic: 'Tòxics / Mortals ☠️',
        trees: 'Arbres socis 🌲',
      },
      showingCount: 'Mostrant {count} bolets',
      loadMore: 'Carregar més bolets',
      season: 'Temporada',
      habitat: 'Hàbitat',
      hostTree: 'Arbre soci',
      rarity: 'Raresa',
    },
    iosGuide: {
      badge: 'COMUNITAT APPLE & IPHONE',
      title: 'Com instal·lar Boscdex a iOS (iPhone)',
      subtitle: 'En tractar-se d\'un projecte de codi obert sense publicar a l\'App Store, pots instal·lar-lo directament al teu iPhone utilitzant un Mac i Xcode de manera 100% gratuïta.',
      whyTitle: 'Per què no hi ha un fitxer directe per a iOS com l\'APK d\'Android?',
      whyText: 'Apple no permet instal·lar fitxers lliurement des del navegador (com els APK a Android). A iOS, les apps obertes s\'han de compilar i signar amb un compte d\'Apple ID mitjançant Xcode o eines de sideloading.',
      stepsTitle: 'Passos per instal·lar amb Mac & Xcode',
      steps: [
        {
          step: '1',
          title: 'Requisits previs',
          desc: 'Necessites un Mac amb Xcode instal·lat (gratuït a la Mac App Store), un iPhone amb iOS 15.0 o superior, un cable USB i el teu Apple ID habitual.',
        },
        {
          step: '2',
          title: 'Clonar el repositori',
          desc: 'Obre el Terminal del teu Mac i descarrega el projecte: git clone https://github.com/jorbush/boscdex.git',
        },
        {
          step: '3',
          title: 'Obrir a Xcode',
          desc: 'Obre el fitxer del projecte d\'iOS a Xcode: boscdex/ios/Runner.xcworkspace',
        },
        {
          step: '4',
          title: 'Configurar la signatura gratuïta',
          desc: 'A Xcode, ves a Runner > Signing & Capabilities. Selecciona el teu "Personal Team" (iniciant sessió amb el teu Apple ID) i canvia el Bundle Identifier si cal (ex: com.teunom.boscdex).',
        },
        {
          step: '5',
          title: 'Activar el Mode Desenvolupador a l\'iPhone',
          desc: 'A iOS 16+: Ves a Paràmetres > Privadesa i seguretat > Mode de desenvolupador i activa\'l.',
        },
        {
          step: '6',
          title: 'Executar i instal·lar (▶)',
          desc: 'Connecta el teu iPhone al Mac, selecciona\'l com a dispositiu destí a la barra superior d\'Xcode i prem el botó Run (▶). L\'app s\'instal·larà al teu telèfon!',
        },
        {
          step: '7',
          title: 'Confiar en el perfil de desenvolupador',
          desc: 'Al teu iPhone, ves a Paràmetres > General > Gestió de dispositius i VPN > Prem sobre el teu correu i selecciona "Confiar". Ja pots obrir Boscdex!',
        },
      ],
      expiryWarningTitle: '⚠️ Important: El certificat gratuït d\'Apple caduca cada 7 dies',
      expiryWarningText: 'La política de seguretat d\'Apple per a comptes gratuïts de desenvolupador (sense pagar els 99$/any de l\'Apple Developer Program) fa que el certificat de signatura caduqui al cap d\'1 setmana exacta.',
      expirySolution: 'Quan passin 7 dies i l\'app no s\'obri, NO perdràs cap dada ni cap bolet descobert. Només has de tornar a connectar l\'iPhone al Mac i prémer "Run" a Xcode de nou (o utilitzar eines com AltStore o Sideloadly que ho renoven automàticament per Wi-Fi). Si disposes d\'un compte de pagament d\'Apple Developer, la signatura dura 365 dies.',
    },
    download: {
      title: 'Descarrega Boscdex',
      subtitle: '100% de codi obert i gratuït. Instal·la l\'APK directament al teu dispositiu Android o compila per a iOS',
      arm64Title: 'APK ARM64-v8a (Recomanat)',
      arm64Desc: 'Optimitzat per a telèfons moderns de 64 bits. Mida lleugera (~45 MB), rendiment màxim amb TFLite NPU.',
      arm64Badge: '⭐ Recomanat',
      universalTitle: 'APK Universal',
      universalDesc: 'Compatible amb tots els dispositius Android (32 i 64 bits). Mida (~102 MB).',
      universalBadge: 'Universal',
      btnDownload: 'Descarregar APK',
      githubRelease: 'Releases oficials a GitHub',
      buildFromSource: 'Compilació des del codi font',
      requirements: 'Requisits: Android 8.0 (API 26) o superior • iOS 15.0 o superior (via Xcode/Mac)',
    },
    docs: {
      title: 'Documentació & Arquitectura',
      subtitle: 'Com està construït Boscdex sota el capó',
      edgeMlTitle: 'Intel·ligència Artificial Edge ML (75 Classes)',
      edgeMlDesc: 'Entrenat amb milers d\'espècimens catalans i mediterranis. Model MobileNetV3 amb capçal desacoblat per a una classificació ràpida de les 75 espècies en <30ms.',
      offlineDbTitle: 'Base de Dades SQLite Reactiva (Drift)',
      offlineDbDesc: 'Emmagatzematge completament local. Esquema relacional amb taules per a bolets, arbres, avistaments geolocalitzats, insígnies i historial de comparacions.',
      ethicsTitle: 'Codi Ètic del Boletaire',
      ethicsDesc: 'No arrenquis bolets sense saber què són. Fes servir un ganivet esmolat per tallar arran de terra o extreu la base suaument per identificar i tapa el forat. Respecta el miceli.',
    },
    footer: {
      disclaimer: 'Avís Legal: Aquesta aplicació té finalitats exclusivament educatives i de consulta. No consumeixis mai cap bolet sense confirmació prèvia d\'un micòleg humà certificat.',
      rights: '© 2026 Boscdex. Creat per i per a la comunitat boletaire de Catalunya.',
      openSource: 'Projecte de Codi Obert sota llicència lliure. Contribueix a GitHub!',
    },
  },
  es: {
    meta: {
      title: 'Boscdex 🍄 — La Pokédex micológica del buscador de setas de Cataluña',
      description: 'Guía de campo 100% offline para seteros en Cataluña con 75 especies de setas, IA en el dispositivo (Edge ML), mapa retro de Cataluña y alertas de seguridad.',
    },
    nav: {
      features: 'Funciones',
      species: 'Catálogo',
      safety: 'Seguridad',
      iosGuide: 'Guía iOS',
      docs: 'Docs & IA',
      download: 'Descargar APK',
      github: 'GitHub',
    },
    hero: {
      badge: '100% OFFLINE • PRIVACIDAD TOTAL • CÓDIGO ABIERTO',
      tagline: 'La Pokédex micológica de Cataluña',
      title: 'La Pokédex del buscador de setas para explorar el',
      titleHighlight: 'bosque catalán',
      description: 'Boscdex es una guía de campo gamificada y 100% offline diseñada para recolectores de setas y senderistas. Combina la emoción de coleccionar de una Pokédex (75 setas, hitos, niveles de rareza, insignias) con protocolos críticos de seguridad en el bosque (alertas de confusiones mortales) y ecología simbiótica con árboles indicadores.',
      downloadApk: 'Descargar APK (Android)',
      iosGuideBtn: 'Cómo instalar en iOS (iPhone)',
      viewGithub: 'Código en GitHub',
      exploreDex: 'Explorar las 75 setas',
      stats: {
        species: '75',
        speciesLabel: 'Setas autóctonas catalogadas',
        trees: '5',
        treesLabel: 'Árboles indicadores',
        lookalikes: '28',
        lookalikesLabel: 'Parejas de riesgo',
        offline: '100%',
        offlineLabel: 'Sin conexión ni nube',
      },
    },
    interactivePreview: {
      title: 'La aplicación en acción',
      subtitle: 'Explora las 3 secciones reales de Boscdex (Boscdex, Escanear, Diario)',
      tabs: {
        album: '🕹️ 1. Boscdex (Catálogo)',
        scanner: '📸 2. Escanear (Edge-AI)',
        journal: '📓 3. Diario (Lista y Mapa)',
        safety: '⚠️ Alerta de Seguridad',
      },
    },
    features: {
      title: '¿Por qué Boscdex?',
      subtitle: 'Diseñado en Cataluña para proteger tus lugares secretos y convertir cada salida en una aventura',
      items: [
        {
          icon: '🔌',
          title: '100% Offline y Privado',
          tag: 'Cero Nube',
          description: 'Funciona sin cobertura ni datos en el valle más remoto. Las coordenadas GPS y las fotos de tus seteros secretos nunca salen de tu dispositivo.',
          color: 'forest',
        },
        {
          icon: '⚡',
          title: 'IA Edge-ML Local (~30ms)',
          tag: 'Sin Servidores',
          description: 'Modelos de visión por computador MobileNetV3 cuantizados en INT8 que se ejecutan directamente en la CPU/NPU de tu móvil en tiempo real.',
          color: 'arcade-cyan',
        },
        {
          icon: '🎮',
          title: 'Catálogo de 75 Setas Autóctonas',
          tag: 'Gamificación Pokédex',
          description: '75 especies de setas con siluetas oscuras por desbloquear, 5 niveles de rareza (desde Común hasta Legendario) y 14 insignias de logros.',
          color: 'quest-gold',
        },
        {
          icon: '🌲',
          title: 'Árboles Indicadores Simbióticos',
          tag: 'Ecología Forestal',
          description: 'Aprende a leer el bosque: el pino silvestre con los níscalos, las encinas con los oronjas (*Amanita caesarea*) y los hayedos con los mejores boletus.',
          color: 'forest-pine',
        },
        {
          icon: '🛑',
          title: 'Puerta de Seguridad Estricta',
          tag: 'Prevención de Setas Mortales',
          description: 'Regla de tolerancia cero: si una especie mortal (como la oronja verde / cicuta mortal) tiene más del 10% de probabilidad, se activa la alerta máxima.',
          color: 'arcade-red',
        },
        {
          icon: '🗺️',
          title: 'Mapa Pixel Art de Cataluña',
          tag: '16-bit Retro HUD',
          description: 'Mapa regional interactivo con pines de especies pixelados, registro de altitud y diario de campo ilustrado con tus propias capturas.',
          color: 'arcade-purple',
        },
      ],
    },
    safety: {
      title: 'La Seguridad Primero',
      subtitle: 'La micología exige el máximo rigor. Boscdex incorpora una arquitectura de seguridad pionera',
      badge: 'ALERTA DE CONFUSIÓN PELIGROSA',
      disclaimerTitle: 'Aviso Micológico Obligatorio',
      disclaimerText: 'Ninguna inteligencia artificial puede sustituir el ojo experto de un micólogo humano. La ingesta de setas tóxicas como Amanita phalloides puede ser letal. Nunca consumas ninguna seta sin una validación presencial de un profesional.',
      algorithmTitle: 'Algoritmo SafetyGateService',
      algorithmText: 'Evaluación automática en 4 capas: filtro de toxicidad mortal al 10%, aviso de incertidumbre morfológica por debajo del 70%, visualizador de dobles peligrosos y lista de comprobación botánica obligatoria.',
      zeroTolerance: 'Regla de Tolerancia Cero (≥ 10%)',
      zeroToleranceText: 'Si cualquiera de las 3 primeras predicciones del modelo es una especie letal (Amanita phalloides, Amanita verna, Amanita virosa, Cortinarius orellanus, Galerina marginata o Gyromitra esculenta) con una certeza mínima del 10%, el estado se eleva a PELIGRO absoluto.',
      pairsTitle: 'Ejemplos de Confusiones Críticas en Cataluña',
      pairsSubtitle: '28 parejas catalogadas con claves diagnósticas directas',
    },
    dex: {
      title: 'El Catálogo Boscdex',
      subtitle: 'Descubre la colección completa de las 75 setas autóctonas catalogadas en la aplicación',
      searchPlaceholder: 'Buscar por nombre común o científico (ej: Níscalo, Boletus, Amanita)...',
      filters: {
        all: 'Todas las setas',
        edible: 'Comestibles',
        gourmet: 'Gourmet ⭐',
        toxic: 'Tóxicas / Mortales ☠️',
        trees: 'Árboles socios 🌲',
      },
      showingCount: 'Mostrando {count} setas',
      loadMore: 'Cargar más setas',
      season: 'Temporada',
      habitat: 'Hábitat',
      hostTree: 'Árbol socio',
      rarity: 'Rareza',
    },
    iosGuide: {
      badge: 'COMUNIDAD APPLE & IPHONE',
      title: 'Cómo instalar Boscdex en iOS (iPhone)',
      subtitle: 'Al tratarse de un proyecto de código abierto sin publicar en la App Store, puedes instalarlo directamente en tu iPhone usando un Mac y Xcode de forma 100% gratuita.',
      whyTitle: '¿Por qué no hay un archivo directo para iOS como el APK de Android?',
      whyText: 'Apple no permite instalar archivos libremente desde el navegador (como los APK en Android). En iOS, las apps abiertas se deben compilar y firmar con una cuenta de Apple ID mediante Xcode o herramientas de sideloading.',
      stepsTitle: 'Pasos para instalar con Mac y Xcode',
      steps: [
        {
          step: '1',
          title: 'Requisitos previos',
          desc: 'Necesitas un Mac con Xcode instalado (gratuito en la Mac App Store), un iPhone con iOS 15.0 o superior, un cable USB y tu Apple ID habitual.',
        },
        {
          step: '2',
          title: 'Clonar el repositorio',
          desc: 'Abre el Terminal en tu Mac y descarga el proyecto: git clone https://github.com/jorbush/boscdex.git',
        },
        {
          step: '3',
          title: 'Abrir en Xcode',
          desc: 'Abre el archivo del proyecto de iOS en Xcode: boscdex/ios/Runner.xcworkspace',
        },
        {
          step: '4',
          title: 'Configurar la firma gratuita',
          desc: 'En Xcode, ve a Runner > Signing & Capabilities. Selecciona tu "Personal Team" (iniciando sesión con tu Apple ID) y cambia el Bundle Identifier si es necesario (ej: com.tunombre.boscdex).',
        },
        {
          step: '5',
          title: 'Activar Modo Desarrollador en el iPhone',
          desc: 'En iOS 16+: Ve a Ajustes > Privacidad y seguridad > Modo de desarrollador y actívalo.',
        },
        {
          step: '6',
          title: 'Ejecutar e instalar (▶)',
          desc: 'Conecta tu iPhone al Mac, selecciónalo como dispositivo de destino en Xcode y pulsa el botón Run (▶). ¡La app se instalará en tu teléfono!',
        },
        {
          step: '7',
          title: 'Confiar en el perfil de desarrollador',
          desc: 'En tu iPhone, ve a Ajustes > General > Gestión de dispositivos y VPN > Pulsa sobre tu correo y selecciona "Confiar". ¡Ya puedes abrir Boscdex!',
        },
      ],
      expiryWarningTitle: '⚠️ Importante: El certificado gratuito de Apple caduca cada 7 días',
      expiryWarningText: 'La política de seguridad de Apple para cuentas gratuitas de desarrollador (sin pagar los 99$/año del Apple Developer Program) hace que el certificado de firma expire al cabo de 1 semana exacta.',
      expirySolution: 'Cuando pasen 7 días y la app no se abra, NO perderás ningún dato ni ninguna seta descubierta. Solo tienes que volver a conectar el iPhone al Mac y pulsar "Run" en Xcode de nuevo (o usar herramientas como AltStore o Sideloadly que renuevan automáticamente por Wi-Fi). Si dispones de cuenta de pago de Apple Developer, dura 365 días.',
    },
    download: {
      title: 'Descarga Boscdex',
      subtitle: '100% código abierto y gratuito. Instala el APK directamente en tu dispositivo Android o compila para iOS',
      arm64Title: 'APK ARM64-v8a (Recomendado)',
      arm64Desc: 'Optimizado para teléfonos modernos de 64 bits. Tamaño ligero (~45 MB), máximo rendimiento con TFLite NPU.',
      arm64Badge: '⭐ Recomendado',
      universalTitle: 'APK Universal',
      universalDesc: 'Compatible con todos los dispositivos Android (32 y 64 bits). Tamaño (~102 MB).',
      universalBadge: 'Universal',
      btnDownload: 'Descargar APK',
      githubRelease: 'Releases oficiales en GitHub',
      buildFromSource: 'Compilación desde el código fuente',
      requirements: 'Requisitos: Android 8.0 (API 26) o superior • iOS 15.0 o superior (vía Xcode/Mac)',
    },
    docs: {
      title: 'Documentación & Arquitectura',
      subtitle: 'Cómo está construido Boscdex bajo el capó',
      edgeMlTitle: 'Inteligencia Artificial Edge ML (75 Clases)',
      edgeMlDesc: 'Entrenado con miles de especímenes catalanes y mediterráneos. Modelo MobileNetV3 con cabezal desacoplado para una clasificación jerárquica rápida de las 75 especies en <30ms.',
      offlineDbTitle: 'Base de Datos SQLite Reactiva (Drift)',
      offlineDbDesc: 'Almacenamiento completamente local. Esquema relacional con tablas para setas, árboles, avistamientos geolocalizados, insignias e historial de comparaciones.',
      ethicsTitle: 'Código Ético del Recolector',
      ethicsDesc: 'No arranques setas sin saber qué son. Usa una navaja afilada para cortar a ras de suelo o retira suavemente la base para identificar y tapa el agujero. Respeta el micelio.',
    },
    footer: {
      disclaimer: 'Aviso Legal: Esta aplicación tiene fines exclusivamente educativos y de consulta. Nunca consumas ninguna seta silvestre sin la confirmación presencial de un micólogo humano cualificado.',
      rights: '© 2026 Boscdex. Creado por y para la comunidad setera de Cataluña.',
      openSource: 'Proyecto de Código Abierto bajo licencia libre. ¡Contribuye en GitHub!',
    },
  },
  en: {
    meta: {
      title: 'Boscdex 🍄 — The Mycological Pokédex for Catalan Forest Foragers',
      description: '100% offline field guide for mushroom foragers in Catalonia with 75 wild species, on-device AI (Edge ML), retro Catalonia map, and safety lookalike alerts.',
    },
    nav: {
      features: 'Features',
      species: 'Catalog',
      safety: 'Safety Gate',
      iosGuide: 'iOS Guide',
      docs: 'Docs & ML',
      download: 'Download APK',
      github: 'GitHub',
    },
    hero: {
      badge: '100% OFFLINE • PRIVACY FIRST • OPEN SOURCE',
      tagline: 'The Mycological Pokédex of Catalonia',
      title: 'The forager\'s Pokédex to explore the',
      titleHighlight: 'Catalan forest',
      description: 'Boscdex is a gamified, 100% offline field guide designed for mushroom foragers (boletaires) and hikers in Catalonia. It blends the discovery thrill of a Pokédex (75 mushrooms, milestones, rarity tiers, badges) with critical field safety protocols (toxic lookalike warnings) and ecological context with symbiotic indicator trees.',
      downloadApk: 'Download APK (Android)',
      iosGuideBtn: 'How to install on iOS (iPhone)',
      viewGithub: 'View on GitHub',
      exploreDex: 'Explore all 75 species',
      stats: {
        species: '75',
        speciesLabel: 'Cataloged Wild Species',
        trees: '5',
        treesLabel: 'Indicator Host Trees',
        lookalikes: '28',
        lookalikesLabel: 'Risk Pairs Cataloged',
        offline: '100%',
        offlineLabel: 'Zero Cloud Sync / Offline',
      },
    },
    interactivePreview: {
      title: 'The App in Action',
      subtitle: 'Explore the 3 genuine sections of Boscdex (Boscdex, Scan, Journal)',
      tabs: {
        album: '🕹️ 1. Boscdex (Catalog)',
        scanner: '📸 2. Scan (Edge-AI)',
        journal: '📓 3. Journal (List & Map)',
        safety: '⚠️ Safety Gate Alert',
      },
    },
    features: {
      title: 'Why Boscdex?',
      subtitle: 'Engineered in Catalonia to safeguard your secret patches and turn every foraging hike into an adventure',
      items: [
        {
          icon: '🔌',
          title: '100% Offline & Private',
          tag: 'Zero Cloud',
          description: 'Operates without cellular reception in remote valleys. GPS coordinates and field photos of your secret spots (les clapes) never leave your device.',
          color: 'forest',
        },
        {
          icon: '⚡',
          title: 'Real-Time Edge ML (~30ms)',
          tag: 'No Servers',
          description: 'MobileNetV3 computer vision model quantized to INT8 running directly on your smartphone CPU/NPU with real-time classification across all 75 species.',
          color: 'arcade-cyan',
        },
        {
          icon: '🎮',
          title: 'Catalog of 75 Wild Fungal Species',
          tag: 'Pokédex Discovery',
          description: '75 wild mushroom species with dark mystery silhouettes to unlock, 5 rarity tiers (Common to Legendary), and 14 field achievement badges.',
          color: 'quest-gold',
        },
        {
          icon: '🌲',
          title: 'Symbiotic Indicator Trees',
          tag: 'Forest Ecology',
          description: 'Read the forest: Scots Pine with Saffron Milk Caps, Holm Oaks with Caesar\'s Mushrooms, and Beech groves with noble King Boletes.',
          color: 'forest-pine',
        },
        {
          icon: '🛑',
          title: 'Zero-Tolerance Safety Gate',
          tag: 'Poison Prevention',
          description: 'Strict protocol: if any lethal taxon (like Death Cap) reaches ≥10% probability, the app escalates immediately to maximum danger alert.',
          color: 'arcade-red',
        },
        {
          icon: '🗺️',
          title: '16-bit Catalonia Field Map',
          tag: 'Pixel Art HUD',
          description: 'Interactive regional map with specimen pixel pins, altitude logging, and a personal journal illustrated with your own field captures.',
          color: 'arcade-purple',
        },
      ],
    },
    safety: {
      title: 'Safety First Protocol',
      subtitle: 'Mycology demands uncompromising rigor. Boscdex implements a cutting-edge safety UX pipeline',
      badge: 'DANGEROUS LOOKALIKE ALERT',
      disclaimerTitle: 'Mandatory Mycological Advisory',
      disclaimerText: 'No artificial intelligence can replace the trained eye of a qualified human mycologist. Ingestion of toxic wild mushrooms like Amanita phalloides can be lethal. Never consume wild mushrooms without prior in-person validation by an expert.',
      algorithmTitle: 'SafetyGateService Algorithm',
      algorithmText: 'Automated 4-stage evaluation: 10% lethal toxicity gate, morphological uncertainty banner below 70%, dangerous lookalike comparison cards, and interactive botanical checklist.',
      zeroTolerance: 'Zero-Tolerance Lethal Gate (≥ 10%)',
      zeroToleranceText: 'If any of the top 3 candidate predictions is a lethal Catalan species (Amanita phalloides, Amanita verna, Amanita virosa, Cortinarius orellanus, Galerina marginata, or Gyromitra esculenta) with at least 10% confidence, danger mode is instantly triggered.',
      pairsTitle: 'Critical Lookalike Pairs in Catalonia',
      pairsSubtitle: '28 cataloged dangerous pairs with instant diagnostic traits',
    },
    dex: {
      title: 'The Boscdex Catalog',
      subtitle: 'Explore the complete collection of all 75 wild mushroom species cataloged in the app',
      searchPlaceholder: 'Search by vernacular or scientific name (e.g. Porcini, Chanterelle, Amanita)...',
      filters: {
        all: 'All Mushrooms',
        edible: 'Edibles',
        gourmet: 'Gourmet ⭐',
        toxic: 'Toxic / Lethal ☠️',
        trees: 'Host Trees 🌲',
      },
      showingCount: 'Showing {count} mushrooms',
      loadMore: 'Load more species',
      season: 'Fruiting season',
      habitat: 'Habitat',
      hostTree: 'Host tree',
      rarity: 'Rarity',
    },
    iosGuide: {
      badge: 'APPLE & IPHONE GUIDE',
      title: 'How to install Boscdex on iOS (iPhone)',
      subtitle: 'As an open-source project not yet published to the App Store, you can install it directly onto your iPhone using a Mac and Xcode 100% free of charge.',
      whyTitle: 'Why isn\'t there a direct download file for iOS like the Android APK?',
      whyText: 'Apple does not allow installing application packages directly from a web browser (unlike APKs on Android). On iOS, open-source apps must be compiled and signed with an Apple ID using Xcode or sideloading tools.',
      stepsTitle: 'Step-by-Step Installation with Mac & Xcode',
      steps: [
        {
          step: '1',
          title: 'Prerequisites',
          desc: 'You need a Mac with Xcode installed (free on the Mac App Store), an iPhone running iOS 15.0 or newer, a USB cable, and your standard Apple ID.',
        },
        {
          step: '2',
          title: 'Clone the repository',
          desc: 'Open the Terminal on your Mac and download the project: git clone https://github.com/jorbush/boscdex.git',
        },
        {
          step: '3',
          title: 'Open in Xcode',
          desc: 'Open the iOS workspace in Xcode: boscdex/ios/Runner.xcworkspace',
        },
        {
          step: '4',
          title: 'Configure free personal signing',
          desc: 'In Xcode, go to Runner > Signing & Capabilities. Select your "Personal Team" (signing in with your Apple ID) and change the Bundle Identifier if needed (e.g. com.yourname.boscdex).',
        },
        {
          step: '5',
          title: 'Enable Developer Mode on iPhone',
          desc: 'On iOS 16+: Go to Settings > Privacy & Security > Developer Mode and toggle it on (requires phone restart).',
        },
        {
          step: '6',
          title: 'Build and Run (▶)',
          desc: 'Connect your iPhone via USB, select it as the target device in Xcode\'s top toolbar, and click Run (▶). The app will compile and install onto your iPhone!',
        },
        {
          step: '7',
          title: 'Trust the developer profile',
          desc: 'On your iPhone, go to Settings > General > VPN & Device Management > Tap your email and select "Trust". You can now launch Boscdex!',
        },
      ],
      expiryWarningTitle: '⚠️ Crucial: Free Apple ID certificates expire after 7 days (1 week)',
      expiryWarningText: 'Apple\'s security policy for free personal developer accounts (without the $99/year Apple Developer Program membership) enforces that provisioning profiles expire after exactly 7 days.',
      expirySolution: 'When 7 days elapse and the app no longer opens, YOU WILL NOT LOSE ANY DATA or cataloged sightings. Simply reconnect your iPhone to your Mac and click "Run" in Xcode again (or use tools like AltStore or Sideloadly that refresh it automatically over Wi-Fi). If you have a paid Apple Developer account, signatures last 365 days.',
    },
    download: {
      title: 'Download Boscdex',
      subtitle: '100% Free & Open Source. Install the APK directly onto Android or build for iOS',
      arm64Title: 'APK ARM64-v8a (Recommended)',
      arm64Desc: 'Optimized for modern 64-bit Android smartphones. Lightweight (~45 MB), highest inference speed via TFLite NPU.',
      arm64Badge: '⭐ Recommended',
      universalTitle: 'Universal APK',
      universalDesc: 'Compatible with all Android hardware architectures (32-bit & 64-bit). Size: ~102 MB.',
      universalBadge: 'Universal',
      btnDownload: 'Download APK',
      githubRelease: 'Official GitHub Releases',
      buildFromSource: 'Build from Source Code',
      requirements: 'Requirements: Android 8.0 (API 26) or newer • iOS 15.0 or newer (via Xcode/Mac)',
    },
    docs: {
      title: 'Documentation & Architecture',
      subtitle: 'How Boscdex is engineered under the hood',
      edgeMlTitle: 'Edge Machine Learning Inference (75 Classes)',
      edgeMlDesc: 'Trained on tens of thousands of Catalan and Mediterranean field images. MobileNetV3 with decoupled head for fast, accurate hierarchical species identification across all 75 species in <30ms.',
      offlineDbTitle: 'Reactive Local SQLite (Drift)',
      offlineDbDesc: 'Zero cloud dependencies. Relational SQLite schema with reactive streams for mushrooms, indicator trees, geolocated sightings, badges, and comparison history.',
      ethicsTitle: 'Forager\'s Forest Code of Conduct',
      ethicsDesc: 'Never kick or destroy unknown mushrooms. Use a clean sharp knife to trim at the base or extract gently to inspect diagnostic keys, then cover the moss. Protect the underground mycelium.',
    },
    footer: {
      disclaimer: 'Legal Disclaimer: This app is intended strictly for educational and field guide reference. Never consume any wild mushroom without prior in-person validation from a qualified mycologist.',
      rights: '© 2026 Boscdex. Crafted by and for the foraging community of Catalonia.',
      openSource: 'Free & Open Source Software. Star and contribute on GitHub!',
    },
  },
};
