!function(e){function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s="eqeL")}({"/vH4":function(e,n){},"7wMe":function(e,n){},eqeL:function(e,n,t){"use strict";function a(e,n,t){var a;return function(){var o=this,i=arguments,r=function(){a=null,t||e.apply(o,i)},p=t&&!a;clearTimeout(a),a=setTimeout(r,n),p&&e.apply(o,i)}}t("uMhA"),t("/vH4"),t("7wMe"),document.addEventListener("DOMContentLoaded",function(e){if(pageConfig&&pageConfig.pageIndex&&pageConfig.pageSize){var n=new XMLHttpRequest;n.open("GET","/posts/pagination",!0),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=JSON.parse(n.responseText),t=Math.ceil(e.total/pageConfig.pageSize);if(pageConfig.pageIndex>t&&t>1)window.location.href="/posts/page/"+t;else if(1===t)return;var a="";pageConfig.pageIndex>1&&(a+='<a class="page-num prev" href="/posts/page/'+(pageConfig.pageIndex-1)+'" title="上一页"></a>');for(var o=1;o<t+1;o++)a+=o===pageConfig.pageIndex?'<span class="page-num current">'+o+"</span>":'<a class="page-num" href="/posts/page/'+o+'">'+o+"</a>";pageConfig.pageIndex<t&&(a+='<a class="page-num next" href="/posts/page/'+(pageConfig.pageIndex+1)+'" title="下一页"></a>');var i=document.createElement("div");i.classList.add("pagination"),i.innerHTML=a,document.getElementsByClassName("main-inner")[0].appendChild(i)}},n.send()}var t=0;window.addEventListener("scroll",a(function(e){var n=window.scrollY,a=document.getElementById("header");n>t?a.classList.add("hide"):a.classList.remove("hide"),t=n},100))})},uMhA:function(e,n){}});