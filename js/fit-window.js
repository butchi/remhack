window.licker = window.licker || {};
(function (ns, $) {
  'use strict';

  var $html;
  var WIDTH = 320;
  var FONT_SIZE = 10;

  function resizeHandler() {
    var w = Math.max($(this).width() / WIDTH * FONT_SIZE, 10);
    $html.css({
      "font-size": w + 'px'
    });
  }

  $(function () {
    $html = $('html');

    $('.checkbox--fit-window').on('change', function () {
      if ($(this).is(':checked')) {
        $(window).on('resize', resizeHandler).trigger('resize');
      } else {
        $(window).off('resize', resizeHandler);
        $html.css({
          "font-size": ''
        });
      }
    }).trigger('change');
  });
}(window.licker, window.jQuery));
