!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bRando=e():t.bRando=e()}(this,(function(){return function(){"use strict";var t={d:function(e,r){for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.r(e),t.d(e,{create:function(){return s}});class i{get CSSSelector(){return this._CSSSelector}set CSSSelector(t){this._CSSSelector="string"!=typeof t?"body":t}get backgrounds(){return this._backgrounds}set backgrounds(t){Array.isArray(t)&&t.every((t=>"string"==typeof t))?this._backgrounds=t:this._backgrounds=['url("/img/alex-knight-vaA6EQiUSo4-unsplash_result.jpg") center/cover no-repeat','url("/img/joel-fulgencio-01fAtHwYqo0-unsplash_result.jpg") center/cover no-repeat','url("/img/pawel-nolbert-4u2U8EO9OzY-unsplash_result.jpg") center/cover no-repeat','url("/img/stephan-valentin-oqYLdbuJDQU-unsplash_result.jpg") center/cover no-repeat','url("/img/waranont-joe-T7qyLNPwgKA-unsplash_result.jpg") center/cover no-repeat',"linear-gradient(90deg, rgba(231,4,222,1) 25%, rgba(126,126,126,1) 50%, rgba(10,233,227,1) 75%)"]}get timeout(){return this._timeout}set timeout(t){this._timeout=t&&t>0?t:1e4,-1!==this.changer&&(this.pause(),this.play())}get random(){return this._random}set random(t){this._random=null==t||t}get CSSTransition(){return this._CSSTransition}set CSSTransition(t){this._CSSTransition=null==t?"5000ms":t}get isAfterOpaque(){return this._isAfterOpaque}set isAfterOpaque(t){this._isAfterOpaque=t}get lastBackground(){return this._lastBackground}set lastBackground(t){this._lastBackground=t}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,"_CSSSelector",""),r(this,"_backgrounds",[]),r(this,"_timeout",0),r(this,"_random",!0),r(this,"_CSSTransition",""),r(this,"originalCSSBackgrounds",[]),r(this,"originalCSSPositions",[]),r(this,"changer",-1),r(this,"_isAfterOpaque",!1),r(this,"_lastBackground",-1),this.CSSSelector=t.CSSSelector,this.nodes=document.querySelectorAll(this.CSSSelector),this.backgrounds=t.CSSBackgrounds,this.timeout=t.timeoutMs,this.random=t.randomOrder,this.CSSTransition=t.CSSTransition,this.nodes.forEach((t=>{this.originalCSSBackgrounds.push(t.style.background),this.originalCSSPositions.push(t.style.position),t.style.position="relative"})),this.styleElement=document.createElement("style"),this.CSSBackgroundVarName=`--bRandoBg${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this.CSSOpacityVarName=`--bRandoOpacity${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this.CSSTransitionVarName=`--bRandoTransition${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this.CSSContentVarName=`--bRandoContent${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this.styleElement.innerText=`${this.CSSSelector}::after{background:var(${this.CSSBackgroundVarName});content:var(${this.CSSContentVarName});position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:var(${this.CSSOpacityVarName});transition: var(${this.CSSTransitionVarName});}`,document.head.append(this.styleElement),this.nodes.forEach((t=>{t.style.setProperty(this.CSSOpacityVarName,"0"),t.style.setProperty(this.CSSTransitionVarName,`opacity ${this.CSSTransition}`),t.style.setProperty(this.CSSContentVarName,"''"),t.style.zIndex="0"})),this.play()}play(){this.next(),this.changer=window.setInterval((()=>{this.next()}),this.timeout)}pause(){clearInterval(this.changer)}next(){this.lastBackground=this.random?(()=>{let t;do{t=Math.floor(Math.random()*this.backgrounds.length)}while(this.lastBackground===t);return t})():this.lastBackground===this.backgrounds.length-1?this.lastBackground=0:this.lastBackground+1,this.nodes.forEach((t=>{t.style.setProperty(this.CSSTransitionVarName,`opacity ${this.CSSTransition}`),this.isAfterOpaque?(t.style.background=this.backgrounds[this.lastBackground],t.style.setProperty(this.CSSOpacityVarName,"0")):(t.style.setProperty(this.CSSBackgroundVarName,this.backgrounds[this.lastBackground]),t.style.setProperty(this.CSSOpacityVarName,"1"))})),this.isAfterOpaque=!this.isAfterOpaque}remove(){this.pause(),this.nodes.forEach(((t,e)=>{t.style.setProperty(this.CSSOpacityVarName,"0"),t.style.setProperty(this.CSSContentVarName,"none"),t.style.background=this.originalCSSBackgrounds[e],t.style.position=this.originalCSSPositions[e]})),this.styleElement.remove()}}function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new i(t)}return e}()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJrQyxHQUNqQyxPQUFPQSxDQUFRLEVBRW9CSSxHQUFnQzNFLEtBQUtxQyxpQkFBbUJyQyxLQUFLb0IsWUFBWXNELE9BQVMsRUFBSzFFLEtBQUtxQyxlQUFpQixFQUFLckMsS0FBS3FDLGVBQWlCLEVBRTVLckMsS0FBS3lDLE1BQU1NLFNBQVNDLElBQ2xCQSxFQUFrQkcsTUFBTWMsWUFBWWpFLEtBQUs0RCxxQkFBdUIsV0FBVTVELEtBQUtpQyxpQkFDM0VqQyxLQUFLbUMsZUFJUmEsRUFBa0JHLE1BQU1DLFdBQWFwRCxLQUFLb0IsWUFBWXBCLEtBQUtxQyxnQkFDM0RXLEVBQWtCRyxNQUFNYyxZQUFZakUsS0FBSzJELGtCQUFtQixPQUo1RFgsRUFBa0JHLE1BQU1jLFlBQVlqRSxLQUFLeUQscUJBQXNCekQsS0FBS29CLFlBQVlwQixLQUFLcUMsaUJBQ3JGVyxFQUFrQkcsTUFBTWMsWUFBWWpFLEtBQUsyRCxrQkFBbUIsS0FJOUQsSUFFRDNELEtBQUttQyxlQUFpQm5DLEtBQUttQyxhQUM1QixDQUNBeUMsU0FDQzVFLEtBQUs2QixRQUNMN0IsS0FBS3lDLE1BQU1NLFNBQVEsQ0FBQ0MsRUFBRzZCLEtBRXJCN0IsRUFBa0JHLE1BQU1jLFlBQVlqRSxLQUFLMkQsa0JBQW1CLEtBQzVEWCxFQUFrQkcsTUFBTWMsWUFBWWpFLEtBQUs2RCxrQkFBbUIsUUFDNURiLEVBQWtCRyxNQUFNQyxXQUFhcEQsS0FBS2lELHVCQUF1QjRCLEdBQ2pFN0IsRUFBa0JHLE1BQU1HLFNBQVd0RCxLQUFLcUQscUJBQXFCd0IsRUFBRSxJQUVqRTdFLEtBQUt1RCxhQUFhcUIsUUFDbkIsRUNuS00sU0FBU0UsSUFBcUosSUFBOUl0QyxFQUFrSSxVQUFILDZDQUFHLENBQUMsRUFDekosT0FBTyxJQUFJdkIsRUFBT3VCLEVBQ25CLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2JSYW5kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JSYW5kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JSYW5kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JSYW5kby8uL3NyYy9iUmFuZG8udHMiLCJ3ZWJwYWNrOi8vYlJhbmRvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJSYW5kb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJiUmFuZG9cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBiUmFuZG8ge1xuXHRwcml2YXRlIF9DU1NTZWxlY3Rvcjogc3RyaW5nID0gXCJcIjtcblx0cHVibGljIGdldCBDU1NTZWxlY3RvcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl9DU1NTZWxlY3Rvcjtcblx0fVxuXHRwcml2YXRlIHNldCBDU1NTZWxlY3Rvcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG5cdFx0dGhpcy5fQ1NTU2VsZWN0b3IgPSB0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgPyBcImJvZHlcIiA6IHZhbHVlO1xuXHR9XG5cblx0cmVhZG9ubHkgbm9kZXM6IE5vZGVMaXN0O1xuXG5cdHByaXZhdGUgX2JhY2tncm91bmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRwdWJsaWMgZ2V0IGJhY2tncm91bmRzKCk6IHN0cmluZ1tdIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFja2dyb3VuZHM7XG5cdH1cblx0cHVibGljIHNldCBiYWNrZ3JvdW5kcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcblx0XHRpZiAoXG5cdFx0XHRBcnJheS5pc0FycmF5KHZhbHVlKSAmJlxuXHRcdFx0dmFsdWUuZXZlcnkoKGIpID0+IHtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBiID09PSBcInN0cmluZ1wiO1xuXHRcdFx0fSlcblx0XHQpIHtcblx0XHRcdHRoaXMuX2JhY2tncm91bmRzID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGRlbW8gYmFja2dyb3VuZHNcblx0XHRcdC8vIHByZXR0aWVyLWlnbm9yZVxuXHRcdFx0dGhpcy5fYmFja2dyb3VuZHMgPSBbXG5cdFx0XHRcdCd1cmwoXCIvaW1nL2FsZXgta25pZ2h0LXZhQTZFUWlVU280LXVuc3BsYXNoX3Jlc3VsdC5qcGdcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCcsIFxuXHRcdFx0XHQndXJsKFwiL2ltZy9qb2VsLWZ1bGdlbmNpby0wMWZBdEh3WXFvMC11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLCBcblx0XHRcdFx0J3VybChcIi9pbWcvcGF3ZWwtbm9sYmVydC00dTJVOEVPOU96WS11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLFxuXHRcdFx0XHQndXJsKFwiL2ltZy9zdGVwaGFuLXZhbGVudGluLW9xWUxkYnVKRFFVLXVuc3BsYXNoX3Jlc3VsdC5qcGdcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCcsXG5cdFx0XHRcdCd1cmwoXCIvaW1nL3dhcmFub250LWpvZS1UN3F5TE5Qd2dLQS11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLFxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIzMSw0LDIyMiwxKSAyNSUsIHJnYmEoMTI2LDEyNiwxMjYsMSkgNTAlLCByZ2JhKDEwLDIzMywyMjcsMSkgNzUlKScsXG5cdFx0XHRdO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX3RpbWVvdXQ6IG51bWJlciA9IDA7XG5cdHB1YmxpYyBnZXQgdGltZW91dCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl90aW1lb3V0O1xuXHR9XG5cdHB1YmxpYyBzZXQgdGltZW91dCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlID4gMCkge1xuXHRcdFx0dGhpcy5fdGltZW91dCA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl90aW1lb3V0ID0gMTAwMDA7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNoYW5nZXIgIT09IC0xKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIF9yYW5kb206IGJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgZ2V0IHJhbmRvbSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fcmFuZG9tO1xuXHR9XG5cdHB1YmxpYyBzZXQgcmFuZG9tKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG5cdFx0dGhpcy5fcmFuZG9tID0gdmFsdWUgPT0gbnVsbCA/IHRydWUgOiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgX0NTU1RyYW5zaXRpb246IHN0cmluZyA9IFwiXCI7XG5cdHB1YmxpYyBnZXQgQ1NTVHJhbnNpdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl9DU1NUcmFuc2l0aW9uO1xuXHR9XG5cdHB1YmxpYyBzZXQgQ1NTVHJhbnNpdGlvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG5cdFx0dGhpcy5fQ1NTVHJhbnNpdGlvbiA9IHZhbHVlID09IG51bGwgPyBcIjUwMDBtc1wiIDogdmFsdWU7XG5cdH1cblxuXHRyZWFkb25seSBvcmlnaW5hbENTU0JhY2tncm91bmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRyZWFkb25seSBvcmlnaW5hbENTU1Bvc2l0aW9uczogc3RyaW5nW10gPSBbXTtcblx0cHJpdmF0ZSBjaGFuZ2VyOiBudW1iZXIgPSAtMTtcblx0cmVhZG9ubHkgc3R5bGVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuXHRwcml2YXRlIF9pc0FmdGVyT3BhcXVlOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgZ2V0IGlzQWZ0ZXJPcGFxdWUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQWZ0ZXJPcGFxdWU7XG5cdH1cblx0cHJpdmF0ZSBzZXQgaXNBZnRlck9wYXF1ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMuX2lzQWZ0ZXJPcGFxdWUgPSB2YWx1ZTtcblx0fVxuXG5cdHJlYWRvbmx5IENTU0JhY2tncm91bmRWYXJOYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IENTU09wYWNpdHlWYXJOYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IENTU1RyYW5zaXRpb25WYXJOYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IENTU0NvbnRlbnRWYXJOYW1lOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBfbGFzdEJhY2tncm91bmQ6IG51bWJlciA9IC0xO1xuXHRwdWJsaWMgZ2V0IGxhc3RCYWNrZ3JvdW5kKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2xhc3RCYWNrZ3JvdW5kO1xuXHR9XG5cdHByaXZhdGUgc2V0IGxhc3RCYWNrZ3JvdW5kKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLl9sYXN0QmFja2dyb3VuZCA9IHZhbHVlO1xuXHR9XG5cblx0Y29uc3RydWN0b3Iob3B0aW9uczogeyBDU1NTZWxlY3Rvcj86IHN0cmluZzsgQ1NTQmFja2dyb3VuZHM/OiBzdHJpbmdbXTsgdGltZW91dE1zPzogbnVtYmVyOyByYW5kb21PcmRlcj86IGJvb2xlYW47IENTU1RyYW5zaXRpb24/OiBzdHJpbmcgfSA9IHt9KSB7XG5cdFx0dGhpcy5DU1NTZWxlY3RvciA9IG9wdGlvbnMuQ1NTU2VsZWN0b3I7XG5cdFx0dGhpcy5ub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5DU1NTZWxlY3Rvcik7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kcyA9IG9wdGlvbnMuQ1NTQmFja2dyb3VuZHM7XG5cdFx0dGhpcy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0TXM7XG5cdFx0dGhpcy5yYW5kb20gPSBvcHRpb25zLnJhbmRvbU9yZGVyO1xuXHRcdHRoaXMuQ1NTVHJhbnNpdGlvbiA9IG9wdGlvbnMuQ1NTVHJhbnNpdGlvbjtcblx0XHR0aGlzLm5vZGVzLmZvckVhY2goKGUpID0+IHtcblx0XHRcdHRoaXMub3JpZ2luYWxDU1NCYWNrZ3JvdW5kcy5wdXNoKChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kKTsgLy8gYmFja3VwIHRoZSBvcmlnaW5hbCBDU1MgYmFja2dyb3VuZCBwcm9wZXJ0eVxuXHRcdFx0dGhpcy5vcmlnaW5hbENTU1Bvc2l0aW9ucy5wdXNoKChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5wb3NpdGlvbik7IC8vIGJhY2t1cCB0aGUgb3JpZ2luYWwgQ1NTIHBvc2l0aW9uIHByb3BlcnR5XG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7IC8vIHNldCBlYWNoIGVsZW1lbnQgdG8gYmUgcmVsYXRpdmVcblx0XHR9KTtcblx0XHR0aGlzLnN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0XHR0aGlzLkNTU0JhY2tncm91bmRWYXJOYW1lID0gYC0tYlJhbmRvQmcke3RoaXMuQ1NTU2VsZWN0b3IucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIlwiKX1gO1xuXHRcdHRoaXMuQ1NTT3BhY2l0eVZhck5hbWUgPSBgLS1iUmFuZG9PcGFjaXR5JHt0aGlzLkNTU1NlbGVjdG9yLnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJcIil9YDtcblx0XHR0aGlzLkNTU1RyYW5zaXRpb25WYXJOYW1lID0gYC0tYlJhbmRvVHJhbnNpdGlvbiR7dGhpcy5DU1NTZWxlY3Rvci5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiXCIpfWA7XG5cdFx0dGhpcy5DU1NDb250ZW50VmFyTmFtZSA9IGAtLWJSYW5kb0NvbnRlbnQke3RoaXMuQ1NTU2VsZWN0b3IucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIlwiKX1gO1xuXHRcdHRoaXMuc3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IGAke3RoaXMuQ1NTU2VsZWN0b3J9OjphZnRlcntiYWNrZ3JvdW5kOnZhcigke3RoaXMuQ1NTQmFja2dyb3VuZFZhck5hbWV9KTtjb250ZW50OnZhcigke3RoaXMuQ1NTQ29udGVudFZhck5hbWV9KTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4Oi0xO29wYWNpdHk6dmFyKCR7dGhpcy5DU1NPcGFjaXR5VmFyTmFtZX0pO3RyYW5zaXRpb246IHZhcigke3RoaXMuQ1NTVHJhbnNpdGlvblZhck5hbWV9KTt9YDtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZCh0aGlzLnN0eWxlRWxlbWVudCk7XG5cdFx0dGhpcy5ub2Rlcy5mb3JFYWNoKChlKSA9PiB7XG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5DU1NPcGFjaXR5VmFyTmFtZSwgXCIwXCIpO1xuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuQ1NTVHJhbnNpdGlvblZhck5hbWUsIGBvcGFjaXR5ICR7dGhpcy5DU1NUcmFuc2l0aW9ufWApO1xuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuQ1NTQ29udGVudFZhck5hbWUsIFwiJydcIik7XG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuekluZGV4ID0gXCIwXCI7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXkoKTtcblx0fVxuXG5cdHBsYXkoKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KCk7XG5cdFx0dGhpcy5jaGFuZ2VyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcblx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdH0sIHRoaXMudGltZW91dCk7XG5cdH1cblx0cGF1c2UoKTogdm9pZCB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmNoYW5nZXIpO1xuXHR9XG5cdG5leHQoKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2V0TmV3UmFuZG9tQmFja2dyb3VuZEluZGV4ID0gKCk6IG51bWJlciA9PiB7XG5cdFx0XHRsZXQgbmV3SW5kZXg6IG51bWJlcjtcblx0XHRcdGRvIHtcblx0XHRcdFx0bmV3SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJhY2tncm91bmRzLmxlbmd0aCk7XG5cdFx0XHR9IHdoaWxlICh0aGlzLmxhc3RCYWNrZ3JvdW5kID09PSBuZXdJbmRleCk7XG5cdFx0XHRyZXR1cm4gbmV3SW5kZXg7XG5cdFx0fTtcblx0XHR0aGlzLmxhc3RCYWNrZ3JvdW5kID0gdGhpcy5yYW5kb20gPyBnZXROZXdSYW5kb21CYWNrZ3JvdW5kSW5kZXgoKSA6IHRoaXMubGFzdEJhY2tncm91bmQgPT09IHRoaXMuYmFja2dyb3VuZHMubGVuZ3RoIC0gMSA/ICh0aGlzLmxhc3RCYWNrZ3JvdW5kID0gMCkgOiB0aGlzLmxhc3RCYWNrZ3JvdW5kICsgMTtcblxuXHRcdHRoaXMubm9kZXMuZm9yRWFjaCgoZSkgPT4ge1xuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuQ1NTVHJhbnNpdGlvblZhck5hbWUsIGBvcGFjaXR5ICR7dGhpcy5DU1NUcmFuc2l0aW9ufWApO1xuXHRcdFx0aWYgKCF0aGlzLmlzQWZ0ZXJPcGFxdWUpIHtcblx0XHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuQ1NTQmFja2dyb3VuZFZhck5hbWUsIHRoaXMuYmFja2dyb3VuZHNbdGhpcy5sYXN0QmFja2dyb3VuZF0pO1xuXHRcdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5DU1NPcGFjaXR5VmFyTmFtZSwgXCIxXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLmJhY2tncm91bmRzW3RoaXMubGFzdEJhY2tncm91bmRdO1xuXHRcdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5DU1NPcGFjaXR5VmFyTmFtZSwgXCIwXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuaXNBZnRlck9wYXF1ZSA9ICF0aGlzLmlzQWZ0ZXJPcGFxdWU7XG5cdH1cblx0cmVtb3ZlKCk6IHZvaWQge1xuXHRcdHRoaXMucGF1c2UoKTtcblx0XHR0aGlzLm5vZGVzLmZvckVhY2goKGUsIGkpID0+IHtcblx0XHRcdC8vIGhpZGUgcHNldWRvIDo6YWZ0ZXIgZWxlbWVudHNcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLkNTU09wYWNpdHlWYXJOYW1lLCBcIjBcIik7XG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5DU1NDb250ZW50VmFyTmFtZSwgXCJub25lXCIpO1xuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLm9yaWdpbmFsQ1NTQmFja2dyb3VuZHNbaV07IC8vIHJlc3RvcmUgb3JpZ2luYWwgQ1NTIGJhY2tncm91bmQgcHJvcGVydHlcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5wb3NpdGlvbiA9IHRoaXMub3JpZ2luYWxDU1NQb3NpdGlvbnNbaV07IC8vIHJlc3RvcmUgb3JpZ2luYWwgQ1NTIHBvc2l0aW9uIHByb3BlcnR5XG5cdFx0fSk7XG5cdFx0dGhpcy5zdHlsZUVsZW1lbnQucmVtb3ZlKCk7XG5cdH1cbn1cbiIsImltcG9ydCBiUmFuZG8gZnJvbSBcIi4vYlJhbmRvXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUob3B0aW9uczogeyBDU1NTZWxlY3Rvcj86IHN0cmluZzsgQ1NTQmFja2dyb3VuZHM/OiBzdHJpbmdbXTsgdGltZW91dE1zPzogbnVtYmVyOyByYW5kb21PcmRlcj86IGJvb2xlYW47IENTU1RyYW5zaXRpb24/OiBzdHJpbmcgfSA9IHt9KTogYlJhbmRvIHtcblx0cmV0dXJuIG5ldyBiUmFuZG8ob3B0aW9ucyk7XG59XG4iXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwidGhpcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiYlJhbmRvIiwiQ1NTU2VsZWN0b3IiLCJfQ1NTU2VsZWN0b3IiLCJiYWNrZ3JvdW5kcyIsIl9iYWNrZ3JvdW5kcyIsIkFycmF5IiwiaXNBcnJheSIsImV2ZXJ5IiwiYiIsInRpbWVvdXQiLCJfdGltZW91dCIsImNoYW5nZXIiLCJwYXVzZSIsInBsYXkiLCJyYW5kb20iLCJfcmFuZG9tIiwiQ1NTVHJhbnNpdGlvbiIsIl9DU1NUcmFuc2l0aW9uIiwiaXNBZnRlck9wYXF1ZSIsIl9pc0FmdGVyT3BhcXVlIiwibGFzdEJhY2tncm91bmQiLCJfbGFzdEJhY2tncm91bmQiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJub2RlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkNTU0JhY2tncm91bmRzIiwidGltZW91dE1zIiwicmFuZG9tT3JkZXIiLCJmb3JFYWNoIiwiZSIsIm9yaWdpbmFsQ1NTQmFja2dyb3VuZHMiLCJwdXNoIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwib3JpZ2luYWxDU1NQb3NpdGlvbnMiLCJwb3NpdGlvbiIsInN0eWxlRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJDU1NCYWNrZ3JvdW5kVmFyTmFtZSIsInJlcGxhY2UiLCJDU1NPcGFjaXR5VmFyTmFtZSIsIkNTU1RyYW5zaXRpb25WYXJOYW1lIiwiQ1NTQ29udGVudFZhck5hbWUiLCJpbm5lclRleHQiLCJoZWFkIiwiYXBwZW5kIiwic2V0UHJvcGVydHkiLCJ6SW5kZXgiLCJuZXh0Iiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibmV3SW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJsZW5ndGgiLCJnZXROZXdSYW5kb21CYWNrZ3JvdW5kSW5kZXgiLCJyZW1vdmUiLCJpIiwiY3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==