(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{21:function(t,r,e){t.exports=e(27)},22:function(t,r,e){"use strict";function n(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}e.d(r,"a",(function(){return o}))},23:function(t,r,e){"use strict";e.d(r,"d",(function(){return v})),e.d(r,"e",(function(){return y})),e.d(r,"b",(function(){return d})),e.d(r,"a",(function(){return m})),e.d(r,"c",(function(){return g}));var n=e(21),o=e.n(n),a=e(22),i={API_KEY:"98387aa57f28e0e3eee6fec2a9b53ef3",BASE_URL:"https://api.themoviedb.org/3",MOVIE_ENDPOINT:"movie",TRENDING_ENDPOINT:"trending/movie/day",SEARCH_ENDPOINT:"search/movie",CAST_ENDPOINT:"movie/{movie_id}/credits",REVIEWS_ENDPOINT:"movie/{movie_id}/reviews"},c=i.API_KEY,u=i.BASE_URL,s=i.TRENDING_ENDPOINT,f=i.SEARCH_ENDPOINT,h=i.MOVIE_ENDPOINT,l=i.CAST_ENDPOINT,p=i.REVIEWS_ENDPOINT,v=function(){var t=Object(a.a)(o.a.mark((function t(){var r,e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u,"/").concat(s,"?api_key=").concat(c));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.results);case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(a.a)(o.a.mark((function t(r){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/").concat(f,"?api_key=").concat(c,"&query=").concat(r));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(o.a.mark((function t(r){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/").concat(h,"/").concat(r,"?api_key=").concat(c));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(o.a.mark((function t(r){var e,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.replace("{movie_id}",r),t.next=3,fetch("".concat(u,"/").concat(e,"?api_key=").concat(c));case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,t.abrupt("return",a.cast);case 8:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),g=function(){var t=Object(a.a)(o.a.mark((function t(r){var e,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p.replace("{movie_id}",r),t.next=3,fetch("".concat(u,"/").concat(e,"?api_key=").concat(c));case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,t.abrupt("return",a.results);case 8:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},24:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e(28),o=e.n(n),a=e(2),i=function(t){var r=t.children;return Object(a.jsx)("div",{className:o.a.card,children:r})}},27:function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),i=new I(n||[]);return a._invoke=function(t,r,e){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return k()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=L(i,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?v:l,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var h="suspendedStart",l="suspendedYield",p="executing",v="completed",y={};function d(){}function m(){}function g(){}var w={};u(w,a,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(T([])));x&&x!==e&&n.call(x,a)&&(w=x);var _=g.prototype=d.prototype=Object.create(w);function b(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function N(t,r){function e(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:r,done:!0}}return m.prototype=g,u(_,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(N.prototype),u(N.prototype,i,(function(){return this})),t.AsyncIterator=N,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new N(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(_),u(_,c,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},28:function(t,r,e){t.exports={card:"Card_card__35wN0"}}}]);
//# sourceMappingURL=0.e98decb3.chunk.js.map