import"./assets/styles-61d58c22.js";import{S as l,i as t}from"./assets/vendor-7659544d.js";import{g as m}from"./assets/pixabay-api-78f9b352.js";import{i as c}from"./assets/render-functions-5dd04fe4.js";const s=document.querySelector(".search-images-form"),o=document.querySelector(".gallery"),a=document.querySelector(".loader-container");s.addEventListener("submit",u);const g=new l(".gallery-link",{captionsData:"alt",captionDelay:250});function u(e){e.preventDefault(),a.classList.add("active"),o.innerHTML="";const i=e.target.elements.search.value.trim();i!==""?m(i).then(r=>{if(r.hits.length===0){t.error({position:"topRight",title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!"});return}const n=h(r);o.innerHTML=n,g.refresh(),s.reset()}).catch(r=>{t.error({position:"topRight",title:"Error",message:"❌ Something went wrong. Try again later."})}).finally(()=>{a.classList.remove("active")}):t.error({position:"topRight",title:"Error",message:"❌ Please input your request in the search field"})}function h(e){return e.hits.map(c).join("")}
//# sourceMappingURL=commonHelpers.js.map
