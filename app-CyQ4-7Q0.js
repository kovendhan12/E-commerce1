import{i as r,f as c,h as d,j as u,k as g,l as m}from"./store-DejNxuCl.js";function f(){const e=d();document.documentElement.classList.toggle("dark",e)}function h(){const e=document.documentElement.classList.toggle("dark");g(e),l()}function l(){const e=document.documentElement.classList.contains("dark");document.querySelectorAll("[data-dm-toggle]").forEach(t=>{var n,s;(n=t.querySelector(".icon-sun"))==null||n.classList.toggle("hidden",!e),(s=t.querySelector(".icon-moon"))==null||s.classList.toggle("hidden",e)})}function v(e,t="success"){const n={success:"bg-gray-900 dark:bg-gray-100",error:"bg-red-600",info:"bg-accent"},s={success:`<svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>`,error:`<svg class="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>`,info:`<svg class="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>`},a=document.createElement("div");a.className=`fixed top-6 right-4 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl
                     ${n[t]} text-white dark:text-gray-900
                     font-inter font-medium text-sm max-w-xs toast-enter`,a.innerHTML=`${s[t]}<span>${e}</span>`,document.body.appendChild(a),setTimeout(()=>{a.classList.replace("toast-enter","toast-exit"),setTimeout(()=>a.remove(),300)},3e3)}function i(){const e=document.querySelectorAll("[data-cart-count]"),t=u();e.forEach(n=>{n.textContent=t,n.style.display=t>0?"flex":"none"}),l()}function p(e,t="sm"){const n=t==="sm"?"w-4 h-4":"w-5 h-5";let s='<div class="flex items-center gap-0.5">';for(let a=1;a<=5;a++)e>=a?s+=`<svg class="${n} text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
               </svg>`:e>=a-.5?s+=`<svg class="${n} text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                 <defs><linearGradient id="half-${a}"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs>
                 <path fill="url(#half-${a})" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
               </svg>`:s+=`<svg class="${n} text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
               </svg>`;return s+="</div>",s}function x(e){return e?`<span class="badge ${{Sale:"badge-sale",New:"badge-new",Hot:"badge-hot"}[e]||"badge-accent"}">${e}</span>`:""}function $(e,t){const n=document.getElementById(t);if(n){n.innerHTML="";for(let s=0;s<e;s++)n.innerHTML+=`
      <div class="card overflow-hidden">
        <div class="skeleton aspect-square w-full"></div>
        <div class="p-5 space-y-3">
          <div class="skeleton h-3 w-1/3 rounded-full"></div>
          <div class="skeleton h-5 w-3/4 rounded-xl"></div>
          <div class="skeleton h-5 w-1/4 rounded-xl"></div>
          <div class="skeleton h-10 w-full rounded-xl mt-4"></div>
        </div>
      </div>`}}function k(e){var s,a;const t=e.originalPrice?Math.round((1-e.price/e.originalPrice)*100):null,n=document.createElement("div");return n.className="card group cursor-pointer flex flex-col h-full fade-up",n.innerHTML=`
    <div class="relative overflow-hidden bg-gray-50 dark:bg-gray-800 aspect-square">
      <img
        src="${e.image}"
        alt="${e.title}"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onclick="window.location.href='./product.html?id=${e.id}'"
      >
      <!-- Badges -->
      <div class="absolute top-3 left-3 flex flex-col gap-1.5">
        ${x(e.badge)}
        ${t?`<span class="badge badge-sale">-${t}%</span>`:""}
      </div>
      <!-- Quick-add overlay -->
      <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <button
          class="quick-add w-full py-2.5 bg-white/95 backdrop-blur-sm text-gray-900 rounded-xl
                 font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-200"
          data-id="${e.id}"
        >Add to Cart</button>
      </div>
    </div>
    <div class="p-4 flex flex-col flex-grow">
      <p class="text-xs font-medium text-accent mb-1 uppercase tracking-wide">${e.category}</p>
      <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2 leading-snug line-clamp-2
                 hover:text-accent transition-colors cursor-pointer text-sm"
          onclick="window.location.href='./product.html?id=${e.id}'"
      >${e.title}</h3>
      <!-- Stars -->
      <div class="flex items-center gap-1.5 mb-3">
        ${p(e.rating)}
        <span class="text-xs text-gray-500 dark:text-gray-400">(${((s=e.reviewCount)==null?void 0:s.toLocaleString())??"—"})</span>
      </div>
      <!-- Price row -->
      <div class="flex items-center justify-between mt-auto">
        <div class="flex items-baseline gap-2">
          <span class="text-lg font-bold text-gray-900 dark:text-gray-100">$${e.price.toFixed(2)}</span>
          ${e.originalPrice?`<span class="text-sm text-gray-400 line-through">$${e.originalPrice.toFixed(2)}</span>`:""}
        </div>
      </div>
    </div>
  `,(a=n.querySelector(".quick-add"))==null||a.addEventListener("click",o=>{o.stopPropagation(),y(e)}),n}function E(e,t="product-grid"){const n=document.getElementById(t);if(n){if(n.innerHTML="",!e.length){n.innerHTML=`
      <p class="col-span-full text-center text-gray-500 dark:text-gray-400 py-16 text-lg">
        No products found. Try adjusting your filters.
      </p>`;return}e.forEach((s,a)=>{const o=k(s);o.style.animationDelay=`${a*60}ms`,n.appendChild(o)})}}function y(e,t=1){m(e,t),i(),v(`${e.title.substring(0,28)}… added to cart`)}function b(){const e=document.getElementById("mobile-menu-btn"),t=document.getElementById("mobile-menu"),n=document.getElementById("mobile-menu-close");if(!e||!t)return;e.addEventListener("click",()=>{t.classList.add("open"),document.body.classList.add("mobile-menu-open")}),n==null||n.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s()});function s(){t.classList.remove("open"),document.body.classList.remove("mobile-menu-open")}}function w(){const e=document.getElementById("search-btn"),t=document.getElementById("search-input");!e||!t||(e.addEventListener("click",()=>{t.classList.toggle("w-0"),t.classList.toggle("w-48"),t.classList.toggle("opacity-0"),t.classList.toggle("opacity-100"),t.classList.toggle("px-4"),t.classList.contains("w-0")||t.focus()}),t.addEventListener("keydown",n=>{n.key==="Enter"&&t.value.trim()&&(window.location.href=`./products.html?search=${encodeURIComponent(t.value.trim())}`),n.key==="Escape"&&e.click()}))}document.addEventListener("DOMContentLoaded",()=>{f(),r(),c(),i(),b(),w(),document.querySelectorAll("[data-dm-toggle]").forEach(e=>{e.addEventListener("click",h)})});export{E as a,x as b,p as c,y as h,$ as r,v as s,i as u};
