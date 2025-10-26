// --- Core filtering logic (always runs) ---
let hiddenCount = 0;
const genreList = [];

// Function to filter games
function filterGames(root = document) {
  let removedThisRound = 0;
  root.querySelectorAll('.game_cell.has_cover').forEach(cell => {
    const genreDiv = cell.querySelector('.game_genre');
    if (!genreDiv) return;
    const genreText = genreDiv.textContent.toLowerCase();
    if (genreList.some(g => genreText.includes(g))) {
      cell.remove();
      removedThisRound++;
    }
  });
  hiddenCount += removedThisRound;
  const label = document.getElementById('hiddenCount');
  if (label) label.textContent = hiddenCount;
}

// Observe new game cells (infinite scroll)
const observer = new MutationObserver(mutations => {
  mutations.forEach(m => {
    m.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      if (node.matches && node.matches('.game_cell.has_cover')) {
        filterGames(node.parentNode);
      } else if (node.querySelectorAll) {
        filterGames(node);
      }
    });
  });
});
observer.observe(document.body, { childList: true, subtree: true });

// --- UI creation (only on toolbar click) ---
function showUI() {
  if (document.getElementById('genreExcluder')) return;

  const panel = document.createElement('div');
  panel.id = 'genreExcluder';
  panel.style.position = 'fixed';
  panel.style.top = '10px';
  panel.style.right = '10px';
  panel.style.background = '#1c1c1c';
  panel.style.color = '#fff';
  panel.style.border = '1px solid #444';
  panel.style.padding = '10px';
  panel.style.zIndex = 9999;
  panel.style.fontFamily = 'Arial, sans-serif';
  panel.style.width = '260px';
  panel.style.borderRadius = '6px';
  panel.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  panel.style.display = 'flex';
  panel.style.flexDirection = 'column';
  panel.style.gap = '6px';

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <strong>Exclude Genres</strong>
      <button id="closePanel" style="background:#333;color:#fff;border:none;padding:2px 6px;border-radius:3px;cursor:pointer;">X</button>
    </div>
    <div style="display:flex;gap:4px;">
      <input id="genreInput" type="text" placeholder="Add genre(s)" style="flex:1;padding:4px;border-radius:3px;border:none;background:#333;color:#fff;">
      <button id="addGenre" style="padding:4px 8px;background:#555;color:#fff;border:none;border-radius:3px;cursor:pointer;">Add</button>
    </div>
    <select id="genreDropdown" multiple style="width:100%;height:80px;padding:4px;background:#333;color:#fff;border:none;border-radius:3px;overflow-y:auto;"></select>
    <div style="display:flex;justify-content:space-between;font-size:13px;">
      <span>Games hidden: <span id="hiddenCount">0</span></span>
      <button id="clearGenres" style="background:#444;color:#fff;border:none;padding:2px 6px;border-radius:3px;cursor:pointer;">Clear List</button>
    </div>
  `;
  document.body.appendChild(panel);

  // Close button
  document.getElementById('closePanel').addEventListener('click', () => panel.remove());

  const input = document.getElementById('genreInput');
  const addBtn = document.getElementById('addGenre');
  const dropdown = document.getElementById('genreDropdown');
  const clearBtn = document.getElementById('clearGenres');

  // Add genres
  addBtn.addEventListener('click', () => {
    if (!input.value.trim()) return;
    input.value.split(',').map(g => g.trim()).filter(g => g).forEach(genre => {
      const gLower = genre.toLowerCase();
      if (!genreList.includes(gLower)) {
        genreList.push(gLower);
        const option = document.createElement('option');
        option.value = gLower;
        option.textContent = genre;
        dropdown.appendChild(option);
      }
    });
    input.value = '';
    filterGames();
  });

  // Enter key
  input.addEventListener('keypress', e => { if (e.key === 'Enter') addBtn.click(); });

  // Clear list
  clearBtn.addEventListener('click', () => { genreList.length = 0; dropdown.innerHTML = ''; });
}

