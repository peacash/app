import{_ as g,d as D,c as j,h as w,e as T,f as b,g as N}from"./index.cebb2099.js";import{r as B,o as e,c as _,g as o,j as c,b as I,w as t,F as i,e as m,d as V,f as u,t as d}from"./vendor.c2e542a0.js";const C={data(){return{dynamic:null,interval:null,timeout:!1}},mounted(){document.title="Random - Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},1e3)},fetchData(){let s=window.localStorage.getItem("url");!s||fetch(s+"/dynamic").then(a=>a.json()).then(a=>{this.dynamic=a})}}},q={key:0,class:"flex flex-col justify-center mx-auto my-4"},F={class:"flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full"},R={key:0,class:"text-center italic"};function S(s,a,E,L,n,P){const p=D,f=T,h=B("router-link"),v=b,y=N,k=w,x=j;return e(),_(i,null,[n.dynamic===null&&n.timeout?(e(),_("div",q,[o(p)])):c("",!0),I("div",F,[o(x,null,{default:t(()=>[n.dynamic!==null?(e(),m(k,{key:0},{default:t(()=>[n.dynamic.random_queue.length?c("",!0):(e(),_("div",R,"No stakers.")),(e(!0),_(i,null,V(n.dynamic.random_queue,(l,r)=>(e(),m(y,{key:(s.hash,r)},{default:t(()=>[o(f,null,{default:t(()=>[u("#"+d(r),1)]),_:2},1024),o(v,{class:"justify-center"},{default:t(()=>[o(h,{class:"link",to:"/address/"+l},{default:t(()=>[u(d(l),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):c("",!0)]),_:1})])],64)}var A=g(C,[["render",S],["__scopeId","data-v-0d9f2150"]]);export{A as default};
