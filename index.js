import{a as m,S as y,i as a}from"./assets/vendor-D8hBcPQM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="52586947-52be226ea0996a0c8fac5fdee",g="https://pixabay.com/api/";function b(s){return m.get(g,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>(console.error("AxiosError:",t),{hits:[]}))}const c=document.querySelector(".gallery"),d=document.getElementById("loader");let l=new y(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <div class="gallery-img">
          <a href="${i}">
            <img src="${o}" alt="${e}" loading="lazy" />
          </a>
        </div>
        <div class="info">
          <div class="info-text"><p><b>Likes:</b> <span class="info-count">${r}</span></p></div>
          <div class="info-text"><p><b>Views:</b> <span class="info-count">${n}</span></p></div>
          <div class="info-text"><p><b>Comments:</b> <span class="info-count">${f}</span></p></div>
          <div class="info-text"><p><b>Downloads:</b> <span class="info-count">${p}</span></p></div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),l.refresh(),c.insertAdjacentHTML("beforeend",t),l.refresh()}function L(){c.innerHTML=""}function x(){d.style.display="block"}function u(){d.style.display="none"}const E=document.querySelector("#search-form"),S=document.querySelector("#search-input");E.addEventListener("submit",s=>{s.preventDefault();const t=S.value.trim();if(!t){a.error({title:"Error",message:"Enter your search query"});return}L(),x(),b(t).then(o=>{if(u(),!o.hits.length){a.warning({title:"Attention",message:"Sorry, there are no images matching your search query. Please try again!"});return}v(o.hits),a.success({title:"Success",message:`Found ${o.hits.length} images`})}).catch(o=>{u(),console.error(o),a.error({title:"Error",message:"Failed to load data"})})});
//# sourceMappingURL=index.js.map
