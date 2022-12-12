import{_,c as v}from"./index.78aa22e7.js";import{o as a,c as u,g as d,w as m,b as n,i as y,v as x,n as g,t as h,F as S,d as I,p as k,a as w,e as b}from"./vendor.c2e542a0.js";const D={data(){return{url_input:"",url:"",urls:[],map:new Map}},methods:{add(e){e.preventDefault();let t=this.url_input;if(!t||this.urls.includes(t)){this.$refs.url_input.focus();return}this.url=t,this.urls.unshift(t),localStorage.setItem("url",t),localStorage.setItem("urls",JSON.stringify(this.urls)),this.url_input=""},remove(e){let t=this.urls[e];this.urls.splice(e,1),localStorage.setItem("urls",JSON.stringify(this.urls)),this.url==t&&(this.url=null,localStorage.removeItem("url"))},select(e){let t=this.urls[e];localStorage.setItem("url",t),this.url=t},select_enter(e,t){e.key=="Enter"&&this.select(t)},update(e,t){if(!e.target.value){this.remove(t),this.$refs.url_input.focus();return}this.urls[t]=e.target.value,localStorage.setItem("urls",JSON.stringify(this.urls))},loop(){this.fetchData(),this.interval=setInterval(()=>{this.fetchData()},3e3)},fetchData(){let e=JSON.parse(window.localStorage.getItem("urls"));if(!!e?.length)for(let t of e)this.map.has(t)||this.map.set(t,null),fetch(t+"/sync").then(r=>r.json()).then(r=>{this.map.set(t,r)}).catch(r=>{this.map.set(t,r.toString())})}},mounted(){this.url=localStorage.getItem("url");let e=JSON.parse(localStorage.getItem("urls"));e?.length&&(this.urls=e),this.loop()},unmounted(){clearInterval(this.interval)}},N=e=>(k("data-v-5ed12c27"),e=e(),w(),e),C={class:"flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full"},J=N(()=>n("input",{type:"submit",value:"Add",class:"text-black rounded text-sm md:text-lg w-24 sm:w-32 md:w-40 ring-1 ring-black ring-opacity-10 sm:ring-opacity-20 cursor-pointer"},null,-1)),O={class:"flex justify-center text-black"},j={key:1},B={class:"flex flex-col gap-2 sm:gap-2 md:gap-10"},E=["onClick","onKeydown","onInput","value","name"],V=["for"];function A(e,t,r,f,s,i){const o=v;return a(),u("div",C,[d(o,null,{default:m(()=>[n("form",{onSubmit:t[1]||(t[1]=(...l)=>i.add&&i.add(...l)),class:"flex gap-2 md:gap-2 md:gap-10"},[y(n("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>s.url_input=l),ref:"url_input",class:"text-black rounded ring-1 ring-black ring-opacity-10 sm:ring-opacity-20 w-full",type:"text",placeholder:"http://0.0.0.0:9332"},null,512),[[x,s.url_input]]),J],32)]),_:1}),d(o,null,{default:m(()=>[n("div",O,[s.url?(a(),u("div",{key:0,class:g(s.map.get(s.url)?.sync?"text-green":"text-red"),style:{"font-weight":"600"}},h(s.url),3)):(a(),u("div",j,"Configure an API endpoint to use."))])]),_:1}),d(o,null,{default:m(()=>[n("div",B,[(a(!0),u(S,null,I(s.urls,(l,c)=>(a(),u("div",{key:c},[n("input",{onClick:p=>i.select(c),onKeydown:p=>i.select_enter(p,c),onInput:p=>i.update(p,c),value:l,name:l,class:g(["text-black rounded w-full ring-1 ring-black ring-opacity-10 sm:ring-opacity-20",(s.map.get(l)?.sync?"green":"red")+" "+(l===s.url?"blue ring-opacity-50 sm:ring-opacity-60":"")]),type:"text"},null,42,E),n("label",{for:l,class:"text-xs lg:text-sm h-1 lg:h-2 ml-1"},h(s.map.get(l)),9,V)]))),128))])]),_:1})])}var F=_(D,[["render",A],["__scopeId","data-v-5ed12c27"]]);const K={mounted(){document.title="Settings - Pea"}};function M(e,t,r,f,s,i){const o=F;return a(),b(o)}var L=_(K,[["render",M]]);export{L as default};
