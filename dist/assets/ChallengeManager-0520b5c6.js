import{D as Ae,L as Ke,ag as ze,x as Pe,u as Oe,ak as _e,H as ie,al as Xe,am as le,B as z,i as Ge,O as ye,m as pe,b as m,y as re,K as x,h as T,F as Re,an as Ze,G as Ve,w as h,q as U,R as ee,a9 as xe,j as te,ai as fe,ao as Je,A as Qe,l as R,r as A,o as b,e as k,a as w,n as y,C as he,z as G,c as ne,V as Z,f as V,t as q,a0 as J,d as N,N as De,aa as Ne,ap as be,aq as we,_ as en,ar as nn,as as tn}from"./index-c36c71de.js";import{a as on,E as sn}from"./el-table-column-0244830a.js";import"./el-tooltip-4ed993c7.js";import{t as ln,a as an,u as Ce}from"./el-popper-e3bca2b4.js";import"./el-scrollbar-c5918660.js";import"./el-tag-bc2daaa7.js";import{g as rn,a as He,E as Fe,i as dn}from"./el-button-02e3f044.js";import"./el-icon-bd3acefe.js";import"./el-badge-e232ad28.js";import{E as Ee}from"./el-message-ed17f855.js";import{P as ae}from"./vnode-0f9a22d4.js";import{b as ke,e as me,h as Te,j as D,g as de,r as Y,E as We,c as un,f as Me}from"./index-7bbb7502.js";import{E as cn}from"./index-9f2e366b.js";import{o as Be}from"./aria-bc8e8b0f.js";import{a as pn,T as Ie}from"./icon-ec529186.js";import{u as qe}from"./use-global-config-9c175522.js";import"./_commonjsHelpers-725317a4.js";import"./index-3acd9814.js";import"./typescript-defaf979.js";const fn=(e,n,t)=>{let o={offsetX:0,offsetY:0};const i=d=>{const u=d.clientX,l=d.clientY,{offsetX:c,offsetY:v}=o,a=e.value.getBoundingClientRect(),p=a.left,g=a.top,C=a.width,L=a.height,E=document.documentElement.clientWidth,M=document.documentElement.clientHeight,K=-p+c,oe=-g+v,se=E-p-C+c,S=M-g-L+v,F=X=>{const $=Math.min(Math.max(c+X.clientX-u,K),se),W=Math.min(Math.max(v+X.clientY-l,oe),S);o={offsetX:$,offsetY:W},e.value.style.transform=`translate(${ke($)}, ${ke(W)})`},_=()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",F),document.addEventListener("mouseup",_)},s=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",i)},r=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",i)};Ae(()=>{Ke(()=>{t.value?s():r()})}),ze(()=>{r()})},mn=(e,n={})=>{Pe(e)||ln("[useLockscreen]","You need to pass a ref param to this function");const t=n.ns||Oe("popup"),o=_e(()=>t.bm("parent","hidden"));if(!me||Te(document.body,o.value))return;let i=0,s=!1,r="0";const d=()=>{setTimeout(()=>{Y(document==null?void 0:document.body,o.value),s&&document&&(document.body.style.width=r)},200)};ie(e,u=>{if(!u){d();return}s=!Te(document.body,o.value),s&&(r=document.body.style.width),i=rn(t.namespace.value);const l=document.documentElement.clientHeight<document.body.scrollHeight,c=D(document.body,"overflowY");i>0&&(l||c==="scroll")&&s&&(document.body.style.width=`calc(100% - ${i}px)`),de(document.body,o.value)}),Xe(()=>d())},Ue=e=>{if(!e)return{onClick:le,onMousedown:le,onMouseup:le};let n=!1,t=!1;return{onClick:r=>{n&&t&&e(r),n=t=!1},onMousedown:r=>{n=r.target===r.currentTarget},onMouseup:r=>{t=r.target===r.currentTarget}}},ue="_trap-focus-children",P=[],Le=e=>{if(P.length===0)return;const n=P[P.length-1][ue];if(n.length>0&&e.code===cn.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const t=e.shiftKey,o=e.target===n[0],i=e.target===n[n.length-1];o&&t&&(e.preventDefault(),n[n.length-1].focus()),i&&!t&&(e.preventDefault(),n[0].focus())}},vn={beforeMount(e){e[ue]=Be(e),P.push(e),P.length<=1&&document.addEventListener("keydown",Le)},updated(e){z(()=>{e[ue]=Be(e)})},unmounted(){P.shift(),P.length===0&&document.removeEventListener("keydown",Le)}},gn=Ge({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:ye([String,Array,Object])},zIndex:{type:ye([String,Number])}}),yn={click:e=>e instanceof MouseEvent},hn="overlay";var bn=pe({name:"ElOverlay",props:gn,emits:yn,setup(e,{slots:n,emit:t}){const o=Oe(hn),i=u=>{t("click",u)},{onClick:s,onMousedown:r,onMouseup:d}=Ue(e.customMaskEvent?void 0:i);return()=>e.mask?m("div",{class:[o.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:r,onMouseup:d},[re(n,"default")],ae.STYLE|ae.CLASS|ae.PROPS,["onClick","onMouseup","onMousedown"]):x("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[re(n,"default")])}});const wn=bn;function Cn(e){let n;const t=T(!1),o=Re({...e,originalPosition:"",originalOverflow:"",visible:!1});function i(a){o.text=a}function s(){const a=o.parent,p=v.ns;if(!a.vLoadingAddClassList){let g=a.getAttribute("loading-number");g=Number.parseInt(g)-1,g?a.setAttribute("loading-number",g.toString()):(Y(a,p.bm("parent","relative")),a.removeAttribute("loading-number")),Y(a,p.bm("parent","hidden"))}r(),c.unmount()}function r(){var a,p;(p=(a=v.$el)==null?void 0:a.parentNode)==null||p.removeChild(v.$el)}function d(){var a;e.beforeClose&&!e.beforeClose()||(t.value=!0,clearTimeout(n),n=window.setTimeout(u,400),o.visible=!1,(a=e.closed)==null||a.call(e))}function u(){if(!t.value)return;const a=o.parent;t.value=!1,a.vLoadingAddClassList=void 0,s()}const l=pe({name:"ElLoading",setup(a,{expose:p}){const{ns:g,zIndex:C}=qe("loading");return p({ns:g,zIndex:C}),()=>{const L=o.spinner||o.svg,E=x("svg",{class:"circular",viewBox:o.svgViewBox?o.svgViewBox:"0 0 50 50",...L?{innerHTML:L}:{}},[x("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),M=o.text?x("p",{class:g.b("text")},[o.text]):void 0;return x(xe,{name:g.b("fade"),onAfterLeave:u},{default:h(()=>[U(m("div",{style:{backgroundColor:o.background||""},class:[g.b("mask"),o.customClass,o.fullscreen?"is-fullscreen":""]},[x("div",{class:g.b("spinner")},[E,M])]),[[ee,o.visible]])])})}}}),c=Ze(l),v=c.mount(document.createElement("div"));return{...Ve(o),setText:i,removeElLoadingChild:r,close:d,handleAfterLeave:u,vm:v,get $el(){return v.$el}}}let Q;const En=function(e={}){if(!me)return;const n=kn(e);if(n.fullscreen&&Q)return Q;const t=Cn({...n,closed:()=>{var i;(i=n.closed)==null||i.call(n),n.fullscreen&&(Q=void 0)}});Tn(n,n.parent,t),Se(n,n.parent,t),n.parent.vLoadingAddClassList=()=>Se(n,n.parent,t);let o=n.parent.getAttribute("loading-number");return o?o=`${Number.parseInt(o)+1}`:o="1",n.parent.setAttribute("loading-number",o),n.parent.appendChild(t.$el),z(()=>t.visible.value=n.visible),n.fullscreen&&(Q=t),t},kn=e=>{var n,t,o,i;let s;return te(e.target)?s=(n=document.querySelector(e.target))!=null?n:document.body:s=e.target||document.body,{parent:s===document.body||e.body?document.body:s,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:s===document.body&&((t=e.fullscreen)!=null?t:!0),lock:(o=e.lock)!=null?o:!1,customClass:e.customClass||"",visible:(i=e.visible)!=null?i:!0,target:s}},Tn=async(e,n,t)=>{const{nextZIndex:o}=t.vm.zIndex||t.vm._.exposed.zIndex,i={};if(e.fullscreen)t.originalPosition.value=D(document.body,"position"),t.originalOverflow.value=D(document.body,"overflow"),i.zIndex=o();else if(e.parent===document.body){t.originalPosition.value=D(document.body,"position"),await z();for(const s of["top","left"]){const r=s==="top"?"scrollTop":"scrollLeft";i[s]=`${e.target.getBoundingClientRect()[s]+document.body[r]+document.documentElement[r]-Number.parseInt(D(document.body,`margin-${s}`),10)}px`}for(const s of["height","width"])i[s]=`${e.target.getBoundingClientRect()[s]}px`}else t.originalPosition.value=D(n,"position");for(const[s,r]of Object.entries(i))t.$el.style[s]=r},Se=(e,n,t)=>{const o=t.vm.ns||t.vm._.exposed.ns;["absolute","fixed","sticky"].includes(t.originalPosition.value)?Y(n,o.bm("parent","relative")):de(n,o.bm("parent","relative")),e.fullscreen&&e.lock?de(n,o.bm("parent","hidden")):Y(n,o.bm("parent","hidden"))},ce=Symbol("ElLoading"),$e=(e,n)=>{var t,o,i,s;const r=n.instance,d=a=>fe(n.value)?n.value[a]:void 0,u=a=>{const p=te(a)&&(r==null?void 0:r[a])||a;return p&&T(p)},l=a=>u(d(a)||e.getAttribute(`element-loading-${Je(a)}`)),c=(t=d("fullscreen"))!=null?t:n.modifiers.fullscreen,v={text:l("text"),svg:l("svg"),svgViewBox:l("svgViewBox"),spinner:l("spinner"),background:l("background"),customClass:l("customClass"),fullscreen:c,target:(o=d("target"))!=null?o:c?void 0:e,body:(i=d("body"))!=null?i:n.modifiers.body,lock:(s=d("lock"))!=null?s:n.modifiers.lock};e[ce]={options:v,instance:En(v)}},Mn=(e,n)=>{for(const t of Object.keys(n))Pe(n[t])&&(n[t].value=e[t])},Bn={mounted(e,n){n.value&&$e(e,n)},updated(e,n){const t=e[ce];n.oldValue!==n.value&&(n.value&&!n.oldValue?$e(e,n):n.value&&n.oldValue?fe(n.value)&&Mn(n.value,t.options):t==null||t.instance.close())},unmounted(e){var n;(n=e[ce])==null||n.instance.close()}},In=pe({name:"ElMessageBox",directives:{TrapFocus:vn},components:{ElButton:He,ElFocusTrap:an,ElInput:Fe,ElOverlay:wn,ElIcon:We,...pn},inheritAttrs:!1,props:{buttonSize:{type:String,validator:dn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:t,zIndex:o,ns:i,size:s}=qe("message-box",R(()=>e.buttonSize)),{t:r}=t,{nextZIndex:d}=o,u=T(!1),l=Re({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:d()}),c=R(()=>{const f=l.type;return{[i.bm("icon",f)]:f&&Ie[f]}}),v=Ce(),a=Ce(),p=R(()=>l.icon||Ie[l.type]||""),g=R(()=>!!l.message),C=T(),L=T(),E=T(),M=T(),K=T(),oe=R(()=>l.confirmButtonClass);ie(()=>l.inputValue,async f=>{await z(),e.boxType==="prompt"&&f!==null&&W()},{immediate:!0}),ie(()=>u.value,f=>{var B,O;f&&(e.boxType!=="prompt"&&(l.autofocus?E.value=(O=(B=K.value)==null?void 0:B.$el)!=null?O:C.value:E.value=C.value),l.zIndex=d()),e.boxType==="prompt"&&(f?z().then(()=>{var ge;M.value&&M.value.$el&&(l.autofocus?E.value=(ge=Ye())!=null?ge:C.value:E.value=C.value)}):(l.editorErrorMessage="",l.validateError=!1))});const se=R(()=>e.draggable);fn(C,L,se),Ae(async()=>{await z(),e.closeOnHashChange&&window.addEventListener("hashchange",S)}),ze(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",S)});function S(){u.value&&(u.value=!1,z(()=>{l.action&&n("action",l.action)}))}const F=()=>{e.closeOnClickModal&&$(l.distinguishCancelAndClose?"close":"cancel")},_=Ue(F),X=f=>{if(l.inputType!=="textarea")return f.preventDefault(),$("confirm")},$=f=>{var B;e.boxType==="prompt"&&f==="confirm"&&!W()||(l.action=f,l.beforeClose?(B=l.beforeClose)==null||B.call(l,f,l,S):S())},W=()=>{if(e.boxType==="prompt"){const f=l.inputPattern;if(f&&!f.test(l.inputValue||""))return l.editorErrorMessage=l.inputErrorMessage||r("el.messagebox.error"),l.validateError=!0,!1;const B=l.inputValidator;if(typeof B=="function"){const O=B(l.inputValue);if(O===!1)return l.editorErrorMessage=l.inputErrorMessage||r("el.messagebox.error"),l.validateError=!0,!1;if(typeof O=="string")return l.editorErrorMessage=O,l.validateError=!0,!1}}return l.editorErrorMessage="",l.validateError=!1,!0},Ye=()=>{const f=M.value.$refs;return f.input||f.textarea},ve=()=>{$("close")},je=()=>{e.closeOnPressEscape&&ve()};return e.lockScroll&&mn(u),{...Ve(l),ns:i,overlayEvent:_,visible:u,hasMessage:g,typeClass:c,contentId:v,inputId:a,btnSize:s,iconComponent:p,confirmButtonClasses:oe,rootRef:C,focusStartRef:E,headerRef:L,inputRef:M,confirmRef:K,doClose:S,handleClose:ve,onCloseRequested:je,handleWrapperClick:F,handleInputEnter:X,handleAction:$,t:r}}}),Ln=["aria-label","aria-describedby"],Sn=["aria-label"],$n=["id"];function An(e,n,t,o,i,s){const r=A("el-icon"),d=A("close"),u=A("el-input"),l=A("el-button"),c=A("el-focus-trap"),v=A("el-overlay");return b(),k(xe,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=a=>e.$emit("vanish")),persisted:""},{default:h(()=>[U(m(v,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:h(()=>[w("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:y(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...a)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...a)),onMousedown:n[9]||(n[9]=(...a)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...a)),onMouseup:n[10]||(n[10]=(...a)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...a))},[m(c,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:h(()=>[w("div",{ref:"rootRef",class:y([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:he(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=G(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(b(),ne("div",{key:0,ref:"headerRef",class:y(e.ns.e("header"))},[w("div",{class:y(e.ns.e("title"))},[e.iconComponent&&e.center?(b(),k(r,{key:0,class:y([e.ns.e("status"),e.typeClass])},{default:h(()=>[(b(),k(Z(e.iconComponent)))]),_:1},8,["class"])):V("v-if",!0),w("span",null,q(e.title),1)],2),e.showClose?(b(),ne("button",{key:0,type:"button",class:y(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=a=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=J(G(a=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[m(r,{class:y(e.ns.e("close"))},{default:h(()=>[m(d)]),_:1},8,["class"])],42,Sn)):V("v-if",!0)],2)):V("v-if",!0),w("div",{id:e.contentId,class:y(e.ns.e("content"))},[w("div",{class:y(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(b(),k(r,{key:0,class:y([e.ns.e("status"),e.typeClass])},{default:h(()=>[(b(),k(Z(e.iconComponent)))]),_:1},8,["class"])):V("v-if",!0),e.hasMessage?(b(),ne("div",{key:1,class:y(e.ns.e("message"))},[re(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(b(),k(Z(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(b(),k(Z(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:h(()=>[N(q(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):V("v-if",!0)],2),U(w("div",{class:y(e.ns.e("input"))},[m(u,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=a=>e.inputValue=a),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:y({invalid:e.validateError}),onKeydown:J(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),w("div",{class:y(e.ns.e("errormsg")),style:he({visibility:e.editorErrorMessage?"visible":"hidden"})},q(e.editorErrorMessage),7)],2),[[ee,e.showInput]])],10,$n),w("div",{class:y(e.ns.e("btns"))},[e.showCancelButton?(b(),k(l,{key:0,loading:e.cancelButtonLoading,class:y([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=a=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=J(G(a=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:h(()=>[N(q(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):V("v-if",!0),U(m(l,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:y([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=a=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=J(G(a=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:h(()=>[N(q(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[ee,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Ln)]),_:3},8,["z-index","overlay-class","mask"]),[[ee,e.visible]])]),_:3})}var zn=Qe(In,[["render",An],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const j=new Map,Pn=e=>{let n=document.body;return e.appendTo&&(te(e.appendTo)&&(n=document.querySelector(e.appendTo)),Me(e.appendTo)&&(n=e.appendTo),Me(n)||(n=document.body)),n},On=(e,n,t=null)=>{const o=m(zn,e,we(e.message)||De(e.message)?{default:we(e.message)?e.message:()=>e.message}:null);return o.appContext=t,Ne(o,n),Pn(e).appendChild(n.firstElementChild),o.component},Rn=()=>document.createElement("div"),Vn=(e,n)=>{const t=Rn();e.onVanish=()=>{Ne(null,t),j.delete(i)},e.onAction=s=>{const r=j.get(i);let d;e.showInput?d={value:i.inputValue,action:s}:d=s,e.callback?e.callback(d,o.proxy):s==="cancel"||s==="close"?e.distinguishCancelAndClose&&s!=="cancel"?r.reject("close"):r.reject("cancel"):r.resolve(d)};const o=On(e,t,n),i=o.proxy;for(const s in e)be(e,s)&&!be(i.$props,s)&&(i[s]=e[s]);return i.visible=!0,i};function H(e,n=null){if(!me)return Promise.reject();let t;return te(e)||De(e)?e={message:e}:t=e.callback,new Promise((o,i)=>{const s=Vn(e,n??H._context);j.set(s,{options:e,callback:t,resolve:o,reject:i})})}const xn=["alert","confirm","prompt"],Dn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};xn.forEach(e=>{H[e]=Nn(e)});function Nn(e){return(n,t,o,i)=>{let s="";return fe(t)?(o=t,s=""):un(t)?s="":s=t,H(Object.assign({title:s,message:n,type:"",...Dn[e]},o,{boxType:e}),i)}}H.close=()=>{j.forEach((e,n)=>{n.doClose()}),j.clear()};H._context=null;const I=H;I.install=e=>{I._context=e._context,e.config.globalProperties.$msgbox=I,e.config.globalProperties.$messageBox=I,e.config.globalProperties.$alert=I.alert,e.config.globalProperties.$confirm=I.confirm,e.config.globalProperties.$prompt=I.prompt};const Hn=I;const Fn={methods:{filterType(e,n){return n.type===e},clearFilter(){this.$refs.tableRef.clearFilter()},handleEdit(e){this.$router.push({name:"editChallenge",params:{cid:e}})},handleDelete(e,n){Hn.confirm("It will permanently delete the challenge. Continue?","Warning",{type:"warning",icon:nn(tn)}).then(()=>{Ee({type:"success",message:"Delete completed",offset:75})}).catch(()=>{Ee({type:"info",message:"Delete canceled",offset:75})})}},computed:{filterChallengesData(){return this.challenges.filter(e=>!this.search||e.name.toLowerCase().includes(this.search.toLowerCase()))}},data(){return{search:T(""),challenges:[{id:1,name:"hedgehog",type:"Web",score:"500",solved:"5",description:"In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."},{id:2,name:"koala",type:"Misc",score:"400",solved:"4",description:"This is a multi-disciplinary challenge where you need to use various skills to solve the problem."},{id:3,name:"vulture",type:"Crypto",score:"300",solved:"3",description:"This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."},{id:4,name:"lemur",type:"Reverse",score:"200",solved:"2",description:"This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."},{id:5,name:"otter",type:"Pwn",score:"100",solved:"1",description:"This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."},{id:6,name:"unicorn",type:"Web",score:"500",solved:"5",description:"In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."},{id:7,name:"iguana",type:"Misc",score:"400",solved:"4",description:"This is a multi-disciplinary challenge where you need to use various skills to solve the problem."},{id:8,name:"toucan",type:"Crypto",score:"300",solved:"3",description:"This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."},{id:9,name:"zebra",type:"Reverse",score:"200",solved:"2",description:"This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."},{id:10,name:"narwhal",type:"Pwn",score:"100",solved:"1",description:"This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."},{id:11,name:"flamingo",type:"Web",score:"500",solved:"5",description:"In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."},{id:12,name:"jaguar",type:"Misc",score:"400",solved:"4",description:"This is a multi-disciplinary challenge where you need to use various skills to solve the problem."},{id:13,name:"walrus",type:"Crypto",score:"300",solved:"3",description:"This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."},{id:14,name:"cactus",type:"Reverse",score:"200",solved:"2",description:"This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."},{id:15,name:"monkey",type:"Pwn",score:"100",solved:"1",description:"This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."},{id:16,name:"sloth",type:"Web",score:"500",solved:"5",description:"In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."},{id:17,name:"dragon",type:"Misc",score:"400",solved:"4",description:"This is a multi-disciplinary challenge where you need to use various skills to solve the problem."},{id:18,name:"xenops",type:"Crypto",score:"300",solved:"3",description:"This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."},{id:19,name:"rhinoceros",type:"Reverse",score:"200",solved:"2",description:"This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."},{id:20,name:"panda",type:"Pwn",score:"100",solved:"1",description:"This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."},{id:21,name:"elephant",type:"Web",score:"500",solved:"5",description:"In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."},{id:22,name:"quokka",type:"Misc",score:"400",solved:"4",description:"This is a multi-disciplinary challenge where you need to use various skills to solve the problem."},{id:23,name:"giraffe",type:"Crypto",score:"300",solved:"3",description:"This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."},{id:24,name:"hedgehog",type:"Reverse",score:"200",solved:"2",description:"This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."},{id:25,name:"otter",type:"Pwn",score:"100",solved:"1",description:"This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."},{id:26,name:"koala",type:"Web",score:"500",solved:"5",description:"In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."},{id:27,name:"unicorn",type:"Misc",score:"400",solved:"4",description:"This is a multi-disciplinary challenge where you need to use various skills to solve the problem."},{id:28,name:"iguana",type:"Crypto",score:"300",solved:"3",description:"This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."},{id:29,name:"lemur",type:"Reverse",score:"200",solved:"2",description:"This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."},{id:30,name:"toucan",type:"Pwn",score:"100",solved:"1",description:"This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."}],loading:!1}}},Wn={class:"ChallengeManager"},qn={class:"challengeTable"},Un={class:"filter-container"};function Yn(e,n,t,o,i,s){const r=He,d=A("search"),u=We,l=Fe,c=sn,v=on,a=Bn;return b(),ne("div",Wn,[w("div",qn,[w("div",Un,[m(r,{onClick:s.clearFilter,type:"primary",size:"large"},{default:h(()=>[N("reset all filters")]),_:1},8,["onClick"]),m(l,{modelValue:i.search,"onUpdate:modelValue":n[0]||(n[0]=p=>i.search=p),class:"search-box",size:"large",placeholder:"Type to search"},{prefix:h(()=>[m(u,{class:"el-input__icon"},{default:h(()=>[m(d)]),_:1})]),_:1},8,["modelValue"])]),U((b(),k(v,{ref:"tableRef",data:s.filterChallengesData,stripe:"",style:{width:"100%"}},{default:h(()=>[m(c,{prop:"id",label:"ID",width:"180"}),m(c,{prop:"name",label:"Name"}),m(c,{prop:"type",label:"Type",filters:[{text:"Misc",value:"Misc"},{text:"Web",value:"Web"},{text:"Crypto",value:"Crypto"},{text:"Reverse",value:"Reverse"},{text:"Pwn",value:"Pwn"}],"filter-method":s.filterType},null,8,["filter-method"]),m(c,{prop:"score",label:"Score"}),m(c,{label:"Operations"},{default:h(p=>[m(r,{size:"small",onClick:g=>s.handleEdit(p.row.id)},{default:h(()=>[N("Edit")]),_:2},1032,["onClick"]),m(r,{size:"small",type:"danger",onClick:g=>s.handleDelete(p.row.id)},{default:h(()=>[N("Delete")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[a,i.loading]])])])}const ct=en(Fn,[["render",Yn],["__scopeId","data-v-8f851134"]]);export{ct as default};