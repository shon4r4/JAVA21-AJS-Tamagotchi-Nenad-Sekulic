function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequire2473;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequire2473=r),r.register("g28y4",(function(t,n){var i,r;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("g28y4").register(JSON.parse('{"1bd3D":"index.4d2b4025.js","6x828":"tama-happy.294b8a8f.png","7ait0":"tama-dead.476a1371.png"}'));const s=document.querySelector("img");var o;o=new URL(r("g28y4").resolve("6x828"),import.meta.url).toString();const a=new URL(o);var u;u=new URL(r("g28y4").resolve("7ait0"),import.meta.url).toString();const c=new URL(u),h=new class{#e=0;#t=0;#n=!1;#i;#r;#s;constructor(){}feed(){this.#e>0&&this.#e--,document.getElementById("hng").innerText=this.#e}play(){this.#t<10&&this.#t++,document.getElementById("hpn").innerText=this.#t}isRunning(){return this.#n}start(){this.#e=5,this.#t=5,document.getElementById("hng").innerText=this.#e,document.getElementById("hpn").innerText=this.#t,this.#i=setInterval(this.#o.bind(this),2e3),this.#n=!0,s.src=a,this.#r=document.getElementById("tname").value,this.#s=document.getElementById("ttype").value}stop(){clearInterval(this.#i),this.#n=!1}#o(){this.#e++,this.#t--,document.getElementById("hng").innerText=this.#e,document.getElementById("hpn").innerText=this.#t,10!=this.#e&&0!=this.#t||(this.stop(),document.getElementById("msg").innerHTML=this.#r+" who was a "+this.#s+" just passed away ):",document.querySelector("button").innerText="Start",s.src=c)}};document.querySelector("button").addEventListener("click",(function(){h.isRunning()?(h.stop(),document.querySelector("button").innerText="Start"):(h.start(),document.querySelector("button").innerText="Stop")})),document.getElementById("feed").addEventListener("click",(function(){h.feed()})),document.getElementById("play").addEventListener("click",(function(){h.play()}));
//# sourceMappingURL=index.4d2b4025.js.map