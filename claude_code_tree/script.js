// ===== Data =====

const toolData = [
  { name: 'AgentTool/', desc: 'Spawn subagents (workers)', icon: '🤖' },
  { name: 'BashTool/', desc: 'Shell command execution', icon: '💻' },
  { name: 'FileEditTool/', desc: 'Edit files with search/replace', icon: '✏️' },
  { name: 'FileReadTool/', desc: 'Read file contents', icon: '📖' },
  { name: 'FileWriteTool/', desc: 'Write new files', icon: '📝' },
  { name: 'GlobTool/', desc: 'Find files by pattern', icon: '🔍' },
  { name: 'GrepTool/', desc: 'Search file contents (ripgrep)', icon: '🔎' },
  { name: 'LSPTool/', desc: 'Language Server Protocol integration', icon: '🧠' },
  { name: 'MCPTool/', desc: 'Model Context Protocol tool calls', icon: '🔌' },
  { name: 'NotebookEditTool/', desc: 'Jupyter notebook editing', icon: '📓' },
  { name: 'REPLTool/', desc: 'Interactive REPL execution', icon: '▶️' },
  { name: 'WebFetchTool/', desc: 'Fetch web content', icon: '🌐' },
  { name: 'WebSearchTool/', desc: 'Web search', icon: '🔍' },
  { name: 'TaskCreateTool/', desc: 'Background task creation', icon: '📋' },
  { name: 'TaskGetTool/', desc: 'Query task status', icon: '📊' },
  { name: 'TaskStopTool/', desc: 'Stop running tasks', icon: '🛑' },
  { name: 'TeamCreateTool/', desc: 'Create agent teams (swarms)', icon: '👥' },
  { name: 'TeamDeleteTool/', desc: 'Delete agent teams', icon: '🗑️' },
  { name: 'SendMessageTool/', desc: 'Send messages to agents', icon: '✉️' },
  { name: 'SkillTool/', desc: 'Invoke registered skills', icon: '🎓' },
  { name: 'ToolSearchTool/', desc: 'Search for deferred tools', icon: '🔧' },
  { name: 'SleepTool/', desc: 'Wait/pause execution', icon: '⏸️' },
  { name: 'TodoWriteTool/', desc: 'Manage todo lists', icon: '✅' },
  { name: 'ConfigTool/', desc: 'Read/write configuration', icon: '⚙️' },
  { name: 'AskUserQuestionTool/', desc: 'Ask user for input', icon: '❓' },
  { name: 'EnterPlanModeTool/', desc: 'Switch to plan mode', icon: '📐' },
  { name: 'ExitPlanModeTool/', desc: 'Exit plan mode', icon: '🚪' },
  { name: 'EnterWorktreeTool/', desc: 'Enter git worktree', icon: '🌳' },
  { name: 'ExitWorktreeTool/', desc: 'Exit git worktree', icon: '🚶' },
  { name: 'BriefTool/', desc: 'Summarize conversation', icon: '📋' },
  { name: 'PowerShellTool/', desc: 'PowerShell execution (Windows)', icon: '🪟' },
  { name: 'RemoteTriggerTool/', desc: 'Trigger remote actions', icon: '📡' },
  { name: 'ScheduleCronTool/', desc: 'Schedule cron jobs', icon: '⏰' },
  { name: 'SyntheticOutputTool/', desc: 'Structured output enforcement', icon: '📦' },
  { name: 'shared/', desc: 'Shared tool utilities', icon: '📁' },
  { name: 'testing/', desc: 'Test helpers', icon: '🧪' },
];

const commands = [
  { name: '/help', desc: 'Get help' },
  { name: '/clear', desc: 'Clear screen' },
  { name: '/exit', desc: 'Exit CLI' },
  { name: '/compact', desc: 'Compact context' },
  { name: '/model', desc: 'Switch model' },
  { name: '/config', desc: 'View/edit config' },
  { name: '/memory', desc: 'Manage CLAUDE.md' },
  { name: '/mcp', desc: 'Manage MCP' },
  { name: '/permissions', desc: 'Permissions' },
  { name: '/plan', desc: 'Toggle plan mode' },
  { name: '/diff', desc: 'Show file changes' },
  { name: '/commit', desc: 'Git commit' },
  { name: '/review', desc: 'Code review' },
  { name: '/resume', desc: 'Resume session' },
  { name: '/theme', desc: 'Change theme' },
  { name: '/vim', desc: 'Vim mode' },
  { name: '/skills', desc: 'Manage skills' },
  { name: '/plugin', desc: 'Manage plugins' },
  { name: '/agents', desc: 'Agent mgmt' },
  { name: '/tasks', desc: 'Background tasks' },
  { name: '/rewind', desc: 'Undo changes' },
  { name: '/export', desc: 'Export convo' },
  { name: '/stats', desc: 'Session stats' },
  { name: '/teleport', desc: 'Teleport session' },
];

