import{h as g,u as x,l as a,aT as C,s as c,a1 as d,E as I,aU as _,k as z}from"./index-c36c71de.js";import{a as y,E as b,F as E,G as f}from"./index-3acd9814.js";import{d as K,f as S,z as G}from"./index-9f2e366b.js";const m=Symbol(),i=g();function p(t,l=void 0){const n=d()?z(m,i):i;return t?a(()=>{var s,o;return(o=(s=n.value)==null?void 0:s[t])!=null?o:l}):n}function O(t,l){const n=p(),s=x(t,a(()=>{var e;return((e=n.value)==null?void 0:e.namespace)||C})),o=y(a(()=>{var e;return(e=n.value)==null?void 0:e.locale})),r=K(a(()=>{var e;return((e=n.value)==null?void 0:e.zIndex)||S})),u=a(()=>{var e;return c(l)||((e=n.value)==null?void 0:e.size)||""});return N(a(()=>c(n)||{})),{ns:s,locale:o,zIndex:r,size:u}}const N=(t,l,n=!1)=>{var s;const o=!!d(),r=o?p():void 0,u=(s=l==null?void 0:l.provide)!=null?s:o?I:void 0;if(!u)return;const e=a(()=>{const v=c(t);return r!=null&&r.value?k(r.value,v):v});return u(m,e),u(b,a(()=>e.value.locale)),u(_,a(()=>e.value.namespace)),u(G,a(()=>e.value.zIndex)),u(E,{size:a(()=>e.value.size||"")}),(n||!i.value)&&(i.value=e.value),e},k=(t,l)=>{var n;const s=[...new Set([...f(t),...f(l)])],o={};for(const r of s)o[r]=(n=l[r])!=null?n:t[r];return o};export{p as a,O as u};