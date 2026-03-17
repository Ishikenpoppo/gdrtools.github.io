# 📐 Responsive Design Guide — Grimoire Mobile-Friendly Redesign

## Breakpoints e Comportamenti

```
┌─────────────────────────────────────────────────────────────────┐
│                    RESPONSIVE ARCHITECTURE                      │
└─────────────────────────────────────────────────────────────────┘

                                                                    
    <320px    |    320-479px    |    480-767px    |    ≥768px
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SMALL      |     MOBILE      |      TABLET      |    DESKTOP
   PHONE      |     PORTRAIT    |       MIXED      |   LANDSCAPE


┌────────────────────────────────────────┐
│ PHONE (320-479px)                      │
├────────────────────────────────────────┤
│ [☰] GRIMOIRE              [↓search...]  │ Height: 56px
├────────────────────────────────────────┤
│                                        │
│  📖 Learn about features               │
│                                        │
│  [📚] [⚡] [📝] [🃏] LEARNING LOOPS   │
│   plan  execute record reflect        │
│                                        │
│  [🎲] Dice Roller                      │
│  [🃏] Tarot Oracle                    │
│  [📝] Session Notes                   │
│  [⚔️] Combat Tracker                  │
│  [📜] Encounter Gen                   │
│  [🧙] NPC Forge                       │
│                                        │
└────────────────────────────────────────┘
        Sidebar Hidden (translateX)
        Header Always Visible
        Typography: 95% scale


┌──────────────────────────────────────────┐
│ TABLET/IPAD (480-767px)                 │
├──────────────────────────────────────────┤
│ [☰] GRIMOIRE                             │ Height: 56px
├──────────────────────────────────────────┤
│                                          │
│       Learning Loops Diagram             │
│       (SVG 280-300px max)                │
│                                          │
│       📚 PLAN    ⚡ EXECUTE              │
│       Encounter  Dice Roller             │
│       NPC Forge  Combat Tracker          │
│                                          │
│       📝 RECORD  🃏 REFLECT              │
│       Session    Tarot Oracle            │
│       Notes                              │
│                                          │
│       Your Toolkit                       │
│       [🎲] Dice Roller      [Active]    │
│       [🃏] Tarot Oracle     [Active]    │
│       [📝] Session Notes    [Active]    │
│                                          │
└──────────────────────────────────────────┘
        Sidebar Opens from Left
        Overlay Semi-transparent
        Touch Buttons: 44px min


┌───────────────────────────────────────────────────────────┐
│ DESKTOP (≥768px)                                          │
├───────────────────────────────────────────────────────────┤
│  Sidebar (220px)  │                                       │
│  ┌──────────────┐ │  Main Content Area (Flex)            │
│  │ 📖 GRIMOIRE  │ │  ┌─────────────────────────────────┐│
│  │──────────────│ │  │ Learning Loops Section          ││
│  │ Navigation   │ │  │                                 ││
│  │ 📚 PLAN      │ │  │      📚    ⚡                  ││
│  │ ⚡ EXECUTE   │ │  │   PLAN   EXECUTE               ││
│  │ 📝 RECORD    │ │  │      ↷                          ││
│  │ 🃏 REFLECT   │ │  │      ↴ Learning Loops ↱       ││
│  │              │ │  │       ↱    ↴                    ││
│  │ [🎲] Dice    │ │  │   📝  REFLECT                  ││
│  │ [🃏] Tarot   │ │  │  RECORD  🃏                    ││
│  │ [📝] Notes   │ │  │                                 ││
│  │ [⚔️] Combat  │ │  │ Your Toolkit                    ││
│  │ [📜] Encntr  │ │  │ [🎲] Dice Roller   [Active]   ││
│  │ [🧙] NPC     │ │  │ [🃏] Tarot Oracle  [Active]   ││
│  │              │ │  │ [📝] Session Notes [Active]   ││
│  │ Clear Session│ │  │ [⚔️] Combat Track  [Active]   ││
│  └──────────────┘ │  │ [📜] Encounter Gen [Active]   ││
│                   │  │ [🧙] NPC Forge     [Active]   ││
│                   │  │                                 ││
│                   │  └─────────────────────────────────┘│
│                   │                                       │
└───────────────────────────────────────────────────────────┘
        Sidebar Always Visible
        No Header (niente hamburger)
        Full-width Content
        Traditional Layout
```

---

## 🎨 Learning Loops Color System

```
PHASE           COLOR       TOOLS                   LOGO
─────────────────────────────────────────────────────────────
📚 PLAN         🟢 Green    Encounter Generator    📜 📖
                            NPC Forge              🧙 

⚡ EXECUTE      🟠 Orange   Dice Roller           🎲
                            Combat Tracker        ⚔️

📝 RECORD       🟡 Gold     Session Notes         📝

🃏 REFLECT      🟣 Purple   Tarot Oracle          🃏
```

---

## 🔧 Breakpoint CSS Variables

```css
/* Desktop (≥768px) */
:root {
  --header-h: 0px;          /* Header hidden */
  --sidebar-w: 220px;       /* Fixed width */
  --fs-scale: 1;            /* Normal size */
}

/* Tablet/Mobile (480-767px) */
:root {
  --header-h: 56px;         /* Header visible */
  --sidebar-w: 100%;        /* Full width (collapsible) */
  --fs-scale: 0.95;         /* Slightly smaller */
}

/* Small Mobile (<480px) */
:root {
  --sp-4: 14px;             /* Reduced spacing */
  --sp-5: 18px;
  --sp-6: 20px;
}

/* Landscape (<600px height) */
:root {
  --header-h: 48px;         /* Even smaller header */
}
```

