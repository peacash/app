import{_ as b,f as k,d as v,e as x,g as w,h as y,c as g}from"./index.83c4820a.js";import{o as n,c as D,f as _,w as t,d as l,e as s,t as d,i as r}from"./vendor.783e6b8a.js";const B={props:{address:String},data(){return{balance:null,balance_staked:null,shorten_address:!0}},mounted(){this.loop()},unmounted(){clearInterval(this.interval)},methods:{loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},3e3)},fetchData(){!this.address||(fetch(window.localStorage.getItem("api")+"/balance/"+this.address).then(e=>e.text()).then(e=>{this.balance=e}),fetch(window.localStorage.getItem("api")+"/balance_staked/"+this.address).then(e=>e.text()).then(e=>{this.balance_staked=e}))},fmt(e){return k(e)},shorten(e){return e.slice(0,12)+"..."+e.slice(-8)}},watch:{address:{handler(){this.fetchData()},immediate:!0}}},I={class:"flex flex-col gap-2 my-2 w-full"},T=s("Address"),S=s("Public\xA0key"),j=s("Balance"),C=s("Balance\xA0staked");function N(e,h,i,V,a,u){const c=v,f=x,o=w,m=y,p=g;return n(),D("div",I,[_(p,null,{default:t(()=>[a.balance!==null&&a.balance_staked!==null?(n(),l(m,{key:0,bar:!0},{default:t(()=>[_(c,{class:"text-xl justify-center pb-2"},{default:t(()=>[T]),_:1}),i.address!==null?(n(),l(c,{key:0},{default:t(()=>[_(f,{class:"w-60"},{default:t(()=>[S]),_:1}),a.shorten_address?(n(),l(o,{key:0,onClick:h[0]||(h[0]=A=>a.shorten_address=!1)},{default:t(()=>[s(d(u.shorten(i.address)),1)]),_:1})):(n(),l(o,{key:1},{default:t(()=>[s(d(i.address),1)]),_:1}))]),_:1})):r("",!0),a.balance!==null?(n(),l(c,{key:1},{default:t(()=>[_(f,{class:"w-60"},{default:t(()=>[j]),_:1}),_(o,null,{default:t(()=>[s(d(u.fmt(a.balance)),1)]),_:1})]),_:1})):r("",!0),a.balance_staked!==null?(n(),l(c,{key:2},{default:t(()=>[_(f,{class:"w-60"},{default:t(()=>[C]),_:1}),_(o,null,{default:t(()=>[s(d(u.fmt(a.balance_staked)),1)]),_:1})]),_:1})):r("",!0)]),_:1})):r("",!0)]),_:1})])}var R=b(B,[["render",N],["__scopeId","data-v-c5ad71ca"]]);export{R as _};