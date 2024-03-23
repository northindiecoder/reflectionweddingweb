/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(d){function t(e){var t=e||window.event,i=v.call(arguments,1),n=0,o=0,l=0,s=0,a=0,h=0;if((e=d.event.fix(t)).type="mousewheel","detail"in t&&(l=-1*t.detail),"wheelDelta"in t&&(l=t.wheelDelta),"wheelDeltaY"in t&&(l=t.wheelDeltaY),"wheelDeltaX"in t&&(o=-1*t.wheelDeltaX),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(o=-1*l,l=0),n=0===l?o:l,"deltaY"in t&&(n=l=-1*t.deltaY),"deltaX"in t&&(o=t.deltaX,0===l&&(n=-1*o)),0!==l||0!==o){if(1===t.deltaMode){var r=d.data(this,"mousewheel-line-height");n*=r,l*=r,o*=r}else if(2===t.deltaMode){var u=d.data(this,"mousewheel-page-height");n*=u,l*=u,o*=u}if(s=Math.max(Math.abs(l),Math.abs(o)),(!w||s<w)&&m(t,w=s)&&(w/=40),m(t,s)&&(n/=40,o/=40,l/=40),n=Math[1<=n?"floor":"ceil"](n/w),o=Math[1<=o?"floor":"ceil"](o/w),l=Math[1<=l?"floor":"ceil"](l/w),p.settings.normalizeOffset&&this.getBoundingClientRect){var f=this.getBoundingClientRect();a=e.clientX-f.left,h=e.clientY-f.top}return e.deltaX=o,e.deltaY=l,e.deltaFactor=w,e.offsetX=a,e.offsetY=h,e.deltaMode=0,i.unshift(e,n,o,l),g&&clearTimeout(g),g=setTimeout(c,200),(d.event.dispatch||d.event.handle).apply(this,i)}}function c(){w=null}function m(e,t){return p.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}var g,w,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],i="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],v=Array.prototype.slice;if(d.event.fixHooks)for(var n=e.length;n;)d.event.fixHooks[e[--n]]=d.event.mouseHooks;var p=d.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=i.length;e;)this.addEventListener(i[--e],t,!1);else this.onmousewheel=t;d.data(this,"mousewheel-line-height",p.getLineHeight(this)),d.data(this,"mousewheel-page-height",p.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=i.length;e;)this.removeEventListener(i[--e],t,!1);else this.onmousewheel=null;d.removeData(this,"mousewheel-line-height"),d.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=d(e),i=t["offsetParent"in d.fn?"offsetParent":"parent"]();return i.length||(i=d("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return d(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};d.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});