const services = [
  { name: 'api/', desc: 'Anthropic API client, retry logic, error handling', icon: '🌐' },
  { name: 'analytics/', desc: 'Event logging, GrowthBook feature flags', icon: '📊' },
  { name: 'compact/', desc: 'Context compaction (auto, micro, snip, reactive)', icon: '📐' },
  { name: 'lsp/', desc: 'Language Server Protocol integration', icon: '🧠' },
  { name: 'mcp/', desc: 'Model Context Protocol server management', icon: '🔌' },
  { name: 'oauth/', desc: 'OAuth authentication flow', icon: '🔑' },
  { name: 'plugins/', desc: 'Plugin loading and management', icon: '🧩' },
  { name: 'policyLimits/', desc: 'Organization policy enforcement', icon: '🛡️' },
  { name: 'remoteManagedSettings/', desc: 'Remote settings sync', icon: '☁️' },
  { name: 'settingsSync/', desc: 'Settings synchronization', icon: '🔄' },
  { name: 'teamMemorySync/', desc: 'Team memory synchronization', icon: '👥' },
  { name: 'tips/', desc: 'Usage tips system', icon: '💡' },
  { name: 'tools/', desc: 'Tool orchestration (StreamingToolExecutor)', icon: '⚙️' },
  { name: 'toolUseSummary/', desc: 'Tool use summary generation', icon: '📝' },
  { name: 'voice.ts', desc: 'Voice input/output', icon: '🎤' },
  { name: 'vcr.ts', desc: 'Session recording/replay', icon: '📹' },
];

const componentTree = [
  {
    name: 'App.tsx', icon: '⚛️', children: [
      {
        name: 'FullscreenLayout.tsx', icon: '🖥️', desc: 'Main layout with scrolling', children: [
          {
            name: 'Messages.tsx', icon: '💬', desc: 'Message list renderer', children: [
              { name: 'Message.tsx', icon: '📄', desc: 'Individual message' },
              { name: 'MessageRow.tsx', icon: '📝', desc: 'Message row with metadata' },
              { name: 'VirtualMessageList.tsx', icon: '📜', desc: 'Virtualized scrolling' },
            ]
          },
          { name: 'PromptInput/', icon: '⌨️', desc: 'User input area' },
          { name: 'StatusLine.tsx', icon: '📊', desc: 'Bottom status bar' },
          { name: 'Spinner.tsx', icon: '⏳', desc: 'Activity spinner' },
        ]
      },
      { name: 'ModelPicker.tsx', icon: '🎛️', desc: 'Model selection dialog' },
      { name: 'ThemePicker.tsx', icon: '🎨', desc: 'Theme selection' },
      { name: 'GlobalSearchDialog.tsx', icon: '🔍', desc: 'Search across messages' },
      { name: 'HistorySearchDialog.tsx', icon: '📚', desc: 'Search command history' },
      { name: 'Settings/', icon: '⚙️', desc: 'Settings panels' },
      { name: '... (100+ more)', icon: '📦', desc: 'Additional components' },
    ]
  }
];

const featureFlags = [
  'BRIDGE_MODE', 'DAEMON', 'BG_SESSIONS', 'TEMPLATES',
  'COORDINATOR_MODE', 'VOICE_MODE', 'HISTORY_SNIP',
  'REACTIVE_COMPACT', 'CONTEXT_COLLAPSE',
  'EXPERIMENTAL_SKILL_SEARCH', 'MCP_SKILLS',
  'ULTRAPLAN', 'FORK_SUBAGENT'
];

const hotspots = [
  { name: 'main.tsx', size: 800, desc: 'Full CLI setup, Commander.js, REPL wiring' },
  { name: 'cli/print.ts', size: 212, desc: 'Print/headless mode handler' },
  { name: 'utils/ansiToPng.ts', size: 215, desc: 'ANSI screenshot rendering' },
  { name: 'utils/messages.ts', size: 193, desc: 'Message creation, normalization' },
  { name: 'utils/sessionStorage.ts', size: 180, desc: 'Session persistence (JSONL)' },
  { name: 'utils/hooks.ts', size: 159, desc: 'User hooks system' },
  { name: 'Messages.tsx', size: 147, desc: 'Message list rendering' },
  { name: 'VirtualMessageList.tsx', size: 148, desc: 'Virtualized scrolling' },
  { name: 'utils/attachments.ts', size: 127, desc: 'Memory/skill attachment logic' },
  { name: 'commands/insights.ts', size: 115, desc: 'Usage analytics report' },
];


// ===== Render Tool Tree =====
function renderToolTree() {
  const container = document.getElementById('tool-tree-container');
  if (!container) return;

  let html = '<div class="tree-item"><span class="tree-icon folder">📂</span><span>tools/</span></div>';
  html += '<div class="tree-indent">';
  toolData.forEach(tool => {
    const isFolder = tool.name.endsWith('/');
    html += `<div class="tree-item">
      <span class="tree-icon ${isFolder ? 'folder' : ''}">${tool.icon}</span>
      <span>${tool.name}</span>
      <span class="tree-desc">${tool.desc}</span>
    </div>`;
  });
  html += '</div>';
  container.innerHTML = html;
}

