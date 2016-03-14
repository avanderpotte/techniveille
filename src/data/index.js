const data = {
  militaires: {
    slug: 'militaires',
    name: 'Les drones militaires',
    title: 'La guerre à distance',
    img: '/static/img/categories/militaires/neuron.png',
    drones: [
      {
        name: 'Sperwer',
        constructor: 'Sagem',
        description: 'Le drône Sperwer est destiné à un ensemble de missions, durant 6 heures, de renseignement, de surveillance et d\'acquisition de cibles et reconnaissance. Utilisé quotidiennement en opérations de combat, Sperwer répond parfaitement aux besoins des missions dévaluation précise de la situation tactique. Il dispose d\'un rayon d\'action de 200km et d\'une autonomie de 6 heures.',
        url: 'http://www.uasvision.com/2014/01/17/sagem-gets-french-army-contract-for-5-sperwer-uas/',
        date: '17/01/2014'
      },
      {
        name: 'nEUROn',
        constructor: 'Dassault',
        description: 'Le nEUROn est un démonstrateur de drone de combat furtif embarquant une dizaine de technologies améliorant sa furtivité, gérant les phases de décollage ou d\'atterrissage ou son insertion potentielle dans le trafic aérien. Il mesure 12,5 m et pèse 7 000 kg une fois chargée de ses armements, 2 bombes à guidée laser de 250 kg.',
        url: 'http://www.latribune.fr/entreprises-finance/industrie/aeronautique-defense/20150309trib15478652c/neuron-ce-drone-de-combat-qui-permet-a-la-france-de-rester-au-niveau-des-etats-unis.html',
        date: '09/03/2015'
      },
      {
        name: 'OQ-2',
        constructor: 'Radioplane',
        description: 'Le “Radioplane OQ-2” a été le premier drone ayant été produit massivement au Etats-Unis. Il a été destiné à l\'entraînement au tir anti-aérien. Celui-ci est devenu l\'outil principal d\'entraînement des tireurs de l\'US Army en 1941,, également vendu à l\'US Navy à plusieurs milliers d\'exemplaires et rebaptisé TDD-1. Cependant, il a également été commercialisé sous le nom de “Dennymite” ( nommé après le nom du créateur Reginald Denny ).',
        url: 'http://www.militaryfactory.com/aircraft/detail.asp?aircraft_id=331',
        date: '21/04/2015'
      },
      {
        name: 'Orka-1200',
        constructor: 'EADS',
        description: 'Développé pour répondre au programme SDAM (Système de Drone Aérien de la Marine) initié par la Marine Nationale et la DGA. L\'Orka-1200 a été conçu pour effectuer des missions de patrouille maritime, de surveillance côtière, de guerre électronique et de lutte anti-sous-marine. Il peut être doté d\'un radar de veille maritime, de caméra thermique, à infrarouge, à vision de nuit. Le drone Orka peut également être dirigé depuis un autre hélicoptère.',
        url: 'http://www.lemarin.fr/secteurs-activites/defense/22011-des-drones-aeriens-pour-la-marine-nationale',
        date: '27/05/2015'
      },
      {
        name: 'Flying gun',
        constructor: 'DIY',
        description: 'Un américain de 18 ans à dévoilé en octobre dernier son prototype d\'arme volante. Le jeune homme du Connecticut à présenté sur une simple vidéo publiée sur youtube un drone transformé et muni d\'un pistolet de calibre 9mm. Dans la vidéo, le pilote fait la démonstration du drone en le faisant voler et tirer plusieurs coups de feu. Il s\'agit sans doute du premier drone “ménager” capable de tuer, et du premier drone à arme à feu. Plus tard dans l\'année, des experts du droit américain ont déclaré que l\'arme était, selon la loi, légale. L\'homme à déclaré avoir réalisé ce drone pour un exercice pour son université et ne compte pas publier les plans.',
        url: 'https://www.youtube.com/watch?v=xqHrTtvFFIs',
        date: '10/07/2015'
      },
      {
        name: 'MQ-9 Reaper',
        constructor: 'General Atomics',
        description: 'Le “General Atomics MQ-9 Reaper” (en anglais, reaper correspond ici à « faucheuse », l\'allégorie de la mort) est un drone de surveillance et optionnellement de combat construit par General Atomics pour l\'United States Air Force, l\'United States Navy, l\'Aeronautica Militare, la Royal Air Force et l\'Armée de l\'air française.  Le contrôle du vol peut se faire par liaison hertzienne en visée directe depuis la station de contrôle ("LOS" pour "line of sight") valable jusqu\'à une distance de 200 km, ou par l\'intermédiaire d\'une liaison satellite ("SATCOM"). L\'appareil possède également une capacité d\'armement même si sa fonction principale est la surveillance. Ce nouveau modèle constitue un des fers de lance de la stratégie américaine de lutte contre Al-Qaïda et les Taliban, notamment au Pakistan dans les zones tribales. Fin 2011, 54 Reaper sont en service dans les forces armées des États-Unis. Il mesure 20m d\'envergure pour environ 4 tonnes avec une autonomie de 24h et d\'une vitesse de pointe de 240Noeuds ( soit environ 450Km/h ).',
        url: 'https://theintercept.com/drone-papers/',
        date: '15/10/2015'
      }
    ],
    next: {
      name: 'Les drones de services',
      slug: 'services',
      title: 'Le business de demain'
    }
  },
  services: {
    slug: 'services',
    name: 'Les drones de services',
    title: 'Le business de demain',
    img: '/static/img/categories/services/prime-air.png',
    drones: [
      {
        name: 'R-Max',
        constructor: 'YAMAHA',
        description: 'Pour la première fois la “Federal Aviation Administration”, a accordé à un engin volant sans pilote, le YAMAHA R-Max l\'autorisation d\'exercer des travaux agricoles. Le drône de 94kg de Yamaha peut transporter et disperser des réservoirs d\'engrais et de pesticides à travers de grandes étendues de terres. Bien que déjà utilisé depuis plusieurs années au Japon, il n\'a été autorisé qu\'en Mai 2015 sous de plusieurs conditions telles qu\'une vitesse maximale de 72kmh et une altitude maximale de 120m.',
        url: 'http://www.pleinchamp.com/machinisme/actualites-machinisme/l-helicoptere-rmax-de-yamaha-l-ancetre-des-drones-agricoles',
        date: '12/08/2013'
      },
      {
        name: 'FOX-C8 XT',
        constructor: 'Onyxstar',
        description: 'D\'abord créé pour supporter de lourdes charges, le FOX-C8 est devenu rapidement une référence pour les vidéastes. Il peut porter de lourdes caméras, ce qui a fait de lui un drone très utilisé dans le milieu professionnel. Aujourd\'hui dépassé par les modèle du chinois Dji, il est de plus en plus utilisé par les gendarmeries ou encore les pompiers pour repérer les zones à risque.',
        url: 'http://archives.nicematin.com/vallees/un-drone-va-voler-au-dessus-de-vos-tetes-pour-securiser-votre-trajet-sur-les-routes-de-monta.2378808.html',
        date: '27/10/2015'
      },
      {
        name: 'Agras MG-1',
        constructor: 'DJI',
        description: 'Il s\'agit d\'un octocopter agricole conçu pour la protection et la fertilisation des cultures. Pouvant charger plus de 10kg de liquide pour la pulvérisation agricole et parcourir plus de 10 hectares par heure, l\'Agras MG-1 est 40 fois plus efficace que la pulvérisation manuelle. Il est facile à transporter grâce à son châssis repliable. Le drone dispose d\'une radiocommande dédiée spécialement conçue pour les besoins des utilisateurs aux usages agricole.',
        url: 'http://techcrunch.com/2015/11/26/djis-latest-drone-saves-crops-from-pests/?ncid=rss&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Techcrunch+%28TechCrunch%29',
        date: '26/11/2015'
      },
      {
        name: 'Prime Air',
        constructor: 'Amazon',
        description: 'Dévoilé en Novembre dernier le drone du géant de l\'e-commerce pourrait devenir un nouveau mode de livraison. Pesant moins de 25kg, ce dispositif permettrait de livrer des colis de 2 300 kg maximum dans un rayon de 16 km. Amazon souhaite s\'engager sur un délai de livraison de moins de 30 minutes, comme montré dans leur vidéo de présentation. L\'Amazon Prime Air pourrait être opérationnel d\'ici 4 à 5 ans. De nombreux tests de sécurité sont encore à effectuer et son utilisation nécessiteraapprobation des autorités de l\'aviation, qui interdisent jusqu\'à maintenant toute utilisation commerciale d\'un drone sur le territoire américain.',
        url: 'http://www.lemonde.fr/robotique/article/2016/01/03/robotisation-generale_4841007_4620106.html?xtmc=amazon_drone&xtcr=1',
        date: '04/01/2016'
      },
      {
        name: 'Ehang 184',
        constructor: 'Ehang',
        description: 'Dernière création de l\'entreprise chinoise Ehang, il s\'agit du premier prototype de drône taxi. Dépourvu de toutes commandes, le passager s\'assoit dedans et n\'a qu\'à renseigner sa destination via la tablette tactile installée à l\'intérieur de l\'appareil, et se laisse transporter.L\'engin pèse une centaine de kilos, pour une autonomie de 23 minutes et une vitesse moyenne de 100 km/h. Une charge complète des batteries prend cependant 4 heures. Il ne peut transporter que des passagers dont le poids est inférieur à 100 kg.',
        url: 'http://www.pcworld.com/article/3019704/consumer-electronics/the-ehang-184-is-a-single-passenger-drone-that-transports-people-yes-people-at-11-000-feet.html',
        date: '06/01/2016'
      },
      {
        name: 'ELSA',
        constructor: 'Sirehna',
        description: 'En 2008 le ministère de l\'Intérieur a doté la police nationale d\'aéronefs miniatures. Moins coûteux que les hélicoptères, ces drônes conviennent parfaitement à des missions ponctuelles et de durée limitée telles que la surveillance de grands événements et de manifestations, la localisation et l\'identification de casseurs dans le cadre des violences urbaines. L\'ELSA est un drone programmable ou guidable manuellement, d\'une envergure d\'un mètre, pesant 1 kg batteries, autopilote et caméra compris. Volant de 10 km/h à 70 km/h, à une altitude de 500m, il peut être équipé de caméras diurnes, thermiques ou à intensificateur de lumière.',
        url: 'http://www.lemonde.fr/europe/article/2016/03/03/drones-de-combat-londres-et-paris-signent-un-accord-a-2-milliards-d-euros_4876138_3214.html?xtmc=drone&xtcr=5',
        date: '03/03/2016'
      }
    ],
    next: {
      name: 'Les drones de loisir',
      slug: 'loisirs',
      title: 'Le ciel pour terrain de jeu'
    }
  },
  loisirs: {
    slug: 'loisirs',
    name: 'Les drones de loisir',
    img: '/static/img/categories/loisirs/phantom.png',
    title: 'Le ciel pour terrain de jeu',
    drones: [
      {
        name: 'Phantom',
        constructor: 'DJI',
        description: 'DJI est une entreprise chinoise, leader mondial dans la fabrication de drones de loisir, créée en 2006 par Frank Wang dans la ville de Shenzhen. Le DJI Phantom est devenu moins d\'un an après son lancement en début 2013 LE drone multirotor culte par excellence. Depuis le 7 Mars 2016, DJI a annoncé la sortie du Phantom 4 ( presqu\'un an après la sortie de Phantom 3 ) équipé de 3 nouvelles fonctionnalités : “ActiveTrack” permettant de suivre une cible en mouvement; “Avoidance” permettant d\'analyser l\'horizon et d\'éviter les obstacles fixes ou en mouvement; et enfin la fonction “TapFly” permettant redéfinir la destination à travers le smartphone.  Équipé d\'une caméra 4K, d\'une autonomie de 28min et une vitesse de pointe de 70km/h, DJI confirme sa place de leader.',
        url: 'http://www.theverge.com/2015/8/7/9115449/dji-phantom-3-drone-review-price-quadcopter-specs',
        date: '07/08/2015'
      },
      {
        name: 'Flyeye',
        constructor: 'WB Electronics',
        description: 'Le FlyEye est l\'expert des photos en altitude. C\'est un drone prévu pour les longs parcours avec son autonomie de plusieurs heures à une altitude de plus de 1000m. Parmis les précurseurs de l\'UAV (véhicule volant sans pilote), le polonais WB Electronics vendait d\'abord ce drone aux militaires pour leurs missions de reconnaissance. Il a récemment annoncé vouloir approcher le marché du loisir en proposant une manette simple d\'utilisation et une stabilité hors-pair aux amateurs de photos aériennes.',
        url: 'https://www.thalesgroup.com/fr/worldwide/defense/press-release/wb-electronics-et-thales-devoilent-leur-systeme-de-drone-tactique',
        date: '01/09/2015'
      },
      {
        name: 'Bebop 2',
        constructor: 'Parrot',
        description: 'Le Parrot, concurrent Français et pionner dans le domaine des drone, a annoncé en Novembre 2015 son dernier bijou : Bebop 2. Ce dernier est aujourd\'hui l\'un des seuls drones à peser moins de un kilogrammes possédant une caméra capable de filmer en Full HD. La force de Parrot réside en ses qualités logicielles. En effet, Parrot fournit un manette “Skycontroller” permettant d\'augmenter la portée à plus de 2 kilomètres grâce à de puissantes antennes et rend le retour vidéo de meilleure qualité et plus fluide. Parrot possède également une fonctionnalité FlightPlan qui permet de configurer le vol du drone avant qu\'il ne décolle.',
        url: 'http://www.clubic.com/drone/actualite-786836-parrot-bebop-2-drone-performant-lourd-cher.html',
        date: '20/11/2015'
      },
      {
        name: 'Lily',
        constructor: 'Lily Robotics',
        description: 'Lily Robotics est une start-up, fondée par deux étudiants de Berkeley (dont un français). Leurs quadricoptère phare au look amusant a pour particularité de suivre son « maître » dans les airs pendant 20 minutes, en le filmant en Full HD/60 fps. Il peut également prendre des photos avec une résolution de 12 mégapixels. L\'appareil est étanche à l\'eau et à la poussière et est doté d\'un GPS qui communique avec un petit boîtier porté par l\'utilisateur, qui peut s\'en servir pour contrôler la façon de filmer. L\'appareil peut par exemple se placer devant la personne ou effectuer des rotations autour d\'elle.',
        url: 'http://www.lemonde.fr/robotique/article/2016/01/03/robotisation-generale_4841007_4620106.html?xtmc=amazon_drone&xtcr=1',
        date: '04/01/2016'
      },
      {
        name: 'Disco',
        constructor: 'Parrot',
        description: 'Après les drones quadricoptères, place à l\'aile volante : Parrot a dévoilé lors du CES 2016 son premier modèle du genre, le “Disco”, capable de voler à 80 Km/h. l\'appareil (environ 700 grammes) adopte des lignes nettement plus agressives que le désormais traditionnel drone, avec deux larges ailes et une unique hélice en position arrière. A l\'avant, une caméra permet de visualiser le parcours et de profiter d\'un pilotage en vue à la première personne, par l\'intermédiaire d\'un smartphone ou de la télécommande développée par Parrot. Contrairement au quadricoptère, l\'aile volante ne peut pas voler à l\'arrêt. Elle devra donc être lancée à la main et rester en mouvement en permanence tout en tenant compte du vent. Favorisée par la portance, l\'autonomie se monterait à environ 45 minutes.',
        url: 'http://www.engadget.com/2016/01/04/parrots-disco-drone-takes-to-the-air-as-a-fixed-wing-ultralight/',
        date: '04/01/2016'
      },
      {
        name: 'Alpha 300Q',
        constructor: 'Graupner',
        description: 'Créée en Janvier 2016, la Drone Race League regroupe les pilotes de drones les plus agiles et friands d\'adrénaline dans des courses à obstacles. Lancé à toute vitesse sur les circuits, le Alpha 300Q est le modèle préféré de pilotes semi-professionnels. Avec sa caméra ultra rapide et sa vitesse de pointe de 100km/h, le drone sorti le 16 décembre 2015 par un constructeur de voitures radiocommandées se retrouvera sans doute sur le podium cette saison.',
        url: 'http://www.tomsguide.fr/actualite/drone-course,50004.html',
        date: '27/01/2016'
      }

    ],
    next: {
      name: 'Conclusion',
      slug: '/#footer',
      title: 'un monde de drone'
    }
  }
}

export default data
