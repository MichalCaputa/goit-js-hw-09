var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var i=o("iQIUW");const r=document.querySelector("button"),l=document.querySelector("form"),u=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');let s;l.addEventListener("submit",(e=>{e.preventDefault(),r.disabled=!0;let t=parseInt(u.value);const n=parseInt(a.value),o=d.value;s=t;let l=1;const c=e=>((e,t)=>{const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),s)}))})(l++,e).then((e=>{i.Notify.success(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`)})).catch((e=>{i.Notify.failure(`❌ Rejected promise ${e.position} in ${e.delay}ms`)})).finally((()=>(e+=n,s=n,l<=o?c(e):r.disabled=!1)));c(t)}));
//# sourceMappingURL=03-promises.ac3b7ccc.js.map
