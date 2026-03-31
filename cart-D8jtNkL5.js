import{b as u,u as c,r as m,c as g}from"./store-DejNxuCl.js";import{u as v,s as y}from"./app-CyQ4-7Q0.js";const n=()=>{const o=u(),r=document.getElementById("empty-cart"),a=document.getElementById("cart-content"),s=document.getElementById("cart-items"),l=document.getElementById("subtotal"),i=document.getElementById("order-total");if(v(),o.length===0){r.classList.remove("hidden"),a.classList.add("hidden");return}r.classList.add("hidden"),a.classList.remove("hidden"),s.innerHTML="",o.forEach(t=>{const e=document.createElement("div");e.className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm items-center",e.innerHTML=`
          <div class="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
            <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover">
          </div>
          <div class="flex-grow min-w-0">
            <h3 class="font-semibold text-gray-900 truncate">${t.title}</h3>
            <p class="text-sm text-gray-500 mt-1">${t.category}</p>
            <p class="text-appleBlue font-semibold mt-2">$${Number(t.price).toFixed(2)}</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="qty-btn dec w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors font-bold" data-id="${t.id}">-</button>
            <span class="w-6 text-center font-medium">${t.quantity}</span>
            <button class="qty-btn inc w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors font-bold" data-id="${t.id}">+</button>
          </div>
          <button class="remove-btn p-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0" data-id="${t.id}">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        `,e.querySelector(".dec").addEventListener("click",()=>{c(t.id,t.quantity-1),n()}),e.querySelector(".inc").addEventListener("click",()=>{c(t.id,t.quantity+1),n()}),e.querySelector(".remove-btn").addEventListener("click",()=>{m(t.id),y("Item removed from cart"),n()}),s.appendChild(e)});const d=g();l.textContent=`$${d.toFixed(2)}`,i.textContent=`$${d.toFixed(2)}`};document.addEventListener("DOMContentLoaded",n);
