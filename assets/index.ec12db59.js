import{o as f,c as p,p as Q,a as Y,b as m,r as V,F as A,d as U,e as O,w as c,f as d,t as g,g as r,h as j,i as J,v as X,j as W,k as Z,l as ee,m as te}from"./vendor.c2e542a0.js";const ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};ne();var se="/peacash-green.svg";var b=(e,t)=>{for(const[s,o]of t)e[s]=o;return e};const oe={},re=e=>(Q("data-v-852d4a6e"),e=e(),Y(),e),_e=re(()=>m("img",{class:"p-10",src:se,alt:""},null,-1)),ce=[_e];function ae(e,t){return f(),p("div",null,ce)}var ie=b(oe,[["render",ae],["__scopeId","data-v-852d4a6e"]]);const le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ue=m("g",{fill:"none"},[m("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),de=[ue];function fe(e,t){return f(),p("svg",le,de)}var pe={name:"heroicons-outline-external-link",render:fe};const he={data(){return{open:!1,links:{to:[{text:"Home",to:"/"},{text:"Wallet",to:"/wallet"},{text:"Settings",to:"/settings"}]}}}},me={class:"select-none z-20"},ge={class:"w-full custom-header"},ve={class:"max-w-7xl mx-auto px-4 flex justify-between lg:px-8"},be={class:"flex py-2 space-x-4 lg:space-x-8","aria-label":"Global navigation"},we=["href"],ye={class:"mr-2"};function ke(e,t,s,o,n,i){const a=V("router-link"),l=pe;return f(),p("div",me,[m("header",ge,[m("div",ve,[m("nav",be,[(f(!0),p(A,null,U(n.links.to,u=>(f(),O(a,{key:u,to:u.to,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black"},{default:c(()=>[d(g(u.text),1)]),_:2},1032,["to"]))),128)),(f(!0),p(A,null,U(n.links.href,u=>(f(),p("a",{key:u,href:u.href,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black",rel:"noopener"},[m("span",ye,g(u.text),1),r(l,{class:"h-5 w-5"})],8,we))),128))])])])])}var xe=b(he,[["render",ke],["__scopeId","data-v-8f9edf70"]]);const $e={},Ie={class:"flex flex-col prose sm:prose-lg mx-auto w-full",style:{"max-width":"60rem"}},Te={class:"m-2"};function Ee(e,t){return f(),p("div",Ie,[m("div",Te,[m("div",null,[j(e.$slots,"default")])])])}var C=b($e,[["render",Ee]]);const Ae={data(){return{search_value:this.$route.params.search||""}},methods:{search(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.search_value.trim()?(this.search_value=this.search_value.trim(),this.$router.push("/search/"+this.search_value)):this.$router.push("/")},250)}},mounted(){this.$refs.search.focus()}};function je(e,t,s,o,n,i){const a=C;return f(),O(a,{class:"my-2 md:my-10"},{default:c(()=>[J(m("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>n.search_value=l),ref:"search",onInput:t[1]||(t[1]=(...l)=>i.search&&i.search(...l)),class:"text-black rounded w-full ring-1 ring-black ring-opacity-10 sm:ring-opacity-20",type:"text",placeholder:"Search Blockchain, Transactions, Addresses, Blocks and Stakes"},null,544),[[X,n.search_value]])]),_:1})}var Le=b(Ae,[["render",je]]);let _;const x=new Array(32).fill(void 0);x.push(void 0,null,!0,!1);function N(e){return x[e]}let L=x.length;function De(e){e<36||(x[e]=L,L=e)}function Oe(e){const t=N(e);return De(e),t}const B=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});B.decode();let R=new Uint8Array;function D(){return R.byteLength===0&&(R=new Uint8Array(_.memory.buffer)),R}function T(e,t){return B.decode(D().subarray(e,e+t))}let v=0;function Re(e,t){const s=t(e.length*1);return D().set(e,s/1),v=e.length,s}let S=new Int32Array;function y(){return S.byteLength===0&&(S=new Int32Array(_.memory.buffer)),S}function Mt(e){try{const o=_.__wbindgen_add_to_stack_pointer(-16),n=Re(e,_.__wbindgen_malloc),i=v;_.secret(o,n,i);var t=y()[o/4+0],s=y()[o/4+1];return T(t,s)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,s)}}const P=new TextEncoder("utf-8"),Se=typeof P.encodeInto=="function"?function(e,t){return P.encodeInto(e,t)}:function(e,t){const s=P.encode(e);return t.set(s),{read:e.length,written:s.length}};function $(e,t,s){if(s===void 0){const l=P.encode(e),u=t(l.length);return D().subarray(u,u+l.length).set(l),v=l.length,u}let o=e.length,n=t(o);const i=D();let a=0;for(;a<o;a++){const l=e.charCodeAt(a);if(l>127)break;i[n+a]=l}if(a!==o){a!==0&&(e=e.slice(a)),n=s(n,o,o=a+e.length*3);const l=D().subarray(n+a,n+o);a+=Se(e,l).written}return v=a,n}function Ut(e){try{const o=_.__wbindgen_add_to_stack_pointer(-16),n=$(e,_.__wbindgen_malloc,_.__wbindgen_realloc),i=v;_.address(o,n,i);var t=y()[o/4+0],s=y()[o/4+1];return T(t,s)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,s)}}function Ct(e,t,s,o){try{const a=_.__wbindgen_add_to_stack_pointer(-16),l=$(e,_.__wbindgen_malloc,_.__wbindgen_realloc),u=v,h=$(t,_.__wbindgen_malloc,_.__wbindgen_realloc),k=v,E=$(s,_.__wbindgen_malloc,_.__wbindgen_realloc),I=v,M=$(o,_.__wbindgen_malloc,_.__wbindgen_realloc),K=v;_.transaction(a,l,u,h,k,E,I,M,K);var n=y()[a/4+0],i=y()[a/4+1];return T(n,i)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(n,i)}}function Nt(e,t,s,o){try{const a=_.__wbindgen_add_to_stack_pointer(-16),l=$(t,_.__wbindgen_malloc,_.__wbindgen_realloc),u=v,h=$(s,_.__wbindgen_malloc,_.__wbindgen_realloc),k=v,E=$(o,_.__wbindgen_malloc,_.__wbindgen_realloc),I=v;_.stake(a,e,l,u,h,k,E,I);var n=y()[a/4+0],i=y()[a/4+1];return T(n,i)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(n,i)}}function Bt(e){try{const o=_.__wbindgen_add_to_stack_pointer(-16),n=$(e,_.__wbindgen_malloc,_.__wbindgen_realloc),i=v;_.format_int(o,n,i);var t=y()[o/4+0],s=y()[o/4+1];return T(t,s)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,s)}}function Pe(e){L===x.length&&x.push(x.length+1);const t=L;return L=x[t],x[t]=e,t}async function Ve(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(o){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const s=await e.arrayBuffer();return await WebAssembly.instantiate(s,t)}else{const s=await WebAssembly.instantiate(e,t);return s instanceof WebAssembly.Instance?{instance:s,module:e}:s}}function We(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(t){Oe(t)},e.wbg.__wbg_getTime_cb82adb2556ed13e=function(t){return N(t).getTime()},e.wbg.__wbg_new0_a57059d72c5b7aee=function(){const t=new Date;return Pe(t)},e.wbg.__wbindgen_throw=function(t,s){throw new Error(T(t,s))},e}function Me(e,t){return _=e.exports,q.__wbindgen_wasm_module=t,S=new Int32Array,R=new Uint8Array,_}async function q(e){typeof e=="undefined"&&(e=new URL("/assets/wallet_bg.29416b2e.wasm",self.location));const t=We();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:s,module:o}=await Ve(await e,t);return Me(s,o)}const Ue={mounted(){q().then(e=>console.log("init wasm"))}};function Ce(e,t,s,o,n,i){const a=ie,l=xe,u=Le,h=V("router-view");return f(),p(A,null,[r(a),r(l),r(u),r(h)],64)}var Ne=b(Ue,[["render",Ce]]);const Be="modulepreload",F={},qe="/",w=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${qe}${o}`,o in F)return;F[o]=!0;const n=o.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":Be,n||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),n)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",u)})})).then(()=>t())},Fe={data(){return{url:localStorage.getItem("url"),https:window.location.protocol==="https:",host:window.location.host}}},He={class:"text-center",style:{color:"#f00"}},ze=d("Endpoint "),Ge=d(" seems unresponsive!"),Ke={key:0,class:"text-center"},Qe=d(" Try the "),Ye=["href"],Je=d(" of this website. ");function Xe(e,t,s,o,n,i){return f(),p(A,null,[m("div",He,[ze,m("i",null,g(n.url),1),Ge]),n.https?(f(),p("div",Ke,[Qe,m("a",{href:"http://"+n.host},"http version",8,Ye),Je])):W("",!0)],64)}var Ze=b(Fe,[["render",Xe]]);const et={},tt={class:"flex flex-col justify-center"};function nt(e,t){return f(),p("td",tt,[j(e.$slots,"default",{},void 0,!0)])}var st=b(et,[["render",nt],["__scopeId","data-v-91b5ff18"]]);const ot={},rt={class:"flex w-full"};function _t(e,t){return f(),p("td",rt,[j(e.$slots,"default",{},void 0,!0)])}var ct=b(ot,[["render",_t],["__scopeId","data-v-033df280"]]);const at={},it={class:"flex w-full"};function lt(e,t){return f(),p("tr",it,[j(e.$slots,"default")])}var ut=b(at,[["render",lt]]);const dt={},ft={class:"p-2 rounded sm:ring-1 sm:ring-black sm:ring-opacity-20"};function pt(e,t){return f(),p("div",ft,[m("table",null,[j(e.$slots,"default",{},void 0,!0)])])}var ht=b(dt,[["render",pt],["__scopeId","data-v-b75631f8"]]);const mt={data(){return{sync:null,info:null,interval:null,timeout:!1,shorten_public_key:!0}},mounted(){document.title="Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},3e3)},shorten(e){return e.slice(0,12)+"..."+e.slice(-8)},fetchData(){let e=window.localStorage.getItem("url");!e||(fetch(e+"/sync").then(t=>t.json()).then(t=>{this.sync=t}),fetch(e+"/info").then(t=>t.json()).then(t=>{this.info=t}))}}},gt={key:0,class:"flex flex-col justify-center mx-auto my-4"},vt={key:1,class:"flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full"},bt=d("Synchronization"),wt=d("Last\xA0block\xA0seen"),yt=d("Height"),kt=d("Index"),xt=d("Gossipsub peers"),$t=d("Tree\xA0size"),It=d("Public\xA0key"),Tt=d("Time"),Et=d("Uptime"),At=d("Tick"),jt={class:"flex justify-center text-black gap-2 md:gap-10"},Lt=d("/stakers"),Dt=d("/latest"),Ot=d("/wallet"),Rt=d("/settings");function St(e,t,s,o,n,i){const a=Ze,l=st,u=ct,h=ut,k=V("router-link"),E=ht,I=C;return f(),p(A,null,[(n.sync===null||n.info===null)&&n.timeout?(f(),p("div",gt,[r(a)])):W("",!0),n.sync!==null&&n.info!==null?(f(),p("div",vt,[r(I,null,{default:c(()=>[r(E,null,{default:c(()=>[r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[bt]),_:1}),r(u,null,{default:c(()=>[d(g(n.sync.sync),1)]),_:1})]),_:1}),r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[wt]),_:1}),r(u,null,{default:c(()=>[d(g(n.sync.last),1)]),_:1})]),_:1}),r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[yt]),_:1}),r(u,null,{default:c(()=>[d(g(n.sync.height),1)]),_:1})]),_:1}),r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[kt]),_:1}),r(u,null,{default:c(()=>[d(g(n.sync.index),1)]),_:1})]),_:1}),r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[xt]),_:1}),r(u,null,{default:c(()=>[d(g(n.sync.peers),1)]),_:1})]),_:1}),r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[$t]),_:1}),r(u,null,{default:c(()=>[d(g(n.info.tree_size),1)]),_:1})]),_:1}),r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[It]),_:1}),n.shorten_public_key?(f(),O(u,{key:0,onClick:t[0]||(t[0]=M=>n.shorten_public_key=!1)},{default:c(()=>[d(g(i.shorten(n.info.public_key)),1)]),_:1})):(f(),O(u,{key:1},{default:c(()=>[r(k,{class:"link",to:"/address/"+n.info.public_key},{default:c(()=>[d(g(n.info.public_key),1)]),_:1},8,["to"])]),_:1}))]),_:1}),r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[Tt]),_:1}),r(u,null,{default:c(()=>[d(g(n.info.time),1)]),_:1})]),_:1}),r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[Et]),_:1}),r(u,null,{default:c(()=>[d(g(n.info.uptime),1)]),_:1})]),_:1}),r(h,null,{default:c(()=>[r(l,{class:"w-60"},{default:c(()=>[At]),_:1}),r(u,null,{default:c(()=>[d(g(n.info.lag)+" ms",1)]),_:1})]),_:1})]),_:1})]),_:1}),r(I,null,{default:c(()=>[m("div",jt,[r(k,{class:"link",to:"/stakers"},{default:c(()=>[Lt]),_:1}),r(k,{class:"link",to:"/latest"},{default:c(()=>[Dt]),_:1}),r(k,{class:"link",to:"/settings"},{default:c(()=>[Ot]),_:1}),r(k,{class:"link",to:"/settings"},{default:c(()=>[Rt]),_:1})])]),_:1})])):W("",!0)],64)}var Pt=b(mt,[["render",St],["__scopeId","data-v-9afbed7e"]]);const Vt=[{name:"wallet",path:"/wallet",component:()=>w(()=>import("./wallet.ea571c05.js"),["assets/wallet.ea571c05.js","assets/wallet.4ada5cb5.css","assets/Address.55097c54.js","assets/Address.0a9a1460.css","assets/vendor.c2e542a0.js"]),props:!0},{name:"stakers",path:"/stakers",component:()=>w(()=>import("./stakers.d4e81a24.js"),["assets/stakers.d4e81a24.js","assets/stakers.497d0161.css","assets/vendor.c2e542a0.js"]),props:!0},{name:"sleep",path:"/sleep",component:()=>w(()=>import("./sleep.2cc489d0.js"),["assets/sleep.2cc489d0.js","assets/sleep.bf2767d7.css","assets/vendor.c2e542a0.js"]),props:!0},{name:"settings",path:"/settings",component:()=>w(()=>import("./settings.b76078af.js"),["assets/settings.b76078af.js","assets/settings.939061ff.css","assets/vendor.c2e542a0.js"]),props:!0},{name:"latest",path:"/latest",component:()=>w(()=>import("./latest.db5e15de.js"),["assets/latest.db5e15de.js","assets/latest.4b959a58.css","assets/vendor.c2e542a0.js"]),props:!0},{name:"index",path:"/",component:Pt,props:!0},{name:"address-address",path:"/address/:address",component:()=>w(()=>import("./[address].c0fa3896.js"),["assets/[address].c0fa3896.js","assets/Address.55097c54.js","assets/Address.0a9a1460.css","assets/vendor.c2e542a0.js"]),props:!0},{name:"block-block",path:"/block/:block",component:()=>w(()=>import("./[block].b40865c8.js"),["assets/[block].b40865c8.js","assets/[block].17581e4f.css","assets/vendor.c2e542a0.js"]),props:!0},{name:"search-search",path:"/search/:search",component:()=>w(()=>import("./[search].b5b76bf6.js"),["assets/[search].b5b76bf6.js","assets/vendor.c2e542a0.js"]),props:!0},{name:"stake-stake",path:"/stake/:stake",component:()=>w(()=>import("./[stake].07d8d8b0.js"),["assets/[stake].07d8d8b0.js","assets/[stake].1ac96436.css","assets/vendor.c2e542a0.js"]),props:!0},{name:"transaction-transaction",path:"/transaction/:transaction",component:()=>w(()=>import("./[transaction].1d9e6f62.js"),["assets/[transaction].1d9e6f62.js","assets/[transaction].0f0156bf.css","assets/vendor.c2e542a0.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>w(()=>import("./[...all].07823312.js"),[]),props:!0}],H=Z({history:ee(),routes:Vt});function z(e){return!!Object.keys(e.query).length}H.beforeEach((e,t,s)=>{!z(e)&&z(t)?s({...e,query:t.query}):s()});const G=te(Ne);G.use(H);G.mount("#app");export{b as _,Ut as a,Nt as b,C as c,Ze as d,st as e,Bt as f,ct as g,ut as h,ht as i,se as j,Mt as s,Ct as t};
