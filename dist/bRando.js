!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bRando=e():t.bRando=e()}(this,(function(){return function(){"use strict";var t={d:function(e,r){for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.r(e),t.d(e,{create:function(){return n}});class i{get CSSSelector(){return this._CSSSelector}get nodes(){return this._nodes}get backgrounds(){return this._backgrounds}set backgrounds(t){Array.isArray(t)&&t.every((t=>"string"==typeof t))?this._backgrounds=t:this._backgrounds=['url("./img/alex-knight-vaA6EQiUSo4-unsplash_result.jpg") center/cover no-repeat','url("./img/joel-fulgencio-01fAtHwYqo0-unsplash_result.jpg") center/cover no-repeat','url("./img/pawel-nolbert-4u2U8EO9OzY-unsplash_result.jpg") center/cover no-repeat','url("./img/stephan-valentin-oqYLdbuJDQU-unsplash_result.jpg") center/cover no-repeat','url("./img/waranont-joe-T7qyLNPwgKA-unsplash_result.jpg") center/cover no-repeat',"linear-gradient(80deg, #0864c8 25%, #588fca 75%)"]}get timeout(){return this._timeout}set timeout(t){this._timeout=t&&t>0?t:7500,-1!==this._changer&&(this.pause(),this.play())}get random(){return this._random}set random(t){this._random="boolean"!=typeof t||t}get transition(){return this._transition}set transition(t){this._transition="string"!=typeof t?"5000ms":t}get lastBackground(){return this._lastBackground}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,"_CSSSelector",""),r(this,"_backgrounds",[]),r(this,"_timeout",0),r(this,"_random",!0),r(this,"_transition",""),r(this,"_originalCSSBackgrounds",[]),r(this,"_originalCSSPositions",[]),r(this,"_originalCSSZIndexes",[]),r(this,"_changer",-1),r(this,"_isAfterOpaque",!1),r(this,"_lastBackground",-1),this._CSSSelector="string"!=typeof t.CSSSelector?"body":t.CSSSelector,this._nodes=document.querySelectorAll(this.CSSSelector),this.backgrounds=t.backgrounds,this.timeout=t.timeout,this.random=t.random,this.transition=t.transition,this.nodes.forEach((t=>{this._originalCSSBackgrounds.push(t.style.background),this._originalCSSPositions.push(t.style.position),this._originalCSSZIndexes.push(t.style.zIndex),t.style.position="relative"})),this._styleElement=document.createElement("style"),this._CSSBackgroundVarName=`--bRandoBg${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSOpacityVarName=`--bRandoOpacity${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSTransitionVarName=`--bRandoTransition${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSContentVarName=`--bRandoContent${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._styleElement.innerText=`${this.CSSSelector}::after{background:var(${this._CSSBackgroundVarName});content:var(${this._CSSContentVarName});position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:var(${this._CSSOpacityVarName});transition: var(${this._CSSTransitionVarName});}`,document.head.append(this._styleElement),this.nodes.forEach((t=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.transition}`),t.style.setProperty(this._CSSContentVarName,"''"),t.style.zIndex="0"})),this.play()}play(){this.pause(),this._changer=window.setInterval((()=>{this.next()}),this.timeout)}pause(){window.clearInterval(this._changer),this._changer=-1}next(){-1!==this._changer&&this.play(),this.backgrounds.length>1?this._lastBackground=this.random?(()=>{let t;do{t=Math.floor(Math.random()*this.backgrounds.length)}while(this.lastBackground===t);return t})():this.lastBackground===this.backgrounds.length-1?this._lastBackground=0:this.lastBackground+1:-1===this._lastBackground&&(this._lastBackground=0),this.nodes.forEach((t=>{t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.transition}`),this._isAfterOpaque?(t.style.background=this.backgrounds[this.lastBackground],t.style.setProperty(this._CSSOpacityVarName,"0")):(t.style.setProperty(this._CSSBackgroundVarName,this.backgrounds[this.lastBackground]),t.style.setProperty(this._CSSOpacityVarName,"1"))})),this._isAfterOpaque=!this._isAfterOpaque}remove(){this.pause(),this.nodes.forEach(((t,e)=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSContentVarName,"none"),t.style.background=this._originalCSSBackgrounds[e],t.style.position=this._originalCSSPositions[e],t.style.zIndex=this._originalCSSZIndexes[e]})),this._styleElement.remove()}isRunning(){return-1!==this._changer}}function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new i(t)}return e}()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxSCxVQUFILDZDQUFHLENBQUMsRUFDNUksT0FBTyxJQUFJdkIsRUFBT3VCLEVBQ25CLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2JSYW5kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JSYW5kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JSYW5kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JSYW5kby8uL3NyYy9iUmFuZG8udHMiLCJ3ZWJwYWNrOi8vYlJhbmRvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJSYW5kb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJiUmFuZG9cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBiUmFuZG8ge1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfQ1NTU2VsZWN0b3I6IHN0cmluZyA9IFwiXCI7XHJcblx0cHVibGljIGdldCBDU1NTZWxlY3RvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX0NTU1NlbGVjdG9yO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9ub2RlczogTm9kZUxpc3Q7XHJcblx0cHVibGljIGdldCBub2RlcygpOiBOb2RlTGlzdCB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbm9kZXM7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2JhY2tncm91bmRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHB1YmxpYyBnZXQgYmFja2dyb3VuZHMoKTogc3RyaW5nW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2JhY2tncm91bmRzO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IGJhY2tncm91bmRzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRBcnJheS5pc0FycmF5KHZhbHVlKSAmJlxyXG5cdFx0XHR2YWx1ZS5ldmVyeSgoYikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgYiA9PT0gXCJzdHJpbmdcIjtcclxuXHRcdFx0fSlcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLl9iYWNrZ3JvdW5kcyA9IHZhbHVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gZGVtbyBiYWNrZ3JvdW5kc1xyXG5cdFx0XHQvLyBwcmV0dGllci1pZ25vcmVcclxuXHRcdFx0dGhpcy5fYmFja2dyb3VuZHMgPSBbXHJcblx0XHRcdFx0J3VybChcIi4vaW1nL2FsZXgta25pZ2h0LXZhQTZFUWlVU280LXVuc3BsYXNoX3Jlc3VsdC5qcGdcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCcsIFxyXG5cdFx0XHRcdCd1cmwoXCIuL2ltZy9qb2VsLWZ1bGdlbmNpby0wMWZBdEh3WXFvMC11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLCBcclxuXHRcdFx0XHQndXJsKFwiLi9pbWcvcGF3ZWwtbm9sYmVydC00dTJVOEVPOU96WS11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLFxyXG5cdFx0XHRcdCd1cmwoXCIuL2ltZy9zdGVwaGFuLXZhbGVudGluLW9xWUxkYnVKRFFVLXVuc3BsYXNoX3Jlc3VsdC5qcGdcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCcsXHJcblx0XHRcdFx0J3VybChcIi4vaW1nL3dhcmFub250LWpvZS1UN3F5TE5Qd2dLQS11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLFxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoODBkZWcsICMwODY0YzggMjUlLCAjNTg4ZmNhIDc1JSknLFxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF90aW1lb3V0OiBudW1iZXIgPSAwO1xyXG5cdHB1YmxpYyBnZXQgdGltZW91dCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbWVvdXQ7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXQgdGltZW91dCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAodmFsdWUgJiYgdmFsdWUgPiAwKSB7XHJcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSB2YWx1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSA3NTAwO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX2NoYW5nZXIgIT09IC0xKSB7XHJcblx0XHRcdHRoaXMucGF1c2UoKTtcclxuXHRcdFx0dGhpcy5wbGF5KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3JhbmRvbTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHVibGljIGdldCByYW5kb20oKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmFuZG9tO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IHJhbmRvbSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5fcmFuZG9tID0gdHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIiA/IHRydWUgOiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfdHJhbnNpdGlvbjogc3RyaW5nID0gXCJcIjtcclxuXHRwdWJsaWMgZ2V0IHRyYW5zaXRpb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl90cmFuc2l0aW9uO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IHRyYW5zaXRpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5fdHJhbnNpdGlvbiA9IHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiA/IFwiNTAwMG1zXCIgOiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCByZWFkb25seSBfb3JpZ2luYWxDU1NCYWNrZ3JvdW5kczogc3RyaW5nW10gPSBbXTtcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX29yaWdpbmFsQ1NTUG9zaXRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfb3JpZ2luYWxDU1NaSW5kZXhlczogc3RyaW5nW10gPSBbXTtcclxuXHRwcm90ZWN0ZWQgX2NoYW5nZXI6IG51bWJlciA9IC0xO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfc3R5bGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRwcm90ZWN0ZWQgX2lzQWZ0ZXJPcGFxdWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX0NTU0JhY2tncm91bmRWYXJOYW1lOiBzdHJpbmc7XHJcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9DU1NPcGFjaXR5VmFyTmFtZTogc3RyaW5nO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfQ1NTVHJhbnNpdGlvblZhck5hbWU6IHN0cmluZztcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX0NTU0NvbnRlbnRWYXJOYW1lOiBzdHJpbmc7XHJcblxyXG5cdHByb3RlY3RlZCBfbGFzdEJhY2tncm91bmQ6IG51bWJlciA9IC0xO1xyXG5cdHB1YmxpYyBnZXQgbGFzdEJhY2tncm91bmQoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sYXN0QmFja2dyb3VuZDtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IHsgQ1NTU2VsZWN0b3I/OiBzdHJpbmc7IGJhY2tncm91bmRzPzogc3RyaW5nW107IHRpbWVvdXQ/OiBudW1iZXI7IHJhbmRvbT86IGJvb2xlYW47IHRyYW5zaXRpb24/OiBzdHJpbmcgfSA9IHt9KSB7XHJcblx0XHR0aGlzLl9DU1NTZWxlY3RvciA9IHR5cGVvZiBvcHRpb25zLkNTU1NlbGVjdG9yICE9PSBcInN0cmluZ1wiID8gXCJib2R5XCIgOiBvcHRpb25zLkNTU1NlbGVjdG9yO1xyXG5cdFx0dGhpcy5fbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuQ1NTU2VsZWN0b3IpO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kcyA9IG9wdGlvbnMuYmFja2dyb3VuZHM7XHJcblx0XHR0aGlzLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XHJcblx0XHR0aGlzLnJhbmRvbSA9IG9wdGlvbnMucmFuZG9tO1xyXG5cdFx0dGhpcy50cmFuc2l0aW9uID0gb3B0aW9ucy50cmFuc2l0aW9uO1xyXG5cdFx0dGhpcy5ub2Rlcy5mb3JFYWNoKChlKSA9PiB7XHJcblx0XHRcdHRoaXMuX29yaWdpbmFsQ1NTQmFja2dyb3VuZHMucHVzaCgoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZCk7IC8vIGJhY2t1cCB0aGUgb3JpZ2luYWwgQ1NTIGJhY2tncm91bmQgcHJvcGVydHlcclxuXHRcdFx0dGhpcy5fb3JpZ2luYWxDU1NQb3NpdGlvbnMucHVzaCgoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUucG9zaXRpb24pOyAvLyBiYWNrdXAgdGhlIG9yaWdpbmFsIENTUyBwb3NpdGlvbiBwcm9wZXJ0eVxyXG5cdFx0XHR0aGlzLl9vcmlnaW5hbENTU1pJbmRleGVzLnB1c2goKGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnpJbmRleCk7IC8vIGJhY2t1cCB0aGUgb3JpZ2luYWwgQ1NTIHotaW5kZXggcHJvcGVydHlcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiOyAvLyBzZXQgZWFjaCBlbGVtZW50IHRvIGJlIHJlbGF0aXZlXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX3N0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRcdHRoaXMuX0NTU0JhY2tncm91bmRWYXJOYW1lID0gYC0tYlJhbmRvQmcke3RoaXMuQ1NTU2VsZWN0b3IucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIlwiKX1gO1xyXG5cdFx0dGhpcy5fQ1NTT3BhY2l0eVZhck5hbWUgPSBgLS1iUmFuZG9PcGFjaXR5JHt0aGlzLkNTU1NlbGVjdG9yLnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJcIil9YDtcclxuXHRcdHRoaXMuX0NTU1RyYW5zaXRpb25WYXJOYW1lID0gYC0tYlJhbmRvVHJhbnNpdGlvbiR7dGhpcy5DU1NTZWxlY3Rvci5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiXCIpfWA7XHJcblx0XHR0aGlzLl9DU1NDb250ZW50VmFyTmFtZSA9IGAtLWJSYW5kb0NvbnRlbnQke3RoaXMuQ1NTU2VsZWN0b3IucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIlwiKX1gO1xyXG5cdFx0dGhpcy5fc3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IGAke3RoaXMuQ1NTU2VsZWN0b3J9OjphZnRlcntiYWNrZ3JvdW5kOnZhcigke3RoaXMuX0NTU0JhY2tncm91bmRWYXJOYW1lfSk7Y29udGVudDp2YXIoJHt0aGlzLl9DU1NDb250ZW50VmFyTmFtZX0pO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6LTE7b3BhY2l0eTp2YXIoJHt0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZX0pO3RyYW5zaXRpb246IHZhcigke3RoaXMuX0NTU1RyYW5zaXRpb25WYXJOYW1lfSk7fWA7XHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZCh0aGlzLl9zdHlsZUVsZW1lbnQpO1xyXG5cdFx0dGhpcy5ub2Rlcy5mb3JFYWNoKChlKSA9PiB7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZSwgXCIwXCIpO1xyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5fQ1NTVHJhbnNpdGlvblZhck5hbWUsIGBvcGFjaXR5ICR7dGhpcy50cmFuc2l0aW9ufWApO1xyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5fQ1NTQ29udGVudFZhck5hbWUsIFwiJydcIik7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS56SW5kZXggPSBcIjBcIjtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMucGxheSgpO1xyXG5cdH1cclxuXHJcblx0cGxheSgpOiB2b2lkIHtcclxuXHRcdHRoaXMucGF1c2UoKTtcclxuXHRcdHRoaXMuX2NoYW5nZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5leHQoKTtcclxuXHRcdH0sIHRoaXMudGltZW91dCk7XHJcblx0fVxyXG5cdHBhdXNlKCk6IHZvaWQge1xyXG5cdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fY2hhbmdlcik7XHJcblx0XHR0aGlzLl9jaGFuZ2VyID0gLTE7XHJcblx0fVxyXG5cdG5leHQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBnZXROZXdSYW5kb21CYWNrZ3JvdW5kSW5kZXggPSAoKTogbnVtYmVyID0+IHtcclxuXHRcdFx0bGV0IG5ld0luZGV4OiBudW1iZXI7XHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHRuZXdJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYmFja2dyb3VuZHMubGVuZ3RoKTtcclxuXHRcdFx0fSB3aGlsZSAodGhpcy5sYXN0QmFja2dyb3VuZCA9PT0gbmV3SW5kZXgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3SW5kZXg7XHJcblx0XHR9O1xyXG5cdFx0aWYgKHRoaXMuX2NoYW5nZXIgIT09IC0xKSB7XHJcblx0XHRcdC8vIGlmIGEgY2hhbmdlciBleGlzdHMgcmVzZXQgaXRcclxuXHRcdFx0dGhpcy5wbGF5KCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5iYWNrZ3JvdW5kcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdHRoaXMuX2xhc3RCYWNrZ3JvdW5kID0gdGhpcy5yYW5kb20gPyBnZXROZXdSYW5kb21CYWNrZ3JvdW5kSW5kZXgoKSA6IHRoaXMubGFzdEJhY2tncm91bmQgPT09IHRoaXMuYmFja2dyb3VuZHMubGVuZ3RoIC0gMSA/ICh0aGlzLl9sYXN0QmFja2dyb3VuZCA9IDApIDogdGhpcy5sYXN0QmFja2dyb3VuZCArIDE7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuX2xhc3RCYWNrZ3JvdW5kID09PSAtMSkge1xyXG5cdFx0XHR0aGlzLl9sYXN0QmFja2dyb3VuZCA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ub2Rlcy5mb3JFYWNoKChlKSA9PiB7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NUcmFuc2l0aW9uVmFyTmFtZSwgYG9wYWNpdHkgJHt0aGlzLnRyYW5zaXRpb259YCk7XHJcblx0XHRcdGlmICghdGhpcy5faXNBZnRlck9wYXF1ZSkge1xyXG5cdFx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NCYWNrZ3JvdW5kVmFyTmFtZSwgdGhpcy5iYWNrZ3JvdW5kc1t0aGlzLmxhc3RCYWNrZ3JvdW5kXSk7XHJcblx0XHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU09wYWNpdHlWYXJOYW1lLCBcIjFcIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLmJhY2tncm91bmRzW3RoaXMubGFzdEJhY2tncm91bmRdO1xyXG5cdFx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZSwgXCIwXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2lzQWZ0ZXJPcGFxdWUgPSAhdGhpcy5faXNBZnRlck9wYXF1ZTtcclxuXHR9XHJcblx0cmVtb3ZlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wYXVzZSgpO1xyXG5cdFx0dGhpcy5ub2Rlcy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcblx0XHRcdC8vIGhpZGUgcHNldWRvIDo6YWZ0ZXIgZWxlbWVudHNcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU09wYWNpdHlWYXJOYW1lLCBcIjBcIik7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NDb250ZW50VmFyTmFtZSwgXCJub25lXCIpO1xyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuX29yaWdpbmFsQ1NTQmFja2dyb3VuZHNbaV07IC8vIHJlc3RvcmUgb3JpZ2luYWwgQ1NTIGJhY2tncm91bmQgcHJvcGVydHlcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnBvc2l0aW9uID0gdGhpcy5fb3JpZ2luYWxDU1NQb3NpdGlvbnNbaV07IC8vIHJlc3RvcmUgb3JpZ2luYWwgQ1NTIHBvc2l0aW9uIHByb3BlcnR5XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS56SW5kZXggPSB0aGlzLl9vcmlnaW5hbENTU1pJbmRleGVzW2ldOyAvLyByZXN0b3JlIG9yaWdpbmFsIENTUyB6LWluZGV4IHByb3BlcnR5XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX3N0eWxlRWxlbWVudC5yZW1vdmUoKTtcclxuXHR9XHJcblx0aXNSdW5uaW5nKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NoYW5nZXIgIT09IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgYlJhbmRvIGZyb20gXCIuL2JSYW5kb1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShvcHRpb25zOiB7IENTU1NlbGVjdG9yPzogc3RyaW5nOyBiYWNrZ3JvdW5kcz86IHN0cmluZ1tdOyB0aW1lb3V0PzogbnVtYmVyOyByYW5kb20/OiBib29sZWFuOyB0cmFuc2l0aW9uPzogc3RyaW5nIH0gPSB7fSk6IGJSYW5kbyB7XHJcblx0cmV0dXJuIG5ldyBiUmFuZG8ob3B0aW9ucyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInRoaXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsImJSYW5kbyIsIkNTU1NlbGVjdG9yIiwiX0NTU1NlbGVjdG9yIiwibm9kZXMiLCJfbm9kZXMiLCJiYWNrZ3JvdW5kcyIsIl9iYWNrZ3JvdW5kcyIsIkFycmF5IiwiaXNBcnJheSIsImV2ZXJ5IiwiYiIsInRpbWVvdXQiLCJfdGltZW91dCIsIl9jaGFuZ2VyIiwicGF1c2UiLCJwbGF5IiwicmFuZG9tIiwiX3JhbmRvbSIsInRyYW5zaXRpb24iLCJfdHJhbnNpdGlvbiIsImxhc3RCYWNrZ3JvdW5kIiwiX2xhc3RCYWNrZ3JvdW5kIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJfb3JpZ2luYWxDU1NCYWNrZ3JvdW5kcyIsInB1c2giLCJzdHlsZSIsImJhY2tncm91bmQiLCJfb3JpZ2luYWxDU1NQb3NpdGlvbnMiLCJwb3NpdGlvbiIsIl9vcmlnaW5hbENTU1pJbmRleGVzIiwiekluZGV4IiwiX3N0eWxlRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJfQ1NTQmFja2dyb3VuZFZhck5hbWUiLCJyZXBsYWNlIiwiX0NTU09wYWNpdHlWYXJOYW1lIiwiX0NTU1RyYW5zaXRpb25WYXJOYW1lIiwiX0NTU0NvbnRlbnRWYXJOYW1lIiwiaW5uZXJUZXh0IiwiaGVhZCIsImFwcGVuZCIsInNldFByb3BlcnR5Iiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJuZXh0IiwiY2xlYXJJbnRlcnZhbCIsImxlbmd0aCIsIm5ld0luZGV4IiwiTWF0aCIsImZsb29yIiwiZ2V0TmV3UmFuZG9tQmFja2dyb3VuZEluZGV4IiwiX2lzQWZ0ZXJPcGFxdWUiLCJyZW1vdmUiLCJpIiwiaXNSdW5uaW5nIiwiY3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==