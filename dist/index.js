import a from"./common.js";const s={},e=(a="")=>a.replaceAll("&","&#38;").replaceAll?.("<","&lt;").replaceAll?.(">","&gt;"),n=(a,s)=>s?`<span class="shj-syn-${s}">${a}</span>`:a;async function t(e,n,g){try{let r,l,u,i={},c=[],j=0,o="string"==typeof n?await(s[n]??=function(a){switch(a){case"./languages/asm.js":return import("./languages/asm.js");case"./languages/bash.js":return import("./languages/bash.js");case"./languages/bf.js":return import("./languages/bf.js");case"./languages/c.js":return import("./languages/c.js");case"./languages/css.js":return import("./languages/css.js");case"./languages/csv.js":return import("./languages/csv.js");case"./languages/diff.js":return import("./languages/diff.js");case"./languages/docker.js":return import("./languages/docker.js");case"./languages/git.js":return import("./languages/git.js");case"./languages/go.js":return import("./languages/go.js");case"./languages/html.js":return import("./languages/html.js");case"./languages/http.js":return import("./languages/http.js");case"./languages/ini.js":return import("./languages/ini.js");case"./languages/java.js":return import("./languages/java.js");case"./languages/js.js":return import("./languages/js.js");case"./languages/js_template_literals.js":return import("./languages/js_template_literals.js");case"./languages/jsdoc.js":return import("./languages/jsdoc.js");case"./languages/json.js":return import("./languages/json.js");case"./languages/leanpub-md.js":return import("./languages/leanpub-md.js");case"./languages/log.js":return import("./languages/log.js");case"./languages/lua.js":return import("./languages/lua.js");case"./languages/make.js":return import("./languages/make.js");case"./languages/md.js":return import("./languages/md.js");case"./languages/pl.js":return import("./languages/pl.js");case"./languages/plain.js":return import("./languages/plain.js");case"./languages/py.js":return import("./languages/py.js");case"./languages/regex.js":return import("./languages/regex.js");case"./languages/rs.js":return import("./languages/rs.js");case"./languages/sql.js":return import("./languages/sql.js");case"./languages/todo.js":return import("./languages/todo.js");case"./languages/toml.js":return import("./languages/toml.js");case"./languages/ts.js":return import("./languages/ts.js");case"./languages/uri.js":return import("./languages/uri.js");case"./languages/xml.js":return import("./languages/xml.js");case"./languages/yaml.js":return import("./languages/yaml.js");default:return new Promise((function(s,e){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+a)))}))}}(`./languages/${n}.js`)):n,m=[..."string"==typeof n?o.default:n.sub];for(;j<e.length;){for(i.index=null,r=m.length;r-- >0;){if(l=m[r].expand?a[m[r].expand]:m[r],void 0===c[r]||c[r].match.index<j){if(l.match.lastIndex=j,u=l.match.exec(e),null===u){m.splice(r,1),c.splice(r,1);continue}c[r]={match:u,lastIndex:l.match.lastIndex}}c[r].match[0]&&(c[r].match.index<=i.index||null===i.index)&&(i={part:l,index:c[r].match.index,match:c[r].match[0],end:c[r].lastIndex})}if(null===i.index)break;g(e.slice(j,i.index),o.type),j=i.end,i.part.sub?await t(i.match,"string"==typeof i.part.sub?i.part.sub:"function"==typeof i.part.sub?i.part.sub(i.match):i.part,g):g(i.match,i.part.type)}g(e.slice(j,e.length),o.type)}catch{g(e)}}async function g(a,s,g=!0,r={}){let l="";return await t(a,s,((a,s)=>l+=n(e(a),s))),g?`<div><div class="shj-numbers">${"<div></div>".repeat(!r.hideLineNumbers&&a.split("\n").length)}</div><div>${l}</div></div>`:l}async function r(a,s=a.className.match(/shj-lang-([\w-]+)/)?.[1],e,n){let t=a.textContent;e??=("CODE"==a.tagName?"in":t.split("\n").length<2?"one":"multi")+"line",a.dataset.lang=s,a.className=`${[...a.classList].filter((a=>!a.startsWith("shj-")||a.startsWith("shj-mode-"))).join(" ")} shj-lang-${s} shj-${e}`,a.innerHTML=await g(t,s,"multiline"==e,n)}let l=async a=>document.querySelectorAll('[class*="shj-lang-"]').forEach((s=>r(s,void 0,void 0,a))),u=(a,e)=>{s[a]=e};export{l as highlightAll,r as highlightElement,g as highlightText,u as loadLanguage,t as tokenize};
