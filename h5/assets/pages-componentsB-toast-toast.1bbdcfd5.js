var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,o,i)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i;import{_ as c}from"./u-gap.6d3aa7c9.js";import{o as l,c as u,w as n,a as p,b as m,r as d,F as g,d as f,i as v}from"./index.29fdcc6f.js";import{r as w}from"./uni-app.es.612c7901.js";import{_ as j}from"./u-toast.31cc9574.js";import{_ as h}from"./u-cell.4713f92e.js";import{_ as b}from"./u-cell-group.240dc750.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-loading-icon.0186de71.js";import"./u-icon.dde8088f.js";import"./u-overlay.ee4c7e0b.js";import"./u-transition.9c558d90.js";import"./u-line.c48cb001.js";var _=y({data:()=>({show:!1,list:[{type:"default",title:"默认主题",message:"锦瑟无端五十弦",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/default.png"},{type:"error",icon:!1,title:"失败主题",message:"一弦一柱思华年",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"},{type:"success",title:"成功主题(带图标)",message:"庄生晓梦迷蝴蝶",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/success.png"},{type:"warning",position:"top",title:"位置偏移上方",message:"望帝春心托杜鹃",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/top.png"},{type:"loading",title:"正在加载",message:"正在加载",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/loading.png"},{type:"default",title:"结束后跳转标签页",message:"此情可待成追忆",url:"/pages/componentsB/tag/tag",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/jump.png"}]}),computed:{getIcon:()=>e=>"https://cdn.uviewui.com/uview/example/"+e+".png"},methods:{showToast(e){var c;this.$refs.uToast.show((c=((e,t)=>{for(var o in t||(t={}))s.call(t,o)&&a(e,o,t[o]);if(i)for(var o of i(t))r.call(t,o)&&a(e,o,t[o]);return e})({},e),t(c,o({complete(){e.url&&uni.navigateTo({url:e.url})}}))))}}},[["render",function(e,t,o,i,s,r){const a=w(f("u-gap"),c),y=w(f("u-toast"),j),_=w(f("u-cell"),h),O=w(f("u-cell-group"),b),U=v;return l(),u(U,{class:"u-page"},{default:n((()=>[p(a,{height:"30",bgColor:"#fff"}),p(y,{ref:"uToast"},null,512),p(O,{"title-bg-color":"rgb(243, 244, 246)"},{default:n((()=>[(l(!0),m(g,null,d(s.list,((e,t)=>(l(),u(_,{titleStyle:{fontWeight:500},title:e.title,key:t,isLink:"",icon:e.iconUrl,onClick:t=>r.showToast(e)},null,8,["title","icon","onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-88de61fe"]]);export{_ as default};
