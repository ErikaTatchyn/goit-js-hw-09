!function(){function e(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=t.target.elements.delay.value,o=t.target.elements.step.value,i=t.target.elements.amount.value,c=0;c<i;c++){e(c,Number(n)+Number(o)*c).then((function(e){console.log("✅ Fulfilled promise ".concat(position," in ").concat(n,"ms"))})).catch((function(e){console.log("❌ Rejected promise ".concat(position," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.620bf66f.js.map
