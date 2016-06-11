(function() {
'use strict';

window.addEventListener('DOMContentLoaded', function() {
  console.log('Hello World!');

  // For Google Chrome Android...
  (function() {
    'use strict';
    var idx;
    var colors = ['red', 'green', 'blue'];
    var elemThemeColor = document.querySelector('meta[name=theme-color]');

    if (!elemThemeColor) {
      return;
    }

    elemThemeColor.content = colors[Math.floor(Math.random()*colors.length)];

    //// Initialize
    //elemThemeColor.content = colors[0];

    //var update = function() {
    //  elemThemeColor.content =
    //    colors[(colors.indexOf(elemThemeColor.content)+1)%colors.length];
    //}
    //
    //setInterval(update, 1000);
  })();

}, false);

})();

/* vim: set et ts=2 sts=2 sw=2 : */
