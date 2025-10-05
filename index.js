import{a as m,S as y,i as a}from"./assets/vendor-D8hBcPQM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="52586947-52be226ea0996a0c8fac5fdee",h="https://pixabay.com/api/";function b(s){return m.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>(console.error("AxiosError:",r),{hits:[]}))}const c=document.querySelector(".gallery"),u=document.getElementById("loader");let v=new y(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:d,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <div class="gallery-img">
          <a href="${e}">
            <img src="${n}" alt="${t}" loading="lazy" />
          </a>
        </div>
        <div class="info">
          <div class="info-text"><p><b>Likes:</b> <span class="info-count">${i}</span></p></div>
          <div class="info-text"><p><b>Views:</b> <span class="info-count">${d}</span></p></div>
          <div class="info-text"><p><b>Comments:</b> <span class="info-count">${f}</span></p></div>
          <div class="info-text"><p><b>Downloads:</b> <span class="info-count">${p}</span></p></div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),v.refresh(),c.querySelectorAll(".gallery-item").forEach((n,e)=>{e>=9&&(n.style.display="none")})}function E(){c.innerHTML=""}function S(){u.style.display="block"}function l(){u.style.display="none"}const q=document.querySelector("#search-form"),x=document.querySelector("#search-input");q.addEventListener("submit",s=>{s.preventDefault();const r=x.value.trim();if(!r){a.error({title:"Error",message:"Enter your search query"});return}E(),S(),b(r).then(o=>{if(l(),!o.hits.length){a.warning({title:"Attention",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(o.hits),a.success({title:"Success",message:`Found ${o.hits.length} images`})}).catch(o=>{l(),console.error(o),a.error({title:"Error",message:"Failed to load data"})})});
//# sourceMappingURL=index.js.map
