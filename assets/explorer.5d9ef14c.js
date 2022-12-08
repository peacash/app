import{_ as j,c as B}from"./index.fbaac3fa.js";import{o,c as h,b as v,t as c,m as u,F as w,f as s,r as N,g as n,w as e,e as _,d as g}from"./vendor.eebf0573.js";import{_ as S,a as C,b as I,c as V}from"./Table.d866a8c0.js";const z={props:{endpoint:String},data(){return{https:window.location.protocol==="https:",host:window.location.host}}},E={class:"text-center"},L=s("Endpoint "),F=s(" seems unresponsive."),P={key:0,class:"text-center"},U=s(" Try the "),G=["href"],H=s(" of this website. ");function Q(r,l,x,T,t,b){return o(),h(w,null,[v("div",E,[L,v("i",null,c(x.endpoint),1),F]),t.https?(o(),h("div",P,[U,v("a",{href:"http://"+t.host},"http version",8,G),H])):u("",!0)],64)}var R=j(z,[["render",Q]]);const q={data(){return{dynamic:null,trusted:null,sync:null,info:null,interval:null,timeout:!1,https:window.location.protocol==="https:",host:window.location.host,endpoint:null,shorten_public_key:!0}},mounted(){document.title="Explorer - Pea",this.loop(),setTimeout(()=>{this.timeout=!0},1e3)},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},3e3)},shorten(r){return r.slice(0,12)+"..."+r.slice(-8)},fetchData(){let r=window.localStorage.getItem("endpoint");!r||(fetch(r+"/dynamic").then(l=>l.json()).then(l=>{this.dynamic=l}),fetch(r+"/trusted").then(l=>l.json()).then(l=>{this.trusted=l}),fetch(r+"/sync").then(l=>l.json()).then(l=>{this.sync=l}),fetch(r+"/info").then(l=>l.json()).then(l=>{this.info=l}))}}},A={class:"flex flex-col gap-2 my-2 w-full"},J={key:0,class:"flex flex-col justify-center mx-auto my-4"},K=s("General information about Node"),M=s("Synchronization"),O=s("Last\xA0block\xA0seen"),W=s("Height"),X=s("Tree\xA0size"),Y=s("Public\xA0key"),Z=s("Time"),$=s("Uptime"),ee=s("Tick"),te=s("Stakers Queue"),ne=s("Latest Blocks");function se(r,l,x,T,t,b){const D=R,i=S,a=C,f=I,y=N("router-link"),m=V,k=B;return o(),h("div",A,[n(k,null,{default:e(()=>[!t.sync&&!t.info&&!t.dynamic&&!t.trusted&&t.timeout?(o(),h("div",J,[n(D,{endpoint:t.endpoint},null,8,["endpoint"])])):u("",!0),t.sync&&t.info?(o(),_(m,{key:1},{default:e(()=>[n(i,{class:"text-xl justify-center pb-2"},{default:e(()=>[K]),_:1}),t.sync?(o(),_(i,{key:0},{default:e(()=>[n(a,{class:"w-60"},{default:e(()=>[M]),_:1}),n(f,null,{default:e(()=>[s(c(t.sync.sync),1)]),_:1})]),_:1})):u("",!0),t.sync?(o(),_(i,{key:1},{default:e(()=>[n(a,{class:"w-60"},{default:e(()=>[O]),_:1}),n(f,null,{default:e(()=>[s(c(t.sync.last),1)]),_:1})]),_:1})):u("",!0),t.sync?(o(),_(i,{key:2},{default:e(()=>[n(a,{class:"w-60"},{default:e(()=>[W]),_:1}),n(f,null,{default:e(()=>[s(c(t.sync.height),1)]),_:1})]),_:1})):u("",!0),t.info?(o(),_(i,{key:3},{default:e(()=>[n(a,{class:"w-60"},{default:e(()=>[X]),_:1}),n(f,null,{default:e(()=>[s(c(t.info.tree_size),1)]),_:1})]),_:1})):u("",!0),t.info?(o(),_(i,{key:4},{default:e(()=>[n(a,{class:"w-60"},{default:e(()=>[Y]),_:1}),t.shorten_public_key?(o(),_(f,{key:0,onClick:l[0]||(l[0]=d=>t.shorten_public_key=!1)},{default:e(()=>[s(c(b.shorten(t.info.public_key)),1)]),_:1})):(o(),_(f,{key:1},{default:e(()=>[n(y,{class:"link",to:"/address/"+t.info.public_key},{default:e(()=>[s(c(t.info.public_key),1)]),_:1},8,["to"])]),_:1}))]),_:1})):u("",!0),t.info?(o(),_(i,{key:5},{default:e(()=>[n(a,{class:"w-60"},{default:e(()=>[Z]),_:1}),n(f,null,{default:e(()=>[s(c(t.info.time),1)]),_:1})]),_:1})):u("",!0),t.info?(o(),_(i,{key:6},{default:e(()=>[n(a,{class:"w-60"},{default:e(()=>[$]),_:1}),n(f,null,{default:e(()=>[s(c(t.info.uptime),1)]),_:1})]),_:1})):u("",!0),t.info?(o(),_(i,{key:7},{default:e(()=>[n(a,{class:"w-60"},{default:e(()=>[ee]),_:1}),n(f,null,{default:e(()=>[s(c(t.info.lag)+" ms",1)]),_:1})]),_:1})):u("",!0)]),_:1})):u("",!0)]),_:1}),n(k,null,{default:e(()=>[t.dynamic?(o(),_(m,{key:0},{default:e(()=>[n(i,{class:"text-xl justify-center pb-2"},{default:e(()=>[te]),_:1}),(o(!0),h(w,null,g(t.dynamic.stakers,(d,p)=>(o(),_(i,{key:(r.hash,p)},{default:e(()=>[n(a,null,{default:e(()=>[s("#"+c(p),1)]),_:2},1024),n(f,{class:"justify-center"},{default:e(()=>[n(y,{class:"link",to:"/address/"+d},{default:e(()=>[s(c(d),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):u("",!0)]),_:1}),n(k,null,{default:e(()=>[t.dynamic&&t.trusted&&t.sync?(o(),_(m,{key:0},{default:e(()=>[n(i,{class:"text-xl justify-center pb-2"},{default:e(()=>[ne]),_:1}),(o(!0),h(w,null,g([...t.dynamic.latest_hashes,...t.trusted.latest_hashes].concat(),(d,p)=>(o(),_(i,{key:p},{default:e(()=>[n(a,null,{default:e(()=>[s("#"+c(t.sync.height-p),1)]),_:2},1024),n(f,{class:"justify-center"},{default:e(()=>[n(y,{class:"link",to:"/block/"+d},{default:e(()=>[s(c(d),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):u("",!0)]),_:1})])}var ce=j(q,[["render",se],["__scopeId","data-v-a266c2fe"]]);export{ce as default};