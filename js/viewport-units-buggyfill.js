/*!
 * viewport-units-buggyfill v0.6.0
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */
!function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.viewportUnitsBuggyfill=t()}(this,function(){"use strict";function t(i,r){var o;return function(){var e=this,t=arguments,n=function(){i.apply(e,t)};clearTimeout(o),o=setTimeout(n,r)}}function n(){try{return window.self!==window.top}catch(e){return!0}}function e(e){if(!b){if(!0===e&&(e={force:!0}),(v=e||{}).isMobileSafari=S,v.isBadStockAndroid=A,!v.ignoreVmax||v.force||C||(R=!1),C||!v.force&&!S&&!R&&!A&&!M&&(!v.hacks||!v.hacks.required(v)))return window.console&&C&&console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"),{init:function(){}};window.dispatchEvent(new O("viewport-units-buggyfill-init")),v.hacks&&v.hacks.initialize(v),b=!0,(y=document.createElement("style")).id="patched-viewport",document.head.appendChild(y),f(function(){var e=t(r,v.refreshDebounceWait||100);window.addEventListener("orientationchange",e,!0),window.addEventListener("pageshow",e,!0),(v.force||R||n())&&(window.addEventListener("resize",e,!0),v._listeningToResize=!0),v.hacks&&v.hacks.initializeEvents(v,r,e),r()})}}function i(){y.textContent=c(),y.parentNode.appendChild(y),window.dispatchEvent(new O("viewport-units-buggyfill-style"))}function r(){b&&(a(),setTimeout(function(){i()},1))}function o(e){try{if(!e.cssRules)return}catch(r){if("SecurityError"!==r.name)throw r;return}for(var t=[],n=0;n<e.cssRules.length;n++){var i=e.cssRules[n];t.push(i)}return t}function a(){return g=[],T.call(document.styleSheets,function(e){var t=o(e);t&&"patched-viewport"!==e.ownerNode.id&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(e.media&&e.media.mediaText&&window.matchMedia&&!window.matchMedia(e.media.mediaText).matches||T.call(t,s))}),g}function s(n){if(7===n.type){var e;try{e=n.cssText}catch(t){return}return k.lastIndex=0,void(k.test(e)&&(g.push([n,null,e]),v.hacks&&v.hacks.findDeclarations(g,n,null,e)))}if(n.style)T.call(n.style,function(e){var t=n.style.getPropertyValue(e);n.style.getPropertyPriority(e)&&(t+=" !important"),k.lastIndex=0,k.test(t)&&(g.push([n,e,t]),v.hacks&&v.hacks.findDeclarations(g,n,e,t))});else{if(!n.cssRules)return;T.call(n.cssRules,function(e){s(e)})}}function c(){m=l();var r,o,a=[],s=[];return g.forEach(function(e){var t=u.apply(null,e),n=t.selector.length?t.selector.join(" {\n")+" {\n":"",i=new Array(t.selector.length+1).join("\n}");if(!n||n!==r)return s.length&&(a.push(r+s.join("\n")+o),s.length=0),void(n?(r=n,o=i,s.push(t.content)):(a.push(t.content),o=r=null));n&&!r&&(r=n,o=i),s.push(t.content)}),s.length&&a.push(r+s.join("\n")+o),M&&a.push("* { content: normal !important; }"),a.join("\n\n")}function u(e,t,n){var i,r=[];i=n.replace(k,d),v.hacks&&(i=v.hacks.overwriteDeclaration(e,t,i)),t&&(r.push(e.selectorText),i=t+": "+i+";");for(var o=e.parentRule;o;)r.unshift("@media "+o.media.mediaText),o=o.parentRule;return{selector:r,content:i}}function d(e,t,n){var i=m[n];return parseFloat(t)/100*i+"px"}function l(){var e=window.innerHeight,t=window.innerWidth;return{vh:e,vw:t,vmax:Math.max(t,e),vmin:Math.min(t,e)}}function f(e){var t=0,n=function(){--t||e()};T.call(document.styleSheets,function(e){e.href&&h(e.href)!==h(location.href)&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(t++,p(e.ownerNode,n))}),t||e()}function h(e){return e.slice(0,e.indexOf("/",e.indexOf("://")+3))}function p(t,n){w(t.href,function(){var e=document.createElement("style");e.media=t.media,e.setAttribute("data-href",t.href),e.textContent=this.responseText,t.parentNode.replaceChild(e,t),n()},n)}function w(e,t,n){var i=new XMLHttpRequest;if("withCredentials"in i)i.open("GET",e,!0);else{if("undefined"==typeof XDomainRequest)throw new Error("cross-domain XHR not supported");(i=new XDomainRequest).open("GET",e)}return i.onload=t,i.onerror=n,i.send(),i}var v,m,g,y,E,b=!1,x=window.navigator.userAgent,k=/([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,T=[].forEach,R=/MSIE [0-9]\./i.test(x),C=/MSIE [0-8]\./i.test(x),M=-1<x.indexOf("Opera Mini"),S=/(iPhone|iPod|iPad).+AppleWebKit/i.test(x)&&((E=x.match(/OS (\d)/))&&1<E.length&&parseInt(E[1])<10),A=-1<x.indexOf(" Android ")&&-1<x.indexOf("Version/")&&parseFloat((x.match("Android ([0-9.]+)")||[])[1])<=4.4;R||(R=!!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./));try{new O("test")}catch(I){var O=function(e,t){var n;return t=t||{bubbles:!1,cancelable:!1,detail:undefined},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};O.prototype=window.Event.prototype,window.CustomEvent=O}return{version:"0.6.0",findProperties:a,getCss:c,init:e,refresh:r}});