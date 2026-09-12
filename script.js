/**
 * MD FARZID AHMED - FLUTTER DEVELOPER PORTFOLIO
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initNavbarScroll();
  initThemeToggle();
  initThemePalettePicker();
  initProjects();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
});

// ---------------- 1. Typing Animation ---------------- //
function initTypewriter() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    'Flutter & Dart Architecture',
    'Cross-Platform iOS & Android Apps',
    'Real-time WebSockets & Pusher',
    'App Store & Google Play Releases',
    'Firebase & REST API Integrations'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing new text
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ---------------- 2. Navbar Scroll Effect ---------------- //
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ---------------- 3. Theme Toggle (Dark / Light) ---------------- //
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem('farzid_portfolio_theme') || 'dark';
  if (savedTheme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('farzid_portfolio_theme', 'light');
        showToast('Switched to Light Mode', 'fa-regular fa-sun');
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('farzid_portfolio_theme', 'dark');
        showToast('Switched to Dark Mode', 'fa-regular fa-moon');
      }
    });
  }
}

// ---------------- 4. Dynamic Theme Palette Picker ---------------- //
function initThemePalettePicker() {
  const paletteBtn = document.getElementById('palette-btn');
  const paletteDropdown = document.getElementById('palette-dropdown');
  const optionsContainer = document.getElementById('palette-options');

  if (!paletteBtn || !paletteDropdown || !optionsContainer || !PORTFOLIO_DATA.colorThemes) return;

  const currentThemeId = localStorage.getItem('farzid_color_theme_id') || 'theme-flutter-sky';

  // Apply saved theme variables
  const activeTheme = PORTFOLIO_DATA.colorThemes.find(t => t.id === currentThemeId) || PORTFOLIO_DATA.colorThemes[0];
  applyThemeVariables(activeTheme);

  // Render Theme Options
  optionsContainer.innerHTML = '';
  PORTFOLIO_DATA.colorThemes.forEach(theme => {
    const btn = document.createElement('button');
    btn.className = `palette-option-btn ${theme.id === activeTheme.id ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="palette-color-circle" style="background: ${theme.previewColor}"></span>
      <span>${theme.name}</span>
    `;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyThemeVariables(theme);
      localStorage.setItem('farzid_color_theme_id', theme.id);

      // Update active class
      optionsContainer.querySelectorAll('.palette-option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      paletteDropdown.classList.remove('show');

      showToast(`Color Theme applied: ${theme.name}`, 'fa-solid fa-palette');
    });

    optionsContainer.appendChild(btn);
  });

  // Toggle Dropdown
  paletteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    paletteDropdown.classList.toggle('show');
  });

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!paletteDropdown.contains(e.target) && !paletteBtn.contains(e.target)) {
      paletteDropdown.classList.remove('show');
    }
  });
}

function applyThemeVariables(theme) {
  const root = document.documentElement;
  if (theme && theme.vars) {
    Object.entries(theme.vars).forEach(([prop, val]) => {
      root.style.setProperty(prop, val);
    });
  }
}

// ---------------- 5. Dynamic Projects Loader & Renderer ---------------- //
function getAllProjects() {
  const defaultProjects = PORTFOLIO_DATA.projects || [];
  let customProjects = [];
  try {
    const saved = localStorage.getItem('farzid_custom_projects');
    if (saved) {
      customProjects = JSON.parse(saved).filter(p => !p.title.toLowerCase().includes('quickmart'));
    }
  } catch (e) {
    console.error('Error parsing custom projects:', e);
  }
  return [...defaultProjects, ...customProjects];
}

function initProjects() {
  const container = document.getElementById('dynamic-projects-grid');
  if (!container) return;

  const projects = getAllProjects();
  container.innerHTML = '';

  projects.forEach((proj, idx) => {
    const isCustom = proj.isCustom === true;
    const card = document.createElement('div');
    card.className = `project-card glass-panel ${idx === 0 ? 'featured-project' : ''}`;
    
    // Construct bullets list HTML
    const bulletsHtml = (proj.bullets || []).map(b => `
      <li><i class="fa-solid fa-angle-right"></i> <span>${b}</span></li>
    `).join('');

    // Construct tags list HTML
    const tagsHtml = (proj.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

    // Construct links HTML
    let linksHtml = '';
    if (proj.links && proj.links.length > 0) {
      linksHtml = proj.links.map(link => {
        const fullClass = link.isFullWidth ? 'full-width-btn' : '';
        const btnTypeClass = link.type === 'apple' ? 'apple-btn' : 'google-btn';
        return `
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="store-badge-btn ${btnTypeClass} ${fullClass}">
            <i class="${link.icon || (link.type === 'apple' ? 'fa-brands fa-apple' : 'fa-brands fa-google-play')} store-icon"></i>
            <div class="store-btn-text">
              <small>${link.subtext || 'Get it on'}</small>
              <strong>${link.label}</strong>
            </div>
            <i class="fa-solid fa-arrow-up-right-from-square external-icon"></i>
          </a>
        `;
      }).join('');
    }

    card.innerHTML = `
      <div class="project-banner" style="background: ${proj.bannerGradient || 'linear-gradient(135deg, #1f2937, #111827)'};">
        <div class="project-status-tag live">
          <span class="live-pulse"></span>
          <span>${proj.status || 'Live on Stores'}</span>
        </div>
        <div class="project-illustration">
          <i class="fa-solid ${proj.icon || 'fa-mobile-screen'} project-big-icon"></i>
        </div>
      </div>

      <div class="project-body">
        <div class="project-top-meta">
          <span class="project-category">${proj.category}</span>
          ${proj.metric ? `<span class="metric-pill"><i class="fa-solid ${proj.metricIcon || 'fa-shield-check'}"></i> ${proj.metric}</span>` : ''}
        </div>

        <h3 class="project-title">${proj.title}</h3>

        <p class="project-description">${proj.description}</p>

        ${bulletsHtml ? `<ul class="project-bullets">${bulletsHtml}</ul>` : ''}

        <div class="project-tags">
          ${tagsHtml}
        </div>

        ${linksHtml ? `<div class="project-links-row">${linksHtml}</div>` : ''}

        ${isCustom ? `
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--glass-border); text-align: right;">
            <button class="btn btn-sm btn-outline" style="color: #F43F5E; border-color: rgba(244,63,94,0.4); padding: 0.25rem 0.6rem; font-size: 0.75rem;" onclick="deleteCustomProject('${proj.id}')">
              <i class="fa-solid fa-trash"></i> Delete
            </button>
          </div>
        ` : ''}
      </div>
    `;

    container.appendChild(card);
  });
}

// ---------------- 6. Add Custom Project Modal Logic ---------------- //
function openAddProjectModal() {
  const modal = document.getElementById('add-project-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAddProjectModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('add-project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function handleSaveCustomProject(e) {
  e.preventDefault();
  const title = document.getElementById('new-proj-title').value.trim();
  const category = document.getElementById('new-proj-category').value.trim();
  const metric = document.getElementById('new-proj-metric').value.trim();
  const tagsInput = document.getElementById('new-proj-tags').value.trim();
  const desc = document.getElementById('new-proj-desc').value.trim();
  const playUrl = document.getElementById('new-proj-play-url').value.trim();
  const appUrl = document.getElementById('new-proj-app-url').value.trim();

  const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(Boolean) : ['Flutter', 'Dart'];
  const links = [];

  if (playUrl) {
    links.push({
      type: 'google',
      label: 'Google Play',
      subtext: 'Get it on',
      icon: 'fa-brands fa-google-play',
      url: playUrl,
      isFullWidth: !appUrl
    });
  }

  if (appUrl) {
    links.push({
      type: 'apple',
      label: 'App Store',
      subtext: 'Download on',
      icon: 'fa-brands fa-apple',
      url: appUrl,
      isFullWidth: !playUrl
    });
  }

  const newProject = {
    id: 'custom-' + Date.now(),
    isCustom: true,
    title: title,
    category: category,
    metric: metric || 'Active App',
    metricIcon: 'fa-bolt',
    status: 'Live & Active',
    icon: 'fa-rocket',
    bannerGradient: 'linear-gradient(135deg, #1e3a8a, #0284c7)',
    description: desc,
    bullets: [
      'Built with scalable Flutter & Dart cross-platform architecture.',
      'Includes optimized state management and smooth native performance.'
    ],
    tags: tags,
    links: links
  };

  let customProjects = [];
  try {
    const saved = localStorage.getItem('farzid_custom_projects');
    if (saved) customProjects = JSON.parse(saved);
  } catch (err) {
    console.error(err);
  }

  customProjects.push(newProject);
  localStorage.setItem('farzid_custom_projects', JSON.stringify(customProjects));

  initProjects();
  closeAddProjectModal();
  document.getElementById('add-project-form').reset();
  showToast(`Project "${title}" added successfully!`, 'fa-solid fa-check');

  // Scroll to projects section smoothly
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

function deleteCustomProject(id) {
  if (!confirm('Are you sure you want to delete this custom project?')) return;
  try {
    let customProjects = JSON.parse(localStorage.getItem('farzid_custom_projects') || '[]');
    customProjects = customProjects.filter(p => p.id !== id);
    localStorage.setItem('farzid_custom_projects', JSON.stringify(customProjects));
    initProjects();
    showToast('Project deleted', 'fa-solid fa-trash');
  } catch (e) {
    console.error(e);
  }
}

// ---------------- 7. Mobile Menu Navigation ---------------- //
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking on any link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

// ---------------- 8. ScrollSpy (Active Section Highlighter) ---------------- //
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ---------------- 9. Back To Top Button ---------------- //
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ---------------- 10. Clipboard Copy Functionality ---------------- //
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`, 'fa-solid fa-check');
  }).catch(err => {
    console.error('Failed to copy: ', err);
    showToast(`Could not copy automatically.`, 'fa-solid fa-circle-exclamation');
  });
}

// ---------------- 11. Toast Notifications ---------------- //
function showToast(message, iconClass = 'fa-solid fa-check') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ---------------- 12. Resume Modal Controls ---------------- //
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeResumeModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeResumeModal();
    closeAddProjectModal();
  }
});

// ---------------- 13. Contact Form Submission ---------------- //
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('sender-name').value;
  const subject = document.getElementById('sender-subject').value;
  const message = document.getElementById('sender-message').value;

  const mailtoUrl = `mailto:farzidahmed150@gmail.com?subject=${encodeURIComponent(subject + ' - from ' + name)}&body=${encodeURIComponent(message + '\n\nSent from Portfolio Website by ' + name)}`;

  window.location.href = mailtoUrl;
  showToast('Opening your email client...', 'fa-solid fa-paper-plane');
}
