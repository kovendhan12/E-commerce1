import{a as I,g as p}from"./store-DejNxuCl.js";import{b as L,c as i,h as $,a as k}from"./app-CyQ4-7Q0.js";document.addEventListener("DOMContentLoaded",()=>{const v=new URLSearchParams(window.location.search).get("id"),h=document.getElementById("loading-skeleton"),b=document.getElementById("product-container"),f=document.getElementById("not-found");setTimeout(()=>{var u,y;const e=I(v);if(h.classList.add("hidden"),!e){f.classList.remove("hidden");return}b.classList.remove("hidden"),document.title=`${e.title} | Aura`,document.getElementById("breadcrumb-title").textContent=e.title,document.getElementById("product-category").textContent=e.category,document.getElementById("product-badge").innerHTML=L(e.badge),document.getElementById("product-title").textContent=e.title;const E=document.getElementById("product-stars");E.innerHTML=i(e.rating,"lg"),document.getElementById("product-rating-text").textContent=`${e.rating} (${((u=e.reviewCount)==null?void 0:u.toLocaleString())??0} reviews)`;const w=document.getElementById("product-price-row"),c=e.originalPrice?Math.round((1-e.price/e.originalPrice)*100):null;w.innerHTML=`
          <span class="text-4xl font-bold text-gray-900 dark:text-white">$${e.price.toFixed(2)}</span>
          ${e.originalPrice?`<span class="text-xl text-gray-400 line-through">$${e.originalPrice.toFixed(2)}</span>`:""}
          ${c?`<span class="badge badge-sale text-sm py-1">Save ${c}%</span>`:""}
        `,document.getElementById("product-description").textContent=e.description;const d=document.getElementById("main-image");d.src=e.image,d.alt=e.title;const s=document.getElementById("thumbnails");(e.images||[e.image]).forEach((t,a)=>{const r=document.createElement("button");r.className=`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all
                             ${a===0?"border-accent ring-2 ring-accent ring-offset-1":"border-transparent hover:border-gray-300"}`,r.innerHTML=`<img src="${t}" alt="Product view ${a+1}" class="w-full h-full object-cover">`,r.addEventListener("click",()=>{d.src=t,s.querySelectorAll("button").forEach(x=>{x.className=x.className.replace("border-accent ring-2 ring-accent ring-offset-1","border-transparent hover:border-gray-300")}),r.className=r.className.replace("border-transparent hover:border-gray-300","border-accent ring-2 ring-accent ring-offset-1")}),s.appendChild(r)});let n=1;const l=document.getElementById("qty-value");document.getElementById("qty-dec").addEventListener("click",()=>{n>1&&(n--,l.textContent=n)}),document.getElementById("qty-inc").addEventListener("click",()=>{n++,l.textContent=n}),document.getElementById("add-to-cart-btn").addEventListener("click",()=>{$(e,n)});const o=e.reviews||[];document.getElementById("avg-rating-big").textContent=e.rating.toFixed(1),document.getElementById("avg-stars").innerHTML=i(e.rating,"lg"),document.getElementById("review-count-label").textContent=`${((y=e.reviewCount)==null?void 0:y.toLocaleString())??o.length} reviews`;const B=document.getElementById("rating-bars");[5,4,3,2,1].forEach(t=>{const a=t===5?65:t===4?20:t===3?10:t===2?3:2;B.innerHTML+=`
            <div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <span class="w-3 text-right">${t}</span>
              <svg class="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <div class="review-bar flex-1"><div class="review-bar-fill" style="width:${a}%"></div></div>
              <span class="w-6 text-right">${a}%</span>
            </div>`});const g=document.getElementById("review-list");o.length===0?g.innerHTML='<p class="text-gray-500 dark:text-gray-400">No reviews yet. Be the first!</p>':o.forEach(t=>{g.innerHTML+=`
              <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div class="flex items-start justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      ${t.author.charAt(0)}
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900 dark:text-gray-100 text-sm">${t.author}</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">${t.date}</p>
                    </div>
                  </div>
                  <div>${i(t.rating)}</div>
                </div>
                <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">${t.text}</p>
              </div>`});const m=p().filter(t=>t.category===e.category&&t.id!==e.id).slice(0,4);k(m.length?m:p().filter(t=>t.id!==e.id).slice(0,4),"related-products")},500)});
