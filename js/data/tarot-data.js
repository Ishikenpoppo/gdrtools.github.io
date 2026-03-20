/* ════════════════════════════════════════════════════
   TAROT DATA — 22 Major Arcana
════════════════════════════════════════════════════ */
const TAROT = [
  {
    id:0, numeral:'0', name:'The Fool',
    keywords:'Beginnings · Innocence · Spontaneity · Free Spirit',
    color:'#6a9fd8',
    meaning:'The Fool stands at the precipice of a great journey, unburdened by past failures and unclouded by future fears. He carries only what is essential and leaps before he looks — not from stupidity, but from a profound trust in the unfolding of things. Something is beginning. Embrace it with open hands.',
    shadow:'Recklessness dressed as courage. Is this leap truly faith, or an escape from responsibility?',
    prompts:['What is your character leaving behind by taking this step?','What would they do if they knew they could not fail — and does it matter?','Is their innocence a strength here, or a blind spot that will cost them?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(106,159,216,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(106,159,216,.20)" stroke-width=".8"/>
<circle cx="100" cy="52" r="22" fill="none" stroke="rgba(255,220,100,.7)" stroke-width="1.5"/>
<circle cx="100" cy="52" r="14" fill="rgba(255,220,100,.12)" stroke="rgba(255,220,100,.4)" stroke-width="1"/>
<text x="100" y="58" text-anchor="middle" font-family="serif" font-size="16" fill="rgba(255,220,100,.9)">☀</text>
<line x1="60" y1="180" x2="100" y2="240" stroke="rgba(106,159,216,.6)" stroke-width="1.5"/>
<line x1="140" y1="180" x2="100" y2="240" stroke="rgba(106,159,216,.6)" stroke-width="1.5"/>
<line x1="60" y1="180" x2="140" y2="180" stroke="rgba(106,159,216,.6)" stroke-width="1.5"/>
<circle cx="100" cy="165" r="16" fill="rgba(106,159,216,.15)" stroke="rgba(106,159,216,.5)" stroke-width="1.2"/>
<line x1="100" y1="149" x2="100" y2="128" stroke="rgba(200,180,255,.5)" stroke-width="1.2"/>
<circle cx="100" cy="122" r="5" fill="none" stroke="rgba(200,180,255,.6)" stroke-width="1"/>
<path d="M82 118 Q100 106 118 118" fill="none" stroke="rgba(200,180,255,.4)" stroke-width="1"/>
<line x1="100" y1="240" x2="100" y2="280" stroke="rgba(106,159,216,.5)" stroke-width="1.2"/>
<path d="M70 255 Q100 245 130 255" fill="none" stroke="rgba(106,159,216,.4)" stroke-width="1"/>
<path d="M30 290 Q100 260 170 290" fill="none" stroke="rgba(106,159,216,.25)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="3" fill="rgba(106,159,216,.65)">0</text>`
  },
  {
    id:1, numeral:'I', name:'The Magician',
    keywords:'Power · Skill · Concentration · Action',
    color:'#f0b840',
    meaning:'The Magician commands all four elements — wand, cup, sword, and pentacle — laid before him as instruments, not toys. He channels the infinite above into the manifest below. What you need is already in your hands. The question is not one of resources but of will and focus.',
    shadow:'Manipulation. Is this power being used honestly, or to control those around you?',
    prompts:['What gifts does your character possess that they have not yet fully wielded?','Are they creating, or are they performing — and who is the audience?','What would they conjure if they trusted their own capability?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(240,184,64,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(240,184,64,.20)" stroke-width=".8"/>
<path d="M100 30 Q108 42 100 54 Q92 42 100 30Z" fill="rgba(240,184,64,.8)" stroke="rgba(255,230,140,.6)" stroke-width=".8"/>
<path d="M100 30 Q112 38 108 52 Q96 48 100 30Z" fill="rgba(200,120,20,.5)"/>
<line x1="100" y1="54" x2="100" y2="95" stroke="rgba(240,184,64,.6)" stroke-width="1.5"/>
<path d="M85 100 A15 15 0 1 1 115 100 A15 15 0 1 1 85 100" fill="none" stroke="rgba(240,184,64,.7)" stroke-width="1.2"/>
<text x="100" y="105" text-anchor="middle" font-family="serif" font-size="12" fill="rgba(240,184,64,.9)">∞</text>
<circle cx="100" cy="130" r="18" fill="rgba(240,184,64,.10)" stroke="rgba(240,184,64,.45)" stroke-width="1.2"/>
<line x1="100" y1="112" x2="100" y2="148" stroke="rgba(240,184,64,.5)" stroke-width="1"/>
<line x1="82" y1="130" x2="118" y2="130" stroke="rgba(240,184,64,.5)" stroke-width="1"/>
<rect x="62" y="200" width="18" height="24" rx="2" fill="none" stroke="rgba(240,184,64,.5)" stroke-width="1"/>
<circle cx="100" cy="212" r="10" fill="none" stroke="rgba(240,184,64,.5)" stroke-width="1"/>
<path d="M118 200 L122 224" stroke="rgba(240,184,64,.5)" stroke-width="1.2"/>
<path d="M130 205 L120 220" stroke="rgba(240,184,64,.5)" stroke-width="1.2"/>
<path d="M60 260 Q100 248 140 260" fill="none" stroke="rgba(240,184,64,.30)" stroke-width="1"/>
<path d="M50 275 Q100 260 150 275" fill="none" stroke="rgba(240,184,64,.20)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="3" fill="rgba(240,184,64,.65)">I</text>`
  },
  {
    id:2, numeral:'II', name:'The High Priestess',
    keywords:'Intuition · Sacred Knowledge · Duality · Mystery',
    color:'#9ab8e8',
    meaning:'Between two pillars — one dark, one bright — she sits veiled, guardian of what cannot be spoken, only felt. She does not teach; she initiates. The answers you seek are already within you, submerged beneath the noise of action and urgency. Be still. Listen to what the silence is saying.',
    shadow:'Withdrawal into passivity. Knowledge hoarded but never applied.',
    prompts:['What truth has your character been ignoring because it is uncomfortable?','What do they know instinctively that they refuse to voice aloud?','Is there a choice before them where logic fails but the heart already knows the answer?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(154,184,232,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(154,184,232,.20)" stroke-width=".8"/>
<rect x="50" y="60" width="12" height="160" rx="2" fill="rgba(40,40,40,.8)" stroke="rgba(154,184,232,.40)" stroke-width="1"/>
<rect x="138" y="60" width="12" height="160" rx="2" fill="rgba(200,200,240,.08)" stroke="rgba(255,255,255,.25)" stroke-width="1"/>
<text x="56" y="56" text-anchor="middle" font-family="serif" font-size="8" fill="rgba(100,100,160,.8)">B</text>
<text x="144" y="56" text-anchor="middle" font-family="serif" font-size="8" fill="rgba(220,220,255,.8)">J</text>
<path d="M62 70 Q100 55 138 70" fill="rgba(30,20,50,.6)" stroke="rgba(154,184,232,.35)" stroke-width="1"/>
<circle cx="100" cy="100" r="20" fill="rgba(154,184,232,.08)" stroke="rgba(154,184,232,.45)" stroke-width="1.2"/>
<path d="M88 96 Q100 86 112 96" fill="none" stroke="rgba(200,220,255,.6)" stroke-width="1"/>
<circle cx="100" cy="108" r="6" fill="rgba(200,220,255,.15)" stroke="rgba(200,220,255,.5)" stroke-width=".8"/>
<path d="M75 130 L125 130 L125 200 Q100 215 75 200 Z" fill="rgba(30,20,60,.5)" stroke="rgba(154,184,232,.30)" stroke-width="1"/>
<line x1="100" y1="130" x2="100" y2="215" stroke="rgba(154,184,232,.20)" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M80 150 L100 140 L120 150 L120 170 L100 180 L80 170Z" fill="none" stroke="rgba(154,184,232,.35)" stroke-width=".8"/>
<circle cx="100" cy="230" r="14" fill="none" stroke="rgba(154,184,232,.40)" stroke-width="1"/>
<path d="M86 226 Q100 218 114 226 Q114 238 100 242 Q86 238 86 226Z" fill="rgba(154,184,232,.10)"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(154,184,232,.65)">II</text>`
  },
  {
    id:3, numeral:'III', name:'The Empress',
    keywords:'Fertility · Abundance · Nurturing · Creation',
    color:'#7ec87e',
    meaning:'She is the living world, crowned with twelve stars, robed in pomegranates, enthroned amid ripening wheat. What she touches grows. The Empress embodies the generative force — not just of life, but of art, culture, and care. Something in your situation is ready to flourish, if tended with patience.',
    shadow:'Smothering. Control disguised as love. Dependency mistaken for devotion.',
    prompts:['What is your character nurturing — and is it growing toward freedom or toward dependence on them?','What would they create if they stopped waiting for permission?','Who in their life needs gentleness rather than solutions?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(126,200,126,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(126,200,126,.20)" stroke-width=".8"/>
<circle cx="100" cy="60" r="28" fill="none" stroke="rgba(126,200,126,.35)" stroke-width="1" stroke-dasharray="5,4"/>
${Array.from({length:12},(_,i)=>{const a=i*30*Math.PI/180;const x=100+28*Math.cos(a);const y=60+28*Math.sin(a);return`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="rgba(255,220,100,.55)" stroke="rgba(255,220,100,.3)" stroke-width=".6"/>`}).join('')}
<path d="M78 80 Q100 68 122 80 L118 125 Q100 138 82 125 Z" fill="rgba(126,200,126,.12)" stroke="rgba(126,200,126,.40)" stroke-width="1.2"/>
<text x="100" y="108" text-anchor="middle" font-family="serif" font-size="18" fill="rgba(126,200,126,.70)">♀</text>
<path d="M55 150 Q100 135 145 150 L145 220 Q100 240 55 220 Z" fill="rgba(126,200,126,.08)" stroke="rgba(126,200,126,.30)" stroke-width="1"/>
${Array.from({length:6},(_,i)=>`<path d="M${60+i*16} 220 Q${68+i*16} 200 ${60+i*16} 185" fill="none" stroke="rgba(126,200,126,.35)" stroke-width="1"/><circle cx="${60+i*16}" cy="183" r="4" fill="rgba(255,200,80,.25)" stroke="rgba(255,200,80,.40)" stroke-width=".8"/>`).join('')}
<path d="M40 258 Q100 242 160 258" fill="none" stroke="rgba(126,200,126,.28)" stroke-width="1"/>
<path d="M35 272 Q100 255 165 272" fill="none" stroke="rgba(126,200,126,.18)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(126,200,126,.65)">III</text>`
  },
  {
    id:4, numeral:'IV', name:'The Emperor',
    keywords:'Authority · Structure · Control · Fatherhood',
    color:'#e87048',
    meaning:'He rules from a stone throne carved with rams, symbols of Mars — the planet of action and will. Behind him, mountains do not yield. The Emperor has built order from chaos and he will not see it unravelled. Authority is his instrument and his prison. Structure enables; it can also calcify.',
    shadow:'Tyranny. Rigidity that mistakes iron control for genuine strength.',
    prompts:['What authority does your character hold, and are they using it justly?','What rules do they cling to because changing them would mean confronting who they really are?','When did structure become a cage — and do they know it?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(232,112,72,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(232,112,72,.20)" stroke-width=".8"/>
<path d="M65 60 L135 60 L135 55 L150 65 L135 75 L135 70 L65 70 L65 75 L50 65 L65 55 Z" fill="rgba(232,112,72,.15)" stroke="rgba(232,112,72,.50)" stroke-width="1"/>
<rect x="70" y="80" width="60" height="100" rx="3" fill="rgba(232,112,72,.08)" stroke="rgba(232,112,72,.35)" stroke-width="1.2"/>
<circle cx="70" cy="80" r="8" fill="none" stroke="rgba(232,112,72,.40)" stroke-width="1"/>
<circle cx="130" cy="80" r="8" fill="none" stroke="rgba(232,112,72,.40)" stroke-width="1"/>
<path d="M85 95 L115 95 L115 145 L85 145 Z" fill="rgba(232,112,72,.12)"/>
<line x1="100" y1="80" x2="100" y2="180" stroke="rgba(232,112,72,.25)" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="70" y1="130" x2="130" y2="130" stroke="rgba(232,112,72,.25)" stroke-width="1" stroke-dasharray="3,3"/>
<rect x="55" y="185" width="90" height="55" rx="2" fill="rgba(232,112,72,.07)" stroke="rgba(232,112,72,.28)" stroke-width="1"/>
<path d="M55 205 L145 205" stroke="rgba(232,112,72,.18)" stroke-width=".8"/>
<path d="M55 220 L145 220" stroke="rgba(232,112,72,.18)" stroke-width=".8"/>
<path d="M40 260 L55 242 L145 242 L160 260 L160 280 L40 280 Z" fill="rgba(232,112,72,.07)" stroke="rgba(232,112,72,.25)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(232,112,72,.65)">IV</text>`
  },
  {
    id:5, numeral:'V', name:'The Hierophant',
    keywords:'Tradition · Conformity · Morality · Spiritual Wisdom',
    color:'#d4a044',
    meaning:'The Hierophant holds the keys to two realms: the earthly and the divine. He teaches not by innovation but by transmission — the wisdom accumulated by those who came before, refined by ritual and institution. There is a tradition, a teacher, or an established way that speaks directly to what you face. Is it worth heeding?',
    shadow:'Dogma. The letter of the law killing its spirit.',
    prompts:['What tradition or teaching shapes your character\'s worldview — even if they have abandoned it?','Who mentored them, and how much of that person\'s voice still lives in their choices?','Is there a code they follow out of conviction, or merely out of habit and fear of judgment?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(212,160,68,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(212,160,68,.20)" stroke-width=".8"/>
<rect x="45" y="55" width="14" height="150" rx="2" fill="rgba(212,160,68,.08)" stroke="rgba(212,160,68,.35)" stroke-width="1"/>
<rect x="141" y="55" width="14" height="150" rx="2" fill="rgba(212,160,68,.08)" stroke="rgba(212,160,68,.35)" stroke-width="1"/>
<line x1="100" y1="60" x2="100" y2="100" stroke="rgba(212,160,68,.6)" stroke-width="2"/>
<line x1="85" y1="75" x2="115" y2="75" stroke="rgba(212,160,68,.6)" stroke-width="2"/>
<line x1="85" y1="85" x2="115" y2="85" stroke="rgba(212,160,68,.5)" stroke-width="1.5"/>
<circle cx="100" cy="115" r="16" fill="rgba(212,160,68,.10)" stroke="rgba(212,160,68,.40)" stroke-width="1.2"/>
<text x="100" y="121" text-anchor="middle" font-family="serif" font-size="16" fill="rgba(212,160,68,.80)">☩</text>
<path d="M70 145 Q100 132 130 145 L130 190 Q100 205 70 190Z" fill="rgba(212,160,68,.07)" stroke="rgba(212,160,68,.28)" stroke-width="1"/>
<circle cx="82" cy="215" r="12" fill="none" stroke="rgba(212,160,68,.35)" stroke-width="1"/>
<path d="M76 218 L88 218 M82 212 L82 224" stroke="rgba(212,160,68,.5)" stroke-width="1.2"/>
<circle cx="118" cy="215" r="12" fill="none" stroke="rgba(212,160,68,.35)" stroke-width="1"/>
<path d="M112 218 L124 218 M118 212 L118 224" stroke="rgba(212,160,68,.5)" stroke-width="1.2"/>
<path d="M50 250 Q100 235 150 250" fill="none" stroke="rgba(212,160,68,.28)" stroke-width="1"/>
<path d="M45 265 Q100 248 155 265" fill="none" stroke="rgba(212,160,68,.18)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(212,160,68,.65)">V</text>`
  },
  {
    id:6, numeral:'VI', name:'The Lovers',
    keywords:'Love · Harmony · Alignment · Choice',
    color:'#e8a060',
    meaning:'Two figures stand beneath an angel whose blessing divides as it unifies. This card is not merely about romance — it is about alignment: of desire and values, of action and belief. A crossroads is here. The choice before you is not between good and bad, but between two goods, which means something must be sacrificed.',
    shadow:'Temptation. Choosing what glitters over what endures.',
    prompts:['What two paths does your character stand between — and what will each one cost them?','Are they making this choice from love or from fear of being alone?','What would they choose if no one else would ever know the result?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(232,160,96,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(232,160,96,.20)" stroke-width=".8"/>
<circle cx="100" cy="52" r="20" fill="rgba(255,200,80,.12)" stroke="rgba(255,200,80,.55)" stroke-width="1.2"/>
<path d="M90 44 L100 60 L110 44Z" fill="rgba(255,200,80,.25)" stroke="rgba(255,200,80,.50)" stroke-width=".8"/>
<path d="M80 80 Q100 65 120 80" fill="none" stroke="rgba(255,200,80,.40)" stroke-width="1.2"/>
<circle cx="72" cy="145" r="14" fill="rgba(232,160,96,.12)" stroke="rgba(232,160,96,.40)" stroke-width="1.2"/>
<line x1="72" y1="159" x2="72" y2="195" stroke="rgba(232,160,96,.40)" stroke-width="1.2"/>
<path d="M58 175 Q72 168 86 175" fill="none" stroke="rgba(232,160,96,.35)" stroke-width="1"/>
<path d="M58 195 Q72 202 86 195" fill="none" stroke="rgba(232,160,96,.30)" stroke-width="1"/>
<circle cx="128" cy="145" r="14" fill="rgba(232,160,96,.12)" stroke="rgba(232,160,96,.40)" stroke-width="1.2"/>
<line x1="128" y1="159" x2="128" y2="195" stroke="rgba(232,160,96,.40)" stroke-width="1.2"/>
<path d="M114 175 Q128 168 142 175" fill="none" stroke="rgba(232,160,96,.35)" stroke-width="1"/>
<path d="M114 195 Q128 202 142 195" fill="none" stroke="rgba(232,160,96,.30)" stroke-width="1"/>
<path d="M86 138 Q100 128 114 138" fill="none" stroke="rgba(255,180,80,.45)" stroke-width="1"/>
<path d="M96 128 L100 118 L104 128" fill="rgba(255,180,80,.25)" stroke="rgba(255,180,80,.45)" stroke-width=".8"/>
<path d="M40 250 Q100 230 160 250" fill="none" stroke="rgba(232,160,96,.28)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(232,160,96,.65)">VI</text>`
  },
  {
    id:7, numeral:'VII', name:'The Chariot',
    keywords:'Control · Willpower · Victory · Determination',
    color:'#78b8e8',
    meaning:'He rides a canopied throne drawn by two sphinxes — one dark, one light — held not by reins but by the force of his will alone. Opposing forces are not resolved here; they are mastered. Victory is possible, but only if the driver acknowledges the tension and harnesses it, not denies it. Move forward, decisively.',
    shadow:'Aggression without direction. Running over others in the rush to win.',
    prompts:['What opposing forces within your character are they trying to balance right now?','Are they pushing forward with discipline or with desperation?','What would genuine victory look like — and would it satisfy them?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(120,184,232,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(120,184,232,.20)" stroke-width=".8"/>
${Array.from({length:8},(_,i)=>`<circle cx="${20+i*22}" cy="42" r="4" fill="rgba(255,220,100,.${i%2?'45':'30'})" stroke="rgba(255,220,100,.35)" stroke-width=".6"/>`).join('')}
<rect x="55" y="60" width="90" height="80" rx="3" fill="rgba(120,184,232,.08)" stroke="rgba(120,184,232,.35)" stroke-width="1.2"/>
<line x1="55" y1="80" x2="145" y2="80" stroke="rgba(120,184,232,.20)" stroke-width=".8"/>
<circle cx="100" cy="100" r="16" fill="rgba(120,184,232,.12)" stroke="rgba(120,184,232,.40)" stroke-width="1"/>
<text x="100" y="106" text-anchor="middle" font-family="serif" font-size="14" fill="rgba(120,184,232,.80)">☽</text>
<line x1="55" y1="140" x2="75" y2="180" stroke="rgba(120,184,232,.40)" stroke-width="1.2"/>
<line x1="145" y1="140" x2="125" y2="180" stroke="rgba(120,184,232,.40)" stroke-width="1.2"/>
<ellipse cx="75" cy="192" rx="16" ry="10" fill="rgba(200,200,180,.10)" stroke="rgba(200,200,180,.35)" stroke-width="1"/>
<ellipse cx="125" cy="192" rx="16" ry="10" fill="rgba(200,200,180,.10)" stroke="rgba(200,200,180,.35)" stroke-width="1"/>
<line x1="75" y1="182" x2="75" y2="150" stroke="rgba(120,184,232,.30)" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="125" y1="182" x2="125" y2="150" stroke="rgba(120,184,232,.30)" stroke-width="1" stroke-dasharray="4,3"/>
<path d="M75 215 Q100 225 125 215" fill="none" stroke="rgba(120,184,232,.28)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(120,184,232,.65)">VII</text>`
  },
  {
    id:8, numeral:'VIII', name:'Strength',
    keywords:'Courage · Patience · Compassion · Inner Power',
    color:'#e8c060',
    meaning:'A woman gently closes the jaws of a lion. Above her, the lemniscate turns — the same symbol worn by the Magician. Her power is not brute force but the deeper strength of one who has made peace with their own wildness. She does not defeat the beast; she befriends it. The greatest battles are interior ones.',
    shadow:'Suppression. Forcing a smile over unaddressed rage or grief.',
    prompts:['What is the "lion" your character carries — the part of themselves they fear?','Are they confronting it with compassion or trying to lock it away?','Where might their vulnerability actually be their most formidable strength?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(232,192,96,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(232,192,96,.20)" stroke-width=".8"/>
<path d="M100 40 Q112 52 100 64 Q88 52 100 40Z" fill="rgba(232,192,96,.25)" stroke="rgba(232,192,96,.60)" stroke-width=".8"/>
<path d="M88 52 Q84 46 90 40 Q100 35 110 40 Q116 46 112 52" fill="none" stroke="rgba(232,192,96,.40)" stroke-width=".8"/>
<circle cx="100" cy="68" r="3" fill="rgba(232,192,96,.6)"/>
<circle cx="100" cy="105" r="20" fill="rgba(232,192,96,.08)" stroke="rgba(232,192,96,.35)" stroke-width="1.2"/>
<path d="M84 98 Q100 88 116 98" fill="none" stroke="rgba(232,192,96,.45)" stroke-width="1"/>
<path d="M80 108 L88 120 Q100 128 112 120 L120 108" fill="none" stroke="rgba(232,192,96,.35)" stroke-width="1"/>
<path d="M60 155 Q100 140 140 155 Q148 175 136 195 Q100 215 64 195 Q52 175 60 155Z" fill="rgba(232,192,96,.07)" stroke="rgba(232,192,96,.30)" stroke-width="1.2"/>
<path d="M72 165 L80 175 Q100 182 120 175 L128 165" fill="none" stroke="rgba(232,192,96,.35)" stroke-width="1.2"/>
<circle cx="76" cy="162" r="5" fill="rgba(232,192,96,.20)" stroke="rgba(232,192,96,.40)" stroke-width=".8"/>
<circle cx="124" cy="162" r="5" fill="rgba(232,192,96,.20)" stroke="rgba(232,192,96,.40)" stroke-width=".8"/>
<path d="M50 245 Q100 228 150 245" fill="none" stroke="rgba(232,192,96,.28)" stroke-width="1"/>
<path d="M45 260 Q100 243 155 260" fill="none" stroke="rgba(232,192,96,.18)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="1" fill="rgba(232,192,96,.65)">VIII</text>`
  },
  {
    id:9, numeral:'IX', name:'The Hermit',
    keywords:'Soul-Searching · Solitude · Guidance · Withdrawal',
    color:'#a0b8a0',
    meaning:'He stands alone on the peak, lantern raised, not to find his own way — he already knows it — but to illuminate the path for those who follow. The Hermit has turned away from the world not from cowardice but because only in stillness can certain things be heard. A time of deliberate solitude may now be exactly what is needed.',
    shadow:'Isolation as avoidance. The sage who has forgotten how to return.',
    prompts:['What truth would your character discover if they spent one week in absolute silence?','Are they withdrawing to reflect, or to hide from those they have hurt?','What lantern do they carry — what hard-won wisdom might guide someone else?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(160,184,160,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(160,184,160,.20)" stroke-width=".8"/>
<polygon points="100,30 140,90 60,90" fill="rgba(255,220,100,.08)" stroke="rgba(255,220,100,.40)" stroke-width="1"/>
<circle cx="100" cy="68" r="10" fill="rgba(255,220,100,.20)" stroke="rgba(255,220,100,.60)" stroke-width="1"/>
<path d="M100 58 L100 42" stroke="rgba(255,220,100,.50)" stroke-width="1"/>
<circle cx="100" cy="68" r="4" fill="rgba(255,220,100,.70)"/>
<circle cx="100" cy="120" r="18" fill="rgba(160,184,160,.08)" stroke="rgba(160,184,160,.35)" stroke-width="1.2"/>
<path d="M86 116 Q100 106 114 116" fill="none" stroke="rgba(160,184,160,.45)" stroke-width="1"/>
<line x1="100" y1="138" x2="100" y2="185" stroke="rgba(160,184,160,.40)" stroke-width="1.2"/>
<path d="M75 165 Q100 155 125 165" fill="none" stroke="rgba(160,184,160,.35)" stroke-width="1"/>
<path d="M100 185 L80 225" stroke="rgba(160,184,160,.35)" stroke-width="1.2"/>
<line x1="80" y1="225" x2="80" y2="260" stroke="rgba(160,184,160,.45)" stroke-width="1.5"/>
<path d="M30 290 Q100 265 170 285" fill="none" stroke="rgba(160,184,160,.28)" stroke-width="1.5"/>
<path d="M20 305 Q100 278 180 300" fill="none" stroke="rgba(160,184,160,.15)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(160,184,160,.65)">IX</text>`
  },
  {
    id:10, numeral:'X', name:'Wheel of Fortune',
    keywords:'Fate · Cycles · Luck · Destiny',
    color:'#d4a44a',
    meaning:'The Wheel turns — Anubis rises, the Sphinx holds the summit, the serpent descends. At the hub: TARO, TORA, ROTA — word, law, wheel — cycling endlessly. Nothing stays at the top forever; nothing stays at the bottom either. What changes must be acknowledged. What endures through the change is the real lesson.',
    shadow:'Fatalism. Surrendering agency to "whatever will be."',
    prompts:['What cycle is your character caught in — and do they see it?','What must they release for the wheel to carry them upward again?','If fortune turned completely today, what of their character would remain unchanged?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(212,164,74,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(212,164,74,.20)" stroke-width=".8"/>
<circle cx="100" cy="145" r="70" fill="none" stroke="rgba(212,164,74,.30)" stroke-width="1.2"/>
<circle cx="100" cy="145" r="55" fill="none" stroke="rgba(212,164,74,.20)" stroke-width="1"/>
<circle cx="100" cy="145" r="25" fill="rgba(212,164,74,.08)" stroke="rgba(212,164,74,.40)" stroke-width="1.2"/>
${Array.from({length:8},(_,i)=>{const a=i*45*Math.PI/180;const x1=100+25*Math.cos(a);const y1=145+25*Math.sin(a);const x2=100+55*Math.cos(a);const y2=145+55*Math.sin(a);return`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(212,164,74,.25)" stroke-width="1"/>`}).join('')}
<text x="100" y="135" text-anchor="middle" font-family="serif" font-size="8" fill="rgba(212,164,74,.80)" letter-spacing="4">TARO</text>
<text x="100" y="148" text-anchor="middle" font-family="serif" font-size="8" fill="rgba(212,164,74,.60)" letter-spacing="3">ROTA</text>
<text x="100" y="161" text-anchor="middle" font-family="serif" font-size="8" fill="rgba(212,164,74,.40)" letter-spacing="3">TORA</text>
<circle cx="100" cy="75" r="8" fill="none" stroke="rgba(212,164,74,.55)" stroke-width="1"/>
<path d="M96 71 L100 66 L104 71 L108 79 L100 83 L92 79 Z" fill="rgba(212,164,74,.20)"/>
<circle cx="170" cy="145" r="7" fill="none" stroke="rgba(212,164,74,.45)" stroke-width="1"/>
<path d="M167 142 Q175 145 167 149" fill="none" stroke="rgba(212,164,74,.55)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="3" fill="rgba(212,164,74,.65)">X</text>`
  },
  {
    id:11, numeral:'XI', name:'Justice',
    keywords:'Fairness · Truth · Law · Cause and Effect',
    color:'#d4c060',
    meaning:'She sits between the pillars of duality, sword raised in the right hand, scales balanced in the left. Justice does not favour; it weighs. Every action you have taken has a counterweight somewhere. This card asks: when the scales are placed before you, will what you have done tip them toward the life you wish to lead?',
    shadow:'Judgmentalism. Using principle as a weapon rather than a compass.',
    prompts:['What debt — moral, social, or karmic — does your character owe and have not yet paid?','Are they seeking justice or revenge, and do they know the difference?','If their choices were weighed impartially today, what verdict would they deserve?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(212,192,96,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(212,192,96,.20)" stroke-width=".8"/>
<rect x="55" y="60" width="12" height="150" rx="2" fill="rgba(212,192,96,.08)" stroke="rgba(212,192,96,.35)" stroke-width="1"/>
<rect x="133" y="60" width="12" height="150" rx="2" fill="rgba(212,192,96,.08)" stroke="rgba(212,192,96,.35)" stroke-width="1"/>
<line x1="100" y1="75" x2="100" y2="105" stroke="rgba(212,192,96,.50)" stroke-width="1.5"/>
<line x1="72" y1="90" x2="128" y2="90" stroke="rgba(212,192,96,.50)" stroke-width="1.5"/>
<line x1="72" y1="90" x2="72" y2="115" stroke="rgba(212,192,96,.40)" stroke-width="1"/>
<line x1="128" y1="90" x2="128" y2="118" stroke="rgba(212,192,96,.40)" stroke-width="1"/>
<ellipse cx="72" cy="120" rx="16" ry="6" fill="rgba(212,192,96,.12)" stroke="rgba(212,192,96,.40)" stroke-width="1"/>
<ellipse cx="128" cy="122" rx="16" ry="6" fill="rgba(212,192,96,.12)" stroke="rgba(212,192,96,.40)" stroke-width="1"/>
<circle cx="100" cy="135" r="16" fill="rgba(212,192,96,.08)" stroke="rgba(212,192,96,.35)" stroke-width="1.2"/>
<line x1="100" y1="151" x2="100" y2="195" stroke="rgba(212,192,96,.35)" stroke-width="1.2"/>
<path d="M125 130 L132 150 L125 170" fill="none" stroke="rgba(212,192,96,.55)" stroke-width="1.5"/>
<path d="M128 145 L120 145" stroke="rgba(212,192,96,.40)" stroke-width="1"/>
<path d="M70 175 Q100 160 130 175 L125 200 Q100 215 75 200Z" fill="rgba(212,192,96,.07)" stroke="rgba(212,192,96,.25)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="1" fill="rgba(212,192,96,.65)">XI</text>`
  },
  {
    id:12, numeral:'XII', name:'The Hanged Man',
    keywords:'Surrender · Waiting · Sacrifice · New Perspective',
    color:'#80c0d8',
    meaning:'He hangs willingly, one leg crossed behind the other, serene — not in defeat but in voluntary surrender. His halo glows. By releasing the need to act, to control, to solve, he has gained something that force could never deliver: a new angle of sight. What you are waiting for cannot be hurried. The pause is the point.',
    shadow:'Martyrdom as manipulation. Victimhood as a way to avoid responsibility.',
    prompts:['What must your character stop fighting against in order to see what is actually there?','Is there a sacrifice they are postponing that, if made freely, would liberate them?','What would they discover about the world if they looked at it from a completely different position?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(128,192,216,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(128,192,216,.20)" stroke-width=".8"/>
<line x1="60" y1="65" x2="140" y2="65" stroke="rgba(128,192,216,.55)" stroke-width="2"/>
<line x1="60" y1="50" x2="60" y2="130" stroke="rgba(128,192,216,.45)" stroke-width="1.5"/>
<line x1="140" y1="50" x2="140" y2="130" stroke="rgba(128,192,216,.45)" stroke-width="1.5"/>
<line x1="100" y1="65" x2="100" y2="100" stroke="rgba(128,192,216,.50)" stroke-width="1.2"/>
<circle cx="100" cy="115" r="16" fill="rgba(255,220,80,.10)" stroke="rgba(255,220,80,.40)" stroke-width="1"/>
<path d="M88 111 Q100 101 112 111" fill="none" stroke="rgba(128,192,216,.45)" stroke-width="1"/>
<line x1="100" y1="131" x2="100" y2="185" stroke="rgba(128,192,216,.40)" stroke-width="1.2"/>
<path d="M100 175 L120 155" stroke="rgba(128,192,216,.35)" stroke-width="1"/>
<path d="M100 185 L80 165" stroke="rgba(128,192,216,.35)" stroke-width="1"/>
<path d="M80 165 Q78 158 82 155" fill="none" stroke="rgba(128,192,216,.30)" stroke-width="1"/>
<path d="M55 215 Q100 198 145 215" fill="none" stroke="rgba(128,192,216,.28)" stroke-width="1"/>
<path d="M50 230 Q100 212 150 230" fill="none" stroke="rgba(128,192,216,.18)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="1" fill="rgba(128,192,216,.65)">XII</text>`
  },
  {
    id:13, numeral:'XIII', name:'Death',
    keywords:'Endings · Change · Transformation · Transition',
    color:'#a0a0b8',
    meaning:'Death rides a white horse, armoured and unhurried, and before him kings and paupers alike must yield. Yet the sun rises between the towers behind him. This card rarely means physical death — it is the death of the old: old selves, old loyalties, old stories about who you are. Something must end so that something can begin.',
    shadow:'Resistance to necessary change. Clinging to what was because the new is unknown.',
    prompts:['What version of their identity must your character let die so they can grow?','What are they mourning that has already ended — and why do they keep returning to it?','What new form is waiting on the other side of this ending?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(160,160,184,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(160,160,184,.20)" stroke-width=".8"/>
<circle cx="100" cy="290" r="32" fill="none" stroke="rgba(255,180,50,.30)" stroke-width="1.5"/>
<rect x="82" y="50" width="36" height="8" rx="2" fill="rgba(160,160,184,.20)" stroke="rgba(160,160,184,.45)" stroke-width="1"/>
<line x1="100" y1="58" x2="100" y2="75" stroke="rgba(160,160,184,.40)" stroke-width="1.5"/>
<circle cx="100" cy="90" r="20" fill="rgba(160,160,184,.08)" stroke="rgba(160,160,184,.40)" stroke-width="1.2"/>
<path d="M84 84 L100 76 L116 84 L116 100 L100 108 L84 100Z" fill="rgba(0,0,0,.3)" stroke="rgba(160,160,184,.45)" stroke-width="1"/>
<circle cx="100" cy="90" r="6" fill="rgba(160,160,184,.25)"/>
<line x1="100" y1="110" x2="100" y2="150" stroke="rgba(160,160,184,.35)" stroke-width="1.2"/>
<ellipse cx="100" cy="170" rx="40" ry="20" fill="rgba(160,160,184,.06)" stroke="rgba(160,160,184,.28)" stroke-width="1"/>
<path d="M72 155 Q100 145 128 155 L128 185 Q100 195 72 185Z" fill="rgba(160,160,184,.06)" stroke="rgba(160,160,184,.25)" stroke-width="1"/>
<path d="M60 210 Q100 198 140 210 Q140 235 100 248 Q60 235 60 210Z" fill="rgba(160,160,184,.06)" stroke="rgba(160,160,184,.22)" stroke-width="1"/>
<path d="M85 290 Q100 275 115 290 Q115 308 100 315 Q85 308 85 290Z" fill="rgba(255,180,50,.10)" stroke="rgba(255,180,50,.35)" stroke-width="1.2"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="1" fill="rgba(160,160,184,.65)">XIII</text>`
  },
  {
    id:14, numeral:'XIV', name:'Temperance',
    keywords:'Balance · Patience · Purpose · Moderation',
    color:'#80d4c0',
    meaning:'The angel stands with one foot on earth, one in water, pouring liquid between two cups — endlessly, perfectly. Nothing spills. Nothing stagnates. Temperance is not the absence of passion but its intelligent channelling: the alchemical marriage of opposites into something greater than either. What extremes in your life are calling to be integrated?',
    shadow:'Dilution of self. Compromising so much there is nothing left to stand for.',
    prompts:['What two aspects of their personality is your character struggling to hold together?','Where are they overcommitting to one mode — all fire or all water — and what would balance restore?','What would their life look like if they applied the same patience they give others to themselves?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(128,212,192,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(128,212,192,.20)" stroke-width=".8"/>
<circle cx="100" cy="75" r="22" fill="rgba(128,212,192,.08)" stroke="rgba(128,212,192,.40)" stroke-width="1.2"/>
<path d="M88 68 L100 58 L112 68 L112 82 L100 90 L88 82Z" fill="rgba(128,212,192,.15)" stroke="rgba(128,212,192,.45)" stroke-width="1"/>
<circle cx="100" cy="74" r="5" fill="rgba(255,220,80,.45)"/>
<line x1="100" y1="97" x2="100" y2="130" stroke="rgba(128,212,192,.40)" stroke-width="1.2"/>
<path d="M70 140 Q100 125 130 140 L125 180 Q100 195 75 180Z" fill="rgba(128,212,192,.07)" stroke="rgba(128,212,192,.28)" stroke-width="1"/>
<rect x="62" y="195" width="26" height="38" rx="3" fill="none" stroke="rgba(128,212,192,.42)" stroke-width="1.2"/>
<rect x="112" y="200" width="26" height="38" rx="3" fill="none" stroke="rgba(128,212,192,.42)" stroke-width="1.2"/>
<path d="M88 205 Q100 195 112 205" fill="none" stroke="rgba(128,212,192,.55)" stroke-width="1.2"/>
<path d="M88 215 Q100 222 112 215" fill="none" stroke="rgba(128,212,192,.40)" stroke-width="1"/>
<path d="M88 225 Q100 218 112 225" fill="none" stroke="rgba(128,212,192,.25)" stroke-width="1" stroke-dasharray="2,2"/>
<circle cx="75" cy="258" r="8" fill="rgba(128,212,192,.12)" stroke="rgba(128,212,192,.35)" stroke-width="1"/>
<path d="M50 270 Q100 255 150 270" fill="none" stroke="rgba(128,212,192,.28)" stroke-width="1"/>
<path d="M40 285 Q100 268 160 285" fill="none" stroke="rgba(128,212,192,.18)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="1" fill="rgba(128,212,192,.65)">XIV</text>`
  },
  {
    id:15, numeral:'XV', name:'The Devil',
    keywords:'Bondage · Addiction · Shadow Self · Materialism',
    color:'#c04848',
    meaning:'Two figures are chained to the Devil\'s throne — but look at their chains: loose, easily removed. The Devil holds power only because they consent to it. The shadow here is not evil but unconscious appetite: fear dressed as desire, habit mistaken for necessity. What you believe constrains you may be removable.',
    shadow:'Projection. Seeing your own shadow only in others.',
    prompts:['What chain does your character wear that they insist they cannot remove — and why?','What desire, appetite, or fear is quietly running their decisions from offstage?','If their deepest vice were named aloud at the table, what would it be?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(192,72,72,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(192,72,72,.20)" stroke-width=".8"/>
<polygon points="100,40 112,68 142,68 118,85 128,113 100,96 72,113 82,85 58,68 88,68" fill="rgba(192,72,72,.15)" stroke="rgba(192,72,72,.50)" stroke-width="1"/>
<circle cx="100" cy="77" r="12" fill="rgba(192,72,72,.20)" stroke="rgba(192,72,72,.55)" stroke-width="1"/>
<path d="M86 68 L94 58 L100 52 L106 58 L114 68" fill="none" stroke="rgba(192,72,72,.45)" stroke-width="1.2"/>
<circle cx="100" cy="125" r="24" fill="rgba(192,72,72,.07)" stroke="rgba(192,72,72,.32)" stroke-width="1.2"/>
<path d="M88 118 Q100 108 112 118" fill="none" stroke="rgba(192,72,72,.45)" stroke-width="1"/>
<path d="M90 128 Q100 135 110 128" fill="none" stroke="rgba(192,72,72,.35)" stroke-width="1"/>
<path d="M82 115 L76 106 M118 115 L124 106" stroke="rgba(192,72,72,.40)" stroke-width="1.2"/>
<circle cx="72" cy="195" r="12" fill="rgba(192,72,72,.10)" stroke="rgba(192,72,72,.35)" stroke-width="1"/>
<circle cx="128" cy="195" r="12" fill="rgba(192,72,72,.10)" stroke="rgba(192,72,72,.35)" stroke-width="1"/>
<line x1="100" y1="149" x2="72" y2="183" stroke="rgba(192,72,72,.35)" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="100" y1="149" x2="128" y2="183" stroke="rgba(192,72,72,.35)" stroke-width="1" stroke-dasharray="4,3"/>
<path d="M100" y1="149" x2="100" y2="250"/><line x1="100" y1="149" x2="100" y2="215" stroke="rgba(192,72,72,.30)" stroke-width="1.2"/>
<path d="M55 250 Q100 235 145 250" fill="none" stroke="rgba(192,72,72,.25)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(192,72,72,.65)">XV</text>`
  },
  {
    id:16, numeral:'XVI', name:'The Tower',
    keywords:'Sudden Change · Upheaval · Revelation · Chaos',
    color:'#e05030',
    meaning:'Lightning strikes the Tower; the crown is blasted from its summit; figures fall. This is not punishment — it is revelation. What was built on false foundations could not stand. The destruction is violent precisely because the illusion was thorough. When the dust settles, you will be able to see clearly for the first time.',
    shadow:'Clinging to the burning tower. Rebuilding the same falsehood in the rubble.',
    prompts:['What belief or structure in your character\'s life is currently on fire?','What has the chaos just revealed that was always true but hidden beneath comfort?','What will they build in the ruins — and will it be made of the same materials?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(224,80,48,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(224,80,48,.20)" stroke-width=".8"/>
<rect x="70" y="100" width="60" height="140" rx="2" fill="rgba(224,80,48,.07)" stroke="rgba(224,80,48,.30)" stroke-width="1.2"/>
<polygon points="70,100 100,70 130,100" fill="rgba(50,30,20,.6)" stroke="rgba(224,80,48,.45)" stroke-width="1.2"/>
<path d="M150 55 L115 95" stroke="rgba(255,220,80,.70)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M150 55 L138 80 L155 78 L143 105" stroke="rgba(255,220,80,.50)" stroke-width="1.5" fill="none"/>
<circle cx="88" cy="95" r="6" fill="rgba(224,80,48,.25)" stroke="rgba(224,80,48,.50)" stroke-width="1"/>
<path d="M88 95 Q75 120 65 145" fill="none" stroke="rgba(224,80,48,.40)" stroke-width="1"/>
<circle cx="118" cy="105" r="5" fill="rgba(224,80,48,.25)" stroke="rgba(224,80,48,.45)" stroke-width="1"/>
<path d="M118 105 Q132 130 142 158" fill="none" stroke="rgba(224,80,48,.35)" stroke-width="1"/>
<path d="M65 260 Q100 245 135 260" fill="none" stroke="rgba(224,80,48,.28)" stroke-width="1"/>
<path d="M55 275 Q100 258 145 275" fill="none" stroke="rgba(224,80,48,.18)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="1" fill="rgba(224,80,48,.65)">XVI</text>`
  },
  {
    id:17, numeral:'XVII', name:'The Star',
    keywords:'Hope · Renewal · Serenity · Inspiration',
    color:'#60b0e0',
    meaning:'After the Tower, the Star. She kneels naked at the edge of still water, pouring from two jugs — one replenishing the earth, one the pool — endlessly giving without diminishing. Above her, an eight-pointed star presides over seven smaller ones. This is the card of hope restored after devastation: gentle, patient, and real.',
    shadow:'Naive optimism. Wishing on stars while refusing to walk toward them.',
    prompts:['What hope has your character not dared to name aloud because naming it might mean losing it?','Where in their world is renewal quietly happening, unnoticed?','What would it mean for them to trust the universe — or the story — even briefly?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(96,176,224,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(96,176,224,.20)" stroke-width=".8"/>
${Array.from({length:8},(_,i)=>{const a=i*45*Math.PI/180;const x=100+42*Math.cos(a-Math.PI/2);const y=72+42*Math.sin(a-Math.PI/2);const l=i===0?10:5;return`<polygon points="${Array.from({length:8},(_,j)=>{const r=j%2===0?l:l*.45;const angle=(j*45-90)*Math.PI/180;return`${(x+r*Math.cos(angle)).toFixed(1)},${(y+r*Math.sin(angle)).toFixed(1)}`}).join(' ')}" fill="rgba(96,176,224,.${i===0?'70':'35'})" stroke="rgba(96,176,224,.${i===0?'90':'50'})" stroke-width=".8"/>`}).join('')}
<circle cx="100" cy="195" r="16" fill="rgba(96,176,224,.08)" stroke="rgba(96,176,224,.35)" stroke-width="1.2"/>
<path d="M86 191 Q100 181 114 191" fill="none" stroke="rgba(96,176,224,.45)" stroke-width="1"/>
<line x1="100" y1="211" x2="100" y2="245" stroke="rgba(96,176,224,.35)" stroke-width="1.2"/>
<path d="M75 225 Q100 215 125 225" fill="none" stroke="rgba(96,176,224,.30)" stroke-width="1"/>
<path d="M60 248 Q100 235 140 248" fill="none" stroke="rgba(96,176,224,.25)" stroke-width="1"/>
<path d="M65 265 Q100 252 135 265" fill="none" stroke="rgba(96,176,224,.18)" stroke-width="1"/>
<path d="M40 282 Q100 268 160 282" fill="none" stroke="rgba(96,176,224,.12)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="1" fill="rgba(96,176,224,.65)">XVII</text>`
  },
  {
    id:18, numeral:'XVIII', name:'The Moon',
    keywords:'Illusion · Fear · The Unconscious · Confusion',
    color:'#8888c8',
    meaning:'The Moon illuminates without explanation — and in its light, the crayfish crawls from the depths, the dogs bay at shadow. Things are not as they appear. The path between the towers leads somewhere, but the way is uncertain and the imagination is filling the darkness with shapes. Not all that frightens you is real. Not all that seems safe is safe.',
    shadow:'Delusion sustained by refusing to look clearly. Paranoia as worldview.',
    prompts:['What fear is your character certain is real but has never actually tested?','What are they seeing in others that is actually a projection of something inside themselves?','What would they find if they walked the path between the towers instead of standing at the entrance?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(136,136,200,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(136,136,200,.20)" stroke-width=".8"/>
<path d="M78 65 A24 24 0 1 1 78 65.001" fill="none" stroke="rgba(136,136,200,.40)" stroke-width="1.5"/>
<path d="M88 45 A20 20 0 0 0 88 85" fill="rgba(136,136,200,.12)" stroke="none"/>
<path d="M80 45 A20 20 0 0 1 80 85" fill="rgba(20,15,35,.8)" stroke="none"/>
<circle cx="100" cy="65" r="18" fill="rgba(255,240,180,.08)" stroke="rgba(255,240,180,.35)" stroke-width="1"/>
${Array.from({length:12},(_,i)=>{const a=i*30*Math.PI/180;const x=100+32*Math.cos(a-Math.PI/2);const y=65+32*Math.sin(a-Math.PI/2);return`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.5" fill="rgba(136,136,200,.40)"/>`}).join('')}
<rect x="52" y="175" width="12" height="80" rx="2" fill="rgba(136,136,200,.08)" stroke="rgba(136,136,200,.32)" stroke-width="1"/>
<rect x="136" y="175" width="12" height="80" rx="2" fill="rgba(136,136,200,.08)" stroke="rgba(136,136,200,.32)" stroke-width="1"/>
<path d="M64 220 Q100 210 136 220" fill="none" stroke="rgba(136,136,200,.22)" stroke-width="1" stroke-dasharray="4,3"/>
<circle cx="72" cy="165" r="9" fill="rgba(136,136,200,.10)" stroke="rgba(136,136,200,.35)" stroke-width="1"/>
<circle cx="128" cy="165" r="9" fill="rgba(136,136,200,.10)" stroke="rgba(136,136,200,.35)" stroke-width="1"/>
<path d="M82 158 Q82 145 100 140 Q118 145 118 158" fill="none" stroke="rgba(136,136,200,.30)" stroke-width="1" stroke-dasharray="2,2"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="1" fill="rgba(136,136,200,.65)">XVIII</text>`
  },
  {
    id:19, numeral:'XIX', name:'The Sun',
    keywords:'Joy · Success · Vitality · Confidence',
    color:'#f0c030',
    meaning:'The child rides bareback beneath a blazing sun, arms wide, naked and unashamed. The sunflowers turn to watch. This is joy with no footnotes, confidence with no asterisk. Something has been accomplished, understood, or integrated. The light here is direct and honest — it illuminates without distortion. Celebrate what is genuinely good.',
    shadow:'Arrogance. Confusing temporary success with permanent superiority.',
    prompts:['What achievement or quality does your character refuse to be proud of — and why?','Where are they standing in genuine sunshine right now, but refusing to feel warm?','What would it mean for them to succeed completely — and would they allow it?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(240,192,48,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(240,192,48,.20)" stroke-width=".8"/>
<circle cx="100" cy="72" r="32" fill="rgba(240,192,48,.15)" stroke="rgba(240,192,48,.55)" stroke-width="1.5"/>
<circle cx="100" cy="72" r="22" fill="rgba(240,192,48,.20)" stroke="rgba(240,192,48,.70)" stroke-width="1.2"/>
${Array.from({length:16},(_,i)=>{const a=i*22.5*Math.PI/180;const x1=100+35*Math.cos(a);const y1=72+35*Math.sin(a);const x2=100+(38+Math.sin(i*5)*4)*Math.cos(a);const y2=72+(38+Math.sin(i*5)*4)*Math.sin(a);return`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(240,192,48,.55)" stroke-width="${i%2?'1':'1.5'}"/>`}).join('')}
<circle cx="100" cy="72" r="10" fill="rgba(255,220,80,.40)" stroke="rgba(255,220,80,.70)" stroke-width="1"/>
<path d="M82 72 Q86 65 100 62 Q114 65 118 72" fill="none" stroke="rgba(240,192,48,.70)" stroke-width="1"/>
<circle cx="100" cy="180" r="14" fill="rgba(240,192,48,.10)" stroke="rgba(240,192,48,.35)" stroke-width="1.2"/>
<ellipse cx="100" cy="220" rx="30" ry="14" fill="rgba(240,192,48,.08)" stroke="rgba(240,192,48,.28)" stroke-width="1"/>
<path d="M60 250 Q100 235 140 250" fill="none" stroke="rgba(240,192,48,.28)" stroke-width="1"/>
<path d="M55 268 Q100 252 145 268" fill="none" stroke="rgba(240,192,48,.18)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(240,192,48,.65)">XIX</text>`
  },
  {
    id:20, numeral:'XX', name:'Judgement',
    keywords:'Reflection · Reckoning · Absolution · Awakening',
    color:'#80b8d8',
    meaning:'The angel\'s trumpet sounds from the clouds; the dead rise from their coffins — men, women, children — arms outstretched, faces upward. Judgement is not condemnation here but the call to account: to look unflinchingly at who you have been, understand the pattern, and choose, consciously, who you will become. The resurrection is available to anyone willing to hear the call.',
    shadow:'Harsh self-judgment that masquerades as honesty. Raking through the past to punish rather than understand.',
    prompts:['What would your character say at their own reckoning — the moment they must account for all of it?','Is there an old version of themselves they need to forgive before they can move on?','What call have they been ignoring — and what would happen if they finally answered it?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(128,184,216,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(128,184,216,.20)" stroke-width=".8"/>
<path d="M60 55 Q100 35 140 55 Q140 85 100 95 Q60 85 60 55Z" fill="rgba(128,184,216,.08)" stroke="rgba(128,184,216,.35)" stroke-width="1.2"/>
<circle cx="100" cy="65" r="15" fill="rgba(128,184,216,.15)" stroke="rgba(128,184,216,.45)" stroke-width="1"/>
<path d="M88 61 L100 51 L112 61 L112 75 L100 83 L88 75Z" fill="rgba(128,184,216,.20)" stroke="rgba(128,184,216,.50)" stroke-width=".8"/>
<path d="M112 60 L130 50 L130 75" fill="none" stroke="rgba(128,184,216,.45)" stroke-width="1.5"/>
<path d="M130 50 Q145 52 148 68" fill="none" stroke="rgba(128,184,216,.35)" stroke-width="1"/>
<rect x="65" y="185" width="26" height="60" rx="2" fill="rgba(128,184,216,.06)" stroke="rgba(128,184,216,.28)" stroke-width="1"/>
<rect x="110" y="195" width="26" height="60" rx="2" fill="rgba(128,184,216,.06)" stroke="rgba(128,184,216,.28)" stroke-width="1"/>
<circle cx="78" cy="175" r="10" fill="rgba(128,184,216,.10)" stroke="rgba(128,184,216,.35)" stroke-width="1"/>
<circle cx="123" cy="185" r="10" fill="rgba(128,184,216,.10)" stroke="rgba(128,184,216,.35)" stroke-width="1"/>
<path d="M78 165 L78 140" stroke="rgba(128,184,216,.35)" stroke-width="1"/>
<path d="M123 175 L123 150" stroke="rgba(128,184,216,.35)" stroke-width="1"/>
<path d="M55 265 Q100 250 145 265" fill="none" stroke="rgba(128,184,216,.25)" stroke-width="1"/>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="2" fill="rgba(128,184,216,.65)">XX</text>`
  },
  {
    id:21, numeral:'XXI', name:'The World',
    keywords:'Completion · Integration · Accomplishment · Travel',
    color:'#80d0a8',
    meaning:'The dancer moves at the centre of a laurel wreath, one leg crossed — echoing the Hanged Man, but upright now. In each corner, the four creatures of the Evangelists watch: man, eagle, bull, lion — all four elements mastered. The cycle is complete. Something has been achieved in its fullness. Before the next Fool\'s step, there is this: wholeness.',
    shadow:'Stagnation in the moment of arrival. Refusing the next journey because this one was so hard won.',
    prompts:['What has your character completed — and do they allow themselves to know it?','What would it feel like to hold all the contradictions of their journey without needing to resolve them?','What is the next horizon visible from the peak they have just reached?'],
    art:`<rect fill="#08060e" width="200" height="340"/>
<rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(128,208,168,.50)" stroke-width="1.5"/>
<rect x="13" y="13" width="174" height="314" rx="3" fill="none" stroke="rgba(128,208,168,.20)" stroke-width=".8"/>
<ellipse cx="100" cy="155" rx="60" ry="90" fill="none" stroke="rgba(128,208,168,.40)" stroke-width="1.5"/>
<ellipse cx="100" cy="155" rx="54" ry="84" fill="none" stroke="rgba(128,208,168,.20)" stroke-width=".8"/>
${Array.from({length:20},(_,i)=>{const a=i*18*Math.PI/180;const x=100+60*Math.cos(a-Math.PI/2);const y=155+90*Math.sin(a-Math.PI/2);return`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="rgba(128,208,168,.40)"/>`}).join('')}
<circle cx="100" cy="145" r="18" fill="rgba(128,208,168,.08)" stroke="rgba(128,208,168,.35)" stroke-width="1.2"/>
<path d="M88 141 Q100 131 112 141" fill="none" stroke="rgba(128,208,168,.45)" stroke-width="1"/>
<line x1="100" y1="163" x2="100" y2="195" stroke="rgba(128,208,168,.35)" stroke-width="1.2"/>
<path d="M100 185 L115 170" stroke="rgba(128,208,168,.30)" stroke-width="1"/>
<path d="M100 195 L85 178" stroke="rgba(128,208,168,.30)" stroke-width="1"/>
<circle cx="38" cy="68" r="12" fill="rgba(128,208,168,.08)" stroke="rgba(128,208,168,.30)" stroke-width="1"/>
<text x="38" y="73" text-anchor="middle" font-size="11" fill="rgba(128,208,168,.55)">☿</text>
<circle cx="162" cy="68" r="12" fill="rgba(128,208,168,.08)" stroke="rgba(128,208,168,.30)" stroke-width="1"/>
<text x="162" y="73" text-anchor="middle" font-size="11" fill="rgba(128,208,168,.55)">🦅</text>
<circle cx="38" cy="248" r="12" fill="rgba(128,208,168,.08)" stroke="rgba(128,208,168,.30)" stroke-width="1"/>
<text x="38" y="253" text-anchor="middle" font-size="11" fill="rgba(128,208,168,.55)">♉</text>
<circle cx="162" cy="248" r="12" fill="rgba(128,208,168,.08)" stroke="rgba(128,208,168,.30)" stroke-width="1"/>
<text x="162" y="253" text-anchor="middle" font-size="11" fill="rgba(128,208,168,.55)">♌</text>
<text x="100" y="310" text-anchor="middle" font-family="serif" font-size="9" letter-spacing="1" fill="rgba(128,208,168,.65)">XXI</text>`
  }
];
