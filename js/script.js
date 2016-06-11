(function() {
'use strict';

window.addEventListener('DOMContentLoaded', function() {
  console.log('Hello World!');
}, false);

// For Google Chrome Android...
(function() {
  'use strict';
  var idx;
  var colors = ['red', 'green', 'blue'];
  var elemThemeColor = document.querySelector('meta[name=theme-color]');

  // Initialize
  elemThemeColor.content = colors[0];

  var update = function() {
    elemThemeColor.content =
      colors[(colors.indexOf(elemThemeColor.content)+1)%colors.length];
  }

  setInterval(update, 1000);
})();

})();

/* vim: set et ts=2 sts=2 sw=2 : */
