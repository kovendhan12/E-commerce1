// ─── store.js — LocalStorage "Backend" ───────────────────────────────────────

const DEFAULT_PRODUCTS = [
  /* ── Electronics ────────────────────────────────────────── */
  {
    id: '1',
    title: 'Minimalist Wireless Headphones',
    price: 249.00,
    originalPrice: 349.00,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
    ],
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 2341,
    badge: 'Sale',
    description: 'Experience audio nirvana with 40-hour battery life, active noise cancellation, and premium drivers delivering studio-quality sound. Crafted from aircraft-grade aluminum and memory foam cushions.',
    reviews: [
      { author: 'Alex M.', rating: 5, text: 'Absolutely stunning sound quality. Best headphones I\'ve ever owned.', date: 'Jan 2026' },
      { author: 'Sarah K.', rating: 5, text: 'The ANC is incredible. Worth every penny.', date: 'Dec 2025' },
      { author: 'Tom R.', rating: 4, text: 'Great build quality, very comfortable for long sessions.', date: 'Nov 2025' },
    ],
  },
  {
    id: '2',
    title: 'Smart Watch Series X Pro',
    price: 399.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80',
    ],
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 5102,
    badge: 'Hot',
    description: 'Always-on Retina display, ECG & blood oxygen monitoring, 18-hour battery, and swim-proof design. The most advanced wearable yet.',
    reviews: [
      { author: 'Jordan B.', rating: 5, text: 'The health tracking is next level. Love this watch!', date: 'Feb 2026' },
      { author: 'Priya S.', rating: 5, text: 'Beautiful design and blazing fast performance.', date: 'Jan 2026' },
    ],
  },
  {
    id: '3',
    title: 'Wireless Charging Pad Ultra',
    price: 79.00,
    originalPrice: 120.00,
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80',
    ],
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 894,
    badge: 'Sale',
    description: '15W fast wireless charging compatible with all Qi-enabled devices. Ultra-slim design with LED indicator and foreign object detection.',
    reviews: [
      { author: 'Mike L.', rating: 5, text: 'Super fast charging and looks premium on my desk.', date: 'Mar 2026' },
    ],
  },
  {
    id: '4',
    title: 'Mechanical Keyboard TKL',
    price: 189.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    ],
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 1230,
    badge: 'New',
    description: 'Compact tenkeyless layout with red linear switches, per-key RGB, PBT double-shot keycaps, and USB-C connectivity. The ultimate typing experience.',
    reviews: [
      { author: 'Chris P.', rating: 5, text: 'The feel of these switches is addictive. Love it.', date: 'Feb 2026' },
    ],
  },

  /* ── Clothing ────────────────────────────────────────────── */
  {
    id: '5',
    title: 'Premium Merino Wool Sweater',
    price: 149.00,
    originalPrice: 199.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
    ],
    category: 'Clothing',
    rating: 4.7,
    reviewCount: 768,
    badge: 'Sale',
    description: 'Ultra-fine 100% Merino wool. Temperature-regulating, naturally odor-resistant, and buttery soft against your skin. Available in 8 colors.',
    reviews: [
      { author: 'Emma T.', rating: 5, text: 'So warm yet lightweight. Perfect for layering.', date: 'Jan 2026' },
    ],
  },
  {
    id: '6',
    title: 'Technical Jogger Pants',
    price: 99.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1548778052-311f4bc2b502?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1548778052-311f4bc2b502?w=800&q=80',
    ],
    category: 'Clothing',
    rating: 4.5,
    reviewCount: 432,
    badge: 'New',
    description: 'Four-way stretch fabric with moisture-wicking technology. Tapered fit with zip pockets, elastic waistband, and reflective detail.',
    reviews: [
      { author: 'Ryan G.', rating: 4, text: 'Great fit and very comfortable. Wear them everywhere.', date: 'Feb 2026' },
    ],
  },

  /* ── Furniture ───────────────────────────────────────────── */
  {
    id: '7',
    title: 'Ergonomic Mesh Office Chair',
    price: 359.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&q=80',
    ],
    category: 'Furniture',
    rating: 4.5,
    reviewCount: 2108,
    badge: null,
    description: 'Full lumbar support, 4D adjustable armrests, breathable high-back mesh, and synchronized tilt mechanism. Supports up to 135kg.',
    reviews: [
      { author: 'David C.', rating: 5, text: 'My back pain disappeared after switching to this chair.', date: 'Mar 2026' },
    ],
  },
  {
    id: '8',
    title: 'Solid Oak Desk — Minimalist',
    price: 499.00,
    originalPrice: 699.00,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
    ],
    category: 'Furniture',
    rating: 4.8,
    reviewCount: 315,
    badge: 'Sale',
    description: 'Hand-crafted from sustainably sourced solid oak. Cable management grommet, steel hairpin legs, and a smooth satin-lacquer finish.',
    reviews: [
      { author: 'Lisa H.', rating: 5, text: 'Absolutely beautiful. Gets better with age.', date: 'Jan 2026' },
    ],
  },

  /* ── Accessories ─────────────────────────────────────────── */
  {
    id: '9',
    title: 'Premium Leather Bifold Wallet',
    price: 89.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    ],
    category: 'Accessories',
    rating: 4.7,
    reviewCount: 1540,
    badge: null,
    description: 'Full-grain Italian leather, RFID blocking, 6 card slots, and a slim profile that fits perfectly in any pocket.',
    reviews: [
      { author: 'Nathan W.', rating: 5, text: 'Gorgeous wallet. The leather quality is exceptional.', date: 'Dec 2025' },
    ],
  },
  {
    id: '10',
    title: 'Minimal Canvas Backpack',
    price: 129.00,
    originalPrice: 159.00,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    category: 'Accessories',
    rating: 4.6,
    reviewCount: 871,
    badge: 'Sale',
    description: 'Waxed canvas with leather accents. 20L capacity, hidden valuables pocket, padded 15" laptop sleeve, and lifetime warranty.',
    reviews: [
      { author: 'Amy F.', rating: 5, text: 'Perfect backpack. Fits everything and looks stunning.', date: 'Jan 2026' },
    ],
  },

  /* ── Beauty ──────────────────────────────────────────────── */
  {
    id: '11',
    title: 'Vitamin C Serum — Advanced',
    price: 68.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    ],
    category: 'Beauty',
    rating: 4.9,
    reviewCount: 4203,
    badge: 'Hot',
    description: '20% pure Vitamin C with hyaluronic acid and Vitamin E. Brightens, firms, and evens skin tone. Dermatologist tested, fragrance-free.',
    reviews: [
      { author: 'Sophie L.', rating: 5, text: 'My skin looks glowing after just 2 weeks. Game changer!', date: 'Feb 2026' },
    ],
  },
  {
    id: '12',
    title: 'Hydrating Face Moisturizer',
    price: 52.00,
    originalPrice: 75.00,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
    ],
    category: 'Beauty',
    rating: 4.8,
    reviewCount: 2980,
    badge: 'Sale',
    description: 'Oil-free formula with ceramides, niacinamide, and peptides. 72-hour hydration, SPF 30, and non-comedogenic. All skin types.',
    reviews: [
      { author: 'Mia C.', rating: 5, text: 'Best moisturizer I\'ve used. No breakouts and feels amazing.', date: 'Mar 2026' },
    ],
  },
];