// ===== Render Commands =====
function renderCommands() {
  const grid = document.getElementById('command-grid');
  if (!grid) return;

  grid.innerHTML = commands.map(cmd => `
    <div class="command-item">
      <span class="cmd-name">${cmd.name}</span>
      <span class="cmd-desc">${cmd.desc}</span>
    </div>
  `).join('');
}

// ===== Render Services =====
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = services.map(svc => `
    <div class="service-card">
      <h5>${svc.icon} ${svc.name}</h5>
      <p>${svc.desc}</p>
    </div>
  `).join('');
}

// ===== Render Component Tree =====
function renderComponentTree() {
  const container = document.getElementById('component-tree');
  if (!container) return;

  function buildTree(items, depth = 0) {
    let html = '';
    items.forEach(item => {
      const hasChildren = item.children && item.children.length > 0;
      if (hasChildren) {
        html += `<div class="tree-expandable open" style="padding-left:${depth * 24}px">
          <span class="tree-toggle">▶</span>
          <div class="tree-item" style="display:inline-flex">
            <span class="tree-icon folder">${item.icon}</span>
            <span>${item.name}</span>
            ${item.desc ? `<span class="tree-desc">${item.desc}</span>` : ''}
          </div>
          <div class="tree-children">${buildTree(item.children, depth + 1)}</div>
        </div>`;
      } else {
        html += `<div class="tree-item" style="padding-left:${depth * 24 + 14}px">
          <span class="tree-icon">${item.icon}</span>
          <span>${item.name}</span>
          ${item.desc ? `<span class="tree-desc">${item.desc}</span>` : ''}
        </div>`;
      }
    });
    return html;
  }

  const treeHTML = `<div class="tree-container">${buildTree(componentTree)}</div>`;
  container.innerHTML = `<h4>Component Hierarchy</h4>${treeHTML}`;

  // Add toggle listeners
  container.querySelectorAll('.tree-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = toggle.parentElement;
      parent.classList.toggle('open');
    });
  });
}

// ===== Render Feature Flags =====
function renderFeatureFlags() {
  const cloud = document.getElementById('flags-cloud');
  if (!cloud) return;

  cloud.innerHTML = featureFlags.map(flag => `<span class="flag-tag">${flag}</span>`).join('');
}

// ===== Render Hotspots =====
function renderHotspots() {
  const chart = document.getElementById('hotspots-chart');
  if (!chart) return;

  const maxSize = Math.max(...hotspots.map(h => h.size));

  chart.innerHTML = hotspots.map(h => {
    const pct = (h.size / maxSize * 100).toFixed(0);
    return `<div class="hotspot-bar">
      <span class="hotspot-name">${h.name}</span>
      <div class="hotspot-track">
        <div class="hotspot-fill" style="width: 0%" data-width="${pct}%">${h.size}KB</div>
      </div>
      <span class="hotspot-desc">${h.desc}</span>
    </div>`;
  }).join('');
}

// ===== Animate Hotspot Bars =====
function animateHotspots() {
  const bars = document.querySelectorAll('.hotspot-fill');
  bars.forEach((bar, i) => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      bar.style.width = width;
    }, i * 100);
  });
}

// ===== Navigation =====
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const navToggle = document.getElementById('nav-toggle');
  const sideNav = document.getElementById('side-nav');

  // Active nav tracking
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-section') === id);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (window.innerWidth <= 900) {
        sideNav.classList.remove('open');
      }
    });
  });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      sideNav.classList.toggle('open');
    });
  }

  // Close nav on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900 && sideNav.classList.contains('open')) {
      if (!sideNav.contains(e.target) && !navToggle.contains(e.target)) {
        sideNav.classList.remove('open');
      }
    }
  });
}

// ===== Scroll Reveal =====
function setupScrollReveal() {
  const elements = document.querySelectorAll('.glass-card, .service-card, .mode-card, .arch-layer, .workflow-step, .command-item, .config-level, .hotspot-bar, .ui-feature, .coord-node');

  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

// ===== Hotspot Animation on Scroll =====
function setupHotspotAnimation() {
  const chart = document.getElementById('hotspots-chart');
  if (!chart) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateHotspots();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(chart);
}

// ===== Sequence Diagram Positioning =====
function positionSequenceMessages() {
  const msgs = document.querySelectorAll('.seq-msg');
  const participants = document.querySelectorAll('.seq-p');
  if (participants.length === 0) return;

  msgs.forEach(msg => {
    const from = parseInt(msg.getAttribute('data-from'));
    const to = parseInt(msg.getAttribute('data-to'));

    // Position using margin to simulate the flow
    const minCol = Math.min(from, to);
    const maxCol = Math.max(from, to);
    const totalCols = participants.length;

    const leftPct = (minCol / totalCols) * 100 + (100 / totalCols / 2);
    msg.style.paddingLeft = `${leftPct}%`;
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderToolTree();
  renderCommands();
  renderServices();
  renderComponentTree();
  renderFeatureFlags();
  renderHotspots();
  setupNavigation();
  setupScrollReveal();
  setupHotspotAnimation();
  positionSequenceMessages();
});
