import{_ as k,d as j,c as D,i as w,e as T,g as N,h as b}from"./index.e8ff0016.js";import{r as B,o as n,c,g as l,j as _,b as I,w as s,F as i,e as u,d as V,f as m,t as h}from"./vendor.c2e542a0.js";const C={data(){return{dynamic:null,trusted:null,sync:null,interval:null,timeout:!1}},mounted(){document.title="Latest - Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},1e3)},fetchData(){let o=window.localStorage.getItem("url");!o||(fetch(o+"/dynamic").then(e=>e.json()).then(e=>{this.dynamic=e}),fetch(o+"/trusted").then(e=>e.json()).then(e=>{this.trusted=e}),fetch(o+"/sync").then(e=>e.json()).then(e=>{this.sync=e}))}}},F={key:0,class:"flex flex-col justify-center mx-auto my-4"},L={class:"flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full"},S={key:0,class:"text-center italic"};function E(o,e,P,R,t,U){const d=j,p=T,f=B("router-link"),y=N,v=b,x=w,g=D;return n(),c(i,null,[(t.sync===null||t.dynamic===null||t.trusted===null)&&t.timeout?(n(),c("div",F,[l(d)])):_("",!0),I("div",L,[l(g,null,{default:s(()=>[t.sync!==null&&t.dynamic!==null&&t.trusted!==null?(n(),u(x,{key:0},{default:s(()=>[[...t.dynamic.latest_hashes,...t.trusted.latest_hashes].concat().length?_("",!0):(n(),c("div",S,"No hashes.")),(n(!0),c(i,null,V([...t.dynamic.latest_hashes,...t.trusted.latest_hashes].concat(),(a,r)=>(n(),u(v,{key:r},{default:s(()=>[l(p,null,{default:s(()=>[m("#"+h(t.sync.height-r),1)]),_:2},1024),l(y,{class:"justify-center"},{default:s(()=>[l(f,{class:"link",to:"/block/"+a},{default:s(()=>[m(h(a),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):_("",!0)]),_:1})])],64)}var A=k(C,[["render",E],["__scopeId","data-v-296ef163"]]);export{A as default};
