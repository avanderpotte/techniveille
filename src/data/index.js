const data = {
  militaires: {
    slug: 'militaires',
    name: 'Les drones militaires',
    title: 'La guerre à distance',
    drones: [
      {
        name: 'Orka-1200',
        constructor: 'EADS',
        description: 'Développé pour répondre au programme SDAM (Système de Drone Aérien de la Marine) initié par la Marine Nationale et la DGA. L\'Orka-1200 a été conçu pour effectuer des missions de patrouille maritime, de surveillance côtière, de guerre électronique et de lutte anti-sous-marine. Il peut être doté d\'un radar de veille maritime, de caméra thermique, à infrarouge, à vision de nuit. Le drone Orka peut également être dirigé depuis un autre hélicoptère.',
        url: 'http://www.lemonde.fr/societe/article/2008/06/17/l-explosion-du-marche-des-drones_1059249_3224.html',
        date: '17/06/2008'
      },
      {
        name: 'Sperwer',
        constructor: 'Sagem',
        description: 'Le drône Sperwer est destiné à un ensemble de missions, durant 6 heures, de renseignement, de surveillance et d’acquisition de cibles et reconnaissance. Utilisé quotidiennement en opérations de combat, Sperwer répond parfaitement aux besoins des missions dévaluation précise de la situation tactique. Il dispose d’un rayon d’action de 200km et d’une autonomie de 6 heures.',
        url: 'http://www.uasvision.com/2014/01/17/sagem-gets-french-army-contract-for-5-sperwer-uas/',
        date: '17/01/2014'
      },
      {
        name: 'nEUROn',
        constructor: 'Dassault',
        description: 'Le nEUROn est un démonstrateur de drone de combat furtif embarquant une dizaine de technologies améliorant sa furtivité, gérant les phases de décollage ou d’atterrissage ou son insertion potentielle dans le trafic aérien. Il mesure 12,5 m et pèse 7 000 kg une fois chargée de ses armements, 2 bombes à guidée laser de 250 kg.',
        url: 'http://www.latribune.fr/entreprises-finance/industrie/aeronautique-defense/20150309trib15478652c/neuron-ce-drone-de-combat-qui-permet-a-la-france-de-rester-au-niveau-des-etats-unis.html',
        date: '09/03/2015'
      },
      {
        name: 'OQ-2',
        constructor: 'Radioplane',
        description: 'Le “Radioplane OQ-2” a été le premier drone ayant été produit massivement au Etats-Unis. Il a été destiné à l’entraînement au tir anti-aérien. Celui-ci est devenu l’outil principal d\'entraînement des tireurs de l’US Army en 1941,, également vendu à l’US Navy à plusieurs milliers d’exemplaires et rebaptisé TDD-1. Cependant, il a également été commercialisé sous le nom de “Dennymite” ( nommé après le nom du créateur Reginald Denny ).',
        url: 'http://www.militaryfactory.com/aircraft/detail.asp?aircraft_id=331',
        date: '21/04/2015'
      },
      {
        name: 'Flying gun',
        constructor: 'DIY',
        description: 'Un américain de 18 ans à dévoilé en octobre dernier son prototype d’arme volante. Le jeune homme du Connecticut à présenté sur une simple vidéo publiée sur youtube un drone transformé et muni d’un pistolet de calibre 9mm. Dans la vidéo, le pilote fait la démonstration du drone en le faisant voler et tirer plusieurs coups de feu. Il s’agit sans doute du premier drone “ménager” capable de tuer, et du premier drone à arme à feu. Plus tard dans l’année, des experts du droit américain ont déclaré que l’arme était, selon la loi, légale. L’homme à déclaré avoir réalisé ce drone pour un exercice pour son université et ne compte pas publier les plans.',
        url: 'https://www.youtube.com/watch?v=xqHrTtvFFIs',
        date: '10/07/2015'
      },
      {
        name: 'MQ-9 Reaper',
        constructor: 'General Atomics',
        description: 'Le “General Atomics MQ-9 Reaper” (en anglais, reaper correspond ici à « faucheuse », l\'allégorie de la mort) est un drone de surveillance et optionnellement de combat construit par General Atomics pour l\'United States Air Force, l\'United States Navy, l\'Aeronautica Militare, la Royal Air Force et l\'Armée de l\'air française.  Le contrôle du vol peut se faire par liaison hertzienne en visée directe depuis la station de contrôle ("LOS" pour "line of sight") valable jusqu\'à une distance de 200 km, ou par l\'intermédiaire d\'une liaison satellite ("SATCOM"). L’appareil possède également une capacité d’armement même si sa fonction principale est la surveillance. Ce nouveau modèle constitue un des fers de lance de la stratégie américaine de lutte contre Al-Qaïda et les Taliban, notamment au Pakistan dans les zones tribales. Fin 2011, 54 Reaper sont en service dans les forces armées des États-Unis. Il mesure 20m d’envergure pour environ 4 tonnes avec une autonomie de 24h et d’une vitesse de pointe de 240Noeuds ( soit environ 450Km/h ).',
        url: 'https://theintercept.com/drone-papers/',
        date: '15/10/2015'
      }
    ],
    next: {
      name: 'Les drones de services',
      title: 'Le business de demain'
    }
  },
  services: {
    name: 'Les drones de services',
    title: 'Le business de demain'
  },
  loisir: {
    name: 'Les drones de loisir',
    title: 'Le ciel pour terrain de jeu'
  }
}

export default data
