import{a as b,i as p,S as u}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const h=(e,r)=>{const a={params:{key:"48537996-74d498ea386a1fe50c0c053c2",page:r,per_page:15,q:e}};return b.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&safesearch=true",a)},y=e=>`<li class="gallery-card">
  <a href="${e.largeImageURL}" class="gallery-item">
    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" title="" />
    <div class="gallery-info">
    <p>
    <span>Likes</span>
    <span>${e.likes}</span>
    </p>
        <p>
    <span>Views</span>
    <span>${e.views}</span>
    </p>
        <p>
    <span>Comments</span>
    <span>${e.comments}</span>
    </p>
       <p>
    <span>Downloads</span>
    <span>${e.downloads}</span>
    </p>
    </div>
    </a>
  </li>`,g=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),f=document.querySelector(".loader"),n=document.querySelector(".js-load-more-btn");let i=1,l="";const w=async e=>{try{if(e.preventDefault(),S(),l=e.currentTarget.elements.user_query.value.trim(),l===""){m(),p.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"});return}i=1,n.classList.add("hidden");const{data:r}=await h(l,i);if(r.hits.length===0){p.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",g.reset(),u.refresh();return}r.totalHits>1&&(n.classList.remove("hidden"),n.addEventListener("click",L));const a=r.hits.map(o=>y(o)).join("");c.innerHTML=a,new u(".gallery a",{captionsData:"alt",captionDelay:250})}catch(r){console.log(r)}finally{m()}},S=()=>f.classList.remove("is-hidden"),m=()=>f.classList.add("is-hidden");g.addEventListener("submit",w);const L=async e=>{try{i++;const{data:r}=await h(l,i),a=r.hits.map(o=>y(o)).join("");c.insertAdjacentHTML("beforeend",a),v(),i*15>=r.totalHits&&(p.error({title:"Error!",message:"We're sorry, but you've reached the end of search results."}),n.classList.add("hidden"),n.removeEventListener("click",L))}catch(r){console.log(r)}},v=()=>{const{height:e}=c.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})};console.log(v);
//# sourceMappingURL=index.js.map