---

## 📱 Mobile Navigation Flow

```
┌─────────────┐
│ Home Page   │
│             │
│ [☰]         │ ← Click hamburger menu
│ GRIMOIRE    │
└─────────────┘
      │
      ▼
┌────────────────────────┐
│    SIDEBAR OPENS       │
│    from Left           │
│                        │
│ [✕] GRIMOIRE          │
│                        │
│ 📚 PLAN                │
│  ├─ [📜] Encounter Gen│ ─┐
│  └─ [🧙] NPC Forge   │  │
│ ⚡ EXECUTE            │  │ Click item
│  ├─ [🎲] Dice Roller │  │ (auto closes
│  └─ [⚔️] Combat Track│  │  sidebar)
│ 📝 RECORD             │  │
│  └─ [📝] Session Notes│  │
│ 🃏 REFLECT            │  │
│  └─ [🃏] Tarot Oracle│  │
│                        │ ◄┘
└────────────────────────┘
      │
      ▼ (Overlay click or Close button)
┌─────────────┐
│ Sidebar     │
│ Closes ✓    │
└─────────────┘
```

---

## 🎯 Touch Targets

All interactive elements follow **Apple Human Interface Guidelines**:

```
Minimum Touch Target Size: 44px × 44px

Implemented on:
✓ Hamburger menu button
✓ Close sidebar button  
✓ Navigation items (on mobile)
✓ Primary buttons (.btn-primary)
✓ Form inputs (min-height: 44px)
✓ Text fields (min-height: 44px + font-size: 16px)

Benefits:
- Prevents zoom on iOS (16px+ font-size)
- Comfortable for fingers (44px minimum)
- Reduces mis-taps
- Better accessibility
```

---

## 🔄 Animation & Transitions

```css
/* Hamburger Menu Animation */
.menu-toggle span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);  /* Top line → X */
}

.menu-toggle span:nth-child(2) {
  opacity: 0;                                     /* Middle line fades */
}

.menu-toggle span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px); /* Bottom line → \ */
}

/* Sidebar Slide */
.sidebar {
  transform: translateX(-100%) → translateX(0);   /* Slide from left */
  transition: transform 0.3s ease;
}

/* Overlay Fade */
.sidebar-overlay {
  opacity: 0 → opacity: 1;                        /* Fade in/out */
  transition: opacity 0.3s ease;
}
```

---

## 📊 Layout Stacking on Mobile

### Desktop (Two-Column)
```
┌──────────────────────────────────────┐
│ Sidebar (220px) │ Main Content       │
│                 │ (flex: 1)          │
│ Fixed Left      │                    │
└──────────────────────────────────────┘
```

### Mobile (Stacked)
```
┌──────────────────────────────────────┐
│ Header (56px) with Hamburger         │
├──────────────────────────────────────┤
│ Main Content                         │
│ (Full width)                         │
│                                      │
│ (Sidebar overlays on top when open)  │
└──────────────────────────────────────┘
```

### Landscape (Compact)
```
┌──────────────────────────────────────┐
│ Header (48px) - Reduced             │
├──────────────────────────────────────┤
│ Content (Optimized for height)       │
└──────────────────────────────────────┘
```

---

## 🚀 Performance Considerations

✓ **No layout shift** - Header height set via CSS var  
✓ **GPU-accelerated** - translateX for sidebar  
✓ **Minimal reflows** - Sidebar positioning with fixed  
✓ **Smooth 60fps** - Transition durations 0.3s  
✓ **Touch-optimized** - No hover states on mobile  

---

## 🧪 Testing Checklist

- [ ] 320px (iPhone SE): Layout compact, readable
- [ ] 375px (iPhone 12): Standard mobile view
- [ ] 414px (iPhone 14 Pro): Hamburger functional
- [ ] 480px (Small tablet): Learning Loops visible
- [ ] 768px (iPad): Desktop layout adaptive
- [ ] 1024px (iPad Pro): Full sidebar visible
- [ ] 1920px (Desktop): Original design preserved
- [ ] Landscape 667×375: No overflow
- [ ] Hamburger: Click/tap animates correctly
- [ ] Sidebar: Closes on item click
- [ ] Overlay: Closes sidebar when clicked
- [ ] SVG Diagram: Scales proportionally
- [ ] Touch inputs: 44px minimum (inspector)

---

## 📚 Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Grid | ✓ | ✓ | ✓ | ✓ |
| Flexbox | ✓ | ✓ | ✓ | ✓ |
| CSS Vars | ✓ | ✓ | ✓ | ✓ |
| SVG | ✓ | ✓ | ✓ | ✓ |
| Transforms | ✓ | ✓ | ✓ | ✓ |
| Position: fixed | ✓ | ✓ | ✓ | ✓ |

**Minimum Versions**: Chrome/Edge 49+, Firefox 31+, Safari 9.1+

---

## 🎓 Key Learnings

1. **Mobile-first CSS** - Media queries extend, not override
2. **Viewport meta tag** - Critical for responsive design
3. **Touch targets** - 44px minimum (Apple/Google standard)
4. **Font-size: 16px** - Prevents iOS zoom
5. **Fixed positioning** - Works on all modern browsers
6. **CSS variables** - Allow dynamic layout changes
7. **Semantic HTML** - Better accessibility and SEO

---

**Design System v2.0 — Complete & Ready! 🎉**
