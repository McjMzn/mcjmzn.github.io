const Biomes = {
    Forest: 'Forest',
    Underground: 'Underground',
    Desert: 'Desert',
    Jungle: 'Jungle',
    Snow: 'Snow',
    Ocean: 'Ocean',
    Mushroom: 'Mushroom',
    Hallow: 'Hallow',
    Space: 'Space',
    Dungeon: 'Dungeon',
    Caverns: 'Caverns',
    Underworld: 'Underworld',
    BrimstoneCrag: 'Brimstone Crag'
};

const Npcs = {
    Angler: 'Angler',
    ArmsDealer: 'Arms Dealer',
    Clothier: 'Clothier',
    Cyborg: 'Cyborg',
    Demolitionist: 'Demolitionist',
    Dryad: 'Dryad',
    DyeTrader: 'Dye Trader',
    GoblinTinkerer: 'Goblin Tinkerer',
    Golfer: 'Golfer',
    Guide: 'Guide',
    Mechanic: 'Mechanic',
    Merchant: 'Merchant',
    Nurse: 'Nurse',
    Painter: 'Painter',
    PartyGirl: 'Party Girl',
    Pirate: 'Pirate',
    SantaClaus: 'Santa Claus',
    Steampunker: 'Steampunker',
    Stylist: 'Stylist',
    TaxCollector: 'Tax Collector',
    Tavernkeep: 'Tavernkeep',
    Truffle: 'Truffle',
    WitchDoctor: 'Witch Doctor',
    Wizard: 'Wizard',
    Zoologist: 'Zoologist',
    Princess: 'Princess',

    ThoriumCobbler: 'Cobbler (Thorium)',
    ThoriumDesertAcolyte: 'Desert Acolyte (Thorium)',
    ThroiumCook: 'Cook (Thorium)',
    ThoriumConfusedZombie: 'Confused Zombie (Thorium)',
    ThoriumBlacksmith: 'Blacksmith (Thorium)',
    ThoriumTracker: 'Tracker (Thorium)',
    ThoriumDiverman: 'Diverman (Thorium)',
    ThoriumDruid: 'Druid (Thorium)',
    ThoriumSpiritualist: 'Spiritualist (Thorium)',
    ThoriumWeaponMaster: 'Weapon Master (Thorium)',

    CalamitySeaKing: 'Sea King (Calamity)',
    CalamityBandit: 'Bandit (Calamity)',
    CalamityDrunkPrincess: 'Drunk Princess (Calamity)',
    CalamityArchmage: 'Archmage (Calamity)',
    CalamityBrimstoneWitch: 'Brimstone Witch (Calamity)',

    FargosLumberJack: "LumberJack (Fargo's)",
    FargosDeviantt: "Deviantt (Fargo's)",
    FargosAbominationn: "Abominationn (Fargo's)",
    FargosMutant: "Mutant (Fargo's)",
    FargosSquirrel: "Squirrel (Fargo's)",

    MagicStorageGolem: 'Golem (Magic Storage)'
};

const NpcBuilder = function(npcName) {
    this.npc = {
        Name: npcName,
        Loved: [],
        Liked: [],
        Disliked: [],
        Hated: []
    };
    
    this.loves = function(things) { this.npc.Loved = this.npc.Loved.concat(Array.from(arguments)); return this; };
    this.likes = function(things) { this.npc.Liked = this.npc.Liked.concat(Array.from(arguments)); return this; };
    this.dislikes = function(things) { this.npc.Disliked = this.npc.Disliked.concat(Array.from(arguments)); return this; };
    this.hates = function(things) { this.npc.Hated = this.npc.Hated.concat(Array.from(arguments)); return this; };
    
    this.build = function() { return this.npc };
}