// ─── Init ────────────────────────────────────────────────────────────────────
export const initStore = () => {
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(DEFAULT_PRODUCTS));
  }
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
};

// Force refresh products to pick up new data on rebuild
export const refreshProducts = () => {
  localStorage.setItem('products', JSON.stringify(DEFAULT_PRODUCTS));
};

// ─── Products ────────────────────────────────────────────────────────────────
export const getProducts    = () => JSON.parse(localStorage.getItem('products')) || [];
export const setProducts    = (p) => localStorage.setItem('products', JSON.stringify(p));
export const getProductById = (id) => getProducts().find(p => p.id === id);
export const getProductsByCategory = (cat) =>
  cat === 'All' ? getProducts() : getProducts().filter(p => p.category === cat);

// ─── Cart ─────────────────────────────────────────────────────────────────────
export const getCart    = () => JSON.parse(localStorage.getItem('cart')) || [];
export const setCart    = (c) => localStorage.setItem('cart', JSON.stringify(c));

export const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  setCart(cart);
};

export const removeFromCart = (id) => {
  setCart(getCart().filter(i => i.id !== id));
};

export const updateCartQuantity = (id, quantity) => {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
    setCart(cart);
  }
};

export const getCartTotal = () =>
  getCart().reduce((sum, i) => sum + i.price * i.quantity, 0);

export const getCartCount = () =>
  getCart().reduce((sum, i) => sum + i.quantity, 0);

// ─── Dark Mode ────────────────────────────────────────────────────────────────
export const getDarkMode = () => localStorage.getItem('theme') === 'dark';
export const setDarkMode = (dark) => localStorage.setItem('theme', dark ? 'dark' : 'light');
