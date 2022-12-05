import{_ as y,d as g,e as w,g as x,h as T,c as D}from"./index.fa787735.js";import{r as C,o as s,c as j,f as _,w as t,d as o,e as n,t as c,i as f}from"./vendor.783e6b8a.js";const S={props:{hash:String},data(){return{transaction:null,shorten_hash:!0,shorten_public_key_input:!0,shorten_public_key_output:!0,shorten_signature:!0}},methods:{fetchData(){!this.hash||fetch(window.localStorage.getItem("api")+"/transaction/"+this.hash).then(l=>l.json()).then(l=>{this.transaction=l})},shorten(l){return l.slice(0,12)+"..."+l.slice(-8)},balance_to_string(l){let r=18,a="0".repeat(r);a+=l;let d=a.length-r;for(a=[a.slice(0,d),".",a.slice(d)].join("");a.startsWith("0");)a=a.slice(1);return a.startsWith(".")&&(a="0"+a),a}},mounted(){this.fetchData()},watch:{hash:{handler(){this.fetchData()},immediate:!0}}},B={class:"flex flex-col gap-2 my-2 w-full"},N=n("Transaction"),P=n("Hash"),V=n("Public\xA0key\xA0input"),E=n("Public\xA0key\xA0output"),I=n("Amount"),W=n("Fee"),A=n("Timestamp"),F=n("Signature");function H(l,r,a,d,e,h){const u=g,p=w,i=x,m=C("router-link"),b=T,v=D;return s(),j("div",B,[_(v,null,{default:t(()=>[_(b,null,{default:t(()=>[_(u,{class:"text-xl justify-center pb-2"},{default:t(()=>[N]),_:1}),e.transaction?(s(),o(u,{key:0},{default:t(()=>[_(p,{class:"w-60"},{default:t(()=>[P]),_:1}),e.shorten_hash?(s(),o(i,{key:0,onClick:r[0]||(r[0]=k=>e.shorten_hash=!1)},{default:t(()=>[n(c(h.shorten(e.transaction.hash)),1)]),_:1})):(s(),o(i,{key:1},{default:t(()=>[n(c(e.transaction.hash),1)]),_:1}))]),_:1})):f("",!0),e.transaction?(s(),o(u,{key:1},{default:t(()=>[_(p,{class:"w-60"},{default:t(()=>[V]),_:1}),e.shorten_public_key_input?(s(),o(i,{key:0,onClick:r[1]||(r[1]=k=>e.shorten_public_key_input=!1)},{default:t(()=>[n(c(h.shorten(e.transaction.public_key_input)),1)]),_:1})):(s(),o(i,{key:1},{default:t(()=>[_(m,{class:"link",to:"/address/"+e.transaction.public_key_input},{default:t(()=>[n(c(e.transaction.public_key_input),1)]),_:1},8,["to"])]),_:1}))]),_:1})):f("",!0),e.transaction?(s(),o(u,{key:2},{default:t(()=>[_(p,{class:"w-60"},{default:t(()=>[E]),_:1}),e.shorten_public_key_output?(s(),o(i,{key:0,onClick:r[2]||(r[2]=k=>e.shorten_public_key_output=!1)},{default:t(()=>[n(c(h.shorten(e.transaction.public_key_output)),1)]),_:1})):(s(),o(i,{key:1},{default:t(()=>[_(m,{class:"link",to:"/address/"+e.transaction.public_key_output},{default:t(()=>[n(c(e.transaction.public_key_output),1)]),_:1},8,["to"])]),_:1}))]),_:1})):f("",!0),e.transaction?(s(),o(u,{key:3},{default:t(()=>[_(p,{class:"w-60"},{default:t(()=>[I]),_:1}),_(i,null,{default:t(()=>[n(c(h.balance_to_string(e.transaction.amount)),1)]),_:1})]),_:1})):f("",!0),e.transaction?(s(),o(u,{key:4},{default:t(()=>[_(p,{class:"w-60"},{default:t(()=>[W]),_:1}),_(i,null,{default:t(()=>[n(c(h.balance_to_string(e.transaction.fee)),1)]),_:1})]),_:1})):f("",!0),e.transaction?(s(),o(u,{key:5},{default:t(()=>[_(p,{class:"w-60"},{default:t(()=>[A]),_:1}),_(i,null,{default:t(()=>[n(c(new Date(e.transaction.timestamp*1e3).toLocaleString()),1)]),_:1})]),_:1})):f("",!0),e.transaction?(s(),o(u,{key:6},{default:t(()=>[_(p,{class:"w-60"},{default:t(()=>[F]),_:1}),e.shorten_signature?(s(),o(i,{key:0,onClick:r[3]||(r[3]=k=>e.shorten_signature=!1)},{default:t(()=>[n(c(h.shorten(e.transaction.signature)),1)]),_:1})):(s(),o(i,{key:1},{default:t(()=>[n(c(e.transaction.signature),1)]),_:1}))]),_:1})):f("",!0)]),_:1})]),_:1})])}var L=y(S,[["render",H],["__scopeId","data-v-0cafba00"]]);const R={mounted(){document.title=this.$route.params.transaction+" - Transaction - Explorer - Pea"}};function q(l,r,a,d,e,h){const u=L;return s(),o(u,{hash:this.$route.params.transaction},null,8,["hash"])}var J=y(R,[["render",q]]);export{J as default};
