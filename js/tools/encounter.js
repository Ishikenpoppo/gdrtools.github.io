/* ════════════════════════════════════════════════════
   ENCOUNTER GENERATOR
════════════════════════════════════════════════════ */

/* ── XP Thresholds per character level ── */
const ENC_XP_THRESH = [
  null,
  {easy:25,   medium:50,   hard:75,    deadly:100},
  {easy:50,   medium:100,  hard:150,   deadly:200},
  {easy:75,   medium:150,  hard:225,   deadly:400},
  {easy:125,  medium:250,  hard:375,   deadly:500},
  {easy:250,  medium:500,  hard:750,   deadly:1100},
  {easy:300,  medium:600,  hard:900,   deadly:1400},
  {easy:350,  medium:750,  hard:1100,  deadly:1700},
  {easy:450,  medium:900,  hard:1400,  deadly:2100},
  {easy:550,  medium:1100, hard:1600,  deadly:2400},
  {easy:600,  medium:1200, hard:1900,  deadly:2800},
  {easy:800,  medium:1600, hard:2400,  deadly:3600},
  {easy:1000, medium:2000, hard:3000,  deadly:4500},
  {easy:1100, medium:2200, hard:3400,  deadly:5100},
  {easy:1250, medium:2500, hard:3800,  deadly:5700},
  {easy:1400, medium:2800, hard:4300,  deadly:6400},
  {easy:1600, medium:3200, hard:4800,  deadly:7200},
  {easy:2000, medium:3900, hard:5900,  deadly:8800},
  {easy:2100, medium:4200, hard:6300,  deadly:9500},
  {easy:2400, medium:4900, hard:7300,  deadly:10900},
  {easy:2800, medium:5700, hard:8500,  deadly:12700},
];

/* ── CR → XP ── */
const ENC_CR_XP = {
  '0':10,'1/8':25,'1/4':50,'1/2':100,
  '1':200,'2':450,'3':700,'4':1100,'5':1800,
  '6':2300,'7':2900,'8':3900,'9':5000,'10':5900,
  '11':7200,'12':8400,'13':10000,'14':11500,'15':13000,
  '16':15000,'17':18000,'18':20000,'19':22000,'20':25000,
  '21':33000,'22':41000,'23':50000,'24':62000,'30':155000,
};

/* ── CR → numeric (for comparison) ── */
const ENC_CR_NUM = {
  '0':0,'1/8':0.125,'1/4':0.25,'1/2':0.5,
  '1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,
  '11':11,'12':12,'13':13,'14':14,'15':15,'16':16,'17':17,
  '18':18,'19':19,'20':20,'21':21,'22':22,'23':23,'24':24,'30':30,
};

/* ── XP multiplier by monster count ── */
function encXpMult(n) {
  if (n <= 1)  return 1;
  if (n === 2) return 1.5;
  if (n <= 6)  return 2;
  if (n <= 10) return 2.5;
  if (n <= 14) return 3;
  return 4;
}

/* ── Color by difficulty ── */
const ENC_DIFF_COLOR = {
  easy:'#80c880', medium:'#d4b04a', hard:'#e87060', deadly:'#c85050'
};
const ENC_DIFF_LABEL = {
  easy:'Easy Encounter', medium:'Medium Encounter',
  hard:'Hard Encounter', deadly:'Deadly Encounter'
};

/* ── Monster type → accent color ── */
const ENC_TYPE_COLOR = {
  beast:'#80b860', humanoid:'#6898b8', undead:'#a880d8',
  aberration:'#7060d0', monstrosity:'#c87840', fiend:'#c84040',
  fey:'#d078c8', dragon:'#e07038', giant:'#c89050', celestial:'#f0d060',
  construct:'#7898a8', elemental:'#60a8d8', plant:'#60b870',
  ooze:'#80c898', swarm:'#a8a860',
};

