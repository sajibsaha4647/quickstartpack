!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.ityped=e.ityped||{})}(this,function(e){"use strict";function n(e){var n=e;return n.strings=e.strings||["Put your string here...","and Enjoy!"],n.typeSpeed=e.typeSpeed||100,n.backSpeed=e.backSpeed||50,n.backDelay=e.backDelay||500,n.startDelay=e.startDelay||500,n.showCursor=e.showCursor,n.loop=e.loop||!1,void 0===n.showCursor&&(n.showCursor=!0),Promise.resolve(n)}function t(e,t){e="string"==typeof e?document.querySelector(e):e,n(t).then(function(n){d=n,e._props=d,d.showCursor&&o(e,d.cursorChar||"|"),r(e)})}function o(e,n){var t=l.cloneNode();e.insertAdjacentElement("afterend",t),t.textContent=n}function r(e){a(e._props.strings,function(n,t,o){var r=e._props.typeSpeed*n.length-1;e._props.backSpeed<e._props.typeSpeed?r-=(e._props.typeSpeed-e._props.backSpeed)*n.length:e._props.backSpeed>e._props.typeSpeed&&(r+=(e._props.backSpeed-e._props.typeSpeed)*n.length);var p=this.async(),i=e._props.strings.length;s(e,n,t,i).then(function(){setTimeout(function(){p()},r)})},function(){e._props.loop&&r(e)})}function p(e,n){return new Promise(function(t,o){for(var r=0,p=0;p<n.length;p++)!function(o){var p=o,s=n.length;setTimeout(function(o){i(e,n.charAt(p)),++r===s-1&&t()},e._props.typeSpeed*o)}(p)})}function i(e,n){e.innerHTML+=n}function s(e,n,t,o){return new Promise(function(r,i){p(e,n).then(function(){setTimeout(function(){c(e,n,t,o).then(function(){setTimeout(function(){r()},e._props.startDelay)})},e._props.backDelay)})})}function u(e,n,t,o){for(var r=t;r>0;r--)!function(r){var p=r,i=t;setTimeout(function(r){e.innerHTML=n.substring(0,t-p),i--,1===p&&o()},e._props.backSpeed*r)}(r)}function c(e,n,t,o){return new Promise(function(r,p){var i=n.length;t+1===o?e._props.loop?e._props.loop&&u(e,n,i,r):(void 0!==e._props.onFinished&&"function"==typeof e._props.onFinished&&e._props.onFinished(),e.innerHTML=n):t+1!==o&&u(e,n,i,r)})}function f(e){e._props.onFinished=function(){}}var a=function(e,n,t){var o=-1,r=e.length>>>0;!function p(i){var s,u=!1===i;do{++o}while(!(o in e)&&o!==r);if(u||o===r)return void(t&&t(!u,e));i=n.call({async:function(){return s=!0,p}},e[o],o,e),s||p(i)}()},d=void 0,l=document.createElement("span");l.classList.add("ityped-cursor"),l.textContent="|",e.init=t,e.destroy=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ityped.min.js.map