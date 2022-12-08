import{o as l,c as p,p as J,a as X,b as y,r as V,F as N,d as D,e as m,w as r,f,t as b,g as u,h as L,i as B,v as W,j as v,k as Z,l as ee,m as te,n as ne}from"./vendor.be94e15b.js";const oe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const _ of t)if(_.type==="childList")for(const i of _.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const _={};return t.integrity&&(_.integrity=t.integrity),t.referrerpolicy&&(_.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?_.credentials="include":t.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function s(t){if(t.ep)return;t.ep=!0;const _=o(t);fetch(t.href,_)}};oe();var se="/peacash.svg";var g=(e,n)=>{for(const[o,s]of n)e[o]=s;return e};const re={},ae=e=>(J("data-v-6eefa4e6"),e=e(),X(),e),ie={class:"flex jusfity-center bg-white"},ce=ae(()=>y("img",{class:"p-10 mx-auto",src:se,alt:""},null,-1)),_e=[ce];function le(e,n){return l(),p("div",ie,_e)}var ue=g(re,[["render",le],["__scopeId","data-v-6eefa4e6"]]);const de={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},fe=y("g",{fill:"none"},[y("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),pe=[fe];function he(e,n){return l(),p("svg",de,pe)}var me={name:"heroicons-outline-external-link",render:he};const ye={data(){return{open:!1,links:{to:[{text:"Home",to:"/"},{text:"Wallet",to:"/wallet"}],href:[{text:"Pea",href:"https://pea.cash"}]}}}},be={class:"select-none z-20"},ve={class:"w-full custom-header"},ge={class:"max-w-7xl mx-auto px-4 flex justify-between lg:px-8"},we={class:"flex py-2 space-x-4 lg:space-x-8","aria-label":"Global navigation"},xe=["href"],ke={class:"mr-2"};function $e(e,n,o,s,t,_){const i=V("router-link"),c=me;return l(),p("div",be,[y("header",ve,[y("div",ge,[y("nav",we,[(l(!0),p(N,null,D(t.links.to,d=>(l(),m(i,{key:d,to:d.to,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black"},{default:r(()=>[f(b(d.text),1)]),_:2},1032,["to"]))),128)),(l(!0),p(N,null,D(t.links.href,d=>(l(),p("a",{key:d,href:d.href,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black",rel:"noopener"},[y("span",ke,b(d.text),1),u(c,{class:"h-5 w-5"})],8,xe))),128))])])])])}var Te=g(ye,[["render",$e],["__scopeId","data-v-b42a9768"]]);const Ie={},Ae={class:"flex flex-col prose sm:prose-lg mx-auto w-full",style:{"max-width":"60rem"}},je={class:"m-2"};function Se(e,n){return l(),p("div",Ae,[y("div",je,[y("div",null,[L(e.$slots,"default")])])])}var U=g(Ie,[["render",Se]]);const Ee={data(){return{search_value:this.$route.params.search||"",api_value:localStorage.getItem("api")||(()=>{let e="http://localhost:9332";return localStorage.setItem("api",e),e})()}},methods:{search(){clearTimeout(this.timer),this.timer=setTimeout(()=>{localStorage.setItem("api",this.api_value),this.search_value.trim()?(this.search_value=this.search_value.trim(),this.$router.push("/search/"+this.search_value)):this.$router.push("/")},250)}},mounted(){this.$refs.search.focus()}},Ne={class:"flex flex-col gap-2 my-2 w-full"};function Ce(e,n,o,s,t,_){const i=U;return l(),p("div",Ne,[u(i,null,{default:r(()=>[B(y("input",{"onUpdate:modelValue":n[0]||(n[0]=c=>t.api_value=c),onInput:n[1]||(n[1]=(...c)=>_.search&&_.search(...c)),class:"text-black rounded w-full",type:"text",placeholder:"http://localhost:9332"},null,544),[[W,t.api_value]])]),_:1}),u(i,null,{default:r(()=>[B(y("input",{"onUpdate:modelValue":n[2]||(n[2]=c=>t.search_value=c),ref:"search",onInput:n[3]||(n[3]=(...c)=>_.search&&_.search(...c)),class:"text-black rounded w-full",type:"text",placeholder:"Search Blockchain, Transactions, Addresses, Blocks and Stakes"},null,544),[[W,t.search_value]])]),_:1})])}var Le=g(Ee,[["render",Ce],["__scopeId","data-v-299a5865"]]);let a;const k=new Array(32).fill(void 0);k.push(void 0,null,!0,!1);function q(e){return k[e]}let G=k.length;function Ge(e){e<36||(k[e]=G,G=e)}function Re(e){const n=q(e);return Ge(e),n}const F=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});F.decode();let O=new Uint8Array;function R(){return O.byteLength===0&&(O=new Uint8Array(a.memory.buffer)),O}function C(e,n){return F.decode(R().subarray(e,e+n))}let w=0;function De(e,n){const o=n(e.length*1);return R().set(e,o/1),w=e.length,o}let P=new Int32Array;function x(){return P.byteLength===0&&(P=new Int32Array(a.memory.buffer)),P}function Qt(e){try{const s=a.__wbindgen_add_to_stack_pointer(-16),t=De(e,a.__wbindgen_malloc),_=w;a.secret(s,t,_);var n=x()[s/4+0],o=x()[s/4+1];return C(n,o)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,o)}}const M=new TextEncoder("utf-8"),Oe=typeof M.encodeInto=="function"?function(e,n){return M.encodeInto(e,n)}:function(e,n){const o=M.encode(e);return n.set(o),{read:e.length,written:o.length}};function $(e,n,o){if(o===void 0){const c=M.encode(e),d=n(c.length);return R().subarray(d,d+c.length).set(c),w=c.length,d}let s=e.length,t=n(s);const _=R();let i=0;for(;i<s;i++){const c=e.charCodeAt(i);if(c>127)break;_[t+i]=c}if(i!==s){i!==0&&(e=e.slice(i)),t=o(t,s,s=i+e.length*3);const c=R().subarray(t+i,t+s);i+=Oe(e,c).written}return w=i,t}function Yt(e){try{const s=a.__wbindgen_add_to_stack_pointer(-16),t=$(e,a.__wbindgen_malloc,a.__wbindgen_realloc),_=w;a.address(s,t,_);var n=x()[s/4+0],o=x()[s/4+1];return C(n,o)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,o)}}function Kt(e,n,o,s){try{const i=a.__wbindgen_add_to_stack_pointer(-16),c=$(e,a.__wbindgen_malloc,a.__wbindgen_realloc),d=w,h=$(n,a.__wbindgen_malloc,a.__wbindgen_realloc),I=w,A=$(o,a.__wbindgen_malloc,a.__wbindgen_realloc),j=w,T=$(s,a.__wbindgen_malloc,a.__wbindgen_realloc),S=w;a.transaction(i,c,d,h,I,A,j,T,S);var t=x()[i/4+0],_=x()[i/4+1];return C(t,_)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(t,_)}}function Jt(e,n,o,s){try{const i=a.__wbindgen_add_to_stack_pointer(-16),c=$(n,a.__wbindgen_malloc,a.__wbindgen_realloc),d=w,h=$(o,a.__wbindgen_malloc,a.__wbindgen_realloc),I=w,A=$(s,a.__wbindgen_malloc,a.__wbindgen_realloc),j=w;a.stake(i,e,c,d,h,I,A,j);var t=x()[i/4+0],_=x()[i/4+1];return C(t,_)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(t,_)}}function Xt(e){try{const s=a.__wbindgen_add_to_stack_pointer(-16),t=$(e,a.__wbindgen_malloc,a.__wbindgen_realloc),_=w;a.format_int(s,t,_);var n=x()[s/4+0],o=x()[s/4+1];return C(n,o)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,o)}}function Pe(e){G===k.length&&k.push(k.length+1);const n=G;return G=k[n],k[n]=e,n}async function Me(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(s){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const o=await e.arrayBuffer();return await WebAssembly.instantiate(o,n)}else{const o=await WebAssembly.instantiate(e,n);return o instanceof WebAssembly.Instance?{instance:o,module:e}:o}}function Ve(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(n){Re(n)},e.wbg.__wbg_getTime_cb82adb2556ed13e=function(n){return q(n).getTime()},e.wbg.__wbg_new0_a57059d72c5b7aee=function(){const n=new Date;return Pe(n)},e.wbg.__wbindgen_throw=function(n,o){throw new Error(C(n,o))},e}function Be(e,n){return a=e.exports,H.__wbindgen_wasm_module=n,P=new Int32Array,O=new Uint8Array,a}async function H(e){typeof e=="undefined"&&(e=new URL("/assets/wallet_bg.f387a867.wasm",self.location));const n=Ve();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:o,module:s}=await Me(await e,n);return Be(o,s)}const We={mounted(){H().then(e=>console.log("init wasm"))}};function Ue(e,n,o,s,t,_){const i=ue,c=Te,d=Le,h=V("router-view");return l(),p(N,null,[u(i),u(c),u(d),u(h)],64)}var qe=g(We,[["render",Ue]]);const Fe="modulepreload",z={},He="/",E=function(n,o){return!o||o.length===0?n():Promise.all(o.map(s=>{if(s=`${He}${s}`,s in z)return;z[s]=!0;const t=s.endsWith(".css"),_=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${_}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":Fe,t||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),t)return new Promise((c,d)=>{i.addEventListener("load",c),i.addEventListener("error",d)})})).then(()=>n())},ze={props:{api:String},data(){return{https:window.location.protocol==="https:",host:window.location.host}}},Qe={class:"text-center"},Ye=f("API endpoint "),Ke=f(" seems unresponsive."),Je={key:0,class:"text-center"},Xe=f(" Try the "),Ze=["href"],et=f(" of this website. ");function tt(e,n,o,s,t,_){return l(),p(N,null,[y("div",Qe,[Ye,y("i",null,b(o.api),1),Ke]),t.https?(l(),p("div",Je,[Xe,y("a",{href:"http://"+t.host},"http version",8,Ze),et])):v("",!0)],64)}var nt=g(ze,[["render",tt]]);const ot={},st={class:"flex w-full"};function rt(e,n){return l(),p("tr",st,[L(e.$slots,"default",{},void 0,!0)])}var at=g(ot,[["render",rt],["__scopeId","data-v-aac57ebc"]]);const it={},ct={class:"flex flex-col justify-center"};function _t(e,n){return l(),p("td",ct,[L(e.$slots,"default",{},void 0,!0)])}var lt=g(it,[["render",_t],["__scopeId","data-v-f37f8542"]]);const ut={},dt={class:"flex w-full"};function ft(e,n){return l(),p("td",dt,[L(e.$slots,"default",{},void 0,!0)])}var pt=g(ut,[["render",ft],["__scopeId","data-v-4f18db2b"]]);const ht={},mt={viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},yt=Z('<defs><radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient><radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient><radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient><radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient></defs><rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect><rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform></rect><rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform></rect>',4),bt=[yt];function vt(e,n){return l(),p("svg",mt,bt)}var gt=g(ht,[["render",vt]]);const wt={},xt={class:"rounded shadow-lg w-full flex flex-col relative"},kt=y("div",{class:"h-2"},null,-1);function $t(e,n){const o=gt;return l(),p("div",xt,[u(o,{class:"absolute h-full w-full rounded"}),kt])}var Tt=g(wt,[["render",$t]]);const It={props:{bar:Boolean}},At={class:"bg-white p-2 rounded"};function jt(e,n,o,s,t,_){const i=Tt;return l(),p("div",At,[o.bar?(l(),m(i,{key:0})):v("",!0),y("table",null,[L(e.$slots,"default",{},void 0,!0)])])}var St=g(It,[["render",jt],["__scopeId","data-v-48c64444"]]);const Et={data(){return{dynamic:null,trusted:null,sync:null,info:null,interval:null,timeout:!1,https:window.location.protocol==="https:",host:window.location.host,api:null,shorten_public_key:!0}},mounted(){document.title="Explorer - Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},3e3)},shorten(e){return e.slice(0,12)+"..."+e.slice(-8)},fetchData(){this.api=window.localStorage.getItem("api"),fetch(this.api+"/dynamic").then(e=>e.json()).then(e=>{this.dynamic=e}),fetch(this.api+"/trusted").then(e=>e.json()).then(e=>{this.trusted=e}),fetch(this.api+"/sync").then(e=>e.json()).then(e=>{this.sync=e}),fetch(this.api+"/info").then(e=>e.json()).then(e=>{this.info=e})}}},Nt={class:"flex flex-col gap-2 my-2 w-full"},Ct={key:0,class:"flex flex-col justify-center mx-auto my-4"},Lt=f("General information about Node"),Gt=f("Synchronization"),Rt=f("Last\xA0block\xA0seen"),Dt=f("Height"),Ot=f("Tree\xA0size"),Pt=f("Public\xA0key"),Mt=f("Time"),Vt=f("Uptime"),Bt=f("Tick"),Wt=f("Stakers Queue"),Ut=f("Latest Blocks");function qt(e,n,o,s,t,_){const i=nt,c=at,d=lt,h=pt,I=V("router-link"),A=St,j=U;return l(),p("div",Nt,[u(j,null,{default:r(()=>[!t.sync&&!t.info&&!t.dynamic&&!t.trusted&&t.timeout?(l(),p("div",Ct,[u(i,{api:t.api},null,8,["api"])])):v("",!0),t.sync&&t.info?(l(),m(A,{key:1,bar:!0},{default:r(()=>[u(c,{class:"text-xl justify-center pb-2"},{default:r(()=>[Lt]),_:1}),t.sync?(l(),m(c,{key:0},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Gt]),_:1}),u(h,null,{default:r(()=>[f(b(t.sync.sync),1)]),_:1})]),_:1})):v("",!0),t.sync?(l(),m(c,{key:1},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Rt]),_:1}),u(h,null,{default:r(()=>[f(b(t.sync.last),1)]),_:1})]),_:1})):v("",!0),t.sync?(l(),m(c,{key:2},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Dt]),_:1}),u(h,null,{default:r(()=>[f(b(t.sync.height),1)]),_:1})]),_:1})):v("",!0),t.info?(l(),m(c,{key:3},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Ot]),_:1}),u(h,null,{default:r(()=>[f(b(t.info.tree_size),1)]),_:1})]),_:1})):v("",!0),t.info?(l(),m(c,{key:4},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Pt]),_:1}),t.shorten_public_key?(l(),m(h,{key:0,onClick:n[0]||(n[0]=T=>t.shorten_public_key=!1)},{default:r(()=>[f(b(_.shorten(t.info.public_key)),1)]),_:1})):(l(),m(h,{key:1},{default:r(()=>[u(I,{class:"link",to:"/address/"+t.info.public_key},{default:r(()=>[f(b(t.info.public_key),1)]),_:1},8,["to"])]),_:1}))]),_:1})):v("",!0),t.info?(l(),m(c,{key:5},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Mt]),_:1}),u(h,null,{default:r(()=>[f(b(t.info.time),1)]),_:1})]),_:1})):v("",!0),t.info?(l(),m(c,{key:6},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Vt]),_:1}),u(h,null,{default:r(()=>[f(b(t.info.uptime),1)]),_:1})]),_:1})):v("",!0),t.info?(l(),m(c,{key:7},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Bt]),_:1}),u(h,null,{default:r(()=>[f(b(t.info.lag)+" ms",1)]),_:1})]),_:1})):v("",!0)]),_:1})):v("",!0)]),_:1}),u(j,null,{default:r(()=>[t.dynamic?(l(),m(A,{key:0,bar:!0},{default:r(()=>[u(c,{class:"text-xl justify-center pb-2"},{default:r(()=>[Wt]),_:1}),(l(!0),p(N,null,D(t.dynamic.stakers,(T,S)=>(l(),m(c,{key:(e.hash,S)},{default:r(()=>[u(d,null,{default:r(()=>[f("#"+b(S),1)]),_:2},1024),u(h,{class:"justify-center"},{default:r(()=>[u(I,{class:"link",to:"/address/"+T},{default:r(()=>[f(b(T),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):v("",!0)]),_:1}),u(j,null,{default:r(()=>[t.dynamic&&t.trusted&&t.sync?(l(),m(A,{key:0,bar:!0},{default:r(()=>[u(c,{class:"text-xl justify-center pb-2"},{default:r(()=>[Ut]),_:1}),(l(!0),p(N,null,D([...t.dynamic.latest_hashes,...t.trusted.latest_hashes].concat(),(T,S)=>(l(),m(c,{key:S},{default:r(()=>[u(d,null,{default:r(()=>[f("#"+b(t.sync.height-S),1)]),_:2},1024),u(h,{class:"justify-center"},{default:r(()=>[u(I,{class:"link",to:"/block/"+T},{default:r(()=>[f(b(T),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):v("",!0)]),_:1})])}var Ft=g(Et,[["render",qt],["__scopeId","data-v-93439b34"]]);const Ht=[{name:"wallet",path:"/wallet",component:()=>E(()=>import("./wallet.6f0e3b08.js"),["assets/wallet.6f0e3b08.js","assets/wallet.e2cdf3e0.css","assets/Address.a0b8797b.js","assets/Address.e0b1fc5a.css","assets/vendor.be94e15b.js"]),props:!0},{name:"index",path:"/",component:Ft,props:!0},{name:"address-address",path:"/address/:address",component:()=>E(()=>import("./[address].906b3e2d.js"),["assets/[address].906b3e2d.js","assets/Address.a0b8797b.js","assets/Address.e0b1fc5a.css","assets/vendor.be94e15b.js"]),props:!0},{name:"block-block",path:"/block/:block",component:()=>E(()=>import("./[block].b4e740ac.js"),["assets/[block].b4e740ac.js","assets/[block].df57b340.css","assets/vendor.be94e15b.js"]),props:!0},{name:"search-search",path:"/search/:search",component:()=>E(()=>import("./[search].f8e87fb8.js"),["assets/[search].f8e87fb8.js","assets/vendor.be94e15b.js"]),props:!0},{name:"stake-stake",path:"/stake/:stake",component:()=>E(()=>import("./[stake].81ea7256.js"),["assets/[stake].81ea7256.js","assets/[stake].6a84fd44.css","assets/vendor.be94e15b.js"]),props:!0},{name:"transaction-transaction",path:"/transaction/:transaction",component:()=>E(()=>import("./[transaction].53281583.js"),["assets/[transaction].53281583.js","assets/[transaction].d8e910c2.css","assets/vendor.be94e15b.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>E(()=>import("./[...all].07823312.js"),[]),props:!0}],Q=ee({history:te(),routes:Ht});function Y(e){return!!Object.keys(e.query).length}Q.beforeEach((e,n,o)=>{!Y(e)&&Y(n)?o({...e,query:n.query}):o()});const K=ne(qe);K.use(Q);K.mount("#app");export{g as _,Yt as a,Jt as b,U as c,at as d,lt as e,Xt as f,pt as g,St as h,Qt as s,Kt as t};
