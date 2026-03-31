import{g as a,d as c,i as v,e as x}from"./store-DejNxuCl.js";import{s as m}from"./app-CyQ4-7Q0.js";function f(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}function E(e){const d=a(),t={id:f(),...e};return d.push(t),c(d),t}function h(e,d){const t=a(),n=t.findIndex(r=>r.id===e);return n!==-1?(t[n]={...t[n],...d},c(t),!0):!1}function b(e){const d=a();c(d.filter(t=>t.id!==e))}function B(e,d="admin-products-table"){const t=document.getElementById(d);if(t){if(e.length===0){t.innerHTML=`
      <tr>
        <td colspan="6" class="text-center py-12 text-gray-400">No products yet. Add your first product!</td>
      </tr>
    `;return}t.innerHTML=e.map(n=>`
    <tr class="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
      <td class="py-4 pl-4 pr-3 sm:pl-6">
        <div class="flex items-center gap-3">
          <img src="${n.image}" alt="${n.title}" class="w-12 h-12 object-cover rounded-lg bg-gray-100 flex-shrink-0">
          <div class="min-w-0">
            <p class="font-semibold text-gray-900 truncate max-w-xs">${n.title}</p>
            <p class="text-xs text-gray-400 mt-0.5">${n.id}</p>
          </div>
        </div>
      </td>
      <td class="py-4 px-3 text-sm text-gray-500">${n.category}</td>
      <td class="py-4 px-3 text-sm font-medium text-gray-900">$${Number(n.price).toFixed(2)}</td>
      <td class="py-4 px-3 text-sm">
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span class="font-medium text-gray-700">${n.rating}</span>
        </div>
      </td>
      <td class="py-4 px-3 text-right text-sm font-medium space-x-2 whitespace-nowrap">
        <button class="edit-btn text-appleBlue hover:text-blue-700 font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-50" data-id="${n.id}">Edit</button>
        <button class="delete-btn text-red-500 hover:text-red-700 font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50" data-id="${n.id}">Delete</button>
      </td>
    </tr>
  `).join("")}}v();const I=x();I!=="admin"&&document.getElementById("access-denied").classList.remove("hidden");const i=()=>{const e=a();B(e),document.querySelectorAll(".edit-btn").forEach(d=>{d.addEventListener("click",()=>w(d.dataset.id))}),document.querySelectorAll(".delete-btn").forEach(d=>{d.addEventListener("click",()=>{confirm("Delete this product?")&&(b(d.dataset.id),m("Product deleted"),i(),s())})})},s=()=>{const e=a(),d=[...new Set(e.map(r=>r.category))].length,t=document.getElementById("stats-cards"),n=[{label:"Total Products",value:e.length,icon:"📦",color:"bg-blue-50 text-blue-600"},{label:"Categories",value:d,icon:"🏷️",color:"bg-purple-50 text-purple-600"},{label:"Avg. Rating",value:e.length?(e.reduce((r,o)=>r+parseFloat(o.rating),0)/e.length).toFixed(1):"—",icon:"⭐",color:"bg-yellow-50 text-yellow-600"}];t.innerHTML=n.map(r=>`
        <div class="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex items-center gap-5">
          <div class="w-14 h-14 flex items-center justify-center rounded-2xl ${r.color} text-2xl">${r.icon}</div>
          <div>
            <p class="text-sm text-gray-500 font-medium">${r.label}</p>
            <p class="text-3xl font-bold text-gray-900 mt-1">${r.value}</p>
          </div>
        </div>
      `).join("")},w=e=>{const t=a().find(n=>n.id===e);t&&(document.getElementById("edit-id").value=t.id,document.getElementById("edit-title").value=t.title,document.getElementById("edit-price").value=t.price,document.getElementById("edit-rating").value=t.rating,document.getElementById("edit-category").value=t.category,document.getElementById("edit-image").value=t.image,document.getElementById("edit-modal").classList.remove("hidden"))};document.getElementById("close-modal").addEventListener("click",()=>{document.getElementById("edit-modal").classList.add("hidden")});document.getElementById("cancel-modal").addEventListener("click",()=>{document.getElementById("edit-modal").classList.add("hidden")});document.getElementById("edit-modal").addEventListener("click",e=>{e.target===e.currentTarget&&e.currentTarget.classList.add("hidden")});document.getElementById("edit-form").addEventListener("submit",e=>{e.preventDefault();const d=document.getElementById("edit-id").value;h(d,{title:document.getElementById("edit-title").value.trim(),price:parseFloat(document.getElementById("edit-price").value),rating:parseFloat(document.getElementById("edit-rating").value),category:document.getElementById("edit-category").value,image:document.getElementById("edit-image").value.trim()}),document.getElementById("edit-modal").classList.add("hidden"),m("Product updated successfully"),i(),s()});document.getElementById("add-product-form").addEventListener("submit",e=>{e.preventDefault();const d=document.getElementById("new-title").value.trim(),t=parseFloat(document.getElementById("new-price").value),n=parseFloat(document.getElementById("new-rating").value),r=document.getElementById("new-category").value,o=document.getElementById("new-image").value.trim();let u=!0;const l=(L,p,y)=>{const g=document.getElementById(p);y?g.classList.add("hidden"):(g.classList.remove("hidden"),u=!1)};l("new-title","err-title",d.length>0),l("new-price","err-price",!isNaN(t)&&t>=0),l("new-rating","err-rating",!isNaN(n)&&n>=0&&n<=5),l("new-image","err-image",o.startsWith("http")),u&&(E({title:d,price:t,rating:n,category:r,image:o}),m("Product added to store!"),e.target.reset(),i(),s())});document.addEventListener("DOMContentLoaded",()=>{i(),s()});
