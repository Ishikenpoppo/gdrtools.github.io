/* ── Notes state — declared here so restoreSession() can access them ── */
let notes = [];           // { id, title, content, createdAt, updatedAt }
let activeNoteId = null;
let previewMode = false;

/* ════════════════════════════════════════════════════
   SESSION NOTES
════════════════════════════════════════════════════ */

function noteId() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

function formatDateLabel(date) {
  return date.toLocaleDateString('it-IT', { day:'2-digit', month:'short', year:'numeric' })
    + ' ' + date.toLocaleTimeString('it-IT', { hour:'2-digit', minute:'2-digit' });
}

function exportFilename(date) {
  const d = new Date(date);
  const pad = n => String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
}

function createNote() {
  // If creating the first note, switch from idle to input state
  if (notes.length === 0) {
    switchToolState('notes', 'input');
  }

  const now = new Date();
  const note = {
    id: noteId(),
    title: '',
    content: '',
    createdAt: now,
    updatedAt: now
  };
  notes.unshift(note);
  renderNoteList();
  selectNote(note.id);
  scheduleSave();
  // Focus title
  setTimeout(() => document.getElementById('noteTitleInput').focus(), 60);
}

function selectNote(id) {
  activeNoteId = id;
  const note = notes.find(n => n.id === id);
  if (!note) return;

  // Show editor panel
  document.getElementById('notesEditorEmpty').style.display = 'none';
  const panel = document.getElementById('notesEditorPanel');
  panel.style.display = 'flex';

  // Populate
  document.getElementById('noteTitleInput').value = note.title;
  document.getElementById('noteTextarea').value = note.content;
  document.getElementById('noteDateBadge').textContent = 'Created ' + formatDateLabel(note.createdAt);

  // Reset preview
  previewMode = false;
  document.getElementById('notesPreview').classList.remove('visible');
  document.getElementById('noteTextarea').style.display = 'block';
  document.getElementById('modeToggleBtn').classList.remove('preview-active');
  document.getElementById('modeToggleBtn').textContent = 'Preview';
  document.getElementById('notesToolbar').style.opacity = '1';
  document.getElementById('notesToolbar').style.pointerEvents = '';

  updateStats();
  renderNoteList();
  scheduleSave();
}

function deleteNote() {
  if (!activeNoteId) return;
  const note = notes.find(n => n.id === activeNoteId);
  const name = note?.title || 'this note';
  if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
  notes = notes.filter(n => n.id !== activeNoteId);
  activeNoteId = null;

  // Reset editor
  document.getElementById('notesEditorEmpty').style.display = 'flex';
  document.getElementById('notesEditorPanel').style.display = 'none';
  renderNoteList();
  scheduleSave();
}

function onTitleChange() {
  if (!activeNoteId) return;
  const note = notes.find(n => n.id === activeNoteId);
  if (!note) return;
  note.title = document.getElementById('noteTitleInput').value;
  note.updatedAt = new Date();
  renderNoteList();
  scheduleSave();
  scheduleNoteFlash();
}

function onContentChange() {
  if (!activeNoteId) return;
  const note = notes.find(n => n.id === activeNoteId);
  if (!note) return;
  note.content = document.getElementById('noteTextarea').value;
  note.updatedAt = new Date();
  updateStats();
  renderNoteList();
  scheduleSave();
  scheduleNoteFlash();
}

function scheduleNoteFlash() {
  const s = document.getElementById('statusSaved');
  if (!s) return;
  s.textContent = '✎ Editing…';
  // Will be overwritten by updatePersistenceUI once scheduleSave fires
  setTimeout(() => {
    if (s.textContent === '✎ Editing…') s.textContent = '✦ Auto-saved';
  }, AUTOSAVE_DEBOUNCE + 200);
}

function updateStats() {
  const ta = document.getElementById('noteTextarea');
  const text = ta.value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById('statusWords').textContent = words;
  document.getElementById('statusChars').textContent = text.length;
  document.getElementById('statusLines').textContent = text ? text.split('\n').length : 0;
}

