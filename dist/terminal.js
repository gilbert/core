import{tokenize as e}from"./index.js";let t=import("./themes/default.js");const r=async(r,s)=>{let o="",a=(await t).default;return await e(r,s,((e,t)=>o+=t?`${a[t]??""}${e}[0m`:e)),o},s=async(e,t)=>console.log(await r(e,t)),o=async e=>t=function(e){switch(e){case"./themes/atom-dark.js":return import("./themes/atom-dark.js");case"./themes/default.js":return import("./themes/default.js");case"./themes/termcolor.js":return import("./themes/termcolor.js");default:return new Promise((function(t,r){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./themes/${e}.js`);export{r as highlightText,s as printHighlight,o as setTheme};
