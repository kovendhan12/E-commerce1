import { getProducts, setProducts } from './store.js';

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export function addProduct(product) {
  const products = getProducts();
  const newProduct = { id: generateId(), ...product };
  products.push(newProduct);
  setProducts(products);
  return newProduct;
}

export function updateProduct(id, updates) {
  const products = getProducts();
  const idx = products.findIndex(p => p.id === id);
  if (idx !== -1) {
    products[idx] = { ...products[idx], ...updates };
    setProducts(products);
    return true;
  }
  return false;
}

export function deleteProduct(id) {
  const products = getProducts();
  setProducts(products.filter(p => p.id !== id));
}

export function renderAdminTable(products, containerId = 'admin-products-table') {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-12 text-gray-400">No products yet. Add your first product!</td>
      </tr>
    `;
    return;
  }

  container.innerHTML = products.map(p => `
    <tr class="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
      <td class="py-4 pl-4 pr-3 sm:pl-6">
        <div class="flex items-center gap-3">
          <img src="${p.image}" alt="${p.title}" class="w-12 h-12 object-cover rounded-lg bg-gray-100 flex-shrink-0">
          <div class="min-w-0">
            <p class="font-semibold text-gray-900 truncate max-w-xs">${p.title}</p>
            <p class="text-xs text-gray-400 mt-0.5">${p.id}</p>
          </div>
        </div>
      </td>
      <td class="py-4 px-3 text-sm text-gray-500">${p.category}</td>
      <td class="py-4 px-3 text-sm font-medium text-gray-900">$${Number(p.price).toFixed(2)}</td>
      <td class="py-4 px-3 text-sm">
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span class="font-medium text-gray-700">${p.rating}</span>
        </div>
      </td>
      <td class="py-4 px-3 text-right text-sm font-medium space-x-2 whitespace-nowrap">
        <button class="edit-btn text-appleBlue hover:text-blue-700 font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-50" data-id="${p.id}">Edit</button>
        <button class="delete-btn text-red-500 hover:text-red-700 font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50" data-id="${p.id}">Delete</button>
      </td>
    </tr>
  `).join('');
}
