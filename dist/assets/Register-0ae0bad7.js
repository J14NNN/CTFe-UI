import{_,o as m,c as f,a as t,W as g,p as b,g as v}from"./index-c36c71de.js";import"./el-badge-e232ad28.js";import{E as w}from"./el-message-ed17f855.js";import"./index-7bbb7502.js";import"./index-9f2e366b.js";import"./typescript-defaf979.js";import"./icon-ec529186.js";import"./use-global-config-9c175522.js";import"./index-3acd9814.js";const y={mounted(){let e=document.querySelector("#switch-cnt"),o=document.querySelector("#switch-c1"),d=document.querySelector("#switch-c2"),c=document.querySelectorAll(".switch_circle"),n=document.querySelectorAll(".switch-btn"),a=document.querySelector("#LoginContainer"),r=document.querySelector("#RegisterContainer"),u=document.querySelectorAll(".submit"),p=l=>l.preventDefault(),h=l=>{e.classList.add("is-gx"),setTimeout(function(){e.classList.remove("is-gx")},1500),e.classList.toggle("is-txr"),c[0].classList.toggle("is-txr"),c[1].classList.toggle("is-txr"),o.classList.toggle("is-hidden"),d.classList.toggle("is-hidden"),a.classList.toggle("is-txl"),r.classList.toggle("is-txl"),r.classList.toggle("is-z")};(l=>{for(var s=0;s<u.length;s++)u[s].addEventListener("click",p);for(var s=0;s<n.length;s++)n[s].addEventListener("click",h)})()},methods:{ErrorMessage(){w({message:"testtttttttt",type:"error",offset:90})}}},i=e=>(b("data-v-2ad15fb5"),e=e(),v(),e),q={class:"login-base"},x={class:"loginArea"},C={class:"container LoginContainer",id:"LoginContainer"},L={action:"",method:"",class:"form",id:"a-form"},S=i(()=>t("span",{class:"form_span"},"Please input your username and password",-1)),N=i(()=>t("input",{type:"text",class:"form_input",placeholder:"Username/Email/Phone Number",required:""},null,-1)),E=i(()=>t("input",{type:"password",class:"form_input",placeholder:"Password",required:""},null,-1)),I=i(()=>t("button",{class:"form_button button submit"},"SIGN IN",-1)),P=i(()=>t("div",{class:"container RegisterContainer",id:"RegisterContainer"},[t("form",{action:"",method:"",class:"form",id:"b-form"},[t("h2",{class:"form_title title"},"Create an Account"),t("span",{class:"form_span"},"Please input the correct information!"),t("input",{type:"text",class:"form_input",placeholder:"Real Name",required:""}),t("input",{type:"text",class:"form_input",placeholder:"Username",required:""}),t("input",{type:"password",class:"form_input",placeholder:"Password",required:""}),t("input",{type:"password",class:"form_input",placeholder:"Repeat Password",required:""}),t("input",{type:"text",class:"form_input",placeholder:"Email",required:""}),t("input",{type:"text",class:"form_input",placeholder:"Phone Number",required:""}),t("input",{type:"text",class:"form_input",placeholder:"QQ",required:""}),t("button",{class:"form_button button submit"},"SIGN UP")])],-1)),A=g('<div class="switch" id="switch-cnt" data-v-2ad15fb5><div class="switch_circle" data-v-2ad15fb5></div><div class="switch_circle switch_circle-t" data-v-2ad15fb5></div><div class="switch_container" id="switch-c1" data-v-2ad15fb5><h2 class="switch_title title" style="letter-spacing:0;" data-v-2ad15fb5>Welcome CTFer！</h2><p class="switch_description description" data-v-2ad15fb5>Click here to register an account and start to play the game!</p><button class="switch_button button switch-btn" data-v-2ad15fb5>SIGN UP</button></div><div class="switch_container is-hidden" id="switch-c2" data-v-2ad15fb5><h2 class="switch_title title" style="letter-spacing:0;" data-v-2ad15fb5>Hello CTFer！</h2><p class="switch_description description" data-v-2ad15fb5>Already have an account?Log in and have fun!</p><button class="switch_button button switch-btn" data-v-2ad15fb5>SIGN IN</button></div></div>',1);function k(e,o,d,c,n,a){return m(),f("div",q,[t("div",x,[t("div",C,[t("form",L,[S,N,E,t("a",{class:"form_link",onClick:o[0]||(o[0]=(...r)=>a.ErrorMessage&&a.ErrorMessage(...r))},"Forgot your password?"),I])]),P,A])])}const $=_(y,[["render",k],["__scopeId","data-v-2ad15fb5"]]);export{$ as default};