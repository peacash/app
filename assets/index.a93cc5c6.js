import{o as u,c as p,p as J,a as X,b as v,r as N,F as L,d as V,e as m,w as o,f,t as y,g as l,h as R,i as B,v as C,j as w,k as Z,l as ee,m as te}from"./vendor.d36ac98d.js";const ne=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}};ne();var se="/peacash-green.svg";var g=(e,n)=>{for(const[s,r]of n)e[s]=r;return e};const oe={},re=e=>(J("data-v-6f0d8a41"),e=e(),X(),e),ce=re(()=>v("img",{class:"p-10",src:se,alt:""},null,-1)),_e=[ce];function ae(e,n){return u(),p("div",null,_e)}var ie=g(oe,[["render",ae],["__scopeId","data-v-6f0d8a41"]]);const le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ue=v("g",{fill:"none"},[v("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),de=[ue];function fe(e,n){return u(),p("svg",le,de)}var pe={name:"heroicons-outline-external-link",render:fe};const he={data(){return{open:!1,links:{to:[{text:"Home",to:"/"},{text:"Wallet",to:"/wallet"}]}}}},me={class:"select-none z-20"},ye={class:"w-full custom-header"},ve={class:"max-w-7xl mx-auto px-4 flex justify-between lg:px-8"},we={class:"flex py-2 space-x-4 lg:space-x-8","aria-label":"Global navigation"},be=["href"],ge={class:"mr-2"};function ke(e,n,s,r,t,i){const a=N("router-link"),_=pe;return u(),p("div",me,[v("header",ye,[v("div",ve,[v("nav",we,[(u(!0),p(L,null,V(t.links.to,d=>(u(),m(a,{key:d,to:d.to,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black"},{default:o(()=>[f(y(d.text),1)]),_:2},1032,["to"]))),128)),(u(!0),p(L,null,V(t.links.href,d=>(u(),p("a",{key:d,href:d.href,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black",rel:"noopener"},[v("span",ge,y(d.text),1),l(_,{class:"h-5 w-5"})],8,be))),128))])])])])}var xe=g(he,[["render",ke],["__scopeId","data-v-70fc2323"]]);const Ie={},Te={class:"flex flex-col prose sm:prose-lg mx-auto w-full",style:{"max-width":"60rem"}},$e={class:"m-2"};function Ae(e,n){return u(),p("div",Te,[v("div",$e,[v("div",null,[R(e.$slots,"default")])])])}var q=g(Ie,[["render",Ae]]);const je={data(){return{search_value:this.$route.params.search||"",api_value:localStorage.getItem("api")||(()=>{let e="http://localhost:9332";return localStorage.setItem("api",e),e})()}},methods:{search(){clearTimeout(this.timer),this.timer=setTimeout(()=>{localStorage.setItem("api",this.api_value),this.search_value.trim()?(this.search_value=this.search_value.trim(),this.$router.push("/search/"+this.search_value)):this.$router.push("/")},250)}},mounted(){this.$refs.search.focus()}},Se={class:"flex flex-col gap-2 my-2 w-full"};function Ee(e,n,s,r,t,i){const a=q;return u(),p("div",Se,[l(a,null,{default:o(()=>[B(v("input",{"onUpdate:modelValue":n[0]||(n[0]=_=>t.api_value=_),onInput:n[1]||(n[1]=(..._)=>i.search&&i.search(..._)),class:"text-black rounded w-full shadow",type:"text",placeholder:"http://localhost:9332"},null,544),[[C,t.api_value]])]),_:1}),l(a,null,{default:o(()=>[B(v("input",{"onUpdate:modelValue":n[2]||(n[2]=_=>t.search_value=_),ref:"search",onInput:n[3]||(n[3]=(..._)=>i.search&&i.search(..._)),class:"text-black rounded w-full shadow",type:"text",placeholder:"Search Blockchain, Transactions, Addresses, Blocks and Stakes"},null,544),[[C,t.search_value]])]),_:1})])}var Le=g(je,[["render",Ee],["__scopeId","data-v-4a130445"]]);let c;const x=new Array(32).fill(void 0);x.push(void 0,null,!0,!1);function F(e){return x[e]}let O=x.length;function De(e){e<36||(x[e]=O,O=e)}function Re(e){const n=F(e);return De(e),n}const H=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});H.decode();let W=new Uint8Array;function P(){return W.byteLength===0&&(W=new Uint8Array(c.memory.buffer)),W}function D(e,n){return H.decode(P().subarray(e,e+n))}let b=0;function Oe(e,n){const s=n(e.length*1);return P().set(e,s/1),b=e.length,s}let M=new Int32Array;function k(){return M.byteLength===0&&(M=new Int32Array(c.memory.buffer)),M}function Pt(e){try{const r=c.__wbindgen_add_to_stack_pointer(-16),t=Oe(e,c.__wbindgen_malloc),i=b;c.secret(r,t,i);var n=k()[r/4+0],s=k()[r/4+1];return D(n,s)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_free(n,s)}}const U=new TextEncoder("utf-8"),Pe=typeof U.encodeInto=="function"?function(e,n){return U.encodeInto(e,n)}:function(e,n){const s=U.encode(e);return n.set(s),{read:e.length,written:s.length}};function I(e,n,s){if(s===void 0){const _=U.encode(e),d=n(_.length);return P().subarray(d,d+_.length).set(_),b=_.length,d}let r=e.length,t=n(r);const i=P();let a=0;for(;a<r;a++){const _=e.charCodeAt(a);if(_>127)break;i[t+a]=_}if(a!==r){a!==0&&(e=e.slice(a)),t=s(t,r,r=a+e.length*3);const _=P().subarray(t+a,t+r);a+=Pe(e,_).written}return b=a,t}function Vt(e){try{const r=c.__wbindgen_add_to_stack_pointer(-16),t=I(e,c.__wbindgen_malloc,c.__wbindgen_realloc),i=b;c.address(r,t,i);var n=k()[r/4+0],s=k()[r/4+1];return D(n,s)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_free(n,s)}}function Wt(e,n,s,r){try{const a=c.__wbindgen_add_to_stack_pointer(-16),_=I(e,c.__wbindgen_malloc,c.__wbindgen_realloc),d=b,h=I(n,c.__wbindgen_malloc,c.__wbindgen_realloc),$=b,A=I(s,c.__wbindgen_malloc,c.__wbindgen_realloc),j=b,T=I(r,c.__wbindgen_malloc,c.__wbindgen_realloc),S=b;c.transaction(a,_,d,h,$,A,j,T,S);var t=k()[a/4+0],i=k()[a/4+1];return D(t,i)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_free(t,i)}}function Mt(e,n,s,r){try{const a=c.__wbindgen_add_to_stack_pointer(-16),_=I(n,c.__wbindgen_malloc,c.__wbindgen_realloc),d=b,h=I(s,c.__wbindgen_malloc,c.__wbindgen_realloc),$=b,A=I(r,c.__wbindgen_malloc,c.__wbindgen_realloc),j=b;c.stake(a,e,_,d,h,$,A,j);var t=k()[a/4+0],i=k()[a/4+1];return D(t,i)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_free(t,i)}}function Ut(e){try{const r=c.__wbindgen_add_to_stack_pointer(-16),t=I(e,c.__wbindgen_malloc,c.__wbindgen_realloc),i=b;c.format_int(r,t,i);var n=k()[r/4+0],s=k()[r/4+1];return D(n,s)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_free(n,s)}}function Ve(e){O===x.length&&x.push(x.length+1);const n=O;return O=x[n],x[n]=e,n}async function We(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const s=await e.arrayBuffer();return await WebAssembly.instantiate(s,n)}else{const s=await WebAssembly.instantiate(e,n);return s instanceof WebAssembly.Instance?{instance:s,module:e}:s}}function Me(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(n){Re(n)},e.wbg.__wbg_getTime_cb82adb2556ed13e=function(n){return F(n).getTime()},e.wbg.__wbg_new0_a57059d72c5b7aee=function(){const n=new Date;return Ve(n)},e.wbg.__wbindgen_throw=function(n,s){throw new Error(D(n,s))},e}function Ue(e,n){return c=e.exports,z.__wbindgen_wasm_module=n,M=new Int32Array,W=new Uint8Array,c}async function z(e){typeof e=="undefined"&&(e=new URL("/assets/wallet_bg.f387a867.wasm",self.location));const n=Me();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:s,module:r}=await We(await e,n);return Ue(s,r)}const Ne={mounted(){z().then(e=>console.log("init wasm"))}};function Be(e,n,s,r,t,i){const a=ie,_=xe,d=Le,h=N("router-view");return u(),p(L,null,[l(a),l(_),l(d),l(h)],64)}var Ce=g(Ne,[["render",Be]]);const qe="modulepreload",G={},Fe="/",E=function(n,s){return!s||s.length===0?n():Promise.all(s.map(r=>{if(r=`${Fe}${r}`,r in G)return;G[r]=!0;const t=r.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":qe,t||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),t)return new Promise((_,d)=>{a.addEventListener("load",_),a.addEventListener("error",d)})})).then(()=>n())},He={props:{api:String},data(){return{https:window.location.protocol==="https:",host:window.location.host}}},ze={class:"text-center"},Ge=f("API endpoint "),Qe=f(" seems unresponsive."),Ke={key:0,class:"text-center"},Ye=f(" Try the "),Je=["href"],Xe=f(" of this website. ");function Ze(e,n,s,r,t,i){return u(),p(L,null,[v("div",ze,[Ge,v("i",null,y(s.api),1),Qe]),t.https?(u(),p("div",Ke,[Ye,v("a",{href:"http://"+t.host},"http version",8,Je),Xe])):w("",!0)],64)}var et=g(He,[["render",Ze]]);const tt={},nt={class:"flex w-full"};function st(e,n){return u(),p("tr",nt,[R(e.$slots,"default",{},void 0,!0)])}var ot=g(tt,[["render",st],["__scopeId","data-v-70066230"]]);const rt={},ct={class:"flex flex-col justify-center"};function _t(e,n){return u(),p("td",ct,[R(e.$slots,"default",{},void 0,!0)])}var at=g(rt,[["render",_t],["__scopeId","data-v-91b5ff18"]]);const it={},lt={class:"flex w-full"};function ut(e,n){return u(),p("td",lt,[R(e.$slots,"default",{},void 0,!0)])}var dt=g(it,[["render",ut],["__scopeId","data-v-033df280"]]);const ft={},pt={class:"p-2 rounded shadow"};function ht(e,n){return u(),p("div",pt,[v("table",null,[R(e.$slots,"default",{},void 0,!0)])])}var mt=g(ft,[["render",ht],["__scopeId","data-v-146bdfab"]]);const yt={data(){return{dynamic:null,trusted:null,sync:null,info:null,interval:null,timeout:!1,https:window.location.protocol==="https:",host:window.location.host,api:null,shorten_public_key:!0}},mounted(){document.title="Explorer - Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},3e3)},shorten(e){return e.slice(0,12)+"..."+e.slice(-8)},fetchData(){this.api=window.localStorage.getItem("api"),fetch(this.api+"/dynamic").then(e=>e.json()).then(e=>{this.dynamic=e}),fetch(this.api+"/trusted").then(e=>e.json()).then(e=>{this.trusted=e}),fetch(this.api+"/sync").then(e=>e.json()).then(e=>{this.sync=e}),fetch(this.api+"/info").then(e=>e.json()).then(e=>{this.info=e})}}},vt={class:"flex flex-col gap-2 my-2 w-full"},wt={key:0,class:"flex flex-col justify-center mx-auto my-4"},bt=f("General information about Node"),gt=f("Synchronization"),kt=f("Last\xA0block\xA0seen"),xt=f("Height"),It=f("Tree\xA0size"),Tt=f("Public\xA0key"),$t=f("Time"),At=f("Uptime"),jt=f("Tick"),St=f("Stakers Queue"),Et=f("Latest Blocks");function Lt(e,n,s,r,t,i){const a=et,_=ot,d=at,h=dt,$=N("router-link"),A=mt,j=q;return u(),p("div",vt,[l(j,null,{default:o(()=>[!t.sync&&!t.info&&!t.dynamic&&!t.trusted&&t.timeout?(u(),p("div",wt,[l(a,{api:t.api},null,8,["api"])])):w("",!0),t.sync&&t.info?(u(),m(A,{key:1},{default:o(()=>[l(_,{class:"text-xl justify-center pb-2"},{default:o(()=>[bt]),_:1}),t.sync?(u(),m(_,{key:0},{default:o(()=>[l(d,{class:"w-60"},{default:o(()=>[gt]),_:1}),l(h,null,{default:o(()=>[f(y(t.sync.sync),1)]),_:1})]),_:1})):w("",!0),t.sync?(u(),m(_,{key:1},{default:o(()=>[l(d,{class:"w-60"},{default:o(()=>[kt]),_:1}),l(h,null,{default:o(()=>[f(y(t.sync.last),1)]),_:1})]),_:1})):w("",!0),t.sync?(u(),m(_,{key:2},{default:o(()=>[l(d,{class:"w-60"},{default:o(()=>[xt]),_:1}),l(h,null,{default:o(()=>[f(y(t.sync.height),1)]),_:1})]),_:1})):w("",!0),t.info?(u(),m(_,{key:3},{default:o(()=>[l(d,{class:"w-60"},{default:o(()=>[It]),_:1}),l(h,null,{default:o(()=>[f(y(t.info.tree_size),1)]),_:1})]),_:1})):w("",!0),t.info?(u(),m(_,{key:4},{default:o(()=>[l(d,{class:"w-60"},{default:o(()=>[Tt]),_:1}),t.shorten_public_key?(u(),m(h,{key:0,onClick:n[0]||(n[0]=T=>t.shorten_public_key=!1)},{default:o(()=>[f(y(i.shorten(t.info.public_key)),1)]),_:1})):(u(),m(h,{key:1},{default:o(()=>[l($,{class:"link",to:"/address/"+t.info.public_key},{default:o(()=>[f(y(t.info.public_key),1)]),_:1},8,["to"])]),_:1}))]),_:1})):w("",!0),t.info?(u(),m(_,{key:5},{default:o(()=>[l(d,{class:"w-60"},{default:o(()=>[$t]),_:1}),l(h,null,{default:o(()=>[f(y(t.info.time),1)]),_:1})]),_:1})):w("",!0),t.info?(u(),m(_,{key:6},{default:o(()=>[l(d,{class:"w-60"},{default:o(()=>[At]),_:1}),l(h,null,{default:o(()=>[f(y(t.info.uptime),1)]),_:1})]),_:1})):w("",!0),t.info?(u(),m(_,{key:7},{default:o(()=>[l(d,{class:"w-60"},{default:o(()=>[jt]),_:1}),l(h,null,{default:o(()=>[f(y(t.info.lag)+" ms",1)]),_:1})]),_:1})):w("",!0)]),_:1})):w("",!0)]),_:1}),l(j,null,{default:o(()=>[t.dynamic?(u(),m(A,{key:0},{default:o(()=>[l(_,{class:"text-xl justify-center pb-2"},{default:o(()=>[St]),_:1}),(u(!0),p(L,null,V(t.dynamic.stakers,(T,S)=>(u(),m(_,{key:(e.hash,S)},{default:o(()=>[l(d,null,{default:o(()=>[f("#"+y(S),1)]),_:2},1024),l(h,{class:"justify-center"},{default:o(()=>[l($,{class:"link",to:"/address/"+T},{default:o(()=>[f(y(T),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):w("",!0)]),_:1}),l(j,null,{default:o(()=>[t.dynamic&&t.trusted&&t.sync?(u(),m(A,{key:0},{default:o(()=>[l(_,{class:"text-xl justify-center pb-2"},{default:o(()=>[Et]),_:1}),(u(!0),p(L,null,V([...t.dynamic.latest_hashes,...t.trusted.latest_hashes].concat(),(T,S)=>(u(),m(_,{key:S},{default:o(()=>[l(d,null,{default:o(()=>[f("#"+y(t.sync.height-S),1)]),_:2},1024),l(h,{class:"justify-center"},{default:o(()=>[l($,{class:"link",to:"/block/"+T},{default:o(()=>[f(y(T),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):w("",!0)]),_:1})])}var Dt=g(yt,[["render",Lt],["__scopeId","data-v-7b8eee08"]]);const Rt=[{name:"wallet",path:"/wallet",component:()=>E(()=>import("./wallet.0d1a0302.js"),["assets/wallet.0d1a0302.js","assets/wallet.e2cdf3e0.css","assets/Address.46b0b2a8.js","assets/Address.0f08da71.css","assets/vendor.d36ac98d.js"]),props:!0},{name:"index",path:"/",component:Dt,props:!0},{name:"address-address",path:"/address/:address",component:()=>E(()=>import("./[address].92c8cdfc.js"),["assets/[address].92c8cdfc.js","assets/Address.46b0b2a8.js","assets/Address.0f08da71.css","assets/vendor.d36ac98d.js"]),props:!0},{name:"block-block",path:"/block/:block",component:()=>E(()=>import("./[block].890ed333.js"),["assets/[block].890ed333.js","assets/[block].df57b340.css","assets/vendor.d36ac98d.js"]),props:!0},{name:"search-search",path:"/search/:search",component:()=>E(()=>import("./[search].ce3cde92.js"),["assets/[search].ce3cde92.js","assets/vendor.d36ac98d.js"]),props:!0},{name:"stake-stake",path:"/stake/:stake",component:()=>E(()=>import("./[stake].5c46acbe.js"),["assets/[stake].5c46acbe.js","assets/[stake].6a84fd44.css","assets/vendor.d36ac98d.js"]),props:!0},{name:"transaction-transaction",path:"/transaction/:transaction",component:()=>E(()=>import("./[transaction].34635c34.js"),["assets/[transaction].34635c34.js","assets/[transaction].d8e910c2.css","assets/vendor.d36ac98d.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>E(()=>import("./[...all].07823312.js"),[]),props:!0}],Q=Z({history:ee(),routes:Rt});function K(e){return!!Object.keys(e.query).length}Q.beforeEach((e,n,s)=>{!K(e)&&K(n)?s({...e,query:n.query}):s()});const Y=te(Ce);Y.use(Q);Y.mount("#app");export{g as _,Vt as a,Mt as b,q as c,ot as d,at as e,Ut as f,dt as g,mt as h,Pt as s,Wt as t};
