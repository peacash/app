import{_ as x,d as g,c as j,i as w,e as D,g as I,h as S}from"./index.006d05bd.js";import{r as b,o as n,c,g as t,j as i,w as o,F as d,d as T,p as B,a as N,e as V,f as u,t as m,b as C}from"./vendor.d36ac98d.js";const F={data(){return{dynamic:null,interval:null,timeout:!1}},mounted(){document.title="Stakers - Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},3e3)},fetchData(){let e=window.localStorage.getItem("endpoint");!e||fetch(e+"/dynamic").then(s=>s.json()).then(s=>{this.dynamic=s})}}},E=e=>(B("data-v-3c56bdd2"),e=e(),N(),e),L={key:0,class:"flex flex-col justify-center mx-auto my-4"},P={key:1,class:"flex flex-col gap-10 my-10 w-full"},Q=E(()=>C("div",{class:"flex justify-center text-black"},"Stakers Queue",-1));function R(e,s,U,$,a,q){const p=g,_=j,f=D,h=b("router-link"),v=I,y=S,k=w;return n(),c(d,null,[a.dynamic===null&&a.timeout?(n(),c("div",L,[t(p)])):i("",!0),a.dynamic!==null?(n(),c("div",P,[t(_,null,{default:o(()=>[Q]),_:1}),t(_,null,{default:o(()=>[t(k,null,{default:o(()=>[(n(!0),c(d,null,T(a.dynamic.stakers,(l,r)=>(n(),V(y,{key:(e.hash,r)},{default:o(()=>[t(f,null,{default:o(()=>[u("#"+m(r),1)]),_:2},1024),t(v,{class:"justify-center"},{default:o(()=>[t(h,{class:"link",to:"/address/"+l},{default:o(()=>[u(m(l),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])):i("",!0)],64)}var G=x(F,[["render",R],["__scopeId","data-v-3c56bdd2"]]);export{G as default};
