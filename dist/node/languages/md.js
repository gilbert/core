var e=Object.defineProperty;var m=t=>e(t,"__esModule",{value:!0});var p=(t,a)=>{m(t);for(var c in a)e(t,c,{get:a[c],enumerable:!0})};p(exports,{default:()=>g});var g=[{match:/^>.*|(=|-)\1+/gm,type:"cmnt"},{match:/\*\*((?!\*\*).)*\*\*/g,type:"class"},{match:/`[^`]*`/g,type:"str"},{match:/~~((?!~~).)*~~/g,type:"var"},{match:/_[^_]*_|\*[^*]*\*/g,type:"kwd"},{match:/^\s*(\*|\d+\.)\s/gm,type:"kwd"},{match:/\[[^\]]*]/g,type:"oper"},{match:/\([^)]*\)/g,type:"func"}];0&&(module.exports={});
