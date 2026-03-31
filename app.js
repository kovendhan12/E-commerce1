// ─── app.js — Shared UI Utilities ────────────────────────────────────────────
import {
  initStore, refreshProducts,
  getCartCount, addToCart,
  getDarkMode, setDarkMode,
} from './store.js';

// ─── Dark Mode ────────────────────────────────────────────────────────────────
export function initDarkMode() {
  const isDark = getDarkMode();
  document.documentElement.classList.toggle('dark', isDark);
}

export function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  setDarkMode(isDark);
  updateDarkModeIcon();
}

function updateDarkModeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('[data-dm-toggle]').forEach(btn => {
    btn.querySelector('.icon-sun')?.classList.toggle('hidden', !isDark);
    btn.querySelector('.icon-moon')?.classList.toggle('hidden', isDark);
  });
}

// ─── Toast ────────────────────────────────────────────────────────────────────
/**
 * @param {string} message
 * @param {'success'|'error'|'info'} type
 */
export function showToast(message, type = 'success') {
  const colors = {
    success: 'bg-gray-900 dark:bg-gray-100',
    error:   'bg-red-600',
    info:    'bg-accent',
  };
  const icons = {
    success: `<svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>`,
    error:   `<svg class="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>`,
    info:    `<svg class="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>`,
  };

  const toast = document.createElement('div');
  toast.className = `fixed top-6 right-4 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl
                     ${colors[type]} text-white dark:text-gray-900
                     font-inter font-medium text-sm max-w-xs toast-enter`;
  toast.innerHTML = `${icons[type]}<span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.replace('toast-enter', 'toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ─── Nav UI ───────────────────────────────────────────────────────────────────
export function updateNavUI() {
  // Cart count badge
  const badges = document.querySelectorAll('[data-cart-count]');
  const count = getCartCount();
  badges.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  // Dark mode icons
  updateDarkModeIcon();
}

// ─── Stars renderer ───────────────────────────────────────────────────────────
export function renderStars(rating, size = 'sm') {
  const sz = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  let html = '<div class="flex items-center gap-0.5">';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      html += `<svg class="${sz} text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
               </svg>`;
    } else if (rating >= i - 0.5) {
      html += `<svg class="${sz} text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                 <defs><linearGradient id="half-${i}"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs>
                 <path fill="url(#half-${i})" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
               </svg>`;
    } else {
      html += `<svg class="${sz} text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
               </svg>`;
    }
  }
  html += '</div>';
  return html;
}

// ─── Badge renderer ───────────────────────────────────────────────────────────
export function renderBadge(badge) {
  if (!badge) return '';
  const cls = { Sale: 'badge-sale', New: 'badge-new', Hot: 'badge-hot' };
  return `<span class="badge ${cls[badge] || 'badge-accent'}">${badge}</span>`;
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────
export function renderSkeletons(count, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    container.innerHTML += `
      <div class="card overflow-hidden">
        <div class="skeleton aspect-square w-full"></div>
        <div class="p-5 space-y-3">
          <div class="skeleton h-3 w-1/3 rounded-full"></div>
          <div class="skeleton h-5 w-3/4 rounded-xl"></div>
          <div class="skeleton h-5 w-1/4 rounded-xl"></div>
          <div class="skeleton h-10 w-full rounded-xl mt-4"></div>
        </div>
      </div>`;
  }
}

// ─── Product Card ─────────────────────────────────────────────────────────────
export function createProductCard(product) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const card = document.createElement('div');
  card.className = 'card group cursor-pointer flex flex-col h-full fade-up';
  card.innerHTML = `
    <div class="relative overflow-hidden bg-gray-50 dark:bg-gray-800 aspect-square">
      <img
        src="${product.image}"
        alt="${product.title}"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onclick="window.location.href='./product.html?id=${product.id}'"
      >
      <!-- Badges -->
      <div class="absolute top-3 left-3 flex flex-col gap-1.5">
        ${renderBadge(product.badge)}
        ${discount ? `<span class="badge badge-sale">-${discount}%</span>` : ''}
      </div>
      <!-- Quick-add overlay -->
      <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <button
          class="quick-add w-full py-2.5 bg-white/95 backdrop-blur-sm text-gray-900 rounded-xl
                 font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-200"
          data-id="${product.id}"
        >Add to Cart</button>
      </div>
    </div>
    <div class="p-4 flex flex-col flex-grow">
      <p class="text-xs font-medium text-accent mb-1 uppercase tracking-wide">${product.category}</p>
      <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2 leading-snug line-clamp-2
                 hover:text-accent transition-colors cursor-pointer text-sm"
          onclick="window.location.href='./product.html?id=${product.id}'"
      >${product.title}</h3>
      <!-- Stars -->
      <div class="flex items-center gap-1.5 mb-3">
        ${renderStars(product.rating)}
        <span class="text-xs text-gray-500 dark:text-gray-400">(${product.reviewCount?.toLocaleString() ?? '—'})</span>
      </div>
      <!-- Price row -->
      <div class="flex items-center justify-between mt-auto">
        <div class="flex items-baseline gap-2">
          <span class="text-lg font-bold text-gray-900 dark:text-gray-100">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="text-sm text-gray-400 line-through">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </div>
  `;

  // Quick add button
  card.querySelector('.quick-add')?.addEventListener('click', (e) => {
    e.stopPropagation();
    handleAddToCart(product);
  });

  return card;
}

// ─── Render Product Grid ──────────────────────────────────────────────────────
export function renderProductGrid(products, containerId = 'product-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  if (!products.length) {
    container.innerHTML = `
      <p class="col-span-full text-center text-gray-500 dark:text-gray-400 py-16 text-lg">
        No products found. Try adjusting your filters.
      </p>`;
    return;
  }

  products.forEach((product, i) => {
    const card = createProductCard(product);
    card.style.animationDelay = `${i * 60}ms`;
    container.appendChild(card);
  });
}

// ─── Add to Cart handler ──────────────────────────────────────────────────────
export function handleAddToCart(product, quantity = 1) {
  addToCart(product, quantity);
  updateNavUI();
  showToast(`${product.title.substring(0, 28)}… added to cart`);
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
export function initMobileMenu() {
  const btn  = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('mobile-menu-close');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.classList.add('mobile-menu-open');
  });
  close?.addEventListener('click', closeMenu);
  menu.addEventListener('click', (e) => {
    if (e.target === menu) closeMenu();
  });
  function closeMenu() {
    menu.classList.remove('open');
    document.body.classList.remove('mobile-menu-open');
  }
}

// ─── Search ───────────────────────────────────────────────────────────────────
export function initSearch() {
  const searchBtn   = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');
  if (!searchBtn || !searchInput) return;

  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('w-0');
    searchInput.classList.toggle('w-48');
    searchInput.classList.toggle('opacity-0');
    searchInput.classList.toggle('opacity-100');
    searchInput.classList.toggle('px-4');
    if (!searchInput.classList.contains('w-0')) {
      searchInput.focus();
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
      window.location.href = `./products.html?search=${encodeURIComponent(searchInput.value.trim())}`;
    }
    if (e.key === 'Escape') {
      searchBtn.click();
    }
  });
}

// ─── Page init ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initStore();
  refreshProducts(); // keep the catalog fresh after rebuilds
  updateNavUI();
  initMobileMenu();
  initSearch();

  // Dark mode toggle buttons
  document.querySelectorAll('[data-dm-toggle]').forEach(btn => {
    btn.addEventListener('click', toggleDarkMode);
  });
});
