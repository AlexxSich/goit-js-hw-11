import"./assets/styles-61d58c22.js";import{S as l,i as t}from"./assets/vendor-7659544d.js";import{g as c}from"./assets/pixabay-api-78f9b352.js";import{i as m}from"./assets/render-functions-5dd04fe4.js";const s=document.querySelector(".search-images-form"),i=document.querySelector(".gallery"),a=document.querySelector(".loader-container");s.addEventListener("submit",u);const g=new l(".gallery-link",{captionsData:"alt",captionDelay:250});function u(e){e.preventDefault(),a.classList.add("active"),i.innerHTML="";const o=e.target.elements.search.value.trim();o!==""?c(o).then(r=>{if(r.hits.length===0){t.error({position:"topRight",title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!"});return}const n=h(r);i.innerHTML=n,g.refresh(),s.reset()}).catch(r=>{t.error({position:"topRight",title:"Error",message:"❌ Something went wrong. Try again later."})}).finally(()=>{a.classList.remove("active")}):t.error({position:"topRight",title:"Error",message:"❌ Please input your request in the search field"})}function h(e){return e.hits.map(m).join("")}console.log("test - це значить що гіт не оновив зміни");
//# sourceMappingURL=commonHelpers.js.map
