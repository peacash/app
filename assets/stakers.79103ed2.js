import{_ as x,d as g,c as D,i as j,e as w,g as T,h as I}from"./index.14a279f6.js";import{r as B,o as n,c as _,g as e,j as r,w as t,F as i,d as C,e as N,f as m,t as u}from"./vendor.c2e542a0.js";const S={data(){return{dynamic:null,interval:null,timeout:!1}},mounted(){document.title="Stakers - Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},3e3)},fetchData(){let o=window.localStorage.getItem("url");!o||fetch(o+"/dynamic").then(s=>s.json()).then(s=>{this.dynamic=s})}}},V={key:0,class:"flex flex-col justify-center mx-auto my-4"},b={key:1,class:"flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full"};function F(o,s,E,L,a,P){const d=g,p=w,f=B("router-link"),h=T,v=I,y=j,k=D;return n(),_(i,null,[a.dynamic===null&&a.timeout?(n(),_("div",V,[e(d)])):r("",!0),a.dynamic!==null?(n(),_("div",b,[e(k,null,{default:t(()=>[e(y,null,{default:t(()=>[(n(!0),_(i,null,C(a.dynamic.stakers,(c,l)=>(n(),N(v,{key:(o.hash,l)},{default:t(()=>[e(p,null,{default:t(()=>[m("#"+u(l),1)]),_:2},1024),e(h,{class:"justify-center"},{default:t(()=>[e(f,{class:"link",to:"/address/"+c},{default:t(()=>[m(u(c),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])):r("",!0)],64)}var $=x(S,[["render",F],["__scopeId","data-v-5b09c80a"]]);export{$ as default};