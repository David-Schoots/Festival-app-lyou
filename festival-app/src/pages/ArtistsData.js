const artists = [
  {
    id: 1,
    name: {
      nl: "Armin van Buuren",
      en: "Armin van Buuren",
    },
    description: {
      nl: "Vijfvoudig 's werelds nummer 1 DJ en trance-icoon. Armin levert euforische, energieke sets die festivals als Tomorrowland en Ultra hebben afgesloten. Zijn opzwepende melodieën en perfecte mixen houden het publiek urenlang aan het dansen.",
      en: "Five-time “World’s No. 1 DJ” and trance icon, Armin delivers euphoric, high-energy sets that have headlined festivals from Tomorrowland to Ultra. His uplifting melodies and impeccable mixing keep crowds dancing for hours.",
    },
    image: "/artist/armin_van_buuren.jpg",
    youtube: "https://www.youtube.com/embed/TxvpctgU_s8?si=i0_4VZeFMnRHWGm0",
  },
  {
    id: 2,
    name: {
      nl: "Martin Garrix",
      en: "Martin Garrix",
    },
    description: {
      nl: "Brak als tiener door met 'Animals' en is nu een van de grootste namen in EDM. Zijn anthems en stadionwaardige drops maken hem een festivalfavoriet in heel Europa.",
      en: "Broke through as a teenager with “Animals,” Martin Garrix has become one of the biggest names in EDM. His anthemic big-room tracks and stadium-sized drops make him a festival favorite across Europe.",
    },
    image: "/artist/martin_garrix.jpg",
    youtube: "https://www.youtube.com/embed/Zv1QV6lrc_Y?si=UDuXhn7DcfwXqSWr",
  },
  {
    id: 3,
    name: {
      nl: "Kensington",
      en: "Kensington",
    },
    description: {
      nl: "Rotterdamse indie rockband bekend om hun meeslepende refreinen en krachtige gitaarriffs. Hits als 'Streets' en 'Riddles' tonen hun gevoel voor stadionwaardige hooks en emotionele teksten.",
      en: "Rotterdam-born indie rock quintet known for soaring choruses and driving guitar riffs. Hits like “Streets” and “Riddles” showcase their knack for arena-ready hooks and emotionally charged lyricism.",
    },
    image: "/artist/kensington.jpg",
    youtube: "https://www.youtube.com/embed/IH77eOyV95o?si=5-AEpIA6Q35K9yw0",
  },
  {
    id: 4,
    name: {
      nl: "Within Temptation",
      en: "Within Temptation",
    },
    description: {
      nl: "Symfonische metalpioniers onder leiding van Sharon den Adel. Hun filmische soundscapes en krachtige zang (denk aan 'Ice Queen', 'Mother Earth') zorgen voor dramatische, visueel indrukwekkende festivalshows.",
      en: "Symphonic metal pioneers fronted by Sharon den Adel. Their cinematic soundscapes and operatic vocals (think “Ice Queen,” “Mother Earth”) translate into dramatic, visually stunning festival performances.",
    },
    image: "/artist/within_temptation.jpg",
    youtube: "https://www.youtube.com/embed/iQVei5C2N4E?si=0wljuMkYEa7X-oBX",
  },
  {
    id: 5,
    name: {
      nl: "De Staat",
      en: "De Staat",
    },
    description: {
      nl: "Experimentele rockband uit Nijmegen, die funky grooves combineert met hoekige gitaren en theatraal optreden. Nummers als 'Witch Doctor' en 'Down Town' tonen hun genre-overschrijdende stijl en aanstekelijke energie.",
      en: "Experimental rock outfit from Nijmegen, blending funky grooves with angular guitar work and theatrical stagecraft. Tracks like “Witch Doctor” and “Down Town” highlight their genre-bending approach and infectious energy.",
    },
    image: "/artist/de_staat.jpg",
    youtube: "https://www.youtube.com/embed/0ttGgIQpAUc?si=xyuSeDxLJXf5-9oJ",
  },
  {
    id: 6,
    name: {
      nl: "Chef’Special",
      en: "Chef’Special",
    },
    description: {
      nl: "Een vierkoppige band uit Haarlem die funk, pop, rock en hiphop mixt. Hun vrolijke, genre-overstijgende sound op nummers als 'Amigo' en 'In Your Arms' zorgt voor dansbare, energieke liveshows.",
      en: "A four-piece from Haarlem mixing funk, pop, rock and hip-hop. Their upbeat, genre-fluid sound on songs like “Amigo” and “In Your Arms” makes for joyous, dance-floor-friendly live shows.",
    },
    image: "/artist/chefspecial.jpg",
    youtube: "https://www.youtube.com/embed/l3jRIr44lss?si=S0PeMFfa4d9Davzu",
  },
  {
    id: 7,
    name: {
      nl: "Navarone",
      en: "Navarone",
    },
    description: {
      nl: "Utrechtse rockband die krachtige anthems en dynamische zang brengt. Bekend om hun intense live-optredens, perfect voor de late festivaluren.",
      en: "Utrecht’s hard-hitting rock four-piece, delivering riff-driven anthems and dynamic vocals. With a live reputation for raw intensity, they’re tailor-made for late-night main stages.",
    },
    image: "/artist/navarone.jpg",
    youtube: "https://www.youtube.com/embed/EvLpaCSnc4k?si=MUZFNsgnEZhOMkbA",
  },
  {
    id: 8,
    name: {
      nl: "Dotan",
      en: "Dotan",
    },
    description: {
      nl: "Folk-pop singer-songwriter wiens intieme stem en akoestische arrangementen (vooral op 'Home') hem platina platen en uitverkochte shows hebben opgeleverd. Zijn oprechte verhalen raken het publiek op het akoestische podium.",
      en: "Folk-pop singer-songwriter whose intimate voice and acoustic arrangements (notably on “Home”) have earned him platinum sales and sell-out shows. His heartfelt storytelling connects deeply on festival acoustic stages.",
    },
    image: "/artist/dotan.jpg",
    youtube: "https://www.youtube.com/embed/FZEuqzW16Nw?si=S-VsJPPSYY59C6nh",
  },
  {
    id: 9,
    name: {
      nl: "Eefje de Visser",
      en: "Eefje de Visser",
    },
    description: {
      nl: "Indie-popartiest die dromerige, elektronisch getinte nummers maakt. Haar hypnotiserende zang en rijke productie (zoals op 'Ongeveer') creëren een magische sfeer, perfect voor de schemering op het festival.",
      en: "Indie-pop artist crafting atmospheric, electronic-tinged songs. Her hypnotic vocals and lush production (as heard on “Ongeveer”) create a dreamlike vibe perfect for twilight festival slots.",
    },
    image: "/artist/eefje_de_visser.jpg",
    youtube: "https://www.youtube.com/embed/6IlLJNmLDMg?si=wiIfhGrrI8-o4eeY",
  },
  {
    id: 10,
    name: {
      nl: "Froukje",
      en: "Froukje",
    },
    description: {
      nl: "Doorbraak-popzangeres Froukje Veenstra combineert eerlijke teksten met aanstekelijke, synth-gedreven hooks. Sinds haar debuut in 2021 is ze een stem van haar generatie—perfect voor het middagprogramma.",
      en: "Breakthrough pop singer Froukje Veenstra combines candid lyrics with catchy, synth-driven hooks. Since her 2021 debut, she’s become a voice of her generation—ideal for mid-day festival stages.",
    },
    image: "/artist/froukje.jpg",
    youtube: "https://www.youtube.com/embed/g4PlReX9e-E?si=FLXneme3d3hQDwif",
  },
  {
    id: 11,
    name: {
      nl: "Spinvis",
      en: "Spinvis",
    },
    description: {
      nl: "Erik de Jong, oftewel Spinvis, maakt poëtische, collage-achtige liedjes die gesproken woord, lo-fi elektronica en dromerige pop combineren. Sinds zijn debuutalbum in 2002—opgenomen op zolder—is hij een vaste waarde in de Nederlandse indie. Zijn live shows veranderen alledaagse observaties in gedeelde, dromerige ervaringen.",
      en: "Erik de Jong performs under the moniker Spinvis, crafting poetic, collage-like songs that blend spoken-word snippets, lo-fi electronics and wistful pop. Since his debut album in 2002—recorded in his attic—he’s become a fixture of Dutch indie, renowned for narratives that feel both intimate and surreal. His live shows turn everyday observations into shared, dreamlike experiences.",
    },
    image: "/artist/spinvis.jpg",
    youtube: "https://www.youtube.com/embed/F3ZTrGWSLf4?si=5CMmWqjiyUpl9rA1",
  },
];

export default artists;
