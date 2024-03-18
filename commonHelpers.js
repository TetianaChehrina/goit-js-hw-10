import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as a}from"./assets/vendor-77e16229.js";const p=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),c=document.querySelector("[data-days]"),i=document.querySelector("[data-hours]"),d=document.querySelector("[data-minutes]"),u=document.querySelector("[data-seconds]");let S=t=>t-Date.now()<=0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){S(t[0])?(a.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),e.disabled=!0):(e.disabled=!1,a.success({title:"Success",message:"Correct date",position:"topRight"}))}},D=y(p,C);let r;e.classList.add("start-timer");e.addEventListener("click",x);function x(){r||(r=setInterval(T,1e3),e.disabled=!0)}function T(){const t=Date.now(),s=D.selectedDates[0]-t,o=q(s);e.disabled=!1,c.textContent=`${n(o.days)}`,i.textContent=`${n(o.hours)}`,d.textContent=`${n(o.minutes)}`,u.textContent=`${n(o.seconds)}`,s<=0&&(g(),c.textContent="00",i.textContent="00",d.textContent="00",u.textContent="00")}function g(){clearInterval(r)}function q(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function n(t){return t<10&&(t=t.toString().padStart(2,"0")),t}
//# sourceMappingURL=commonHelpers.js.map
