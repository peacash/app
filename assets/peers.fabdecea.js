import{_ as g,d as k,c as D,i as j,e as w,g as T,h as N}from"./index.97ba9149.js";import{o as e,c as n,g as _,j as c,b,w as s,F as l,e as i,d as B,f as u,t as p}from"./vendor.c2e542a0.js";const I={data(){return{peers:null,interval:null,timeout:!1}},mounted(){document.title="Peers - Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},1e3)},fetchData(){let a=window.localStorage.getItem("url");!a||fetch(a+"/peers").then(o=>o.json()).then(o=>{this.peers=o})}}},V={key:0,class:"flex flex-col justify-center mx-auto my-4"},C={class:"flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full"},F={key:0,class:"text-center italic"};function P(a,o,S,E,t,L){const m=k,d=w,f=T,h=N,v=j,x=D;return e(),n(l,null,[t.peers===null&&t.timeout?(e(),n("div",V,[_(m)])):c("",!0),b("div",C,[_(x,null,{default:s(()=>[t.peers!==null?(e(),i(v,{key:0},{default:s(()=>[t.peers.length?c("",!0):(e(),n("div",F,"Node has no peer connections.")),(e(!0),n(l,null,B(t.peers,(y,r)=>(e(),i(h,{key:r},{default:s(()=>[_(d,null,{default:s(()=>[u("#"+p(r),1)]),_:2},1024),_(f,{class:"justify-center"},{default:s(()=>[u(p(y),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})):c("",!0)]),_:1})])],64)}var q=g(I,[["render",P],["__scopeId","data-v-d464afc4"]]);export{q as default};
