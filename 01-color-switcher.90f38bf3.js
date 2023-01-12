function t(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}let e;document.querySelector("[data-start]").onclick=function(){e=setInterval(t,1e3),this.disabled=!0},document.querySelector("[data-stop]").onclick=function(){clearInterval(e),document.querySelector("[data-start]").disabled=!1};
//# sourceMappingURL=01-color-switcher.90f38bf3.js.map
