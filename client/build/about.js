(()=>{const{About$Values:t}=window.AppData,e=document.querySelector("#tabs_container"),n=document.querySelector("#about_us-content");e.innerHTML=null,t.forEach((t=>{e.innerHTML+=t.title}));const i=document.querySelectorAll(".about_us-tab");function a(t){$(".about_bg-img-container .main-title").text(t.htmlTitle),n.innerHTML+=`\n        ${t.text.map((t=>`<div class="py-4"><h4>${t.subtitle}</h4><div>${t.subtext}</div></div>`)).join("")}\n        `}i.forEach(((e,o)=>{e.addEventListener("click",(()=>{n.innerHTML=null,a(t[o]),i.forEach((t=>t.classList.remove("active","shadow"))),e.classList.add("active","shadow")}))})),a(t[0])})();