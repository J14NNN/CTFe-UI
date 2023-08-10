import{e as re,i as Te,E as _}from"./index-7bbb7502.js";import{c as at,u as Fe}from"./index-3acd9814.js";import{l as p,a1 as Re,aO as nt,h as $,X as te,H as oe,i as Ae,O as ae,j as fe,m as D,aP as st,a7 as He,u as G,aQ as lt,aR as rt,B as M,D as it,aj as ve,q as ut,R as ct,o as f,c as C,f as h,S as ne,n as w,s as e,y as T,a as O,e as k,w as N,V as P,ad as se,b as dt,aL as pt,z as ft,am as vt,t as Z,C as mt,A as ye,ai as _e,I as Me,k as bt,aS as yt,az as gt,E as ht,F as wt,J as xt}from"./index-c36c71de.js";import{c as St,u as kt}from"./index-9f2e366b.js";import{i as le,V as Ct}from"./icon-ec529186.js";import{m as It}from"./typescript-defaf979.js";import{U as me,b as Oe,c as Bt,u as De,a as ge}from"./el-tag-bc2daaa7.js";import{i as Et,d as $e}from"./el-popper-e3bca2b4.js";import{u as zt,T as Vt}from"./el-icon-bd3acefe.js";import{a as Nt}from"./use-global-config-9c175522.js";const Tt=()=>re&&/firefox/i.test(window.navigator.userAgent);let ee;const go=t=>{var i;if(!re)return 0;if(ee!==void 0)return ee;const s=document.createElement("div");s.className=`${t}-scrollbar__wrap`,s.style.visibility="hidden",s.style.width="100px",s.style.position="absolute",s.style.top="-9999px",document.body.appendChild(s);const a=s.offsetWidth;s.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",s.appendChild(l);const n=l.offsetWidth;return(i=s.parentNode)==null||i.removeChild(s),ee=a-n,ee};function ho(t,i){if(!re)return;if(!i){t.scrollTop=0;return}const s=[];let a=i.offsetParent;for(;a!==null&&t!==a&&t.contains(a);)s.push(a),a=a.offsetParent;const l=i.offsetTop+s.reduce((d,b)=>d+b.offsetTop,0),n=l+i.offsetHeight,r=t.scrollTop,g=r+t.clientHeight;l<r?t.scrollTop=l:n>g&&(t.scrollTop=n-t.clientHeight)}const wo=t=>["",...at].includes(t),_t=t=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t),$t=["class","style"],Pt=/^on[A-Z]/,Ft=(t={})=>{const{excludeListeners:i=!1,excludeKeys:s}=t,a=p(()=>((s==null?void 0:s.value)||[]).concat($t)),l=Re();return l?p(()=>{var n;return nt(Object.entries((n=l.proxy)==null?void 0:n.$attrs).filter(([r])=>!a.value.includes(r)&&!(i&&Pt.test(r))))}):p(()=>({}))};function Rt(t){const i=$();function s(){if(t.value==null)return;const{selectionStart:l,selectionEnd:n,value:r}=t.value;if(l==null||n==null)return;const g=r.slice(0,Math.max(0,l)),d=r.slice(Math.max(0,n));i.value={selectionStart:l,selectionEnd:n,value:r,beforeTxt:g,afterTxt:d}}function a(){if(t.value==null||i.value==null)return;const{value:l}=t.value,{beforeTxt:n,afterTxt:r,selectionStart:g}=i.value;if(n==null||r==null||g==null)return;let d=l.length;if(l.endsWith(r))d=l.length-r.length;else if(l.startsWith(n))d=n.length;else{const b=n[g-1],m=l.indexOf(b,g-1);m!==-1&&(d=m+1)}t.value.setSelectionRange(d,d)}return[s,a]}function At(t,{afterFocus:i,afterBlur:s}={}){const a=Re(),{emit:l}=a,n=te(),r=$(!1),g=m=>{r.value||(r.value=!0,l("focus",m),i==null||i())},d=m=>{var v;m.relatedTarget&&((v=n.value)!=null&&v.contains(m.relatedTarget))||(r.value=!1,l("blur",m),s==null||s())},b=()=>{var m;(m=t.value)==null||m.focus()};return oe(n,m=>{m&&(m.setAttribute("role","button"),m.setAttribute("tabindex","-1"))}),St(n,"click",b),{wrapperRef:n,isFocused:r,handleFocus:g,handleBlur:d}}let I;const Ht=`
  height:0 !important;
  visibility:hidden !important;
  ${Tt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Mt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Ot(t){const i=window.getComputedStyle(t),s=i.getPropertyValue("box-sizing"),a=Number.parseFloat(i.getPropertyValue("padding-bottom"))+Number.parseFloat(i.getPropertyValue("padding-top")),l=Number.parseFloat(i.getPropertyValue("border-bottom-width"))+Number.parseFloat(i.getPropertyValue("border-top-width"));return{contextStyle:Mt.map(r=>`${r}:${i.getPropertyValue(r)}`).join(";"),paddingSize:a,borderSize:l,boxSizing:s}}function Pe(t,i=1,s){var a;I||(I=document.createElement("textarea"),document.body.appendChild(I));const{paddingSize:l,borderSize:n,boxSizing:r,contextStyle:g}=Ot(t);I.setAttribute("style",`${g};${Ht}`),I.value=t.value||t.placeholder||"";let d=I.scrollHeight;const b={};r==="border-box"?d=d+n:r==="content-box"&&(d=d-l),I.value="";const m=I.scrollHeight-l;if(Te(i)){let v=m*i;r==="border-box"&&(v=v+l+n),d=Math.max(v,d),b.minHeight=`${v}px`}if(Te(s)){let v=m*s;r==="border-box"&&(v=v+l+n),d=Math.min(v,d)}return b.height=`${d}px`,(a=I.parentNode)==null||a.removeChild(I),I=void 0,b}const Dt=Ae({id:{type:String,default:void 0},size:Fe,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:le},prefixIcon:{type:le},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>It({})}}),Lt={[me]:t=>fe(t),input:t=>fe(t),change:t=>fe(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent,clear:()=>!0,mouseleave:t=>t instanceof MouseEvent,mouseenter:t=>t instanceof MouseEvent,keydown:t=>t instanceof Event,compositionstart:t=>t instanceof CompositionEvent,compositionupdate:t=>t instanceof CompositionEvent,compositionend:t=>t instanceof CompositionEvent},Kt=["role"],jt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],Wt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Gt=D({name:"ElInput",inheritAttrs:!1}),Ut=D({...Gt,props:Dt,emits:Lt,setup(t,{expose:i,emit:s}){const a=t,l=st(),n=He(),r=p(()=>{const o={};return a.containerRole==="combobox"&&(o["aria-haspopup"]=l["aria-haspopup"],o["aria-owns"]=l["aria-owns"],o["aria-expanded"]=l["aria-expanded"]),o}),g=p(()=>[a.type==="textarea"?B.b():u.b(),u.m(y.value),u.is("disabled",S.value),u.is("exceed",Ue.value),{[u.b("group")]:n.prepend||n.append,[u.bm("group","append")]:n.append,[u.bm("group","prepend")]:n.prepend,[u.m("prefix")]:n.prefix||a.prefixIcon,[u.m("suffix")]:n.suffix||a.suffixIcon||a.clearable||a.showPassword,[u.bm("suffix","password-clear")]:J.value&&ce.value},l.class]),d=p(()=>[u.e("wrapper"),u.is("focus",ue.value)]),b=Ft({excludeKeys:p(()=>Object.keys(r.value))}),{form:m,formItem:v}=Oe(),{inputId:F}=Bt(a,{formItemContext:v}),y=De(),S=ge(),u=G("input"),B=G("textarea"),R=te(),E=te(),ie=$(!1),L=$(!1),U=$(!1),he=$(),X=te(a.inputStyle),A=p(()=>R.value||E.value),{wrapperRef:je,isFocused:ue,handleFocus:Y,handleBlur:q}=At(A,{afterBlur(){var o;a.validateEvent&&((o=v==null?void 0:v.validate)==null||o.call(v,"blur").catch(c=>$e()))}}),we=p(()=>{var o;return(o=m==null?void 0:m.statusIcon)!=null?o:!1}),K=p(()=>(v==null?void 0:v.validateState)||""),xe=p(()=>K.value&&Ct[K.value]),We=p(()=>U.value?lt:rt),Ge=p(()=>[l.style,a.inputStyle]),Se=p(()=>[a.inputStyle,X.value,{resize:a.resize}]),z=p(()=>Et(a.modelValue)?"":String(a.modelValue)),J=p(()=>a.clearable&&!S.value&&!a.readonly&&!!z.value&&(ue.value||ie.value)),ce=p(()=>a.showPassword&&!S.value&&!a.readonly&&!!z.value&&(!!z.value||ue.value)),H=p(()=>a.showWordLimit&&!!b.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!S.value&&!a.readonly&&!a.showPassword),de=p(()=>z.value.length),Ue=p(()=>!!H.value&&de.value>Number(b.value.maxlength)),Xe=p(()=>!!n.suffix||!!a.suffixIcon||J.value||a.showPassword||H.value||!!K.value&&we.value),[Ye,qe]=Rt(R);kt(E,o=>{if(Je(),!H.value||a.resize!=="both")return;const c=o[0],{width:x}=c.contentRect;he.value={right:`calc(100% - ${x+15+6}px)`}});const j=()=>{const{type:o,autosize:c}=a;if(!(!re||o!=="textarea"||!E.value))if(c){const x=_e(c)?c.minRows:void 0,Q=_e(c)?c.maxRows:void 0,Ne=Pe(E.value,x,Q);X.value={overflowY:"hidden",...Ne},M(()=>{E.value.offsetHeight,X.value=Ne})}else X.value={minHeight:Pe(E.value).minHeight}},Je=(o=>{let c=!1;return()=>{var x;if(c||!a.autosize)return;((x=E.value)==null?void 0:x.offsetParent)===null||(o(),c=!0)}})(j),W=()=>{const o=A.value,c=a.formatter?a.formatter(z.value):z.value;!o||o.value===c||(o.value=c)},pe=async o=>{Ye();let{value:c}=o.target;if(a.formatter&&(c=a.parser?a.parser(c):c),!L.value){if(c===z.value){W();return}s(me,c),s("input",c),await M(),W(),qe()}},ke=o=>{s("change",o.target.value)},Ce=o=>{s("compositionstart",o),L.value=!0},Ie=o=>{var c;s("compositionupdate",o);const x=(c=o.target)==null?void 0:c.value,Q=x[x.length-1]||"";L.value=!_t(Q)},Be=o=>{s("compositionend",o),L.value&&(L.value=!1,pe(o))},Qe=()=>{U.value=!U.value,Ee()},Ee=async()=>{var o;await M(),(o=A.value)==null||o.focus()},Ze=()=>{var o;return(o=A.value)==null?void 0:o.blur()},et=o=>{ie.value=!1,s("mouseleave",o)},tt=o=>{ie.value=!0,s("mouseenter",o)},ze=o=>{s("keydown",o)},ot=()=>{var o;(o=A.value)==null||o.select()},Ve=()=>{s(me,""),s("change",""),s("clear"),s("input","")};return oe(()=>a.modelValue,()=>{var o;M(()=>j()),a.validateEvent&&((o=v==null?void 0:v.validate)==null||o.call(v,"change").catch(c=>$e()))}),oe(z,()=>W()),oe(()=>a.type,async()=>{await M(),W(),j()}),it(()=>{!a.formatter&&a.parser,W(),M(j)}),i({input:R,textarea:E,ref:A,textareaStyle:Se,autosize:ve(a,"autosize"),focus:Ee,blur:Ze,select:ot,clear:Ve,resizeTextarea:j}),(o,c)=>ut((f(),C("div",se(e(r),{class:e(g),style:e(Ge),role:o.containerRole,onMouseenter:tt,onMouseleave:et}),[h(" input "),o.type!=="textarea"?(f(),C(ne,{key:0},[h(" prepend slot "),o.$slots.prepend?(f(),C("div",{key:0,class:w(e(u).be("group","prepend"))},[T(o.$slots,"prepend")],2)):h("v-if",!0),O("div",{ref_key:"wrapperRef",ref:je,class:w(e(d))},[h(" prefix slot "),o.$slots.prefix||o.prefixIcon?(f(),C("span",{key:0,class:w(e(u).e("prefix"))},[O("span",{class:w(e(u).e("prefix-inner"))},[T(o.$slots,"prefix"),o.prefixIcon?(f(),k(e(_),{key:0,class:w(e(u).e("icon"))},{default:N(()=>[(f(),k(P(o.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),O("input",se({id:e(F),ref_key:"input",ref:R,class:e(u).e("inner")},e(b),{type:o.showPassword?U.value?"text":"password":o.type,disabled:e(S),formatter:o.formatter,parser:o.parser,readonly:o.readonly,autocomplete:o.autocomplete,tabindex:o.tabindex,"aria-label":o.label,placeholder:o.placeholder,style:o.inputStyle,form:a.form,onCompositionstart:Ce,onCompositionupdate:Ie,onCompositionend:Be,onInput:pe,onFocus:c[0]||(c[0]=(...x)=>e(Y)&&e(Y)(...x)),onBlur:c[1]||(c[1]=(...x)=>e(q)&&e(q)(...x)),onChange:ke,onKeydown:ze}),null,16,jt),h(" suffix slot "),e(Xe)?(f(),C("span",{key:1,class:w(e(u).e("suffix"))},[O("span",{class:w(e(u).e("suffix-inner"))},[!e(J)||!e(ce)||!e(H)?(f(),C(ne,{key:0},[T(o.$slots,"suffix"),o.suffixIcon?(f(),k(e(_),{key:0,class:w(e(u).e("icon"))},{default:N(()=>[(f(),k(P(o.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),e(J)?(f(),k(e(_),{key:1,class:w([e(u).e("icon"),e(u).e("clear")]),onMousedown:ft(e(vt),["prevent"]),onClick:Ve},{default:N(()=>[dt(e(pt))]),_:1},8,["class","onMousedown"])):h("v-if",!0),e(ce)?(f(),k(e(_),{key:2,class:w([e(u).e("icon"),e(u).e("password")]),onClick:Qe},{default:N(()=>[(f(),k(P(e(We))))]),_:1},8,["class"])):h("v-if",!0),e(H)?(f(),C("span",{key:3,class:w(e(u).e("count"))},[O("span",{class:w(e(u).e("count-inner"))},Z(e(de))+" / "+Z(e(b).maxlength),3)],2)):h("v-if",!0),e(K)&&e(xe)&&e(we)?(f(),k(e(_),{key:4,class:w([e(u).e("icon"),e(u).e("validateIcon"),e(u).is("loading",e(K)==="validating")])},{default:N(()=>[(f(),k(P(e(xe))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),o.$slots.append?(f(),C("div",{key:1,class:w(e(u).be("group","append"))},[T(o.$slots,"append")],2)):h("v-if",!0)],64)):(f(),C(ne,{key:1},[h(" textarea "),O("textarea",se({id:e(F),ref_key:"textarea",ref:E,class:e(B).e("inner")},e(b),{tabindex:o.tabindex,disabled:e(S),readonly:o.readonly,autocomplete:o.autocomplete,style:e(Se),"aria-label":o.label,placeholder:o.placeholder,form:a.form,onCompositionstart:Ce,onCompositionupdate:Ie,onCompositionend:Be,onInput:pe,onFocus:c[2]||(c[2]=(...x)=>e(Y)&&e(Y)(...x)),onBlur:c[3]||(c[3]=(...x)=>e(q)&&e(q)(...x)),onChange:ke,onKeydown:ze}),null,16,Wt),e(H)?(f(),C("span",{key:0,style:mt(he.value),class:w(e(u).e("count"))},Z(e(de))+" / "+Z(e(b).maxlength),7)):h("v-if",!0)],64))],16,Kt)),[[ct,o.type!=="hidden"]])}});var Xt=ye(Ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const xo=Me(Xt),Le=Symbol("buttonGroupContextKey"),Yt=(t,i)=>{zt({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},p(()=>t.type==="text"));const s=bt(Le,void 0),a=Nt("button"),{form:l}=Oe(),n=De(p(()=>s==null?void 0:s.size)),r=ge(),g=$(),d=He(),b=p(()=>t.type||(s==null?void 0:s.type)||""),m=p(()=>{var S,u,B;return(B=(u=t.autoInsertSpace)!=null?u:(S=a.value)==null?void 0:S.autoInsertSpace)!=null?B:!1}),v=p(()=>t.tag==="button"?{ariaDisabled:r.value||t.loading,disabled:r.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),F=p(()=>{var S;const u=(S=d.default)==null?void 0:S.call(d);if(m.value&&(u==null?void 0:u.length)===1){const B=u[0];if((B==null?void 0:B.type)===yt){const R=B.children;return/^\p{Unified_Ideograph}{2}$/u.test(R.trim())}}return!1});return{_disabled:r,_size:n,_type:b,_ref:g,_props:v,shouldAddSpace:F,handleClick:S=>{t.nativeType==="reset"&&(l==null||l.resetFields()),i("click",S)}}},qt=["default","primary","success","warning","info","danger","text",""],Jt=["button","submit","reset"],be=Ae({size:Fe,disabled:Boolean,type:{type:String,values:qt,default:""},icon:{type:le},nativeType:{type:String,values:Jt,default:"button"},loading:Boolean,loadingIcon:{type:le,default:()=>gt},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:ae([String,Object]),default:"button"}}),Qt={click:t=>t instanceof MouseEvent};function V(t,i=20){return t.mix("#141414",i).toString()}function Zt(t){const i=ge(),s=G("button");return p(()=>{let a={};const l=t.color;if(l){const n=new Vt(l),r=t.dark?n.tint(20).toString():V(n,20);if(t.plain)a=s.cssVarBlock({"bg-color":t.dark?V(n,90):n.tint(90).toString(),"text-color":l,"border-color":t.dark?V(n,50):n.tint(50).toString(),"hover-text-color":`var(${s.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":r,"active-text-color":`var(${s.cssVarName("color-white")})`,"active-border-color":r}),i.value&&(a[s.cssVarBlockName("disabled-bg-color")]=t.dark?V(n,90):n.tint(90).toString(),a[s.cssVarBlockName("disabled-text-color")]=t.dark?V(n,50):n.tint(50).toString(),a[s.cssVarBlockName("disabled-border-color")]=t.dark?V(n,80):n.tint(80).toString());else{const g=t.dark?V(n,30):n.tint(30).toString(),d=n.isDark()?`var(${s.cssVarName("color-white")})`:`var(${s.cssVarName("color-black")})`;if(a=s.cssVarBlock({"bg-color":l,"text-color":d,"border-color":l,"hover-bg-color":g,"hover-text-color":d,"hover-border-color":g,"active-bg-color":r,"active-border-color":r}),i.value){const b=t.dark?V(n,50):n.tint(50).toString();a[s.cssVarBlockName("disabled-bg-color")]=b,a[s.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${s.cssVarName("color-white")})`,a[s.cssVarBlockName("disabled-border-color")]=b}}}return a})}const eo=D({name:"ElButton"}),to=D({...eo,props:be,emits:Qt,setup(t,{expose:i,emit:s}){const a=t,l=Zt(a),n=G("button"),{_ref:r,_size:g,_type:d,_disabled:b,_props:m,shouldAddSpace:v,handleClick:F}=Yt(a,s);return i({ref:r,size:g,type:d,disabled:b,shouldAddSpace:v}),(y,S)=>(f(),k(P(y.tag),se({ref_key:"_ref",ref:r},e(m),{class:[e(n).b(),e(n).m(e(d)),e(n).m(e(g)),e(n).is("disabled",e(b)),e(n).is("loading",y.loading),e(n).is("plain",y.plain),e(n).is("round",y.round),e(n).is("circle",y.circle),e(n).is("text",y.text),e(n).is("link",y.link),e(n).is("has-bg",y.bg)],style:e(l),onClick:e(F)}),{default:N(()=>[y.loading?(f(),C(ne,{key:0},[y.$slots.loading?T(y.$slots,"loading",{key:0}):(f(),k(e(_),{key:1,class:w(e(n).is("loading"))},{default:N(()=>[(f(),k(P(y.loadingIcon)))]),_:1},8,["class"]))],64)):y.icon||y.$slots.icon?(f(),k(e(_),{key:1},{default:N(()=>[y.icon?(f(),k(P(y.icon),{key:0})):T(y.$slots,"icon",{key:1})]),_:3})):h("v-if",!0),y.$slots.default?(f(),C("span",{key:2,class:w({[e(n).em("text","expand")]:e(v)})},[T(y.$slots,"default")],2)):h("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var oo=ye(to,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const ao={size:be.size,type:be.type},no=D({name:"ElButtonGroup"}),so=D({...no,props:ao,setup(t){const i=t;ht(Le,wt({size:ve(i,"size"),type:ve(i,"type")}));const s=G("button");return(a,l)=>(f(),C("div",{class:w(`${e(s).b("group")}`)},[T(a.$slots,"default")],2))}});var Ke=ye(so,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const So=Me(oo,{ButtonGroup:Ke});xt(Ke);export{xo as E,So as a,_t as b,go as g,wo as i,ho as s};