/* ── Monster database ──────────────────────────────
   {n, cr, hp, ac, t, env[], ib (initiative bonus)}
────────────────────────────────────────────────── */
const ENC_MONSTERS = [
  // CR 0
  {n:'Rat',          cr:'0',   hp:1,   ac:10, t:'beast',      env:['dungeon','forest','urban','cave'],   ib:+0},
  {n:'Bat',          cr:'0',   hp:1,   ac:12, t:'beast',      env:['dungeon','cave'],                    ib:+2},
  {n:'Poisonous Snake', cr:'0', hp:2,  ac:13, t:'beast',      env:['forest','swamp','cave'],             ib:+2},
  // CR 1/8
  {n:'Bandit',       cr:'1/8', hp:11,  ac:12, t:'humanoid',   env:['forest','urban','plains'],           ib:+1},
  {n:'Guard',        cr:'1/8', hp:11,  ac:16, t:'humanoid',   env:['urban','dungeon'],                   ib:+0},
  {n:'Kobold',       cr:'1/8', hp:5,   ac:12, t:'humanoid',   env:['dungeon','cave','mountain'],         ib:+2},
  {n:'Stirge',       cr:'1/8', hp:2,   ac:14, t:'beast',      env:['dungeon','cave','swamp'],            ib:+4},
  {n:'Giant Rat',    cr:'1/8', hp:7,   ac:12, t:'beast',      env:['dungeon','urban','cave'],            ib:+2},
  // CR 1/4
  {n:'Goblin',       cr:'1/4', hp:7,   ac:15, t:'humanoid',   env:['dungeon','cave','forest'],           ib:+2},
  {n:'Skeleton',     cr:'1/4', hp:13,  ac:13, t:'undead',     env:['dungeon','plains'],                  ib:+2},
  {n:'Wolf',         cr:'1/4', hp:11,  ac:13, t:'beast',      env:['forest','plains','mountain'],        ib:+2},
  {n:'Zombie',       cr:'1/4', hp:22,  ac:8,  t:'undead',     env:['dungeon','urban'],                   ib:-2},
  {n:'Giant Bat',    cr:'1/4', hp:22,  ac:13, t:'beast',      env:['cave','dungeon'],                    ib:+2},
  {n:'Swarm of Bats',cr:'1/4', hp:22,  ac:12, t:'swarm',      env:['cave','dungeon'],                    ib:+2},
  {n:'Pseudodragon', cr:'1/4', hp:7,   ac:13, t:'dragon',     env:['forest','dungeon'],                  ib:+2},
  {n:'Giant Lizard', cr:'1/4', hp:19,  ac:12, t:'beast',      env:['swamp','cave','dungeon'],            ib:+0},
  // CR 1/2
  {n:'Hobgoblin',    cr:'1/2', hp:11,  ac:18, t:'humanoid',   env:['dungeon','plains','forest'],         ib:+1},
  {n:'Orc',          cr:'1/2', hp:15,  ac:13, t:'humanoid',   env:['forest','cave','mountain'],          ib:+2},
  {n:'Crocodile',    cr:'1/2', hp:19,  ac:12, t:'beast',      env:['swamp'],                             ib:+0},
  {n:'Gnoll',        cr:'1/2', hp:22,  ac:15, t:'humanoid',   env:['plains','forest'],                   ib:+1},
  {n:'Shadow',       cr:'1/2', hp:16,  ac:12, t:'undead',     env:['dungeon','cave'],                    ib:+2},
  {n:'Vine Blight',  cr:'1/2', hp:26,  ac:12, t:'plant',      env:['forest','swamp'],                   ib:-1},
  {n:'Giant Wasp',   cr:'1/2', hp:13,  ac:12, t:'beast',      env:['forest','plains'],                   ib:+2},
  {n:'Scout',        cr:'1/2', hp:16,  ac:13, t:'humanoid',   env:['forest','plains','urban'],           ib:+2},
  {n:'Black Bear',   cr:'1/2', hp:19,  ac:11, t:'beast',      env:['forest','plains'],                   ib:+0},
  // CR 1
  {n:'Ghoul',        cr:'1',   hp:22,  ac:12, t:'undead',     env:['dungeon','urban','cave'],            ib:+2},
  {n:'Giant Spider', cr:'1',   hp:26,  ac:14, t:'beast',      env:['dungeon','cave','forest'],           ib:+3},
  {n:'Harpy',        cr:'1',   hp:38,  ac:11, t:'monstrosity',env:['mountain','plains','cave'],          ib:+0},
  {n:'Dryad',        cr:'1',   hp:22,  ac:11, t:'fey',        env:['forest'],                            ib:+2},
  {n:'Bugbear',      cr:'1',   hp:27,  ac:16, t:'humanoid',   env:['dungeon','cave','forest'],           ib:+2},
  {n:'Brown Bear',   cr:'1',   hp:34,  ac:11, t:'beast',      env:['forest','plains','mountain'],        ib:+0},
  {n:'Specter',      cr:'1',   hp:22,  ac:12, t:'undead',     env:['dungeon','urban'],                   ib:+2},
  {n:'Imp',          cr:'1',   hp:10,  ac:13, t:'fiend',      env:['dungeon','urban'],                   ib:+3},
  {n:'Quasit',       cr:'1',   hp:7,   ac:13, t:'fiend',      env:['dungeon','cave'],                    ib:+3},
  {n:'Dire Wolf',    cr:'1',   hp:37,  ac:14, t:'beast',      env:['forest','plains','mountain'],        ib:+2},
  // CR 2
  {n:'Ogre',         cr:'2',   hp:59,  ac:11, t:'giant',      env:['cave','mountain','plains'],          ib:-1},
  {n:'Ghast',        cr:'2',   hp:36,  ac:13, t:'undead',     env:['dungeon','cave'],                    ib:+3},
  {n:'Nothic',       cr:'2',   hp:45,  ac:15, t:'aberration', env:['dungeon'],                           ib:+3},
  {n:'Gargoyle',     cr:'2',   hp:52,  ac:15, t:'elemental',  env:['dungeon','urban','mountain'],        ib:+0},
  {n:'Gelatinous Cube', cr:'2',hp:84,  ac:6,  t:'ooze',       env:['dungeon'],                          ib:-5},
  {n:'Ochre Jelly',  cr:'2',   hp:45,  ac:8,  t:'ooze',       env:['dungeon','cave'],                   ib:-5},
  {n:'Werewolf',     cr:'2',   hp:58,  ac:11, t:'humanoid',   env:['forest','urban','plains'],           ib:+1},
  {n:'Banshee',      cr:'2',   hp:58,  ac:12, t:'undead',     env:['dungeon','forest','urban'],          ib:+2},
  {n:'Black Dragon Wyrmling', cr:'2', hp:33, ac:17, t:'dragon', env:['swamp','cave'],                   ib:+0},
  {n:'Merrow',       cr:'2',   hp:45,  ac:13, t:'monstrosity',env:['swamp'],                             ib:+0},
  {n:'Ettercap',     cr:'2',   hp:44,  ac:13, t:'monstrosity',env:['forest','cave'],                    ib:+3},
  {n:'Sea Hag',      cr:'2',   hp:52,  ac:14, t:'fey',        env:['swamp'],                             ib:+1},
  // CR 3
  {n:'Manticore',    cr:'3',   hp:68,  ac:14, t:'monstrosity',env:['mountain','plains'],                 ib:+0},
  {n:'Minotaur',     cr:'3',   hp:114, ac:14, t:'monstrosity',env:['dungeon','cave'],                    ib:+0},
  {n:'Owlbear',      cr:'3',   hp:59,  ac:13, t:'monstrosity',env:['forest'],                            ib:+1},
  {n:'Wight',        cr:'3',   hp:45,  ac:14, t:'undead',     env:['dungeon','cave','plains'],           ib:+2},
  {n:'Phase Spider', cr:'3',   hp:32,  ac:13, t:'monstrosity',env:['dungeon','cave'],                    ib:+3},
  {n:'Basilisk',     cr:'3',   hp:52,  ac:15, t:'monstrosity',env:['dungeon','cave','forest'],           ib:-1},
  {n:'Green Hag',    cr:'3',   hp:82,  ac:17, t:'fey',        env:['forest','swamp'],                    ib:+1},
  {n:'Hell Hound',   cr:'3',   hp:45,  ac:15, t:'fiend',      env:['dungeon','plains'],                  ib:+5},
  {n:'Winter Wolf',  cr:'3',   hp:75,  ac:13, t:'monstrosity',env:['mountain','plains'],                 ib:+3},
  {n:'Doppelganger', cr:'3',   hp:52,  ac:14, t:'monstrosity',env:['dungeon','urban'],                   ib:+1},
  {n:'Giant Scorpion', cr:'3', hp:52,  ac:15, t:'beast',      env:['plains','cave'],                    ib:+1},
  // CR 4
  {n:'Ghost',        cr:'4',   hp:45,  ac:11, t:'undead',     env:['dungeon','urban'],                   ib:+0},
  {n:'Ettin',        cr:'4',   hp:85,  ac:12, t:'giant',      env:['mountain','plains','cave'],          ib:-1},
  {n:'Lamia',        cr:'4',   hp:97,  ac:13, t:'monstrosity',env:['plains','dungeon'],                  ib:+1},
  {n:'Couatl',       cr:'4',   hp:97,  ac:19, t:'celestial',  env:['forest','plains'],                   ib:+5},
  {n:'Incubus',      cr:'4',   hp:66,  ac:13, t:'fiend',      env:['urban','dungeon'],                   ib:+1},
  {n:'Banshee',      cr:'4',   hp:58,  ac:12, t:'undead',     env:['dungeon','urban','forest'],          ib:+2},
  {n:'Werewolf (Alpha)', cr:'4', hp:84, ac:12, t:'humanoid',  env:['forest','mountain'],                 ib:+2},
  // CR 5
  {n:'Troll',        cr:'5',   hp:84,  ac:15, t:'giant',      env:['cave','swamp','mountain'],           ib:+2},
  {n:'Umber Hulk',   cr:'5',   hp:93,  ac:18, t:'monstrosity',env:['dungeon','cave'],                    ib:+0},
  {n:'Bulette',      cr:'5',   hp:94,  ac:17, t:'monstrosity',env:['plains','dungeon'],                  ib:+2},
  {n:'Unicorn',      cr:'5',   hp:67,  ac:12, t:'celestial',  env:['forest'],                            ib:+7},
  {n:'Shambling Mound', cr:'5',hp:136, ac:15, t:'plant',      env:['swamp','forest'],                   ib:+0},
  {n:'Night Hag',    cr:'5',   hp:112, ac:17, t:'fiend',      env:['forest','swamp','cave'],             ib:+2},
  {n:'Vampire Spawn',cr:'5',   hp:82,  ac:15, t:'undead',     env:['dungeon','urban'],                   ib:+6},
  {n:'Gladiator',    cr:'5',   hp:112, ac:16, t:'humanoid',   env:['urban','plains'],                    ib:+2},
  {n:'Water Weird',  cr:'3',   hp:58,  ac:13, t:'elemental',  env:['dungeon','swamp'],                   ib:+3},
  // CR 6
  {n:'Chimera',      cr:'6',   hp:114, ac:14, t:'monstrosity',env:['plains','mountain'],                 ib:+0},
  {n:'Medusa',       cr:'6',   hp:127, ac:15, t:'monstrosity',env:['dungeon','cave'],                    ib:+2},
  {n:'Wyvern',       cr:'6',   hp:110, ac:13, t:'dragon',     env:['mountain','plains'],                 ib:+0},
  {n:'Mage',         cr:'6',   hp:40,  ac:12, t:'humanoid',   env:['dungeon','urban'],                   ib:+2},
  {n:'Cyclops',      cr:'6',   hp:138, ac:14, t:'giant',      env:['plains','mountain','cave'],          ib:-1},
  {n:'Young White Dragon', cr:'6', hp:133, ac:17, t:'dragon', env:['mountain','cave'],                  ib:+0},
  // CR 7
  {n:'Stone Giant',  cr:'7',   hp:126, ac:17, t:'giant',      env:['cave','mountain'],                   ib:-1},
  {n:'Oni',          cr:'7',   hp:110, ac:16, t:'giant',      env:['dungeon','cave','forest'],           ib:+0},
  {n:'Young Black Dragon', cr:'7', hp:127, ac:18, t:'dragon', env:['swamp','cave'],                     ib:+0},
  {n:'Shield Guardian', cr:'7', hp:142, ac:17, t:'construct', env:['dungeon','urban'],                  ib:+0},
  {n:'Mind Flayer',  cr:'7',   hp:71,  ac:15, t:'aberration', env:['dungeon','cave'],                    ib:+4},
  // CR 8
  {n:'Frost Giant',  cr:'8',   hp:138, ac:15, t:'giant',      env:['mountain','plains'],                 ib:-1},
  {n:'Hydra',        cr:'8',   hp:172, ac:15, t:'monstrosity',env:['swamp'],                             ib:+1},
  {n:'Cloaker',      cr:'8',   hp:78,  ac:14, t:'aberration', env:['dungeon','cave'],                    ib:+3},
  {n:'Assassin',     cr:'8',   hp:78,  ac:15, t:'humanoid',   env:['urban','dungeon'],                   ib:+6},
  {n:'Fomorian',     cr:'8',   hp:149, ac:14, t:'giant',      env:['cave','dungeon'],                    ib:-2},
  {n:'Young Copper Dragon', cr:'7', hp:119, ac:17, t:'dragon',env:['mountain','cave'],                   ib:+0},
  // CR 9
  {n:'Treant',       cr:'9',   hp:138, ac:16, t:'plant',      env:['forest'],                            ib:-1},
  {n:'Fire Giant',   cr:'9',   hp:162, ac:18, t:'giant',      env:['mountain','dungeon'],                ib:+0},
  {n:'Young Green Dragon', cr:'8', hp:136, ac:18, t:'dragon', env:['forest'],                           ib:+0},
  {n:'Bone Devil',   cr:'9',   hp:142, ac:19, t:'fiend',      env:['dungeon'],                           ib:+3},
  {n:'Clay Golem',   cr:'9',   hp:133, ac:14, t:'construct',  env:['dungeon'],                           ib:-1},
  // CR 10
  {n:'Aboleth',      cr:'10',  hp:135, ac:17, t:'aberration', env:['dungeon'],                           ib:+1},
  {n:'Stone Golem',  cr:'10',  hp:178, ac:17, t:'construct',  env:['dungeon'],                           ib:-1},
  {n:'Young Silver Dragon', cr:'9', hp:168, ac:18, t:'dragon',env:['mountain','plains'],                 ib:+0},
  {n:'Guardian Naga',cr:'10',  hp:127, ac:18, t:'monstrosity',env:['dungeon','cave','swamp'],            ib:+6},
  // CR 11
  {n:'Behir',        cr:'11',  hp:168, ac:17, t:'monstrosity',env:['cave','mountain'],                   ib:+3},
  {n:'Remorhaz',     cr:'11',  hp:195, ac:17, t:'monstrosity',env:['mountain'],                          ib:+2},
  {n:'Young Red Dragon', cr:'10', hp:178, ac:18, t:'dragon',  env:['mountain','dungeon'],                ib:+0},
  {n:'Efreeti',      cr:'11',  hp:200, ac:17, t:'elemental',  env:['dungeon','mountain'],                ib:+3},
  {n:'Marid',        cr:'11',  hp:229, ac:17, t:'elemental',  env:['dungeon','swamp'],                   ib:+2},
  // CR 12
  {n:'Archmage',     cr:'12',  hp:99,  ac:12, t:'humanoid',   env:['dungeon','urban'],                   ib:+2},
  {n:'Adult White Dragon', cr:'13', hp:200, ac:18, t:'dragon',env:['mountain','cave'],                   ib:+0},
  // CR 13
  {n:'Adult Black Dragon', cr:'13', hp:195, ac:19, t:'dragon',env:['swamp','cave'],                     ib:+2},
  {n:'Storm Giant',  cr:'13',  hp:230, ac:16, t:'giant',      env:['mountain','plains'],                 ib:+2},
  {n:'Vampire',      cr:'13',  hp:144, ac:16, t:'undead',     env:['dungeon','urban'],                   ib:+9},
  // CR 14
  {n:'Adult Green Dragon', cr:'15', hp:207, ac:19, t:'dragon',env:['forest'],                            ib:+1},
  {n:'Death Tyrant', cr:'14',  hp:187, ac:19, t:'undead',     env:['dungeon'],                           ib:+3},
  // CR 15
  {n:'Adult Blue Dragon', cr:'16', hp:225, ac:19, t:'dragon', env:['plains','mountain'],                 ib:+0},
  {n:'Purple Worm',  cr:'15',  hp:247, ac:18, t:'monstrosity',env:['dungeon','cave'],                    ib:-1},
  {n:'Mummy Lord',   cr:'15',  hp:97,  ac:17, t:'undead',     env:['dungeon'],                           ib:+2},
  // CR 16
  {n:'Iron Golem',   cr:'16',  hp:210, ac:20, t:'construct',  env:['dungeon'],                           ib:-1},
  {n:'Adult Red Dragon', cr:'17', hp:256, ac:19, t:'dragon',  env:['mountain','dungeon'],                ib:+0},
  // CR 17
  {n:'Death Knight', cr:'17',  hp:180, ac:20, t:'undead',     env:['dungeon','plains'],                  ib:-1},
  // CR 20+
  {n:'Ancient White Dragon', cr:'20', hp:333, ac:18, t:'dragon', env:['mountain','cave'],                ib:+0},
  {n:'Ancient Black Dragon', cr:'21', hp:367, ac:22, t:'dragon', env:['swamp','cave'],                   ib:+2},
  {n:'Ancient Green Dragon', cr:'22', hp:385, ac:21, t:'dragon', env:['forest'],                         ib:+1},
  {n:'Ancient Blue Dragon',  cr:'23', hp:481, ac:22, t:'dragon', env:['plains','mountain'],              ib:+0},
  {n:'Ancient Red Dragon',   cr:'24', hp:546, ac:22, t:'dragon', env:['mountain'],                       ib:+0},
  {n:'Tarrasque',    cr:'30',  hp:676, ac:25, t:'monstrosity',env:['plains','mountain'],                  ib:+0},
];

