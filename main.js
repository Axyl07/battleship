(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>u});var o=t(354),r=t.n(o),a=t(314),s=t.n(a),i=t(417),c=t.n(i),l=new URL(t(831),t.b),A=s()(r()),d=c()(l);A.push([e.id,`html{\n    font-family: Poppins,'Times New Roman', Times, serif;\n}\nh1 {\n  font-size: 3rem;\n  text-align: center;\n}\n\n.buttons {\n  width: 87.5vw;\n  display: flex;\n  justify-content: space-evenly;\n}\nheader{\n  align-items: center;\n  justify-content: center;\n  gap: 2vw;\n  width: 80vw;\n  display: flex;\n\n}\na {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  margin: 10px;\n  padding: 15px 20px;\n  border-radius: 10px;\n  color: aliceblue;\n  background-color: hsla(146, 90%, 42%, 0.596);\n  font-size: 2rem;\n  width: fit-content;\n  height: fit-content;\n  text-align: center;\n  transition: 0.15s ease-in-out;\n  text-decoration: none;\n}\n\n.startBtn,\n.play,\n.restartBtn,\n.random {\n  border-radius: 10px;\n  color: aliceblue;\n  background-color: hsla(146, 90%, 42%, 0.596);\n  font-size: 2rem;\n  width: 15vw;\n  text-align: center;\n  transition: 0.15s ease-in-out;\n}\n.buttons button:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n  box-shadow: 0px 0px 50px hsla(146, 90%, 42%, 0.596);\n}\nbody {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  color: aliceblue;\n  background-image: url(${d});\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n.mainContainer {\n  width: 80vw;\n  backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.container {\n  border: none;\n\n  font-size: 2rem;\n  display: flex;\n  gap: 10vw;\n  justify-content: space-between;\n}\n.humanGrid {\n  border: none;\n  display: flex;\n  width: 540px;\n  height: 540px;\n  flex-direction: column;\n}\n.computerGrid {\n  border: none;\n  display: flex;\n  width: 540px;\n  height: 540px;\n  flex-direction: column;\n}\n.col {\n  padding: 0;\n  margin: 0;\n  cursor: crosshair;\n  transition: 0.1s ease-in-out;\n}\n.computerGrid .col:hover {\n  background-color: hsla(187, 89%, 36%, 0.884);\n  transform: scale(1.15);\n}\n.results {\n  text-shadow: 1px 1px 5px aqua;\n  text-align: center;\n  font-size: 3rem;\n}\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,oDAAoD;AACxD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,WAAW;EACX,aAAa;;AAEf;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,4CAA4C;EAC5C,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;;;;EAIE,mBAAmB;EACnB,gBAAgB;EAChB,4CAA4C;EAC5C,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,eAAe;EACf,sBAAsB;EACtB,mDAAmD;AACrD;AACA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,yDAAuC;EACvC,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,YAAY;;EAEZ,eAAe;EACf,aAAa;EACb,SAAS;EACT,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,4BAA4B;AAC9B;AACA;EACE,4CAA4C;EAC5C,sBAAsB;AACxB;AACA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;AACjB",sourcesContent:["html{\n    font-family: Poppins,'Times New Roman', Times, serif;\n}\nh1 {\n  font-size: 3rem;\n  text-align: center;\n}\n\n.buttons {\n  width: 87.5vw;\n  display: flex;\n  justify-content: space-evenly;\n}\nheader{\n  align-items: center;\n  justify-content: center;\n  gap: 2vw;\n  width: 80vw;\n  display: flex;\n\n}\na {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  margin: 10px;\n  padding: 15px 20px;\n  border-radius: 10px;\n  color: aliceblue;\n  background-color: hsla(146, 90%, 42%, 0.596);\n  font-size: 2rem;\n  width: fit-content;\n  height: fit-content;\n  text-align: center;\n  transition: 0.15s ease-in-out;\n  text-decoration: none;\n}\n\n.startBtn,\n.play,\n.restartBtn,\n.random {\n  border-radius: 10px;\n  color: aliceblue;\n  background-color: hsla(146, 90%, 42%, 0.596);\n  font-size: 2rem;\n  width: 15vw;\n  text-align: center;\n  transition: 0.15s ease-in-out;\n}\n.buttons button:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n  box-shadow: 0px 0px 50px hsla(146, 90%, 42%, 0.596);\n}\nbody {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  color: aliceblue;\n  background-image: url(./battleship.jpg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n.mainContainer {\n  width: 80vw;\n  backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.container {\n  border: none;\n\n  font-size: 2rem;\n  display: flex;\n  gap: 10vw;\n  justify-content: space-between;\n}\n.humanGrid {\n  border: none;\n  display: flex;\n  width: 540px;\n  height: 540px;\n  flex-direction: column;\n}\n.computerGrid {\n  border: none;\n  display: flex;\n  width: 540px;\n  height: 540px;\n  flex-direction: column;\n}\n.col {\n  padding: 0;\n  margin: 0;\n  cursor: crosshair;\n  transition: 0.1s ease-in-out;\n}\n.computerGrid .col:hover {\n  background-color: hsla(187, 89%, 36%, 0.884);\n  transform: scale(1.15);\n}\n.results {\n  text-shadow: 1px 1px 5px aqua;\n  text-align: center;\n  font-size: 3rem;\n}\n"],sourceRoot:""}]);const u=A},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var A=[].concat(e[l]);o&&s[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),r&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=r):A[4]="".concat(r)),n.push(A))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],A=a[l]||0,d="".concat(l," ").concat(A);a[l]=A+1;var u=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=r(p,o);o.byIndex=i,n.splice(i,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=t(a[s]);n[i].references--}for(var c=o(e,r),l=0;l<a.length;l++){var A=t(a[l]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},831:(e,n,t)=>{e.exports=t.p+"fabdfbbe7480e2f16cb7.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.length=e,this.hitCount=n,this.sunkStatus=t}hit(){this.hitCount++}isSunk(){return this.hitCount<this.length?this.sunkStatus=!1:this.sunkStatus=!0,this.sunkStatus}}class r{missedShots=[];placedShips=[];positions=(()=>Array.from(Array(10),(()=>new Array(10))))();place(e,n,t){const o=t.length;if(n+o>10&&(n=10-o),this.isPathFree(e,n,o)){for(let r=1;r<=o;r++)this.positions[e][n+r-1]=t;this.placedShips.push(t)}else{for(;!this.isPathFree(e,n,o);)e=Math.floor(10*Math.random()),n=Math.floor(Math.random()*(10-o+1));for(let r=1;r<=o;r++)this.positions[e][n+r-1]=t;this.placedShips.push(t)}}isPathFree(e,n,t){for(let o=0;o<t;o++)if("object"==typeof this.positions[e][n+o])return!1;return!0}receiveAttack(e,n){let t=this.positions[e][n];return"object"==typeof t?(t.hit(),!0):(this.missedShots.push([e,n]),!1)}checkAllSunk(){let e=0;return this.placedShips.forEach((n=>{!1===n.sunkStatus&&e++})),0==e}}class a{constructor(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new r;this.type=e,this.gameboard=n}}function s(e,n,t){for(let o=0;o<e;o++){const e=document.createElement("div");e.className="row",e.style.display="flex",e.style.border="1px solid black",e.style.flex="1",t.appendChild(e);for(let r=0;r<n;r++){let n=document.createElement("button");n.style.display="flex",n.style.flex="1",n.style.border="1px solid black",n.className="col",n.id=`${t.className}-${[o,r]}`,n.style.alignItems="center",n.style.justifyContent="center",n.style.fontSize="20px",n.style.borderRadius="5px",n.style.margin="1px",e.appendChild(n)}}}function i(e,n){const t=e.gameboard.positions;for(let e=0;e<t.length;e++){const o=t[e];for(let t=0;t<o.length;t++)if("object"==typeof o[t]){const o=document.getElementById(`${n.className}-${e},${t}`);o.style.backgroundColor="orange",o.style.border="1px dashed cyan"}}}function c(e){e.querySelectorAll(".row").forEach((n=>{e.removeChild(n)}))}var l=t(72),A=t.n(l),d=t(825),u=t.n(d),p=t(659),h=t.n(p),m=t(56),f=t.n(m),g=t(540),y=t.n(g),b=t(113),C=t.n(b),B=t(208),x={};x.styleTagTransform=C(),x.setAttributes=f(),x.insert=h().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=y(),A()(B.A,x),B.A&&B.A.locals&&B.A.locals;const E=document.querySelector(".startBtn"),v=document.querySelector(".restartBtn");E.addEventListener("click",(()=>{!function(){document.querySelector(".results").textContent="Press the Play button to start the game";const e=new a("Human"),n=new a("Computer"),t=document.querySelector(".humanGrid"),r=document.querySelector(".computerGrid");t.style.display="flex",r.style.display="flex",s(10,10,t),s(10,10,r);const l=new o(5),A=new o(4),d=new o(3),u=new o(3),p=new o(2),h=new o(5),m=new o(4),f=new o(3),g=new o(3),y=new o(2);let b=7,C=9,B=9,x=5,E=9,v=4,w=9,k=3,S=7,j=5,M=8,$=3,q=3,I=5,N=2,T=1,R=6,L=4,P=8,z=2;e.gameboard.place(b,C,l),e.gameboard.place(B,x,A),e.gameboard.place(E,v,d),e.gameboard.place(w,k,u),e.gameboard.place(S,j,p),n.gameboard.place(M,$,m),n.gameboard.place(q,I,h),n.gameboard.place(N,T,g),n.gameboard.place(R,L,y),n.gameboard.place(P,z,f),i(e,t);const Y=document.querySelector(".random");Y.style.display="block",Y.addEventListener("click",(()=>{c(t),c(r),s(10,10,t),s(10,10,r),e.gameboard.positions=Array.from(Array(10),(()=>new Array(10))),n.gameboard.positions=Array.from(Array(10),(()=>new Array(10))),e.gameboard.placedShips=[],n.gameboard.placedShips=[];let o=[];for(;10!=o.length;){let e=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],n=e.toLocaleString();for(;o.includes(n);)e=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],n=e.toLocaleString();o.push(n)}console.log(o),b=o[0].charAt(0),C=o[0].charAt(2),B=o[1].charAt(0),x=o[1].charAt(2),E=o[2].charAt(0),v=o[2].charAt(2),w=o[3].charAt(0),k=o[3].charAt(2),S=o[4].charAt(0),j=o[4].charAt(2),M=o[5].charAt(0),$=o[5].charAt(2),q=o[6].charAt(0),I=o[6].charAt(2),N=o[7].charAt(0),T=o[7].charAt(2),R=o[8].charAt(0),L=o[8].charAt(2),P=o[9].charAt(0),z=o[9].charAt(2),e.gameboard.place(b,C,l),e.gameboard.place(B,x,A),e.gameboard.place(E,v,d),e.gameboard.place(w,k,u),e.gameboard.place(S,j,p),n.gameboard.place(M,$,f),n.gameboard.place(q,I,h),n.gameboard.place(N,T,g),n.gameboard.place(R,L,y),n.gameboard.place(P,z,m),i(e,t),console.log(e.gameboard.positions),console.log(n.gameboard.positions),console.log(e.gameboard.placedShips),console.log(n.gameboard.placedShips)})),console.log(b,C),console.log(e.gameboard.positions),console.log(n.gameboard.positions);const G=document.querySelector(".play");G.style.display="block",G.addEventListener("click",(()=>{(function(e,n){document.querySelector(".random").style.display="none";const t=document.querySelector(".results");t.textContent="Game has started! Make your Move";let o=[];const r=document.querySelector(".computerGrid"),a=n.gameboard,s=a.positions,i=document.querySelector(".humanGrid"),c=e.gameboard,l=c.positions,A=r.querySelectorAll(".col");function d(){A.forEach((e=>{e.removeEventListener("click",e.handleClick),e.disabled=!0}))}A.forEach((e=>{e.handleClick=()=>function(e){t.textContent="";const n=document.querySelector("#explosion"),A=e.id;let u=A.substring(13,14),p=A.substring(15,16);a.receiveAttack(u,p);let h=s[u][p];if("object"==typeof h){if(n.play(),n.muted=!1,h.hitCount>0&&!h.isSunk())document.getElementById(`${r.className}-${u},${p}`).style.backgroundColor="yellow";else if(h.hitCount>0&&h.isSunk()){const e=a.positions;for(let n=0;n<e.length;n++){const t=e[n];for(let e=0;e<t.length;e++){const o=t[e];if("object"==typeof o&&o.hitCount>0&&o.isSunk()){const t=document.getElementById(`${r.className}-${n},${e}`);t.textContent="X",t.style.backgroundColor="yellow",t.style.color="Red",t.style.border="1px solid red"}}}}}else document.getElementById(`${r.className}-${u},${p}`).textContent="•";let m=[Math.floor(9*Math.random()),Math.floor(9*Math.random())],f=m.toLocaleString();for(;o.includes(f);)m=[Math.floor(9*Math.random()),Math.floor(9*Math.random())],f=m.toLocaleString();if(o.push(f),u=m[0],p=m[1],c.receiveAttack(u,p)&&(p+=1,c.receiveAttack(u,p)),h=l[u][p],"object"==typeof h){if(n.play(),n.muted=!1,h.hitCount>0&&!h.isSunk())document.getElementById(`${i.className}-${u},${p}`).style.backgroundColor="yellow";else if(h.hitCount>0&&h.isSunk()){const e=c.positions;for(let n=0;n<e.length;n++){const t=e[n];for(let e=0;e<t.length;e++){const o=t[e];if("object"==typeof o&&o.hitCount>0&&o.isSunk()){const t=document.getElementById(`${i.className}-${n},${e}`);t.textContent="X",t.style.backgroundColor="yellow",t.style.color="Red",t.style.border="1px solid red"}}}}}else{console.log(o),console.log(u,p);const e=document.getElementById(`${i.className}-${u},${p}`);console.log(e),e.textContent="•"}return e.disabled="true",c.checkAllSunk()?(t.textContent="Computer has won (Press Reset to play again)",t.style.textShadow="1px 1px 5px orange",void d()):a.checkAllSunk()?(t.textContent="Human has won (Press Reset to play again)",t.style.textShadow="1px 1px 5px lime",void d()):void 0}(e),e.addEventListener("click",e.handleClick)}))})(e,n),G.style.display="none"}))}(),E.style.display="none",v.style.display="block";const e=document.querySelector("#audio");e.play(),e.muted=!1})),v.addEventListener("click",(()=>{window.location.reload()}))})();
//# sourceMappingURL=main.js.map