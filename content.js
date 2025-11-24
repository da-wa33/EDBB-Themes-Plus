(function () {
  if (document.getElementById('ext-theme-palette-btn')) return;

  const themes = [
    { id: 'default', name: 'Default', color: '#f1f5f9', isLight: true },
    { id: 'ocean', name: 'Ocean', color: '#0f172a', isLight: false },
    { id: 'forest', name: 'Forest', color: '#022c22', isLight: false },
    { id: 'sunset', name: 'Sunset', color: '#2e1065', isLight: false },
    { id: 'cyber', name: 'Cyberpunk', color: '#000000', isLight: false },
    { id: 'dracula', name: 'Dracula', color: '#282a36', isLight: false },
    { id: 'monokai', name: 'Monokai', color: '#272822', isLight: false },
    { id: 'nord', name: 'Nord', color: '#2e3440', isLight: false },
    { id: 'solarized', name: 'Solarized', color: '#fdf6e3', isLight: true },
    { id: 'discord', name: 'Blurple', color: '#36393f', isLight: false },
    { id: 'sakura', name: 'Sakura', color: '#fff0f5', isLight: true },
    { id: 'lavender', name: 'Lavender', color: '#f3e8ff', isLight: true },
    { id: 'mint', name: 'Mint', color: '#ecfdf5', isLight: true },
    { id: 'sky', name: 'Sky', color: '#e0f2fe', isLight: true },
    { id: 'lemon', name: 'Lemon', color: '#fef9c3', isLight: true },
    { id: 'peach', name: 'Peach', color: '#fff1f2', isLight: true },
    { id: 'coffee', name: 'Coffee', color: '#2b221e', isLight: false },
    { id: 'chocolate', name: 'Chocolate', color: '#3e2723', isLight: false },
    { id: 'olive', name: 'Olive', color: '#363a20', isLight: false },
    { id: 'deepsea', name: 'Deep Sea', color: '#002b36', isLight: false },
    { id: 'matrix', name: 'Matrix', color: '#000000', isLight: false },
    { id: 'terminal', name: 'Terminal', color: '#0c0c0c', isLight: false },
    { id: 'synthwave', name: 'Synthwave', color: '#241734', isLight: false },
    { id: 'midnight', name: 'Midnight', color: '#020617', isLight: false },
    { id: 'blueprint', name: 'Blueprint', color: '#1e3a8a', isLight: false },
    { id: 'highcontrast', name: 'High Contrast', color: '#000000', isLight: false },
    { id: 'void', name: 'Void', color: '#050505', isLight: false },
    { id: 'tokyonight', name: 'Tokyo Night', color: '#1a1b26', isLight: false },
    { id: 'gruvbox', name: 'Gruvbox', color: '#282828', isLight: false },
    { id: 'atom', name: 'Atom', color: '#16171d', isLight: false },
    { id: 'ruby', name: 'Ruby', color: '#450a0a', isLight: false },
    { id: 'sapphire', name: 'Sapphire', color: '#172554', isLight: false },
    { id: 'emerald', name: 'Emerald', color: '#064e3b', isLight: false },
    { id: 'amethyst', name: 'Amethyst', color: '#4c1d95', isLight: false },
    { id: 'gold', name: 'Gold', color: '#422006', isLight: false },
    { id: 'pumpkin', name: 'Pumpkin', color: '#7c2d12', isLight: false },
    { id: 'graphite', name: 'Graphite', color: '#18181b', isLight: false },
    { id: 'slate', name: 'Slate', color: '#334155', isLight: false },
    { id: 'vampire', name: 'Vampire', color: '#2a0a0a', isLight: false },
    { id: 'royal', name: 'Royal', color: '#1e1b4b', isLight: false },
    { id: 'vaporwave', name: 'Vaporwave', color: '#3a0ca3', isLight: false },
    { id: 'barbie', name: 'Hot Pink', color: '#831843', isLight: false },
    { id: 'bumblebee', name: 'Bumblebee', color: '#000000', isLight: false },
    { id: 'monochrome', name: 'Mono', color: '#000000', isLight: false },
    { id: 'halloween', name: 'Halloween', color: '#1a0500', isLight: false },
    { id: 'christmas', name: 'Christmas', color: '#0f392b', isLight: false },
    { id: 'paper', name: 'Paper', color: '#ffffff', isLight: true },
    { id: 'iceberg', name: 'Iceberg', color: '#eef6f8', isLight: true },
    { id: 'zen', name: 'Zen', color: '#d7ccc8', isLight: true },
    { id: 'unicorn', name: 'Unicorn', color: '#fdf4ff', isLight: true },
  ];

  const paletteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.01 17.461 2 12 2z"/></svg>`;
  const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

  function injectButton() {
    const target = document.getElementById('themeToggle');
    if (!target) {
      setTimeout(injectButton, 500);
      return;
    }

    const button = document.createElement('button');
    button.id = 'ext-theme-palette-btn';
    button.className = target.className;
    button.innerHTML = paletteIcon;
    button.title = "Choose from 50 Themes";
    button.style.marginRight = "8px";

    target.parentNode.insertBefore(button, target);

    button.addEventListener('click', () => {
      const modal = document.getElementById('ext-theme-modal');
      modal.classList.remove('hidden');
      requestAnimationFrame(() => {
        modal.classList.add('visible');
      });
    });
  }

  function createModal() {
    const backdrop = document.createElement('div');
    backdrop.id = 'ext-theme-modal';
    backdrop.className = 'ext-modal-backdrop hidden';

    const gridContent = themes.map(theme => {
      const borderColor = theme.isLight ? '#cbd5e1' : 'rgba(255,255,255,0.2)';
      return `
        <button class="ext-theme-btn" data-theme="${theme.id}">
          <div class="ext-preview" style="background-color: ${theme.color}; border: 1px solid ${borderColor};"></div>
          <span>${theme.name}</span>
        </button>
      `;
    }).join('');

    backdrop.innerHTML = `
      <div class="ext-modal-content">
        <div class="ext-modal-header">
          <h3>🎨 Select Theme (${themes.length})</h3>
          <button id="ext-close-modal">${closeIcon}</button>
        </div>
        <div class="ext-modal-body">
          <div class="ext-modal-grid">
            ${gridContent}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const closeModal = () => {
      backdrop.classList.remove('visible');
      setTimeout(() => {
        backdrop.classList.add('hidden');
      }, 300);
    };

    document.getElementById('ext-close-modal').addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    backdrop.querySelectorAll('.ext-theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyTheme(btn.getAttribute('data-theme'));
        closeModal();
      });
    });
  }

  function applyTheme(id) {
    const html = document.documentElement;
    
    if (id === 'default') {
      html.removeAttribute('data-ext-theme');
      chrome.storage.local.remove('savedTheme');
      return;
    }

    html.setAttribute('data-ext-theme', id);
    const theme = themes.find(t => t.id === id);
    
    if (theme && theme.isLight) {
      html.classList.remove('dark');
    } else {
      if (!html.classList.contains('dark')) {
        html.classList.add('dark');
      }
    }
    
    chrome.storage.local.set({ savedTheme: id });
  }

  function init() {
    injectButton();
    createModal();
    
    chrome.storage.local.get(['savedTheme'], (result) => {
      if (result.savedTheme) {
        applyTheme(result.savedTheme);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();