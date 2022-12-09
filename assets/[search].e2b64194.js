import{_ as i,c as l}from"./index.d5dc21c7.js";import{o as r,c as s,g as h,w as u,b as o,t as d,j as p}from"./vendor.c2e542a0.js";const f={data(){return{failed:!1,endpoint:null,timeout:!1}},methods:{fetchData(){let a=window.localStorage.getItem("endpoint");if(!a)return;let e=this.$route.params.search;if(!!e){if(e=e.toLowerCase(),["h","ho","hom","home"].includes(e)){this.$router.replace("/");return}if(["w","wa","wal","wall","walle","wallet"].includes(e)){this.$router.replace("/wallet");return}if(["setting","settings"].includes(e)){this.$router.replace("/settings");return}if(["latest","recent","blocks"].includes(e)){this.$router.replace("/latest");return}if(["staker","stakers"].includes(e)){this.$router.replace("/stakers");return}if(["co","com","comp","compa","compar","compare"].includes(e)){this.$router.replace("/compare");return}if(e===parseInt(e).toString()&&parseInt(e)!==NaN){fetch(a+"/hash/"+e).then(t=>t.json()).then(t=>{this.$router.replace("/block/"+t)}).catch(()=>{this.failed=!0});return}if(e.toLowerCase().startsWith("0x")){fetch(a+"/balance/"+e).then(t=>t.json()).then(t=>{this.$router.replace("/address/"+e)}).catch(()=>{this.failed=!0});return}fetch(a+"/block/"+e).then(t=>t.json()).then(t=>{this.$router.replace("/block/"+e)}).catch(()=>{fetch(a+"/transaction/"+e).then(t=>t.json()).then(t=>{this.$router.replace("/transaction/"+e)}).catch(()=>{fetch(a+"/stake/"+e).then(t=>t.json()).then(t=>{this.$router.replace("/stake/"+e)}).catch(()=>{this.failed=!0})})})}}},mounted(){document.title="Search - Explorer - Pea",this.fetchData(),setTimeout(()=>{this.timeout=!0},200)},watch:{"$route.params":{handler(){this.fetchData()},immediate:!0}}},m={class:"flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full"},_=o("h2",{style:{"font-weight":"300"}},"Search",-1),w={class:"uppercase pb-12",style:{"font-weight":"600"}},$={key:0,class:"italic"};function g(a,e,t,k,c,x){const n=l;return r(),s("div",m,[h(n,{class:"text-center"},{default:u(()=>[_,o("h4",w,d(a.$route.params.search),1),c.failed?(r(),s("div",$,"We couldn\u2019t find what you are looking for.")):p("",!0)]),_:1})])}var y=i(f,[["render",g]]);export{y as default};