const NpcModels = [
    new NpcBuilder(Npcs.Guide).likes(Biomes.Forest, Npcs.Clothier, Npcs.Zoologist, Npcs.Princess).dislikes(Biomes.Ocean, Npcs.Steampunker).hates(Npcs.Painter).build(),
    new NpcBuilder(Npcs.Merchant).likes(Biomes.Forest, Npcs.Golfer, Npcs.Nurse, Npcs.Princess).dislikes(Biomes.Desert, Npcs.TaxCollector).hates(Npcs.Angler).build(),
    new NpcBuilder(Npcs.Zoologist).loves(Npcs.WitchDoctor).likes(Biomes.Forest, Npcs.Golfer, Npcs.Princess).dislikes(Biomes.Desert, Npcs.Angler).hates(Npcs.ArmsDealer).build(),
    new NpcBuilder(Npcs.Golfer).loves(Npcs.Angler).likes(Biomes.Forest, Npcs.Painter, Npcs.Zoologist, Npcs.Princess).dislikes(Biomes.Underground, Npcs.Pirate).hates(Npcs.Merchant).build(),
    new NpcBuilder(Npcs.Nurse).loves(Npcs.ArmsDealer).likes(Biomes.Hallow, Npcs.Wizard, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Dryad, Npcs.PartyGirl).hates(Npcs.Zoologist).build(),
    new NpcBuilder(Npcs.Tavernkeep).loves(Npcs.Demolitionist).likes(Biomes.Hallow, Npcs.GoblinTinkerer, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Guide).hates(Npcs.DyeTrader).build(),
    new NpcBuilder(Npcs.PartyGirl).loves(Npcs.Wizard).likes(Biomes.Hallow, Npcs.Stylist, Npcs.Princess).dislikes(Biomes.Underground, Npcs.Merchant).hates(Npcs.TaxCollector).build(),
    new NpcBuilder(Npcs.Wizard).loves(Npcs.Golfer).likes(Biomes.Hallow, Npcs.Merchant, Npcs.Princess).dislikes(Biomes.Ocean, Npcs.WitchDoctor).hates(Npcs.Cyborg).build(),
    new NpcBuilder(Npcs.Demolitionist).loves(Npcs.Tavernkeep).likes(Biomes.Underground, Npcs.Mechanic, Npcs.Princess).dislikes(Biomes.Ocean, Npcs.ArmsDealer, Npcs.GoblinTinkerer).build(),
    new NpcBuilder(Npcs.GoblinTinkerer).loves(Npcs.Mechanic).likes(Biomes.Underground, Npcs.DyeTrader, Npcs.Princess).dislikes(Biomes.Jungle, Npcs.Clothier).hates(Npcs.Stylist).build(),
    new NpcBuilder(Npcs.Clothier).loves(Npcs.Truffle).likes(Biomes.Underground, Npcs.TaxCollector, Npcs.Princess).dislikes(Biomes.Hallow, Npcs.Nurse).hates(Npcs.Mechanic).build(),
    new NpcBuilder(Npcs.DyeTrader).likes(Biomes.Desert, Npcs.ArmsDealer, Npcs.Painter, Npcs.Princess).dislikes(Biomes.Forest, Npcs.Steampunker).hates(Npcs.Pirate).build(),
    new NpcBuilder(Npcs.ArmsDealer).loves(Npcs.Nurse).likes(Biomes.Desert, Npcs.Steampunker, Npcs.Princess).dislikes(Biomes.Snow ,Npcs.Golfer).hates(Npcs.Demolitionist).build(),
    new NpcBuilder(Npcs.Steampunker).loves(Npcs.Cyborg).likes(Biomes.Desert, Npcs.Painter, Npcs.Princess).dislikes(Biomes.Jungle, Npcs.Dryad, Npcs.Wizard, Npcs.PartyGirl).build(),
    new NpcBuilder(Npcs.Dryad).likes(Biomes.Jungle, Npcs.WitchDoctor, Npcs.Truffle, Npcs.Princess).dislikes(Biomes.Desert, Npcs.Angler, Npcs.Zoologist).hates(Npcs.Golfer).build(),
    new NpcBuilder(Npcs.Painter).loves(Npcs.Dryad).likes(Biomes.Jungle, Npcs.PartyGirl, Npcs.Princess).dislikes(Biomes.Forest, Npcs.Truffle, Npcs.Cyborg).build(),
    new NpcBuilder(Npcs.WitchDoctor).likes(Biomes.Jungle, Npcs.Dryad, Npcs.Guide, Npcs.Princess).dislikes(Biomes.Hallow, Npcs.Nurse).hates(Npcs.Truffle).build(),
    new NpcBuilder(Npcs.Stylist).loves(Npcs.DyeTrader).likes(Biomes.Ocean, Npcs.Pirate, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Tavernkeep).hates(Npcs.GoblinTinkerer).build(),
    new NpcBuilder(Npcs.Angler).likes(Biomes.Ocean, Npcs.Demolitionist, Npcs.PartyGirl, Npcs.TaxCollector, Npcs.Princess).dislikes(Biomes.Desert).hates(Npcs.Tavernkeep).build(),
    new NpcBuilder(Npcs.Pirate).loves(Npcs.Angler).likes(Biomes.Ocean, Npcs.Tavernkeep, Npcs.Princess).dislikes(Biomes.Underground, Npcs.Stylist).hates(Npcs.Guide).build(),
    new NpcBuilder(Npcs.Mechanic).loves(Npcs.GoblinTinkerer).likes(Biomes.Snow, Npcs.Cyborg, Npcs.Princess).dislikes(Biomes.Underground, Npcs.ArmsDealer).hates(Npcs.Clothier).build(),
    new NpcBuilder(Npcs.TaxCollector).loves(Npcs.Merchant).likes(Biomes.Snow, Npcs.PartyGirl, Npcs.Princess).dislikes(Biomes.Hallow, Npcs.Demolitionist, Npcs.Mechanic).hates(Npcs.SantaClaus).build(),
    new NpcBuilder(Npcs.Cyborg).likes(Biomes.Snow, Npcs.Steampunker, Npcs.Pirate, Npcs.Stylist, Npcs.Princess).dislikes(Biomes.Jungle, Npcs.Zoologist).hates(Npcs.Wizard).build(),
    new NpcBuilder(Npcs.SantaClaus).likes(Npcs.Princess).loves(Biomes.Snow).hates(Biomes.Desert, Npcs.TaxCollector).build(),
    new NpcBuilder(Npcs.Truffle).loves(Npcs.Guide).likes(Biomes.Mushroom, Npcs.Dryad, Npcs.Princess).dislikes(Npcs.Clothier).hates(Npcs.WitchDoctor).build(),
    new NpcBuilder(Npcs.Princess).loves(...Object.values(Npcs).filter(npc => npc !== "Princess")).build()
    
    new NpcBuilder(Npcs.ThoriumCobbler).loves(Npcs.Zoologist, Npcs.Golfer).likes(Biomes.Forest, Npcs.ThoriumSpiritualist).dislikes(Biomes.Ocean, Npcs.ThoriumDruid, Npcs.Dryad, Npcs.Angler).hates(Npcs.Nurse).build(),
    new NpcBuilder(Npcs.ThoriumDesertAcolyte).likes(Biomes.Desert, Npcs.Nurse, Npcs.ThoriumSpiritualist).dislikes(Biomes.Jungle, Npcs.Pirate).hates(Npcs.ThoriumWeaponMaster, Npcs.WitchDoctor, Npcs.GoblinTinkerer).build(),
    new NpcBuilder(Npcs.ThroiumCook).loves(Npcs.SantaClaus).likes(Biomes.Mushrom, Npcs.Truffle).dislikes(Biomes.Underground, Npcs.Angler).hates(Npcs.Cyborg).build(),
    new NpcBuilder(Npcs.ThoriumConfusedZombie).loves(Npcs.Guide).likes(Biomes.Forest, Npcs.Clothier).dislikes(Npcs.ThoriumSpiritualist).build(),
    new NpcBuilder(Npcs.ThoriumBlacksmith).loves(Npcs.Demolitionist).likes(Biomes.Underground, Npcs.ThoriumWeaponMaster).dislikes(Npcs.ThoriumTracker).build(),
    new NpcBuilder(Npcs.ThoriumTracker).loves(Npcs.Tavernkeep).likes(Biomes.Snow, Npcs.Guide, Npcs.Stylist).dislikes(Biomes.Forest, Npcs.DyeTrader).hates(Npcs.ThoriumDesertAcolyte).build(),
    new NpcBuilder(Npcs.ThoriumDiverman).loves(Npcs.PartyGirl).likes(Biomes.Ocean, Npcs.Pirate).dislikes(Biomes.Desert, Npcs.Angler).build(),
    new NpcBuilder(Npcs.ThoriumDruid).likes(Biomes.Jungle, Npcs.Dryad).dislikes(Biomes.Snow, Npcs.Demolitionist).hates(Npcs.Steampunker).build(),
    new NpcBuilder(Npcs.ThoriumSpiritualist).loves(Npcs.Stylist).likes(Biomes.Hallow, Npcs.WitchDoctor).dislikes(Biomes.Underground, Npcs.ThoriumWeaponMaster).hates(Npcs.TaxCollector).build(),
    new NpcBuilder(Npcs.ThoriumWeaponMaster).loves(Npcs.TaxCollector).likes(Biomes.Underground, Npcs.GoblinTinkerer, Npcs.WitchDoctor).dislikes(Biomes.Hallow, Npcs.Guide, Npcs.ThoriumConfusedZombie).hates(Npcs.ThoriumSpiritualist).build(),

    new NpcBuilder(Npcs.CalamitySeaKing).likes(Biomes.Ocean, Npcs.Pirate).dislikes(Biomes.Desert, Npcs.Demolitionist).hates(Npcs.Angler).build(),
    new NpcBuilder(Npcs.CalamityBandit).likes(Biomes.Desert, Npcs.GoblinTinkerer).dislikes(Biomes.Jungle, Npcs.Dryad).build(),
    new NpcBuilder(Npcs.CalamityDrunkPrincess).loves(Biomes.Hallow, Npcs.Stylist, Npcs.Zoologist).likes(Biomes.Ocean, Npcs.PartyGirl, Npcs.Truffle).dislikes(Biomes.Desert, Npcs.TaxCollector, Npcs.Tavernkeep).hates(Biomes.Underground, Npcs.Angler, Npcs.GoblinTinkerer).build(),
    new NpcBuilder(Npcs.CalamityArchmage).likes(Biomes.Snow, Npcs.Wizard).dislikes(Biomes.Desert, Npcs.Cyborg).build(),
    new NpcBuilder(Npcs.CalamityBrimstoneWitch).likes(Biomes.Forest, Npcs.Clothier).dislikes(Biomes.Jungle, Npcs.PartyGirl).build(),

    new NpcBuilder(Npcs.FargosLumberJack).loves(Biomes.Forest).likes(Npcs.FargosSquirrel).dislikes(Npcs.Dryad).hates(Npcs.Demolitionist).build(),
    new NpcBuilder(Npcs.FargosDeviantt).loves(Biomes.Space, Npcs.FargosMutant).likes(Biomes.Jungle, Npcs.FargosAbomination).dislikes(Biomes.Snow, Npcs.Zoologist).hates(Biomes.Desert, Npcs.Angler).build(),
    new NpcBuilder(Npcs.FargosAbominationn).loves(Biomes.Space, Npcs.FargosMutant).likes(Biomes.Ocean, Npcs.FargosDeviantt).dislikes(Biomes.Dungeon).hates(Npcs.Nurse).build(),
    new NpcBuilder(Npcs.FargosMutant).loves(Biomes.Space, Npcs.FargosAbominationn).likes(Biomes.Forest, Npcs.FargosDeviantt).dislikes(Biomes.Hallow, Npcs.FargosLumberJack).build(),
    new NpcBuilder(Npcs.FargosSquirrel).loves(Biomes.Forest).likes(Npcs.FargosLumberJack).hates(Biomes.Caverns, Biomes.Underground, Biomes.Underworld).build(),

    new NpcBuilder(Npcs.MagicStorageGolem).loves(Biomes.Snow, Npcs.Mechanic).likes(Biomes.Forest, Npcs.WitchDoctor).dislikes(Biomes.Desert, Npcs.Wizard).hates(Biomes.Hallow, Npcs.TaxCollector).build()
].sort((a, b) => a.Name.localeCompare(b.Name));
