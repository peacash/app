import{o as _,c as p,a as b,r as V,F as C,b as D,d as h,w as r,e as f,t as m,f as u,g as S,h as B,v as W,i as v,j as J,k as X,l as Z,m as ee}from"./vendor.783e6b8a.js";const te=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}};te();const ne={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},oe=b("g",{fill:"none"},[b("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),se=[oe];function re(e,n){return _(),p("svg",ne,se)}var ae={name:"heroicons-outline-external-link",render:re};var w=(e,n)=>{for(const[o,s]of n)e[o]=s;return e};const ie={data(){return{open:!1,links:{to:[{text:"Home",to:"/"},{text:"Wallet",to:"/wallet"}],href:[{text:"Pea",href:"https://pea.cash"}]}}}},ce={class:"select-none z-20"},le={class:"w-full custom-header"},_e={class:"max-w-7xl mx-auto px-4 flex justify-between lg:px-8"},ue={class:"flex py-2 space-x-4 lg:space-x-8","aria-label":"Global navigation"},de=["href"],fe={class:"mr-2"};function pe(e,n,o,s,t,l){const i=V("router-link"),c=ae;return _(),p("div",ce,[b("header",le,[b("div",_e,[b("nav",ue,[(_(!0),p(C,null,D(t.links.to,d=>(_(),h(i,{key:d,to:d.to,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black"},{default:r(()=>[f(m(d.text),1)]),_:2},1032,["to"]))),128)),(_(!0),p(C,null,D(t.links.href,d=>(_(),p("a",{key:d,href:d.href,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black",rel:"noopener"},[b("span",fe,m(d.text),1),u(c,{class:"h-5 w-5"})],8,de))),128))])])])])}var he=w(ie,[["render",pe],["__scopeId","data-v-b42a9768"]]);const me={},ye={class:"flex flex-col prose sm:prose-lg mx-auto w-full",style:{"max-width":"60rem"}},be={class:"m-2"};function ve(e,n){return _(),p("div",ye,[b("div",be,[b("div",null,[S(e.$slots,"default")])])])}var U=w(me,[["render",ve]]);const ge={data(){return{search_value:this.$route.params.search||"",api_value:localStorage.getItem("api")||(()=>{let e="http://localhost:9332";return localStorage.setItem("api",e),e})()}},methods:{search(){clearTimeout(this.timer),this.timer=setTimeout(()=>{localStorage.setItem("api",this.api_value),this.search_value.trim()?(this.search_value=this.search_value.trim(),this.$router.push("/search/"+this.search_value)):this.$router.push("/")},250)}},mounted(){this.$refs.search.focus()}},we={class:"flex flex-col gap-2 my-2 w-full"};function xe(e,n,o,s,t,l){const i=U;return _(),p("div",we,[u(i,null,{default:r(()=>[B(b("input",{"onUpdate:modelValue":n[0]||(n[0]=c=>t.api_value=c),onInput:n[1]||(n[1]=(...c)=>l.search&&l.search(...c)),class:"text-black rounded w-full",type:"text",placeholder:"http://localhost:9332"},null,544),[[W,t.api_value]])]),_:1}),u(i,null,{default:r(()=>[B(b("input",{"onUpdate:modelValue":n[2]||(n[2]=c=>t.search_value=c),ref:"search",onInput:n[3]||(n[3]=(...c)=>l.search&&l.search(...c)),class:"text-black rounded w-full",type:"text",placeholder:"Search Blockchain, Transactions, Addresses, Blocks and Stakes"},null,544),[[W,t.search_value]])]),_:1})])}var ke=w(ge,[["render",xe],["__scopeId","data-v-299a5865"]]);let a;const k=new Array(32).fill(void 0);k.push(void 0,null,!0,!1);function q(e){return k[e]}let G=k.length;function $e(e){e<36||(k[e]=G,G=e)}function Te(e){const n=q(e);return $e(e),n}const F=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});F.decode();let O=new Uint8Array;function R(){return O.byteLength===0&&(O=new Uint8Array(a.memory.buffer)),O}function L(e,n){return F.decode(R().subarray(e,e+n))}let g=0;function Ie(e,n){const o=n(e.length*1);return R().set(e,o/1),g=e.length,o}let P=new Int32Array;function x(){return P.byteLength===0&&(P=new Int32Array(a.memory.buffer)),P}function Pt(e){try{const s=a.__wbindgen_add_to_stack_pointer(-16),t=Ie(e,a.__wbindgen_malloc),l=g;a.secret(s,t,l);var n=x()[s/4+0],o=x()[s/4+1];return L(n,o)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,o)}}const M=new TextEncoder("utf-8"),Ae=typeof M.encodeInto=="function"?function(e,n){return M.encodeInto(e,n)}:function(e,n){const o=M.encode(e);return n.set(o),{read:e.length,written:o.length}};function $(e,n,o){if(o===void 0){const c=M.encode(e),d=n(c.length);return R().subarray(d,d+c.length).set(c),g=c.length,d}let s=e.length,t=n(s);const l=R();let i=0;for(;i<s;i++){const c=e.charCodeAt(i);if(c>127)break;l[t+i]=c}if(i!==s){i!==0&&(e=e.slice(i)),t=o(t,s,s=i+e.length*3);const c=R().subarray(t+i,t+s);i+=Ae(e,c).written}return g=i,t}function Mt(e){try{const s=a.__wbindgen_add_to_stack_pointer(-16),t=$(e,a.__wbindgen_malloc,a.__wbindgen_realloc),l=g;a.address(s,t,l);var n=x()[s/4+0],o=x()[s/4+1];return L(n,o)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,o)}}function Vt(e,n,o,s){try{const i=a.__wbindgen_add_to_stack_pointer(-16),c=$(e,a.__wbindgen_malloc,a.__wbindgen_realloc),d=g,y=$(n,a.__wbindgen_malloc,a.__wbindgen_realloc),I=g,A=$(o,a.__wbindgen_malloc,a.__wbindgen_realloc),j=g,T=$(s,a.__wbindgen_malloc,a.__wbindgen_realloc),E=g;a.transaction(i,c,d,y,I,A,j,T,E);var t=x()[i/4+0],l=x()[i/4+1];return L(t,l)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(t,l)}}function Bt(e,n,o,s){try{const i=a.__wbindgen_add_to_stack_pointer(-16),c=$(n,a.__wbindgen_malloc,a.__wbindgen_realloc),d=g,y=$(o,a.__wbindgen_malloc,a.__wbindgen_realloc),I=g,A=$(s,a.__wbindgen_malloc,a.__wbindgen_realloc),j=g;a.stake(i,e,c,d,y,I,A,j);var t=x()[i/4+0],l=x()[i/4+1];return L(t,l)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(t,l)}}function Wt(e){try{const s=a.__wbindgen_add_to_stack_pointer(-16),t=$(e,a.__wbindgen_malloc,a.__wbindgen_realloc),l=g;a.format_int(s,t,l);var n=x()[s/4+0],o=x()[s/4+1];return L(n,o)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,o)}}function je(e){G===k.length&&k.push(k.length+1);const n=G;return G=k[n],k[n]=e,n}async function Ee(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(s){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const o=await e.arrayBuffer();return await WebAssembly.instantiate(o,n)}else{const o=await WebAssembly.instantiate(e,n);return o instanceof WebAssembly.Instance?{instance:o,module:e}:o}}function Ne(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(n){Te(n)},e.wbg.__wbg_getTime_cb82adb2556ed13e=function(n){return q(n).getTime()},e.wbg.__wbg_new0_a57059d72c5b7aee=function(){const n=new Date;return je(n)},e.wbg.__wbindgen_throw=function(n,o){throw new Error(L(n,o))},e}function Ce(e,n){return a=e.exports,H.__wbindgen_wasm_module=n,P=new Int32Array,O=new Uint8Array,a}async function H(e){typeof e=="undefined"&&(e=new URL("/assets/wallet_bg.f387a867.wasm",self.location));const n=Ne();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:o,module:s}=await Ee(await e,n);return Ce(o,s)}const Le={mounted(){H().then(e=>console.log("init wasm"))}};function Se(e,n,o,s,t,l){const i=he,c=ke,d=V("router-view");return _(),p(C,null,[u(i),u(c),u(d)],64)}var Ge=w(Le,[["render",Se]]);const Re="modulepreload",z={},De="/",N=function(n,o){return!o||o.length===0?n():Promise.all(o.map(s=>{if(s=`${De}${s}`,s in z)return;z[s]=!0;const t=s.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":Re,t||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),t)return new Promise((c,d)=>{i.addEventListener("load",c),i.addEventListener("error",d)})})).then(()=>n())},Oe={props:{api:String},data(){return{https:window.location.protocol==="https:",host:window.location.host}}},Pe={class:"text-center"},Me=f("API endpoint "),Ve=f(" seems unresponsive."),Be={key:0,class:"text-center"},We=f(" Try the "),Ue=["href"],qe=f(" of this website. ");function Fe(e,n,o,s,t,l){return _(),p(C,null,[b("div",Pe,[Me,b("i",null,m(o.api),1),Ve]),t.https?(_(),p("div",Be,[We,b("a",{href:"http://"+t.host},"http version",8,Ue),qe])):v("",!0)],64)}var He=w(Oe,[["render",Fe]]);const ze={},Qe={class:"flex w-full"};function Ye(e,n){return _(),p("tr",Qe,[S(e.$slots,"default",{},void 0,!0)])}var Ke=w(ze,[["render",Ye],["__scopeId","data-v-aac57ebc"]]);const Je={},Xe={class:"flex flex-col justify-center"};function Ze(e,n){return _(),p("td",Xe,[S(e.$slots,"default",{},void 0,!0)])}var et=w(Je,[["render",Ze],["__scopeId","data-v-f37f8542"]]);const tt={},nt={class:"flex w-full"};function ot(e,n){return _(),p("td",nt,[S(e.$slots,"default",{},void 0,!0)])}var st=w(tt,[["render",ot],["__scopeId","data-v-4f18db2b"]]);const rt={},at={viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},it=J('<defs><radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient><radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient><radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient><radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient></defs><rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect><rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform></rect><rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform></rect>',4),ct=[it];function lt(e,n){return _(),p("svg",at,ct)}var _t=w(rt,[["render",lt]]);const ut={},dt={class:"rounded shadow-lg w-full flex flex-col relative"},ft=b("div",{class:"h-2"},null,-1);function pt(e,n){const o=_t;return _(),p("div",dt,[u(o,{class:"absolute h-full w-full rounded"}),ft])}var ht=w(ut,[["render",pt]]);const mt={props:{bar:Boolean}},yt={class:"bg-white p-2 rounded"};function bt(e,n,o,s,t,l){const i=ht;return _(),p("div",yt,[o.bar?(_(),h(i,{key:0})):v("",!0),b("table",null,[S(e.$slots,"default",{},void 0,!0)])])}var vt=w(mt,[["render",bt],["__scopeId","data-v-48c64444"]]);const gt={data(){return{dynamic:null,trusted:null,sync:null,info:null,interval:null,timeout:!1,https:window.location.protocol==="https:",host:window.location.host,api:null,shorten_public_key:!0}},mounted(){document.title="Explorer - Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},3e3)},shorten(e){return e.slice(0,12)+"..."+e.slice(-8)},fetchData(){this.api=window.localStorage.getItem("api"),fetch(this.api+"/dynamic").then(e=>e.json()).then(e=>{this.dynamic=e}),fetch(this.api+"/trusted").then(e=>e.json()).then(e=>{this.trusted=e}),fetch(this.api+"/sync").then(e=>e.json()).then(e=>{this.sync=e}),fetch(this.api+"/info").then(e=>e.json()).then(e=>{this.info=e})}}},wt={class:"flex flex-col gap-2 my-2 w-full"},xt={key:0,class:"flex flex-col justify-center mx-auto my-4"},kt=f("General information about Node"),$t=f("Synchronization"),Tt=f("Last\xA0block\xA0seen"),It=f("Height"),At=f("Tree\xA0size"),jt=f("Public\xA0key"),Et=f("Time"),Nt=f("Uptime"),Ct=f("Tick"),Lt=f("Stakers Queue"),St=f("Latest Blocks");function Gt(e,n,o,s,t,l){const i=He,c=Ke,d=et,y=st,I=V("router-link"),A=vt,j=U;return _(),p("div",wt,[u(j,null,{default:r(()=>[!t.sync&&!t.info&&!t.dynamic&&!t.trusted&&t.timeout?(_(),p("div",xt,[u(i,{api:t.api},null,8,["api"])])):v("",!0),t.sync&&t.info?(_(),h(A,{key:1,bar:!0},{default:r(()=>[u(c,{class:"text-xl justify-center pb-2"},{default:r(()=>[kt]),_:1}),t.sync?(_(),h(c,{key:0},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[$t]),_:1}),u(y,null,{default:r(()=>[f(m(t.sync.sync),1)]),_:1})]),_:1})):v("",!0),t.sync?(_(),h(c,{key:1},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Tt]),_:1}),u(y,null,{default:r(()=>[f(m(t.sync.last),1)]),_:1})]),_:1})):v("",!0),t.sync?(_(),h(c,{key:2},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[It]),_:1}),u(y,null,{default:r(()=>[f(m(t.sync.height),1)]),_:1})]),_:1})):v("",!0),t.info?(_(),h(c,{key:3},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[At]),_:1}),u(y,null,{default:r(()=>[f(m(t.info.tree_size),1)]),_:1})]),_:1})):v("",!0),t.info?(_(),h(c,{key:4},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[jt]),_:1}),t.shorten_public_key?(_(),h(y,{key:0,onClick:n[0]||(n[0]=T=>t.shorten_public_key=!1)},{default:r(()=>[f(m(l.shorten(t.info.public_key)),1)]),_:1})):(_(),h(y,{key:1},{default:r(()=>[u(I,{class:"link",to:"/address/"+t.info.public_key},{default:r(()=>[f(m(t.info.public_key),1)]),_:1},8,["to"])]),_:1}))]),_:1})):v("",!0),t.info?(_(),h(c,{key:5},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Et]),_:1}),u(y,null,{default:r(()=>[f(m(t.info.time),1)]),_:1})]),_:1})):v("",!0),t.info?(_(),h(c,{key:6},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Nt]),_:1}),u(y,null,{default:r(()=>[f(m(t.info.uptime),1)]),_:1})]),_:1})):v("",!0),t.info?(_(),h(c,{key:7},{default:r(()=>[u(d,{class:"w-60"},{default:r(()=>[Ct]),_:1}),u(y,null,{default:r(()=>[f(m(t.info.lag)+" ms",1)]),_:1})]),_:1})):v("",!0)]),_:1})):v("",!0)]),_:1}),u(j,null,{default:r(()=>[t.dynamic?(_(),h(A,{key:0,bar:!0},{default:r(()=>[u(c,{class:"text-xl justify-center pb-2"},{default:r(()=>[Lt]),_:1}),(_(!0),p(C,null,D(t.dynamic.stakers,(T,E)=>(_(),h(c,{key:(e.hash,E)},{default:r(()=>[u(d,null,{default:r(()=>[f("#"+m(E),1)]),_:2},1024),u(y,{class:"justify-center"},{default:r(()=>[u(I,{class:"link",to:"/address/"+T},{default:r(()=>[f(m(T),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):v("",!0)]),_:1}),u(j,null,{default:r(()=>[t.dynamic&&t.trusted&&t.sync?(_(),h(A,{key:0,bar:!0},{default:r(()=>[u(c,{class:"text-xl justify-center pb-2"},{default:r(()=>[St]),_:1}),(_(!0),p(C,null,D([...t.dynamic.latest_hashes,...t.trusted.latest_hashes].concat(),(T,E)=>(_(),h(c,{key:E},{default:r(()=>[u(d,null,{default:r(()=>[f("#"+m(t.sync.height-E),1)]),_:2},1024),u(y,{class:"justify-center"},{default:r(()=>[u(I,{class:"link",to:"/block/"+T},{default:r(()=>[f(m(T),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):v("",!0)]),_:1})])}var Rt=w(gt,[["render",Gt],["__scopeId","data-v-93439b34"]]);const Dt=[{name:"wallet",path:"/wallet",component:()=>N(()=>import("./wallet.7b5d6f77.js"),["assets/wallet.7b5d6f77.js","assets/wallet.e2cdf3e0.css","assets/Address.2a0af987.js","assets/Address.e0b1fc5a.css","assets/vendor.783e6b8a.js"]),props:!0},{name:"index",path:"/",component:Rt,props:!0},{name:"address-address",path:"/address/:address",component:()=>N(()=>import("./[address].bd403ee1.js"),["assets/[address].bd403ee1.js","assets/Address.2a0af987.js","assets/Address.e0b1fc5a.css","assets/vendor.783e6b8a.js"]),props:!0},{name:"block-block",path:"/block/:block",component:()=>N(()=>import("./[block].e41c69a2.js"),["assets/[block].e41c69a2.js","assets/[block].df57b340.css","assets/vendor.783e6b8a.js"]),props:!0},{name:"search-search",path:"/search/:search",component:()=>N(()=>import("./[search].307d552b.js"),["assets/[search].307d552b.js","assets/vendor.783e6b8a.js"]),props:!0},{name:"stake-stake",path:"/stake/:stake",component:()=>N(()=>import("./[stake].47928750.js"),["assets/[stake].47928750.js","assets/[stake].6a84fd44.css","assets/vendor.783e6b8a.js"]),props:!0},{name:"transaction-transaction",path:"/transaction/:transaction",component:()=>N(()=>import("./[transaction].da6a9a84.js"),["assets/[transaction].da6a9a84.js","assets/[transaction].d8e910c2.css","assets/vendor.783e6b8a.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>N(()=>import("./[...all].07823312.js"),[]),props:!0}],Q=X({history:Z(),routes:Dt});function Y(e){return!!Object.keys(e.query).length}Q.beforeEach((e,n,o)=>{!Y(e)&&Y(n)?o({...e,query:n.query}):o()});const K=ee(Ge);K.use(Q);K.mount("#app");export{w as _,Mt as a,Bt as b,U as c,Ke as d,et as e,Wt as f,st as g,vt as h,Pt as s,Vt as t};