/* ── Flavor text bank ── */
const ENC_FLAVOR_BANK = {
  any: [
    'The silence before the storm has always been the loudest thing your party has ever heard. Now it ends.',
    'Something has been tracking you for the past mile. It just decided to stop being patient.',
    'The ground is wrong here — too quiet, too still. Your instincts scream a half-second before the ambush.',
  ],
  dungeon: [
    'Torchlight flickers and dies. In the darkness between heartbeats, something moves toward you.',
    'The stench of old blood and fresh hunger seeps from the passage ahead. You are not the first — but you may be the last.',
    'Ancient stonework is carved with warnings in a script none of you can read. You are about to learn what they meant.',
    'The corridor narrows and your torches throw long, jittering shadows. One of those shadows is not yours.',
  ],
  forest: [
    'The canopy locks out the moon. Whatever has been following you for miles has finally stopped waiting.',
    'Broken branches, churned earth, a smell like iron and wet fur. You are walking into the aftermath of a kill — and the killer is still here.',
    'The forest fell silent two minutes ago. Prey animals know things. You should have listened sooner.',
    'Something ancient and patient lives between these trees. It does not appreciate visitors.',
  ],
  urban: [
    'The cobblestones glisten. An alley that was empty a moment ago is not empty anymore.',
    'The city holds a thousand secrets. Tonight, one of them decides you know too much.',
    'The inn\'s common room clears out faster than it should. The regulars know what comes next.',
    'Between the torches and the shadows of the merchant quarter, something has been following the coin.',
  ],
  cave: [
    'Your light reaches only so far. Beyond that, the darkness has teeth.',
    'The cave narrows, then opens into something that should not exist this deep underground.',
    'The sound of dripping water masks the sound of movement until it is far too late.',
    'These tunnels were carved by something with purpose. That something may still be here.',
  ],
  plains: [
    'On open ground, there is nowhere to hide — for you or for what hunts you across the tall grass.',
    'You saw the shapes against the horizon three minutes ago. They are much closer now.',
    'The wind shifts and carries a sound that raises every hair on every neck in the party.',
    'The road cuts through open country. Ambushes work differently out here. Differently, not worse.',
  ],
  swamp: [
    'The fog sits on the water like a lid. Beneath it, something old and patient has been disturbed.',
    'Stepping stones that were safe a moment ago are now sinking. The disturbance came from ahead.',
    'The rot-smell of the swamp is familiar. The other smell beneath it — blood and sulphur — is not.',
    'This part of the marsh is quiet in a way that has nothing to do with peace.',
  ],
  mountain: [
    'The thin air at altitude makes the blood roar in your ears. Which is why you almost missed the sound above you.',
    'Stone dislodged from above is never just an accident. Not up here.',
    'The pass narrows. From this point, retreat is as dangerous as advance.',
    'They were here before the mountains had names. They will be here long after yours are forgotten.',
  ],
};

