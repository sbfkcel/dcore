/*! Project:dcore, Create:单炒饭 2018.08.08 11:22, Update:FWS 2018.11.16 21:11 */ 
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"function"==typeof define&&(define.cmd||define.hjs)?define(function(require,exports,e){e.exports=t()}):e.index=t()}(this,function(){"use strict";var e=function(e){return e&&e.length!==undefined},t=function(e,t){return"on"+t in e},n="__event__",o=function(e){return"__eventStatus__"+e},r={add:function(r,a,i){var u=o(a),c=t(r,a);if(r[n]===undefined&&(r[n]={}),e(r[n][a])||(r[n][a]=[]),r[n][a].push(i),r[n][u]===undefined&&c){r[n][u]=!0;var f=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(r&&r[n]&&r[n][a]&&r[n][a].length)for(var o=0,i=r[n][a].length;o<i;o++){var u=r[n][a][o];e&&e[0]&&!e[0].target&&(e[0].target=e[0].srcElement),u.call.apply(u,[r].concat(e))}};"function"==typeof r.addEventListener?r.addEventListener(a,f,!1):"object"==typeof r.attachEvent&&r.attachEvent("on"+a,f)}return c},remove:function(t,o,a){if(t[n]&&e(t[n][o])){for(var i=t[n][o],u=0,c=i.length;u<c;u++){i[u]===a&&(i.splice(u,1),u--,c=i.length)}i.length||r.removeAll(t,o)}},removeAll:function(e,t){var r=o(t);e[n]&&delete e[n][t],e[n]&&e[n][r]&&delete e[n][r]},preventDefault:function(e){e.preventDefault?e.preventDefault():window.event.returnValue=!1},stopPropagation:function(e){e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0}},a=function(e){if("string"!=typeof e||!e)throw new Error("Invalid cookie name");return i()[e]},i=function(){var e={},t=document.cookie,n=t?t.split("; "):[];if(n.length)for(var o=0,r=n.length;o<r;o++){var a=n[o],i=a.split("="),u=i[0],c=i[1];e[u]=c}return e},u={path:"/",domain:location.hostname.indexOf("www")>-1?location.hostname.replace("www",""):location.hostname,expires:0},c=function(e,t,n){void 0===n&&(n=u);for(var o in u){var r=u[o];n[o]===undefined&&(n[o]=r)}var a=function(){var e=new Date;return e.setDate(e.getDate()+n.expires),e.toString()}(),i=n.domain,c=n.path,f=a,s=e+"="+t+"; domain="+i+"; path="+c+"; expires="+f;document.cookie=s},f=function(e,t){void 0===t&&(t=u);var n={};for(var o in t)n[o]=t[o];n.expires=-1,c(e,"",n)},s={get:a,toJson:i,set:c,del:f},l={create:function(e){var t,n=[],o=document.createElement("div");o.innerHTML=e,t=o.childNodes;for(var r=0,a=t.length;r<a;r++)t[r]&&t[r].tagName&&n.push(t[r]);return n},get:function(e,t){void 0===t&&(t=document);var n=e.substr(0,1),o=/^(\.|#)/i.test(e)?e.substr(1):e,r=new RegExp("(^|\\s)"+o+"(\\s|$)"),a=[];switch(n){case"#":a.push(document.getElementById(o));break;case".":if("function"==typeof t.getElementsByClassName)for(var i=t.getElementsByClassName(o),u=0,c=i.length;u<c;u++)a.push(i[u]);else for(var f=t.getElementsByTagName("*"),u=0,c=f.length;u<c;u++){var s=f[u];r.test(s.className)&&a.push(s)}break;default:for(var l=document.getElementsByTagName(o),u=0,c=l.length;u<c;u++)a.push(l[u])}return a}},d=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{console.log.apply(console,e)}catch(n){}},v={timeout:5e3,data:{},callback:"jsoncallback",success:function(e){d(e)},fail:function(e){d(e)}},p=function(e){var t=[];for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")},m=document.getElementsByTagName("head")[0],h=function(e){e=e||{};for(var t in v){var n=t,o=v[t];e[n]===undefined&&(e[n]=o)}if("string"!=typeof e.url)throw new Error("option.url 不合法");var r=document.createElement("script"),a=function(){return"ydEffectJsonp_"+(Math.random()+"").substr(2)}(),i=function(){var t={};for(var n in e.data)t[n]=e.data[n];return t[e.callback]=a,t._t=(Math.random()+"").substr(2),t}(),u=e.url+"?"+p(i);window[a]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.success.apply(e,t),m.removeChild(r),clearTimeout(r.timer),window[a]=null},r.src=u,r.type="text/javascript",r.charset="utf-8",m.appendChild(r),r.timer=setTimeout(function(){e.fail(u+" Request timed out!"),m.removeChild(r),window[a]=null},e.timeout),r.onerror=function(e){throw new Error("Request error")}},g=function(e){return y()[e]},w=function(e,t){var n=y();n[e]=t;var o=E(n);location.search=o},y=function(e){void 0===e&&(e=location.search),e=e.indexOf("?")>-1?e.substr(1,e.length):e;for(var t=e.split("&"),n={},o=0,r=t.length;o<r;o++){var a=t[o].split("=");a[0]&&a[1]&&(n[a[0]]=decodeURIComponent(a[1]))}return n},E=function(e){void 0===e&&(e={});var t="?";for(var n in e){var o=e[n];t+=n+"="+encodeURIComponent(o)+"&"}return t=t.substr(0,t.length-1)};return{event:r,cookie:s,element:l,jsonp:h,url:{get:g,set:w,toJson:y,parse:E}}});