/* ════════════════════════════════════════════════════
   NPC FORGE
════════════════════════════════════════════════════ */
const npcState = { race:'any', gender:'any', class:'any', arch:'any', last:null };

function npcSelect(group, el) {
  const grpId = { race:'npcRaceGroup', gender:'npcGenderGroup', class:'npcClassGroup', arch:'npcArchGroup' }[group];
  document.querySelectorAll('#' + grpId + ' .npc-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  npcState[group === 'class' ? 'class' : group] = el.dataset.val;
}

/* ── Name tables ── */
const NPC_NAMES = {
  human: {
    male:   ['Aldric','Brennan','Corvus','Dorian','Edmund','Gareth','Hadrian','Ivano','Jasper','Keldrin','Leoric','Marius','Norvin','Oswin','Phelan','Rupert','Soren','Theron','Ulric','Vance','Weylin','Xander','Zane','Caius','Draven'],
    female: ['Aelys','Brenna','Calla','Delia','Elara','Freya','Gwenna','Hessa','Irina','Joslin','Kara','Lyra','Maren','Nessa','Opal','Petra','Reva','Serina','Tara','Ulla','Vesna','Wren','Xira','Ysolde','Zara'],
    neutral:['Ash','Birch','Cael','Daen','Emery','Fenn','Greer','Haven','Idris','Joren','Kael','Lane','Meryn','Noel','Ori','Pax','Quinn','Reed','Sage','Tarn','Umber','Vael','Wren','Xen','Yule'],
    last:   ['Ashford','Blackwell','Crane','Dunmore','Evermore','Fairchild','Greystone','Hartwell','Ironton','Jarvis','Kelden','Lorne','Mercer','Nighthollow','Osborne','Pendergast','Quarry','Redmane','Stonefield','Tallow','Umberton','Vayne','Whitmore','Yeldham','Ironwood']
  },
  elf: {
    male:   ['Aelindra','Caladrel','Daelindor','Eradan','Faelen','Galadran','Halinor','Ithiliel','Jorindel','Kaladrel','Liriel','Miridel','Naerindor','Orinlar','Perindel','Qualindor','Rhonadrel','Silvael','Thalindor','Urandel','Vaelindor','Waelindriel','Xanathiel','Ylorendel','Zorandir'],
    female: ['Aelindra','Caladria','Daelindra','Erindra','Faelindra','Galadria','Halinora','Ithilindra','Jorindra','Kaladria','Lirial','Miridra','Naerindra','Orinlara','Perindra','Qualindra','Rhonadria','Silvaela','Thalindra','Urandra','Vaelindra','Waelindriel','Xanathia','Ylorendia','Zorindra'],
    neutral:['Aelindra','Caladrel','Daelindor','Erindra','Faelen','Galadran','Halinor','Ithiliel','Jorindel','Kaladrel'],
    last:   ['Brightleaf','Dawnwhisper','Elmveil','Faewind','Goldenfrond','Highbranch','Ivywood','Jadeleaf','Kindlewind','Lightweave','Moonshadow','Nightbloom','Oakhallow','Petalweave','Quicksilver','Riverwind','Starlance','Thornweave','Umbraveil','Voidweave','Willowmere','Xiravel','Yewhollow','Zephyrwing','Ashenveil']
  },
  dwarf: {
    male:   ['Aldrak','Borvak','Dolgrin','Ebrok','Fundor','Gorkun','Haldrak','Igrak','Jorgund','Kordak','Lundrak','Morduk','Naldrak','Orgrak','Paldrak','Rordak','Saldrak','Tordak','Uldrak','Vordak','Woldrak','Xaldrak','Yordak','Zoldrak','Boldak'],
    female: ['Agna','Brenna','Dagna','Ebba','Frida','Gunda','Helga','Ingra','Jorvun','Korda','Lunda','Morda','Nalda','Orda','Palda','Rorda','Salda','Torda','Ulda','Vorda','Worda','Xalda','Yorda','Zolda','Borda'],
    neutral:['Aldrak','Borvak','Dolgrin','Ebrok','Fundor','Gorkun','Haldrak','Igrak','Jorgund','Kordak'],
    last:   ['Anvilborn','Boulderback','Copperforge','Deepdelve','Emberstrike','Flintrock','Goldhammer','Ironmantle','Kragstone','Lodebearer','Mithrilcore','Oredark','Plaguerock','Quarrystone','Rockmantle','Stonebeard','Thunderpick','Underbrew','Vaultwall','Waraxe','Xendrock','Yoldstone','Zorndrak','Ashpick','Brightforge']
  },
  halfling: {
    male:   ['Alton','Barman','Cade','Dorn','Eldon','Finn','Garret','Hob','Iden','Jasper','Kester','Largo','Merry','Nob','Oswald','Perry','Robin','Sam','Tobias','Ulfgar','Vance','Wilbo','Xan','Yule','Zeb'],
    female: ['Andry','Bree','Cora','Delia','Esme','Flo','Gala','Hilda','Issy','Jillybean','Kira','Lila','Mira','Nora','Opal','Pearl','Rose','Sadie','Tilly','Una','Viola','Willa','Xara','Yola','Zara'],
    neutral:['Alton','Barman','Cade','Dorn','Eldon','Finn','Garret','Hob','Iden','Jasper'],
    last:   ['Applebottom','Barleycorn','Cornfoot','Deepburrow','Elderwick','Fernhollow','Goodbarrel','Haythorn','Ironbottom','Jamfield','Kettlewick','Lightfoot','Merryfield','Nettlebrook','Orefoot','Pipeweed','Quickfield','Rustle','Sandybanks','Tosscobble','Underhill','Wanderfoot','Yellowfield','Zipper','Brightberry']
  },
  'half-orc': {
    male:   ['Argul','Brug','Durg','Farg','Grog','Harg','Igg','Jorg','Krug','Lorg','Morg','Norg','Org','Porg','Rorg','Sorg','Torg','Urg','Vorg','Worg','Xorg','Yorg','Zorg','Drak','Grull'],
    female: ['Arha','Broga','Durga','Farha','Gogha','Hagra','Igga','Jorga','Kruga','Lorga','Morga','Norga','Orga','Porga','Rorga','Sorga','Torga','Urga','Vorga','Worga','Xorga','Yorga','Zorga','Draka','Grulla'],
    neutral:['Argul','Brug','Durg','Farg','Grog','Harg','Igg','Jorg','Krug','Lorg'],
    last:   ['Ashbone','Blacktusk','Cragfang','Darkstrike','Emberfist','Fleshrender','Greyhorn','Ironbone','Knucklefist','Longfang','Meatgrinder','Nightbone','Orebone','Paindrinker','Ragebane','Skullcrusher','Thornfang','Umberbane','Voidbone','Warfang','Xebone','Yordbone','Zordbone','Bloodaxe','Darkhorn']
  },
  tiefling: {
    male:   ['Asmael','Baphos','Calix','Damael','Erebus','Faust','Gorion','Hex','Incendius','Jareth','Kael','Lucien','Malak','Naberius','Orcus','Phlegon','Raum','Seraph','Tyrant','Umbral','Vesper','Wrath','Xander','Zachariel','Malvox'],
    female: ['Asmara','Baphosia','Calixia','Damaera','Erebia','Faustia','Goriona','Hexia','Incendia','Jaretha','Kaelia','Lucina','Malaka','Naberia','Orcusia','Phlegonia','Raumia','Serapha','Tyrantia','Umbria','Vespera','Wrathia','Xandera','Zachariel','Malva'],
    neutral:['Asmael','Baphos','Calix','Damael','Erebus','Faust','Gorion','Hex','Incendius','Jareth'],
    last:   ['Ashblood','Blackfire','Crimsonveil','Darkbrand','Emberbrand','Flameborn','Hellmark','Ironblood','Jademark','Kindleborn','Lostmark','Nightbrand','Obsidianmark','Purpleveil','Ruinmark','Shadowbrand','Thornbrand','Umbrand','Voidmark','Wickedmark','Xefire','Ybrand','Zmark','Bloodmark','Darkfall']
  },
  gnome: {
    male:   ['Alston','Boffin','Codger','Dimble','Eldon','Fibblestib','Gimble','Huddle','Illbee','Jebble','Kibble','Linwe','Murnig','Namble','Orryn','Pibble','Quible','Ribble','Sibble','Tibble','Ulbee','Vibble','Wibble','Xibble','Yibble'],
    female: ['Bimpna','Caramip','Donella','Ellyjobell','Fripple','Gigi','Hilla','Ilyra','Jella','Kella','Lella','Mella','Nella','Orla','Pella','Quillathe','Rella','Sella','Tella','Ulla','Vella','Wella','Xella','Yella','Zella'],
    neutral:['Alston','Boffin','Codger','Dimble','Eldon','Fibblestib','Gimble','Huddle','Illbee','Jebble'],
    last:   ['Beren','Clopplelurp','Daergel','Folkor','Garrick','Hilltopple','Ingbe','Jebble','Kellen','Largrim','Murnig','Nackle','Orryn','Periwinkle','Quillathe','Rossen','Scheppen','Turen','Unkel','Vosser','Waywocket','Xiben','Yerden','Zorren','Springsprocket']
  },
  dragonborn: {
    male:   ['Arjhan','Balasar','Bharash','Donaar','Ghesh','Heskan','Kriv','Medrash','Mehen','Nadarr','Pandjed','Patrin','Rhogar','Shamash','Shedinn','Tarhun','Torinn','Vrrak','Zedaar','Zorek','Ardreth','Bron','Ceth','Drak','Elar'],
    female: ['Akra','Biri','Daar','Farideh','Harann','Havilar','Jheri','Kava','Korinn','Mishann','Nala','Perra','Raiann','Sora','Surina','Thava','Uadjit','Valamaradace','Wivyre','Xalek','Yarjerit','Zann','Ardreth','Brinn','Ceth'],
    neutral:['Arjhan','Balasar','Bharash','Donaar','Ghesh','Heskan','Kriv','Medrash','Mehen','Nadarr'],
    last:   ['Clethtinthiallor','Daardendrian','Delmirev','Drachedandion','Fenkenkabradon','Kepeshkmolik','Kerrhylon','Kimbatuul','Linxakasendalor','Myastan','Nemmonis','Norixius','Ophinshtalajiir','Prexijandilin','Shestendeliath','Turnuroth','Verthisathurgiesh','Yarjerit','Zorianatrix','Aundivyr','Belgoth','Cragmaw','Dawnscale','Emberscale','Frostjaw']
  },
  'half-elf': {
    male:   ['Aelar','Breldar','Caerdyn','Daelindor','Eryndor','Faelindor','Galandor','Haelindor','Iorindor','Jaelindor','Kaelindor','Laelindor','Maelindor','Naelindor','Oaelindor','Paelindor','Qaelindor','Raelindor','Saelindor','Taelindor','Uaelindor','Vaelindor','Waelindor','Xaelindor','Zaelindor'],
    female: ['Aelira','Breldara','Caerdyna','Daelindra','Eryndra','Faelindra','Galindra','Haelindra','Iorindra','Jaelindra','Kaelindra','Laelindra','Maelindra','Naelindra','Oaelindra','Paelindra','Qaelindra','Raelindra','Saelindra','Taelindra','Uaelindra','Vaelindra','Waelindra','Xaelindra','Zaelindra'],
    neutral:['Aelar','Breldar','Caerdyn','Daelindor','Eryndor','Faelindor','Galandor','Haelindor','Iorindor','Jaelindor'],
    last:   ['Ashbrook','Brightwood','Clearwater','Dawnfield','Evenstar','Fairwind','Greymist','Highvale','Ironbark','Jadeleaf','Kindlebrook','Lightpath','Moonsong','Nightflower','Oakenheart','Pathwind','Quickbrook','Riverstar','Silverwood','Thornfield','Umbraveil','Voidmist','Willowbrook','Xiravel','Yewthorn']
  }
};

/* ── Appearances ── */
const NPC_HAIR  = ['raven-black','silver-streaked','auburn','sun-bleached blonde','copper-red','ash grey','chestnut brown','stark white','deep violet','oil-slick black','tawny gold','salt-and-pepper'];
const NPC_EYES  = ['storm-grey','amber','pale blue','deep violet','forest green','coal black','mismatched (one blue, one gold)','heterochromatic','jade green','copper-flecked brown','silver','blood-red'];
const NPC_BUILD = ['lean and wiry','broad-shouldered','slight of frame','powerfully built','willowy','stocky and low-slung','rangy','compact and dense'];
const NPC_AGE   = ['young — barely grown','in their mid-twenties','approaching middle age','weathered but vigorous','grey-templed and experienced','aged but sharp-eyed'];
const NPC_FEATURE = [
  'a scar tracing the jaw from an old duel', 'a constellation of freckles across the nose',
  'ink-stained fingers that never quite clean', 'a permanent slight squint from sun damage',
  'a nervous habit of rubbing a worn ring', 'teeth filed to points in a distant custom',
  'burn scarring on one forearm', 'an ear missing its lobe',
  'a prominent broken nose, poorly set', 'a widow\'s peak so sharp it seems deliberate',
  'pale horizontal scars across the knuckles', 'eyebrows so thick they dominate the face',
  'a subtle limp on the right leg', 'nails bitten ragged to the quick',
  'a beauty mark above the lip', 'faint arcane sigils tattooed on the neck'
];
const NPC_DRESS_BY_CLASS = {
  destitute: ['threadbare wool with crude stitching','patched leather smelling of smoke and grime','mismatched castoffs with rope for a belt','rags layered for warmth, not dignity'],
  common:    ['sturdy linen and leather, clean but plain','serviceable wool with a practical cut','homespun cloth, neat and unpretentious','worn but maintained clothes of simple make'],
  merchant:  ['good wool with subtle trim','a cloak lined in modest but quality fabric','well-cut travelling clothes with hidden pockets','a rich belt that betrays the wealth the clothes try to hide'],
  noble:     ['fine cloth with embroidered hems','silk and brocade worn as a statement','impeccably tailored garments with a house pin','understated elegance that costs more than it shows'],
  royal:     ['cloth of gold threaded through charcoal wool','jewelled clasps on layered silks','garments that announce rank at twenty paces','a livery of unmistakable heraldic design']
};

/* ── Personalities by archetype ── */
const NPC_TRAITS_POS = {
  hero:     ['fiercely loyal','quietly courageous','selfless to a fault','protective of the vulnerable','honest even when it costs them'],
  villain:  ['possessing cold charm','utterly self-possessed','admirably direct about their intentions','disturbingly persuasive','ruthlessly efficient'],
  neutral:  ['pragmatic','discreet','even-handed','reliably self-interested','uncannily observant'],
  trickster:['quick-witted','infectiously charismatic','resourceful under pressure','disarmingly funny','able to blend into any crowd'],
  sage:     ['penetratingly insightful','patient beyond most mortals','encyclopaedic in knowledge','careful with words','a gifted listener'],
  any:      ['fiercely loyal','quiet courage','wry humour','surprising generosity','unsettling perceptiveness','dogged determination','easy warmth','piercing honesty']
};
const NPC_TRAITS_NEG = {
  hero:     ['carries impossible guilt','refuses to ask for help','slow to forgive themselves','sometimes confuses stubbornness with principle'],
  villain:  ['incapable of empathy','prone to rage when crossed','contemptuous of weakness','willing to betray anyone if the price is right'],
  neutral:  ['loyal only to coin','will not take sides','pathologically non-committal','quietly cowardly when stakes rise'],
  trickster:['allergic to honesty','chronically irresponsible','uses humour to avoid everything real','cannot resist a con'],
  sage:     ['profoundly condescending','paralysed by theoretical possibilities','emotionally unavailable','obsessed with abstraction over action'],
  any:      ['carries old shame','prone to jealousy','drinks too much','paranoid about loyalty','slow to trust','reckless when angry','bitter about old wounds','secretive to the point of self-sabotage']
};

/* ── Voice ── */
const NPC_VOICE = [
  'speaks barely above a murmur, forcing people to lean in',
  'loud and relentlessly cheerful, laughing at their own jokes',
  'measured and deliberate, as if each word is being weighed before release',
  'a dry, flat delivery that makes jokes land like stones',
  'quick and breathless, ideas always ahead of the mouth',
  'a careful foreign accent softened by years in the region',
  'formally archaic — full of "thee" and "hath" that sounds habitual, not affected',
  'prone to long pauses that most people mistake for wisdom',
  'talks constantly, filling silence as if afraid of it',
  'a deep voice at complete odds with their slight frame',
  'a habit of starting sentences with a specific creature noise or sound',
  'whispers when lying, somehow more convincing than the truth',
  'frequently trails off mid-sentence, distracted by their own thoughts',
  'uses proverbs in place of direct answers, maddening but often apt'
];

/* ── Mannerisms ── */
const NPC_MANNER = [
  'never quite holds eye contact',
  'has a habit of cracking their knuckles before speaking',
  'chews the inside of their cheek when thinking',
  'drums fingers whenever bored — which is often',
  'always positions themselves with their back to a wall',
  'adjusts their collar or cuffs when nervous',
  'carries a small carved token they fidget with constantly',
  'tilts their head like a bird when they find something interesting',
  'laughs before answering uncomfortable questions',
  'mirrors the posture of whoever they\'re speaking to unconsciously',
  'glances toward exits upon entering any room'
];

/* ── Occupations ── */
const NPC_JOBS_BY_CLASS = {
  destitute: ['beggar and former soldier','scavenger who knows the city\'s underbelly like a second skin','itinerant laborer with wandering eyes','ditch-digger carrying secrets above their station','cutpurse in semi-retirement','fugitive on permanent sabbatical'],
  common:    ['innkeeper who hears everything and says little','blacksmith whose reputation precedes them','farmer with a second life after dark','midwife who has attended every birth in three villages','travelling merchant of modest but honest means','miller whose mill grinds more than grain','herbalist with a sideline in less legal remedies'],
  merchant:  ['spice trader whose routes touch places best left unasked about','moneylender everyone hates but everyone visits','cloth merchant with agents in four cities','ship-owner who prefers to stay ashore','guild factor who controls more than their title suggests','auction house owner with an eye for provenance — and leverage'],
  noble:     ['third-born heir with nothing to inherit and everything to prove','military officer retired to a comfortable compromise','magistrate who has bent enough laws to know exactly how far they bend','landowner whose land hides an embarrassing secret','diplomat assigned to a post considered punishment','spymaster emeritus with too much time and too many old contacts'],
  royal:     ['king\'s herald who has become indispensable','royal treasurer who knows every debt in the realm','court wizard bored of courts and interested in retirement','the monarch\'s illegitimate advisor — officially a secretary','an ageing general who won all the wars and is now losing the peace','a royal in exile, stripped of everything but the accent']
};

/* ── Motivations ── */
const NPC_MOTIVATIONS = {
  hero:     ['to protect a specific person from an unspecified threat they refuse to name','to redeem a terrible decision made years ago in another life','to give their child a world they themselves never had','to honour a vow to someone already dead'],
  villain:  ['to reclaim something taken from them — or that they believe was taken','to ensure that this time, they will not be the one who loses','to prove that the world is exactly as rotten as they know it to be','to accumulate power until no one can ever hurt them again'],
  neutral:  ['to keep their family safe and comfortable, full stop','to pay off a debt that keeps growing','to find one answer to a question that has followed them for twenty years','to survive — whatever that requires today'],
  trickster:['to embarrass someone specific and powerful, just because they can','to find out what everyone is hiding — for the joy of knowing, not the profit','to stay one move ahead of everyone, forever','to make enough money to disappear completely and rebuild somewhere warm'],
  sage:     ['to complete a life\'s research before their body fails','to find a student worthy of everything they know','to prevent a catastrophe they have spent years predicting','to correct a historical wrong that only they remember correctly'],
  any:      ['driven by a grief they refuse to process','searching for a sibling lost in strange circumstances','building toward something they will only describe as "necessary"','following a prophecy they half-believe and half-dread']
};

/* ── Secrets / Flaws ── */
const NPC_SECRETS = {
  hero:     ['once abandoned someone who needed them and built their whole virtue on forgetting it','has a second identity in another city — and a second life','their most celebrated deed was actually a mistake that happened to work out','is slowly dying and has told no one'],
  villain:  ['was once genuinely good and knows it','has one person they would sacrifice everything for, which is a catastrophic vulnerability','built their power on a lie so old they have forgotten the truth beneath it','is terrified — of everything, all the time — and performs cruelty to stay ahead of it'],
  neutral:  ['knows something they are not selling… yet','owes a debt to someone very dangerous and is quietly desperate','has a past identity better left buried','has been watching someone in the party for reasons they will not disclose'],
  trickster:['the con that built their reputation actually broke someone, and they know it','the thing they steal is emotional — they manufacture chaos to feel alive','they are genuinely, deeply lonely and use humour as a moat','their recklessness is grief wearing a different costume'],
  sage:     ['the source of their most famous wisdom was stolen and its true author is dead','they have deliberately failed to share knowledge that would have helped — the reasons are complex','their objectivity broke on one specific subject long ago','they are being blackmailed with a truth that would destroy their legacy'],
  any:      ['carries an object they will never explain','is not who they claim to be','owes an impossible favour to a dangerous party','has done something they consider unforgivable and has been paying for it ever since','knows exactly who is responsible for a local tragedy and is protecting them for private reasons']
};

/* ── Story Hooks ── */
const NPC_HOOKS = {
  hero:     ['Recently learned that someone they are protecting is not what they appear.','Is being followed — they know it, are not sure why, and won\'t accept help.','Has received a message in a dead person\'s handwriting.','Is about to do something selfless that will end very badly for them without intervention.'],
  villain:  ['Has just made an offer to someone who refused, and now the refuser needs protection they don\'t know they need.','Is collecting something. No one knows what yet.','Has an enemy who is more sympathetic than they are, and somehow both parties know this.','Recently suffered a loss that cracked their composure — briefly, visibly.'],
  neutral:  ['Possesses a piece of information they don\'t know is valuable and everyone else is looking for.','Is in the wrong place at the wrong time for a reason that is not a coincidence.','Has been asked to carry a package and hasn\'t opened it yet, but is tempted.','Knows a secret entrance to somewhere important and will trade it — at the wrong moment.'],
  trickster:['Is already running a scheme that tangentially involves one of the players without their knowledge.','Has something that belongs to someone important and sees no reason to return it.','Offers help that is genuine but will cause a new problem while solving the old one.','Can get the party what they need — in exchange for a favour that seems small now.'],
  sage:     ['Knows the answer to the party\'s core question — but will only share it in exchange for a proof of worthiness.','Has been looking for the party. The reasons are alarming.','Holds the last surviving copy of a document someone very powerful wants destroyed.','Is dying and needs to pass knowledge to someone before it is lost. The knowledge is dangerous.'],
  any:      ['Witnessed something they cannot explain and it changed them.','Is involved in a local situation that is bigger than it appears.','Needs an escort to somewhere dangerous for reasons they decline to specify fully.','Has an enemy who will mistake the party for allies if the timing aligns badly.']
};

/* ── Portrait SVGs by race ── */
function npcPortraitSVG(race, gender) {
  // Abstracted rune-style portrait — unique per race via colour + geometry
  const configs = {
    human:     { outer:'rgba(200,160,80,.55)',  mid:'rgba(200,160,80,.35)', inner:'rgba(200,160,80,.80)', glyph:'H' },
    elf:       { outer:'rgba(106,184,120,.55)', mid:'rgba(106,184,120,.35)',inner:'rgba(106,184,120,.80)',glyph:'⟡' },
    dwarf:     { outer:'rgba(180,144,90,.55)',  mid:'rgba(180,144,90,.35)', inner:'rgba(180,144,90,.80)', glyph:'◈' },
    halfling:  { outer:'rgba(210,176,100,.55)', mid:'rgba(210,176,100,.35)',inner:'rgba(210,176,100,.80)',glyph:'◎' },
    'half-orc':{ outer:'rgba(128,168,96,.55)',  mid:'rgba(128,168,96,.35)', inner:'rgba(128,168,96,.80)', glyph:'⧖' },
    tiefling:  { outer:'rgba(192,96,192,.55)',  mid:'rgba(192,96,192,.35)', inner:'rgba(192,96,192,.80)', glyph:'☿' },
    gnome:     { outer:'rgba(104,184,216,.55)', mid:'rgba(104,184,216,.35)',inner:'rgba(104,184,216,.80)',glyph:'✦' },
    dragonborn:{ outer:'rgba(224,112,64,.55)',  mid:'rgba(224,112,64,.35)', inner:'rgba(224,112,64,.80)', glyph:'⚔' },
    'half-elf':{ outer:'rgba(160,216,128,.55)', mid:'rgba(160,216,128,.35)',inner:'rgba(160,216,128,.80)',glyph:'◑' },
  };
  const c = configs[race] || configs.human;
  const sz = 120;
  const cx = sz/2, cy = sz/2, r = sz/2-6;
  // Generate 8-point star pattern
  const pts = Array.from({length:8},(_,i)=>{
    const a = i*45*(Math.PI/180) - Math.PI/2;
    const ri = i%2===0 ? r : r*0.55;
    return `${(cx+ri*Math.cos(a)).toFixed(1)},${(cy+ri*Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  return `<svg viewBox="0 0 ${sz} ${sz}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="pGlow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <radialGradient id="pBg" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="rgba(30,20,10,1)"/><stop offset="100%" stop-color="rgba(8,5,2,1)"/></radialGradient>
    </defs>
    <circle cx="${cx}" cy="${cy}" r="${r+4}" fill="url(#pBg)"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${c.outer}" stroke-width="1.2" stroke-dasharray="6 3"/>
    <polygon points="${pts}" fill="none" stroke="${c.mid}" stroke-width=".9" filter="url(#pGlow)"/>
    <circle cx="${cx}" cy="${cy}" r="${r*0.38}" fill="none" stroke="${c.outer}" stroke-width="1.4"/>
    <circle cx="${cx}" cy="${cy}" r="${r*0.55}" fill="none" stroke="${c.mid}" stroke-width=".7" stroke-dasharray="4 4"/>
    <line x1="${cx}" y1="${cy-r*0.38}" x2="${cx}" y2="${cy+r*0.38}" stroke="${c.mid}" stroke-width=".7"/>
    <line x1="${cx-r*0.38}" y1="${cy}" x2="${cx+r*0.38}" y2="${cy}" stroke="${c.mid}" stroke-width=".7"/>
    <text x="${cx}" y="${cy+6}" text-anchor="middle" font-family="serif" font-size="18" fill="${c.inner}" filter="url(#pGlow)">${c.glyph}</text>
    <circle cx="${cx}" cy="${cy}" r="3.5" fill="${c.inner}" opacity=".6"/>
  </svg>`;
}

/* ── Core random helper ── */
const rnd = arr => arr[Math.floor(Math.random()*arr.length)];

/* ── Main forge function ── */
function forgeNPC() {
  /* Resolve race */
  const allRaces = ['human','elf','dwarf','halfling','half-orc','tiefling','gnome','dragonborn','half-elf'];
  const race = npcState.race === 'any' ? rnd(allRaces) : npcState.race;

  /* Resolve gender */
  const allGenders = ['male','female','neutral'];
  const gender = npcState.gender === 'any' ? rnd(allGenders) : npcState.gender;

  /* Resolve social class */
  const allClasses = ['destitute','common','merchant','noble','royal'];
  const socialClass = npcState.class === 'any' ? rnd(allClasses) : npcState.class;

  /* Resolve archetype */
  const allArchs = ['hero','villain','neutral','trickster','sage'];
  const arch = npcState.arch === 'any' ? rnd(allArchs) : npcState.arch;

  /* ── Name ── */
  const nameTable = NPC_NAMES[race] || NPC_NAMES.human;
  const genderKey  = gender === 'neutral' ? (Math.random()>.5?'male':'female') : gender;
  const firstName  = rnd(nameTable[genderKey] || nameTable.male);
  const lastName   = rnd(nameTable.last);
  const fullName   = `${firstName} ${lastName}`;

  /* ── Title ── */
  const titles = {
    destitute:['the Forgotten','the Wanderer','of Nowhere'],
    common:   ['the Steady','of the Village','the Ordinary'],
    merchant: ['the Trader','of the Guild','the Prosperous'],
    noble:    ['the Honourable','of the House','the Elder'],
    royal:    ['the Exalted','of the Blood','the Sovereign']
  };
  const titleArr = titles[socialClass] || titles.common;
  const title = `${raceLabel(race)}, ${socialClassLabel(socialClass)} — ${rnd(titleArr)}`;

  /* ── Appearance ── */
  const hair    = rnd(NPC_HAIR);
  const eyes    = rnd(NPC_EYES);
  const build   = rnd(NPC_BUILD);
  const age     = rnd(NPC_AGE);
  const feature = rnd(NPC_FEATURE);
  const dress   = rnd(NPC_DRESS_BY_CLASS[socialClass] || NPC_DRESS_BY_CLASS.common);
  const appearance = `${capitalise(build)}, ${age}. ${capitalise(hair)} hair and ${eyes} eyes. ${capitalise(feature)}. Dressed in ${dress}.`;

  /* ── Personality ── */
  const traits_pos = NPC_TRAITS_POS[arch] || NPC_TRAITS_POS.any;
  const traits_neg = NPC_TRAITS_NEG[arch] || NPC_TRAITS_NEG.any;
  const pos = rnd(traits_pos);
  const neg = rnd(traits_neg);
  const personality = `<em>${capitalise(pos)}</em>, but also <em>${neg}</em>.`;

  /* ── Voice & Mannerisms ── */
  const voice  = rnd(NPC_VOICE);
  const manner = rnd(NPC_MANNER);
  const voiceText = `${capitalise(voice)}. ${capitalise(manner)}.`;

  /* ── Occupation ── */
  const jobs = NPC_JOBS_BY_CLASS[socialClass] || NPC_JOBS_BY_CLASS.common;
  const occupation = capitalise(rnd(jobs));

  /* ── Motivation ── */
  const motPool = NPC_MOTIVATIONS[arch] || NPC_MOTIVATIONS.any;
  const motivation = capitalise(rnd(motPool));

  /* ── Secret ── */
  const secPool = NPC_SECRETS[arch] || NPC_SECRETS.any;
  const secret = capitalise(rnd(secPool));

  /* ── Hook ── */
  const hookPool = NPC_HOOKS[arch] || NPC_HOOKS.any;
  const hook = rnd(hookPool);

  /* ── Store last ── */
  npcState.last = { fullName, race, gender, socialClass, arch, title, appearance, personality, voiceText, occupation, motivation, secret, hook };

  /* ── Render ── */
  document.getElementById('npcEyebrow').textContent    = `${raceLabel(race)} · ${capitalise(arch)} · ${capitalise(socialClass)}`;
  document.getElementById('npcResultName').textContent  = fullName;
  document.getElementById('npcResultTitle').textContent = title;

  document.getElementById('npcAppearanceText').textContent  = appearance;
  document.getElementById('npcPersonalityText').innerHTML   = personality;
  document.getElementById('npcOccupationText').textContent  = occupation;
  document.getElementById('npcVoiceText').textContent       = voiceText;
  document.getElementById('npcMotivationText').textContent  = motivation;
  document.getElementById('npcSecretText').textContent      = secret;
  document.getElementById('npcHookText').textContent        = hook;

  /* ── Portrait ── */
  document.getElementById('npcPortraitArea').innerHTML = npcPortraitSVG(race, gender);

  /* ── Tags ── */
  const tagColors = {
    human:'rgba(200,160,80',elf:'rgba(106,184,120',dwarf:'rgba(180,144,90','half-orc':'rgba(128,168,96',
    tiefling:'rgba(192,96,192',gnome:'rgba(104,184,216',dragonborn:'rgba(224,112,64','half-elf':'rgba(160,216,128',
    halfling:'rgba(210,176,100'
  };
  const tc = tagColors[race] || 'rgba(200,146,42';
  const archColor = {hero:'rgba(106,184,120',villain:'rgba(200,80,80',neutral:'rgba(106,152,184',trickster:'rgba(224,112,32',sage:'rgba(168,128,216'}[arch] || 'rgba(138,106,184';
  document.getElementById('npcPortraitTags').innerHTML =
    `<span class="npc-tag" style="color:${tc},.80);border-color:${tc},.30);background:${tc},.08)">${raceLabel(race)}</span>` +
    `<span class="npc-tag" style="color:${archColor},.80);border-color:${archColor},.30);background:${archColor},.08)">${capitalise(arch)}</span>` +
    `<span class="npc-tag" style="color:rgba(200,146,42,.70);border-color:rgba(200,146,42,.25);background:rgba(200,146,42,.07)">${capitalise(socialClass)}</span>`;

  /* ── Show / hide ── */
  document.getElementById('npcIdleState').style.display      = 'none';
  document.getElementById('npcResultScroll').style.display   = 'block';
  document.getElementById('npcResultFooter').style.display   = 'flex';
  document.getElementById('npcSaveConfirm').style.opacity    = '0';

  /* ── Animate cards ── */
  document.querySelectorAll('#page-npc .npc-card, #page-npc .npc-portrait-card').forEach((el,i) => {
    el.style.animationDelay = (i * 45) + 'ms';
    el.style.animation = 'none'; void el.offsetWidth;
    el.style.animation = '';
  });

  /* ── Flash button ── */
  const btn = document.getElementById('npcForgeBtn');
  btn.classList.remove('flash'); void btn.offsetWidth; btn.classList.add('flash');
}

/* ── Save to Session Notes ── */
function npcSaveToNotes() {
  if (!npcState.last) return;
  const d = npcState.last;
  const block = [
    `# ${d.fullName}`,
    `**${d.title}**`,
    '',
    `## Appearance`,
    d.appearance,
    '',
    `## Personality`,
    d.personality.replace(/<[^>]+>/g,''),
    '',
    `## Occupation`,
    d.occupation,
    '',
    `## Voice & Mannerisms`,
    d.voiceText,
    '',
    `## Motivation`,
    d.motivation,
    '',
    `## Secret / Flaw`,
    d.secret,
    '',
    `## Story Hook`,
    d.hook,
    ''
  ].join('\n');

  /* Append to notes textarea */
  const ta = document.getElementById('noteTextarea');
  if (ta) {
    const sep = ta.value.trim() ? '\n\n---\n\n' : '';
    ta.value += sep + block;
    /* Trigger change event */
    ta.dispatchEvent(new Event('input'));
  }

  /* Flash confirm */
  const c = document.getElementById('npcSaveConfirm');
  c.style.opacity = '1';
  setTimeout(() => { c.style.opacity = '0'; }, 2200);

  /* Navigate to notes briefly... or just leave */
}

/* ── Helpers ── */
function capitalise(str) { return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''; }
function raceLabel(r) {
  const labels = {human:'Human',elf:'Elf',dwarf:'Dwarf',halfling:'Halfling','half-orc':'Half-Orc',tiefling:'Tiefling',gnome:'Gnome',dragonborn:'Dragonborn','half-elf':'Half-Elf'};
  return labels[r] || capitalise(r);
}
function socialClassLabel(c) {
  const labels = {destitute:'Destitute',common:'Common',merchant:'Merchant',noble:'Noble',royal:'Royal'};
  return labels[c] || capitalise(c);
}