/* ── State ── */
const encState = {
  level: 5,
  size: 4,
  diff: 'medium',
  env: 'any',
  lastResult: null,
};

/* ── Steppers ── */
function encAdjust(field, delta) {
  if (field === 'level') {
    encState.level = Math.max(1, Math.min(20, encState.level + delta));
    document.getElementById('encLevelVal').textContent = encState.level;
  } else {
    encState.size = Math.max(1, Math.min(8, encState.size + delta));
    document.getElementById('encSizeVal').textContent = encState.size;
  }
}

function encSelectDiff(el) {
  document.querySelectorAll('#encDiffGroup .enc-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  encState.diff = el.dataset.diff;
}

function encSelectEnv(el) {
  document.querySelectorAll('#encEnvGroup .enc-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  encState.env = el.dataset.env;
}

/* ── Core generator ── */
function generateEncounter() {
  const { level, size, diff, env } = encState;
  const budget = size * ENC_XP_THRESH[level][diff];

  /* Filter pool */
  const maxCRnum = Math.min(level + 4, 30);
  const minCRnum = Math.max(0, (level - 2) * 0.5 - 0.5);

  let pool = ENC_MONSTERS.filter(m => {
    const crn = ENC_CR_NUM[m.cr] ?? 0;
    if (crn > maxCRnum) return false;
    // For low budget encounters let CR go very low
    if (budget < 500 && crn > 4) return false;
    if (env !== 'any') {
      if (!m.env.includes('any') && !m.env.includes(env)) return false;
    }
    return true;
  });

  if (!pool.length) {
    // Fallback: any environment
    pool = ENC_MONSTERS.filter(m => {
      const crn = ENC_CR_NUM[m.cr] ?? 0;
      return crn <= maxCRnum;
    });
  }

  /* Generate using randomised greedy strategy */
  let chosen = [];
  let bestScore = -Infinity;

  for (let attempt = 0; attempt < 80; attempt++) {
    const trial = tryBuildEncounter(pool, budget, level);
    const rawXP  = trial.reduce((s,m) => s + (ENC_CR_XP[m.cr]||0), 0);
    const adjXP  = rawXP * encXpMult(trial.length);
    const score  = adjXP / budget;               // how close to 1.0 we got
    const penalty = Math.abs(1 - score);
    if (trial.length > 0 && penalty < Math.abs(1 - bestScore)) {
      bestScore = score;
      chosen = trial;
    }
    if (score >= 0.85 && score <= 1.15) break;   // good enough
  }

  /* Fallback: just pick one monster */
  if (!chosen.length) {
    const sorted = [...pool].sort((a,b) =>
      Math.abs((ENC_CR_XP[a.cr]||0) - budget) - Math.abs((ENC_CR_XP[b.cr]||0) - budget)
    );
    if (sorted.length) chosen = [sorted[0]];
  }

  encState.lastResult = { chosen, budget, diff, env, level };
  displayEncounterResults(chosen, budget, diff, env);

  /* Flash generate button */
  const btn = document.getElementById('encGenerateBtn');
  btn.classList.remove('flash');
  void btn.offsetWidth;
  btn.classList.add('flash');
}

function tryBuildEncounter(pool, budget, level) {
  /* Decide monster count target */
  const countWeights = [1,1,2,2,2,3,3,4,4,5,6];
  const targetCount = countWeights[Math.floor(Math.random() * countWeights.length)];
  const mult = encXpMult(targetCount);
  const rawTarget = budget / mult;
  const perTarget = rawTarget / targetCount;

  const result = [];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);

  for (let i = 0; i < targetCount; i++) {
    /* Find a monster whose XP is between 40% and 200% of perTarget */
    const minXP = perTarget * (i === 0 ? 0.35 : 0.35);
    const maxXP = perTarget * 2.0;
    const eligible = shuffled.filter(m => {
      const xp = ENC_CR_XP[m.cr] || 0;
      return xp >= minXP && xp <= maxXP;
    });

    if (eligible.length) {
      result.push(eligible[Math.floor(Math.random() * eligible.length)]);
    } else {
      /* Closest match */
      const closest = shuffled.reduce((best, m) => {
        const xp = ENC_CR_XP[m.cr] || 0;
        return Math.abs(xp - perTarget) < Math.abs((ENC_CR_XP[best.cr]||0) - perTarget) ? m : best;
      }, shuffled[0]);
      if (closest) result.push(closest);
    }
  }

  /* Verify adjusted XP doesn't wildly exceed budget */
  const raw = result.reduce((s,m) => s + (ENC_CR_XP[m.cr]||0), 0);
  if (raw * encXpMult(result.length) > budget * 1.4) return [];
  return result;
}

/* ── Display ── */
function displayEncounterResults(monsters, budget, diff, env) {
  const rawXP = monsters.reduce((s,m) => s + (ENC_CR_XP[m.cr]||0), 0);
  const adjXP = Math.round(rawXP * encXpMult(monsters.length));
  const pct   = Math.min(100, (adjXP / budget * 100)).toFixed(1);

  /* Header */
  const diffColor = ENC_DIFF_COLOR[diff] || '#d4b04a';
  document.getElementById('encEyebrow').textContent  = ENC_DIFF_LABEL[diff] || 'Encounter';
  document.getElementById('encResultsTitle').textContent =
    monsters.length === 1 ? monsters[0].n :
    `${monsters.length} Adversaries`;
  document.getElementById('encResultsTitle').style.color = 'var(--gold-hi)';

  /* XP bar */
  const barWrap = document.getElementById('encXpBarWrap');
  barWrap.style.display = 'block';
  setTimeout(() => {
    document.getElementById('encXpBarFill').style.width = pct + '%';
  }, 80);

  const barFill = document.getElementById('encXpBarFill');
  barFill.style.background = pct > 110
    ? 'linear-gradient(90deg,#c84040,#e06040)'
    : `linear-gradient(90deg,${diffColor},#e07020)`;

  document.getElementById('encXpLeft').textContent  = `${adjXP.toLocaleString()} XP (adj.)`;
  document.getElementById('encXpRight').textContent = `budget: ${budget.toLocaleString()} XP`;

  /* Flavor text */
  const flav = document.getElementById('encFlavor');
  const bank = ENC_FLAVOR_BANK[env] || ENC_FLAVOR_BANK.any;
  flav.textContent = bank[Math.floor(Math.random() * bank.length)];
  flav.style.display = 'block';

  /* Monster grid */
  const grid = document.getElementById('encMonsterGrid');
  grid.innerHTML = monsters.map((m, i) => {
    const typeColor = ENC_TYPE_COLOR[m.t] || 'rgba(200,146,42,.70)';
    const xp = ENC_CR_XP[m.cr] || 0;
    const hpPct = Math.min(100, m.hp / 3);
    return `
    <div class="enc-monster-card" style="--mc-color:${typeColor};animation-delay:${i*55}ms">
      <div class="enc-cr-badge">
        <div class="enc-cr-num">CR</div>
        <div class="enc-cr-num" style="font-size:16px">${m.cr}</div>
        <div class="enc-cr-label">cr</div>
      </div>
      <div class="enc-monster-info">
        <div class="enc-monster-name">${m.n}</div>
        <div class="enc-monster-tags">
          <span class="enc-type-pill">${m.t}</span>
          <span class="enc-monster-xp-label">${xp.toLocaleString()} XP</span>
        </div>
      </div>
      <div class="enc-monster-stats">
        <div class="enc-stat-row">
          <div class="enc-stat">
            <span class="enc-stat-val">${m.hp}</span>
            <span class="enc-stat-key">HP</span>
          </div>
          <div class="enc-stat">
            <span class="enc-stat-val">${m.ac}</span>
            <span class="enc-stat-key">AC</span>
          </div>
        </div>
        <div class="enc-hp-mini">
          <div class="enc-hp-mini-fill" style="width:${hpPct}%"></div>
        </div>
      </div>
    </div>`;
  }).join('');

  /* Show / hide sections */
  document.getElementById('encIdleState').style.display    = 'none';
  document.getElementById('encMonsterScroll').style.display = 'block';
  document.getElementById('encResultsFooter').style.display = 'flex';
  document.getElementById('encDeployBtn').disabled = false;
}

/* ── Deploy to Combat Tracker ── */
function deployEncounterToTracker() {
  if (!encState.lastResult) return;
  const { chosen } = encState.lastResult;

  chosen.forEach(m => {
    const init = Math.floor(Math.random() * 20) + 1 + (m.ib || 0);
    combatants.push({
      id:         'enc_' + Date.now() + '_' + Math.random().toString(36).slice(2),
      name:       m.n,
      type:       'enemy',
      initiative: Math.max(1, Math.min(30, init)),
      hp:         m.hp,
      maxHp:      m.hp,
      ac:         m.ac,
      conditions: [],
      dead:       false,
    });
  });

  /* Sort by initiative and navigate */
  combatants.sort((a,b) => b.initiative - a.initiative);
  activeIdx   = combatants.length > 0 ? 0 : -1;
  combatRound = 1;
  document.getElementById('initRoundNum').textContent = '1';
  renderInitiativeList();
  scheduleSave();
  navigate('initiative', null);
}
