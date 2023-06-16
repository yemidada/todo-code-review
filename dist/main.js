(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),i=t.n(o),s=t(645),r=t.n(s)()(i());r.push([e.id,"::-webkit-input-placeholder {\n  font-style: italic;\n}\n\n::-moz-placeholder {\n  font-style: italic;\n}\n\n:-moz-placeholder {\n  font-style: italic;\n}\n\n:-ms-input-placeholder {\n  font-style: italic;\n}\n\n*:focus {\n  outline: none;\n}\n\n.show {\n  display: block !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.active {\n  background: #fffdcf;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #6d6d6d;\n  background-color: #f6f6f6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  border-bottom: 1px solid #ccc;\n  padding: 10px 20px;\n}\n\n.container {\n  background-color: #fff;\n  margin: 50px;\n  box-shadow: 0 6px 6px hsl(0deg 0% 0% / 0.1);\n  width: 500px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.my_list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-transform: capitalize;\n  padding: 0 10px;\n}\n\n.content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.title span {\n  font-size: 18px;\n}\n\n.info {\n  width: 100%;\n  padding: 15px;\n}\n\n.delete_todo {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.delete_icon {\n  display: none;\n}\n\n.add-todo-action {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 4px;\n}\n\n.add-todo-action input,\n.edit_description {\n  border: none;\n  width: 100%;\n  font-size: 16px;\n}\n\n.add-todo-action input {\n  padding: 5px;\n}\n\n.edit_description {\n  display: none;\n  width: 100%;\n  background: transparent;\n  padding: 15px;\n}\n\n.add-todo-action .todo-button {\n  background-color: #fff;\n  border: none;\n  color: #949494;\n  display: none;\n}\n\n.clear-button {\n  background: #f6f6f6;\n  width: 100%;\n  padding: 10px 0;\n  text-align: center;\n  border: none;\n  color: #949494;\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.cursor_dragger {\n  cursor: row-resize;\n}\n\n.cursor_pointer {\n  cursor: pointer;\n}\n\n.line_thr {\n  text-decoration: line-through;\n  color: #999;\n}\n",""]);const a=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&r[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var s={},r=[],a=0;a<e.length;a++){var c=e[a],d=o.base?c[0]+o.base:c[0],l=s[d]||0,p="".concat(d," ").concat(l);s[d]=l+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=i(h,o);o.byIndex=a,n.splice(a,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var s=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<s.length;r++){var a=t(s[r]);n[a].references--}for(var c=o(e,i),d=0;d<s.length;d++){var l=t(s[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}s=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var s=n[o]={id:o,exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),s=t(569),r=t.n(s),a=t(565),c=t.n(a),d=t(216),l=t.n(d),p=t(589),u=t.n(p),h=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=r().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const v=e=>{localStorage.setItem("storages",JSON.stringify(e))},m=(e,n,t)=>{const o=e.findIndex((e=>e.position===parseInt(t,10)));-1!==o&&(e[o].completed=n),v(e)};(new class{constructor(){this.divList=window.document.getElementById("todo_list"),this.selected_item=null,this.newListBook={},this.todo_list=(()=>{const e=localStorage.getItem("storages");return e?JSON.parse(e):[]})(),this.list()}list(){this.divList.innerHTML="";for(let e=0;e<this.todo_list.length;e+=1){let n="";const t=this.todo_list[e];n+='<li class="my_list">',n+=`<div class="content">\n        <span class="checkbox" ><input class="check_status" ${t.completed?"checked":""} data-position="${t.position}" type="checkbox" /></span>\n                  <span ${t.completed?' class="info line_thr"':'class="info"'} >${t.description}</span>\n                  <input class="edit_description" data-position="${t.position}" value="${t.description}" />\n                </div>`,n+=`<div class="delete_todo" >\n        <span class="cursor_pointer delete_icon" data-position="${t.position}"><i class="fa-regular fa-trash-can"></i></span>\n                    <span class="cursor_drag" ><i class="fa-solid fa-ellipsis-vertical"></i></span>\n                 </div>`,n+="</li>",this.divList.innerHTML+=n}}edit(e,n){const t=this.getIndex(n);-1!==t&&(this.todo_list[t].description=e),this.updateRecord()}add(e){const n={description:e,position:this.todo_list.length+1,completed:!1};this.todo_list.push(n),this.updateRecord()}remove(e){const n=this.getIndex(e);-1!==n&&(this.todo_list.splice(n,1),this.updateRecord())}getIndex(e){return this.todo_list.findIndex((n=>n.position===parseInt(e,10)))}updateRecord(){v(this.todo_list),this.list(),this.setupEventListeners()}setupEventListeners(){const e=document.querySelectorAll(".info"),n=document.querySelectorAll(".delete_icon"),t=document.querySelectorAll(".edit_description"),o=document.querySelectorAll(".check_status"),i=document.querySelector(".clear-button"),s=window.document.getElementById("description"),r=document.querySelector(".todo-button");document.querySelector(".refresh").addEventListener("click",(()=>{window.location.reload()})),r.addEventListener("click",(()=>{s.value&&(this.add(s.value),s.value="",r.classList.remove("show"))})),s.addEventListener("keydown",(e=>{"Enter"===e.key&&(s.value&&this.add(s.value),s.value="",r.classList.remove("show"))})),n.forEach((e=>e.addEventListener("click",(e=>{this.remove(e.target.dataset.position)})))),t.forEach((e=>e.addEventListener("keydown",(e=>{"Enter"===e.key&&e.target.value&&this.edit(e.target.value,e.target.dataset.position)})))),e.forEach((n=>{n.addEventListener("click",(n=>{e.forEach((e=>{e.parentNode.parentNode.classList.remove("active"),e.classList.remove("hide"),e.nextElementSibling.classList.remove("show"),e.parentNode.parentNode.children[1].children[0].classList.remove("show"),e.parentNode.parentNode.children[1].children[1].classList.remove("hide")})),n.target.classList.add("hide"),n.target.nextElementSibling.classList.add("show"),n.target.parentNode.parentNode.classList.add("active"),n.target.parentNode.parentNode.children[1].children[0].classList.add("show"),n.target.parentNode.parentNode.children[1].children[1].classList.add("hide")}))}));for(let e=0;e<o.length;e+=1)o[e].addEventListener("change",(n=>{m(this.todo_list,o[e].checked,n.target.dataset.position);const t=o[e].parentNode.parentNode.children[1];o[e].checked?(t.classList.add("line_thr"),o[e].setAttribute("checked","checked")):(t.classList.remove("line_thr"),o[e].removeAttribute("checked")),this.list(),this.setupEventListeners()}));i.addEventListener("click",(e=>{var n;e.preventDefault(),(n=this.todo_list).filter((e=>e.completed)).forEach((e=>{const t=n.findIndex((n=>n.position===parseInt(e.position,10)));n.splice(t,1)})),v(n),this.list(),this.setupEventListeners()}))}}).setupEventListeners()})()})();