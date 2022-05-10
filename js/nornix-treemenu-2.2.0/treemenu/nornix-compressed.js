/*
Nornix Common JavaScript  <http://nornix.sourceforge.net/>
Version: 0.5 (2008-03-11)
Build time: 2008-03-11 19:02 UTC
*/
if(!Nornix){var Nornix={events:{},cookies:{},css:{},dom:{},util:{}}}if(document.addEventListener){Nornix.events.add=function(D,C,B,A){D.addEventListener(C,B,A)};Nornix.events.remove=function(D,C,B,A){D.removeEventListener(C,B,A)}}else{if(document.attachEvent){Nornix.events.add=function(C,B,A){C["e"+B+A]=A;C[B+A]=function(){var D=window.event;D.target=window.event.srcElement;C["e"+B+A](D)};C.attachEvent("on"+B,C[B+A])};Nornix.events.remove=function(C,B,A){C.detachEvent("on"+B,C[B+A]);C[B+A]=null;C["e"+B+A]=null}}else{Nornix.events.add=Function;Nornix.events.remove=Function}}Nornix.events.cancel=function(A,B){A.returnValue=false;if(A.preventDefault){A.preventDefault()}if(B){A.cancelBubble=true;if(A.stopPropagation){A.stopPropagation()}}};Nornix.events.delayedInit=function(E,D,A){var B;if(A===undefined){A=10}var C=window.setInterval(function(){if(B=document.getElementById(E)){window.clearInterval(C);D(B)}},A)};Nornix.cookies.create=function(C,D,E){var A;if(E){var B=new Date();B.setTime(B.getTime()+(E*24*60*60*1000));A="; expires="+B.toGMTString()}else{A=""}document.cookie=C+"="+D+A+"; path=/"};Nornix.cookies.read=function(B){var D=B+"=";var A=document.cookie.split(";"),C=0,E;while(E=A[C++]){E=Nornix.util.trim(E);if(E.indexOf(D)===0){return E.substring(D.length,E.length)}}return""};Nornix.cookies.erase=function(A){createCookie(A,"",-1)};Nornix.css.swap=function(D,E,F){if(!D){return }if(!D.className||D.className.length===0){D.className=F?F:"";return }var A=D.className.split(" "),C=0,B;while(B=A[C++]){if(B===E){if(F){A[C-1]=F;D.className=A.join(" ");return }else{delete A[C-1];D.className=A.join(" ");return }}else{if(B===F){D.className=A.join(" ");return }}}if(F){A[A.length]=F}D.className=A.join(" ")};Nornix.css.add=function(B,A){return Nornix.css.swap(B,null,A)};Nornix.css.remove=function(B,A){return Nornix.css.swap}();Nornix.css.contains=function(E,D){if(!E||!E.className){return false}var A=E.className.split(" "),C=0,B;while(B=A[C++]){if(B===D){return true}}return false};Nornix.css.getPos=function(A){var B={x:A.offsetLeft||0,y:A.offsetTop||0};while(A=A.offsetParent){B.x+=A.offsetLeft||0;B.y+=A.offsetTop||0}return B};Nornix.css.getProperty=function(B,A){if(window.getComputedStyle){return function(D,C){return window.getComputedStyle(D,"").getPropertyValue(C)}}return function(D,C){return D.currentStyle?D.currentStyle[Nornix.css.prop2Js(C)]:null}}();Nornix.css.prop2Js=function(E){var A=E.split("-");if(A.length>1){var D=A[0],C=1,B;while(B=A[C++]){D+=B.charAt(0).toUpperCase()+B.substr(1)}return D}return E};Nornix.dom.live2copy=function(D){var C=[],A=0,B;while(B=D[A++]){C[C.length]=B}return C};Nornix.dom.getTextContent=function(A){if(typeof A.textContent!="undefined"){return A.textContent}else{return A.innerText}};Nornix.dom.imagePreload=function(D,C){var B=0,A;while(A=D[B++]){(new Image()).src=C+A}};Nornix.dom.findChildOfType=function(B,F,C,A){var E;if(!A){var D=0;while(E=B.childNodes[D++]){if(Nornix.dom.eqNodeName(E,F)){return C(E)}}}else{var D=B.childNodes.length-1;while(E=B.childNodes[D--]){if(Nornix.dom.eqNodeName(E,F)){return C(E)}}}};Nornix.dom.eqNodeName=function(A,B){if(A&&A.nodeName&&A.nodeName.toLowerCase()===B){return true}return false};Nornix.util.trim=function(A){return A.replace(/^\s*|\s*$/g,"")};Nornix.util.isIe=document.all&&window.opera===undefined;