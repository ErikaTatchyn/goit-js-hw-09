function t(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("[data-stop]"),o=document.querySelector("[data-start]");let d;e.disabled=!0,o.onclick=function(){d=setInterval(t,1e3),this.disabled=!0,e.disabled=!1},e.onclick=function(){clearInterval(d),this.disabled=!0,o.disabled=!1};
//# sourceMappingURL=01-color-switcher.c15dda75.js.map