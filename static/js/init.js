(function(doc) {
  var docEl = doc.documentElement,
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 640) {
        docEl.style.fontSize = "100px";
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 640) + "px";
      }
    };
  if (!doc.addEventListener) return;
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document);
window.addEventListener(
  "touchmove",
  function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);
console.log(2222);
