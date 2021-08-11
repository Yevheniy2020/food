!function(){"use strict";function e(e){const t=document.querySelector(e);t.classList.remove("show"),t.classList.add("hide"),document.body.style.overflow=""}function t(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearInterval(t)}window.addEventListener("DOMContentLoaded",(function(){const n=setInterval((()=>t(".modal",n)),5e3);(function({slider:e,prev:t,next:n,wrapper:o}){const r=document.querySelectorAll(e),a=document.querySelector(t),c=document.querySelector(n),s=document.querySelector("#current");document.querySelector("#total");let i=1,l=0;const d=document.querySelector(".offer__slider-flex"),u=document.querySelector(o),m=document.querySelector(".offer__slider-inner"),h=window.getComputedStyle(u).width;function g(e){return+e.replace(/\D/g,"")}d.style.display="flex",u.style.overflow="hidden",m.style.width=100*r.length+"%",m.style.transition="0.5s all",r.forEach((e=>{e.style.width=h})),s.textContent=i,c.addEventListener("click",(()=>{l==g(h)*(r.length-1)?(l=0,i=1,s.textContent=i):(l+=g(h),s.textContent=++i),m.style.transform=`translateX(-${l}px)`})),a.addEventListener("click",(()=>{l<=0?(l=g(h)*(r.length-1),i=r.length,s.textContent=i):(l-=g(h),s.textContent=--i),m.style.transform=`translateX(-${l}px)`}))})({prev:".offer__slider-prev",next:".offer__slider-next",slider:".offer__slide",wrapper:".offer__slider-wrapper"}),function(n){function o(o){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),t(".modal",n);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n            <div class="modal__content">\n                <div class = "modal__close" data-close>×</div>\n                <div class = "modal__title">${o}</div>\n            </div>\n        `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),r.classList.add("show"),r.classList.remove("hide"),e(".modal")}),2e3)}document.querySelectorAll("form").forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",n);const r=new FormData(t);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(r.entries()))).then((()=>{o("Thank you!"),t.reset(),n.remove()})).catch((()=>{o("Error")}))}))}))}(n),function(n,o,r){const a=document.querySelectorAll(n),c=document.querySelector(o);a.forEach((e=>{e.addEventListener("click",(()=>t(o,r)))})),c.addEventListener("click",(t=>{t.target!=c&&""!=t.target.getAttribute("data-close")||e(o)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&c.classList.contains("show")&&e(o)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(o,r),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(){class e{constructor(e,t,n,o,r,a){this.img=e,this.altimg=t,this.title=n,this.descr=o,this.price=r,this.container=document.querySelector(a)}render(){const e=document.createElement("div");e.innerHTML=`\n                <div class="menu__item">\n                    <img src=${this.img} alt=${this.altimg}>\n                    <h3 class="menu__item-subtitle">${this.title}</h3>\n                    <div class="menu__item-descr">${this.descr}</div>\n                    <div class="menu__item-divider"></div>\n                    <div class="menu__item-price">\n                        <div class="menu__item-cost">Цена:</div>\n                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                    </div>\n                </div>\n                `,this.container.append(e)}}(async e=>{const t=await fetch(e,{});if(!t.ok)throw new Error(`Could not fetch ${e}, status ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((({img:t,altimg:n,title:o,descr:r,price:a})=>{new e(t,n,o,r,a,".menu .container").render()}))}))}(),function(){const e=document.querySelector(".calculating__result span");let t,n,o,r,a;function c(e,t){document.querySelectorAll(`${e} div`).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function s(){e.textContent=t&&n&&o&&r&&a?"female"===t?Math.round((447.6+9.2*o+3.1*n-4.3*r)*a):Math.round((88.36+13.4*o+4.8*n-5.7*r)*a):"____"}function i(e,n){const o=document.querySelectorAll(`${e} div`);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(a=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),o.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n),s()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":r=+t.value}s()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),c("#gender","calculating__choose-item_active"),c(".calculating__choose_big","calculating__choose-item_active"),s(),i("#gender","calculating__choose-item_active"),i(".calculating__choose_big","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(e,t,n,o){const r=document.querySelectorAll(e),a=document.querySelector(t),c=document.querySelectorAll(n);function s(){r.forEach((e=>{e.style.display="none",e.classList.remove("fade")})),c.forEach((e=>{e.classList.remove(o)}))}function i(e){r[e].style.display="block",r[e].classList.add("fade"),c[e].classList.add(o)}s(),i(0),a.addEventListener("click",(e=>{e.target&&e.target.classList.contains(n.slice(1))&&c.forEach(((t,n)=>{e.target==t&&(s(),i(n))}))}))}(".tabcontent",".tabheader__items",".tabheader__item","tabheader__item_active"),function(e){const t=document.querySelector("#days"),n=document.querySelector("#hours"),o=document.querySelector("#minutes"),r=document.querySelector("#seconds");!function a(c){const s=Date.parse(c)-Date.parse(new Date),i=Math.floor(s/864e5),l=Math.floor(s/36e5%24),d=Math.floor(s/1e3/60%60),u=Math.floor(s/1e3%60),m=setInterval((function(){const c=a(e);t.innerHTML=c.days,n.innerHTML=c.hours,o.innerHTML=c.minutes,r.innerHTML=c.seconds,c.total<0&&(clearInterval(m),t.innerHTML=0,n.innerHTML=0,o.innerHTML=0,r.innerHTML=0)}),1e3);return{total:s,days:i,hours:l,minutes:d,seconds:u}}(e)}("2021-08-22")}))}();
//# sourceMappingURL=bundle.js.map