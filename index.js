import{a as p,S as m,i as a}from"./assets/vendor-D8hBcPQM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="52586947-52be226ea0996a0c8fac5fdee",g="https://pixabay.com/api/";function h(o){return p.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>(console.error("AxiosError:",t),{hits:[]}))}const l=document.querySelector(".gallery"),u=document.getElementById("loader");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:d,downloads:f})=>`
      <li class="gallery-item">
      <div class='gallery-img>
          <a href="${i}">
            <img src="${s}" alt="${e}" loading="lazy" />
          </a>
      </div>
        <div class="info">
          <div class="info-text"><p><b>Likes:</b> <span class="info-count">${r}</ы></span></div>
          <div class="info-text"><p ><b>Views:</b> <span class="info-count">${n}</ы></span></div>
          <div class="info-text"><p><b>Comments:</b> <span class="info-count">${d}</ы></span></div>
          <div class="info-text"><p><b>Downloads:</b> <span class="info-count">${f}</ы></span></div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),b.refresh()}const L=document.querySelectorAll(".gallery li");L.forEach((o,t)=>{t>=9&&(o.style.display="none")});function x(){l.innerHTML=""}function S(){u.style.display="block"}function c(){u.style.display="none"}const q=document.querySelector("#search-form"),$=document.querySelector("#search-input");q.addEventListener("submit",o=>{o.preventDefault();const t=$.value.trim();if(!t){a.error({title:"Ошибка",message:"Введите поисковый запрос"});return}x(),S(),h(t).then(s=>{if(c(),!s.hits.length){a.warning({title:"Внимание",message:"Sorry, there are no images matching your search query. Please try again!"});return}v(s.hits),a.success({title:"Успех",message:`Найдено ${s.hits.length} изображений`})}).catch(s=>{c(),console.error(s),a.error({title:"Ошибка",message:"Не удалось загрузить данные"})})});
//# sourceMappingURL=index.js.map
