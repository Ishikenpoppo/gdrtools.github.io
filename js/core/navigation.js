/* ════════════════════════════════════════════════════
   TOOL STATE MANAGEMENT
════════════════════════════════════════════════════ */

function switchToolState(toolName, newState) {
  const idle = document.getElementById(toolName + 'StateIdle');
  const input = document.getElementById(toolName + 'StateInput');
  const result = document.getElementById(toolName + 'StateResult');
  
  // Hide all states
  if (idle) idle.style.display = 'none';
  if (input) input.style.display = 'none';
  if (result) result.style.display = 'none';
  
  // Show requested state
  if (newState === 'idle' && idle) idle.style.display = 'flex';
  if (newState === 'input' && input) input.style.display = 'flex';
  if (newState === 'result' && result) result.style.display = 'flex';
  
  // Scroll to top
  document.querySelector('.main').scrollTop = 0;
}

function rollDiceAndShowResult() {
  // Roll the dice and get the computed data directly
  const data = rollDice();
  if (!data) return;

  const { total, results, dominant } = data;

  // Populate result state directly from computed data (not from animated DOM)
  const resultTotal = document.getElementById('resultDiceTotal');
  const resultBreakdown = document.getElementById('resultDiceBreakdown');

  if (resultTotal) {
    resultTotal.textContent = total;
    if (dominant?.color) {
      resultTotal.style.color = dominant.color;
      resultTotal.style.textShadow = `0 0 28px ${dominant.color}88, 0 0 65px ${dominant.color}44, 0 4px 14px rgba(0,0,0,.8)`;
    }
  }

  if (resultBreakdown) {
    resultBreakdown.innerHTML = results.map((r, ri) => `
      <div class="breakdown-chip"
        style="color:${r.color};border-color:rgba(${r.rgb},.38);background:rgba(${r.rgb},.07);animation-delay:${ri*60}ms">
        d${r.sides}×${r.count} = ${r.sub}
      </div>
    `).join('');
  }

  // Switch to result state
  switchToolState('dice', 'result');
}

function drawAndShowTarotResult() {
  // First draw the card with animation
  drawCard();
  
  // Then copy results to result state after animation completes
  setTimeout(() => {
    const infoNumeral = document.getElementById('infoNumeral');
    const infoName = document.getElementById('infoName');
    const infoMeaning = document.getElementById('infoMeaning');
    const infoPrompts = document.getElementById('infoPrompts');
    const reversedBadgeWrap = document.getElementById('reversedBadgeWrap');
    
    const infoNumeralResult = document.getElementById('infoNumeralResult');
    const infoNameResult = document.getElementById('infoNameResult');
    const infoMeaningResult = document.getElementById('infoMeaningResult');
    const infoPromptsResult = document.getElementById('infoPromptsResult');
    const reversedBadgeWrapResult = document.getElementById('reversedBadgeWrapResult');
    
    if (infoNumeralResult && infoNumeral) infoNumeralResult.textContent = infoNumeral.textContent;
    if (infoNameResult && infoName) infoNameResult.textContent = infoName.textContent;
    if (infoMeaningResult && infoMeaning) infoMeaningResult.innerHTML = infoMeaning.innerHTML;
    if (infoPromptsResult && infoPrompts) infoPromptsResult.innerHTML = infoPrompts.innerHTML;
    if (reversedBadgeWrapResult && reversedBadgeWrap) reversedBadgeWrapResult.innerHTML = reversedBadgeWrap.innerHTML;
    
    // Switch to result state
    switchToolState('tarot', 'result');
  }, 1200); // After flip animation
}

function generateEncounterAndShowResult() {
  // Generate the encounter normally
  generateEncounter();
  
  // Switch to result state
  setTimeout(() => {
    switchToolState('encounter', 'result');
  }, 300);
}

function forgeNPCAndShowResult() {
  // Forge the NPC normally
  forgeNPC();
  
  // Populate the full-screen result panels
  const srcLabels = ['Appearance', 'Personality', 'Occupation', 'Voice', 'Motivation', 'Secret', 'Hook'];
  const srcIds = ['npcAppearanceText', 'npcPersonalityText', 'npcOccupationText', 'npcVoiceText', 'npcMotivationText', 'npcSecretText', 'npcHookText'];
  const destIds = ['npcAppearanceTextFull', 'npcPersonalityTextFull', 'npcOccupationTextFull', 'npcVoiceTextFull', 'npcMotivationTextFull', 'npcSecretTextFull', 'npcHookTextFull'];
  
  // Copy portrait
  const portrait = document.getElementById('npcPortraitArea');
  const portraitFull = document.getElementById('npcPortraitAreaFull');
  const portraitTags = document.getElementById('npcPortraitTags');
  const portraitTagsFull = document.getElementById('npcPortraitTagsFull');
  if (portrait && portraitFull) portraitFull.innerHTML = portrait.innerHTML;
  if (portraitTags && portraitTagsFull) portraitTagsFull.innerHTML = portraitTags.innerHTML;
  
  // Copy text fields
  for (let i = 0; i < srcIds.length; i++) {
    const src = document.getElementById(srcIds[i]);
    const dest = document.getElementById(destIds[i]);
    if (src && dest) dest.innerHTML = src.innerHTML;
  }
  
  // Switch to result state
  switchToolState('npc', 'result');
}

function resetCombatAndReturn() {
  // Clear combat
  clearCombat();
  
  // Return to idle state
  switchToolState('initiative', 'idle');
}

function npcSaveToNotesAndReturn() {
  // Save to notes
  npcSaveToNotes();
  
  // Return to idle state
  switchToolState('npc', 'idle');
}

function deployEncounterToTrackerFromResult() {
  // Deploy encounter
  deployEncounterToTracker();
  
  // The navigate function will handle state switching to idle
}

/* ════════════════════════════════════════════════════
   ROUTER & NAVIGATION
════════════════════════════════════════════════════ */

/* Navigation sidebar removed in favor of bottom navigation bar */

/* Close menu when navigating */
function navigate(pageId, navEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  
  // Update bottom nav active state
  document.querySelectorAll('.bottom-nav-item').forEach(n => n.classList.remove('active'));
  const bottomItem = document.querySelector(`.bottom-nav-item[data-page="${pageId}"]`);
  if (bottomItem) bottomItem.classList.add('active');
  
  // If navigating to a tool with states, show idle state
  if (['dice', 'tarot', 'encounter', 'npc', 'initiative', 'notes'].includes(pageId)) {
    switchToolState(pageId, 'idle');
  }
  
  document.querySelector('.main').scrollTop = 0;
  
  scheduleSave();
}
