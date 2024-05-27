(()=>{const{Lawyers:n}=window.AppData,a=document.querySelector("#concord-lawyer-card_container");a.innerHTML=null,n.concord.forEach(((n,e)=>{const i=document.createElement("div");i.classList.add("col-sm-6","col-lg-4","col-xl-3","mb-5","concord_employee"),i.setAttribute("data-id",e),i.innerHTML=`\n    \n        <div class="lawyer-card_container">\n            <div class="lawyer-card_content">\n                <div class="mb-3 img-lawyer-card_container">\n                    <img src="../../src/img/concord-lawyers/${n.image}" alt="lawyer">\n                </div>\n                <div class="lawyer-info_container">\n                    <div class="lawyer-name">${n.name+" "+n.surname}</div>\n                    <div class="lawyer-city">${n.city}</div>\n                    \n                    <a class="lawyer-email" href="mailto:${n.email}">\n                        ${n.email}\n                    </a>\n                    \n                </div>\n            </div>\n        </div>\n    \n    `,a.append(i)}));const e=document.querySelector("#likewood-lawyer-card_container");e.innerHTML=null,e.innerHTML=n.likewood.map(((n,a)=>`\n    \n        <div data-id="${a}" class="col-sm-6 col-lg-4 mb-5 likewood_employee">\n        <div class="lawyer-card_container">\n        <div class="lawyer-card_content">\n            <div class="mb-3 likewood-img-lawyer-card_container">\n                <img src="../../src/img/likewood-lawyers/${n.image}" alt="">\n            </div>\n            <div class="likewood-lawyer-info_container px-2">\n                <div class="lawyer-name fw-bolder">${n.name}</div>\n                \n                    <ul>\n                        ${n.competences.map((n=>`<li>${n}</li>`)).join("")}\n                    </ul>\n                \n                \n                <a class="lawyer-email" href="mailto:${n.email}">\n                    ${n.email}\n                </a>\n                \n            </div>\n        </div>\n    </div>\n\n        </div>\n    `)).join("")})();