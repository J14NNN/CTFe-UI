import{X as S,L as $,aZ as w,h as g,H as E,s as f,b2 as T,al as N,a1 as C,D,B as I,j as b,b3 as j,i as x,O as A,m as h,u as F,l as z,o as B,c as L,y as k,ad as U,A as M,I as R}from"./index-c36c71de.js";var V=Object.defineProperty,W=Object.defineProperties,q=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&y(e,n,t[n]);if(m)for(var n of m(t))X.call(t,n)&&y(e,n,t[n]);return e},G=(e,t)=>W(e,q(t));function ce(e,t){var n;const r=S();return $(()=>{r.value=e()},G(Z({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),w(r)}var _;const d=typeof window<"u",le=e=>typeof e<"u",fe=e=>typeof e=="function",pe=e=>typeof e=="string",v=()=>{},de=d&&((_=window==null?void 0:window.navigator)==null?void 0:_.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function p(e){return typeof e=="function"?e():f(e)}function J(e,t){function n(...r){return new Promise((s,o)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(s).catch(o)})}return n}function K(e,t={}){let n,r,s=v;const o=a=>{clearTimeout(a),s(),s=v};return a=>{const u=p(e),i=p(t.maxWait);return n&&o(n),u<=0||i!==void 0&&i<=0?(r&&(o(r),r=null),Promise.resolve(a())):new Promise((l,O)=>{s=t.rejectOnCancel?O:l,i&&!r&&(r=setTimeout(()=>{n&&o(n),r=null,l(a())},i)),n=setTimeout(()=>{r&&o(r),r=null,l(a())},u)})}}function me(e){return e}function Q(e){return T()?(N(e),!0):!1}function Y(e,t=200,n={}){return J(K(t,n),e)}function ye(e,t=200,n={}){const r=g(e.value),s=Y(()=>{r.value=e.value},t,n);return E(e,()=>s()),r}function _e(e,t=!0){C()?D(e):t?e():I(e)}function ve(e,t,n={}){const{immediate:r=!0}=n,s=g(!1);let o=null;function c(){o&&(clearTimeout(o),o=null)}function a(){s.value=!1,c()}function u(...i){c(),s.value=!0,o=setTimeout(()=>{s.value=!1,o=null,e(...i)},p(t))}return r&&(s.value=!0,d&&u()),Q(a),{isPending:w(s),start:u,stop:a}}const ee=e=>e===void 0,we=e=>typeof e=="boolean",te=e=>typeof e=="number",ge=e=>typeof Element>"u"?!1:e instanceof Element,ne=e=>b(e)?!Number.isNaN(Number(e)):!1,P=(e="")=>e.split(" ").filter(t=>!!t.trim()),be=(e,t)=>{if(!e||!t)return!1;if(t.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(t)},he=(e,t)=>{!e||!t.trim()||e.classList.add(...P(t))},Pe=(e,t)=>{!e||!t.trim()||e.classList.remove(...P(t))},Oe=(e,t)=>{var n;if(!d||!e||!t)return"";let r=j(t);r==="float"&&(r="cssFloat");try{const s=e.style[r];if(s)return s;const o=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,"");return o?o[r]:""}catch{return e.style[r]}};function re(e,t="px"){if(!e)return"";if(te(e)||ne(e))return`${e}${t}`;if(b(e))return e}const se=x({size:{type:A([Number,String])},color:{type:String}}),oe=h({name:"ElIcon",inheritAttrs:!1}),ae=h({...oe,props:se,setup(e){const t=e,n=F("icon"),r=z(()=>{const{size:s,color:o}=t;return!s&&!o?{}:{fontSize:ee(s)?void 0:re(s),"--color":o}});return(s,o)=>(B(),L("i",U({class:f(n).b(),style:f(r)},s.$attrs),[k(s.$slots,"default")],16))}});var ie=M(ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const Se=R(ie);export{Se as E,we as a,re as b,ee as c,ce as d,d as e,ge as f,he as g,be as h,te as i,Oe as j,ye as k,de as l,pe as m,v as n,p as o,_e as p,me as q,Pe as r,fe as s,Q as t,ve as u,le as v};