function renderNoteList() {
  const scroll = document.getElementById('notesListScroll');
  const empty  = document.getElementById('notesEmptyState');
  if (!scroll) return;

  if (notes.length === 0) {
    scroll.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }

  if (empty) empty.style.display = 'none';
  scroll.innerHTML = notes.map(n => {
    const title   = n.title.trim() || 'Untitled Note';
    const snippet = n.content.replace(/[#*>`\-_~]/g,'').trim().slice(0,60) || '—';
    const date    = formatDateLabel(n.updatedAt);
    const active  = n.id === activeNoteId ? 'active' : '';
    return `<div class="note-item ${active}" onclick="selectNote('${n.id}')">
      <div class="note-item-title">${escapeHtml(title)}</div>
      <div class="note-item-meta">${date}</div>
      <div class="note-item-snippet">${escapeHtml(snippet)}</div>
    </div>`;
  }).join('');
}

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Markdown renderer (lightweight) ── */
function renderMarkdown(md) {
  let html = escapeHtml(md);

  // Fenced code blocks
  html = html.replace(/```[\s\S]*?```/g, m => {
    const inner = m.slice(3, -3).replace(/^\w*\n?/, '');
    return `<pre><code>${inner}</code></pre>`;
  });

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm,  '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm,   '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote><p>$1</p></blockquote>');

  // HR
  html = html.replace(/^---$/gm, '<hr>');

  // Bold italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Strikethrough
  html = html.replace(/~~(.+?)~~/g, '<s>$1</s>');
  // Inline code
  html = html.replace(/`(.+?)`/g, '<code>$1</code>');

  // Unordered lists
  html = html.replace(/(^- .+\n?)+/gm, match => {
    const items = match.trim().split('\n').map(l => `<li>${l.replace(/^- /,'')}</li>`).join('');
    return `<ul>${items}</ul>`;
  });

  // Ordered lists
  html = html.replace(/(^\d+\. .+\n?)+/gm, match => {
    const items = match.trim().split('\n').map(l => `<li>${l.replace(/^\d+\. /,'')}</li>`).join('');
    return `<ol>${items}</ol>`;
  });

  // Paragraphs (double newline)
  html = html.split(/\n{2,}/).map(block => {
    if (/^<(h[1-3]|ul|ol|blockquote|pre|hr)/.test(block.trim())) return block;
    if (!block.trim()) return '';
    return '<p>' + block.replace(/\n/g, '<br>') + '</p>';
  }).join('\n');

  return html;
}

function togglePreview() {
  previewMode = !previewMode;
  const btn      = document.getElementById('modeToggleBtn');
  const textarea = document.getElementById('noteTextarea');
  const preview  = document.getElementById('notesPreview');
  const toolbar  = document.getElementById('notesToolbar');

  if (previewMode) {
    const note = notes.find(n => n.id === activeNoteId);
    preview.innerHTML = renderMarkdown(note?.content || '');
    preview.classList.add('visible');
    textarea.style.display = 'none';
    btn.textContent = '✎ Edit';
    btn.classList.add('preview-active');
    toolbar.style.opacity = '.35';
    toolbar.style.pointerEvents = 'none';
  } else {
    preview.classList.remove('visible');
    textarea.style.display = 'block';
    btn.textContent = 'Preview';
    btn.classList.remove('preview-active');
    toolbar.style.opacity = '1';
    toolbar.style.pointerEvents = '';
    textarea.focus();
  }
}

/* ── Toolbar insert helpers ── */
function insertMd(before, after='', mode='wrap') {
  const ta = document.getElementById('noteTextarea');
  if (!ta || previewMode) return;
  const start = ta.selectionStart;
  const end   = ta.selectionEnd;
  const sel   = ta.value.slice(start, end);

  let inserted, cursorPos;
  if (mode === 'heading') {
    // Insert at beginning of current line
    const lineStart = ta.value.lastIndexOf('\n', start - 1) + 1;
    const line = ta.value.slice(lineStart, end || ta.value.indexOf('\n', lineStart));
    ta.value = ta.value.slice(0, lineStart) + before + line + ta.value.slice(lineStart + line.length);
    cursorPos = lineStart + before.length + line.length;
  } else if (mode === 'full') {
    ta.value = ta.value.slice(0, start) + before + ta.value.slice(end);
    cursorPos = start + before.length;
  } else {
    // Wrap selection
    ta.value = ta.value.slice(0, start) + before + sel + after + ta.value.slice(end);
    cursorPos = sel ? end + before.length + after.length : start + before.length;
  }

  ta.focus();
  ta.setSelectionRange(cursorPos, cursorPos);
  onContentChange();
}

/* ── Export ── */
function exportNote(format) {
  if (!activeNoteId) return;
  const note = notes.find(n => n.id === activeNoteId);
  if (!note) return;

  const title    = note.title.trim() || 'Untitled Note';
  const filename = exportFilename(note.createdAt);
  let content, mime, ext;

  if (format === 'md') {
    // Add YAML-ish front matter
    const updated = formatDateLabel(note.updatedAt);
    const created = formatDateLabel(note.createdAt);
    content = `# ${title}\n\n> Created: ${created}  \n> Updated: ${updated}\n\n---\n\n${note.content}`;
    mime = 'text/markdown';
    ext  = 'md';
  } else {
    content = `${title.toUpperCase()}\n${'='.repeat(Math.min(title.length,50))}\n\nCreated: ${formatDateLabel(note.createdAt)}\nUpdated: ${formatDateLabel(note.updatedAt)}\n\n${'─'.repeat(40)}\n\n${note.content}`;
    mime = 'text/plain';
    ext  = 'txt';
  }

  const blob = new Blob([content], { type: mime });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `${filename}.${ext}`;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);

  // Flash status
  const s = document.getElementById('statusSaved');
  s.textContent = `✓ Exported as ${filename}.${ext}`;
  setTimeout(() => { s.textContent = '✦ Auto-saved'; }, 3000);
}

