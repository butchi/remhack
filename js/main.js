window.licker = window.licker || {};
(function (ns, $) {
  'use strict';

  $(function () {
    (function getSource() {
      var $codeLang = $('<div class="code-lang"></div>');
      var $highlight = $('<div class="highlight"></div>');
      var $preCode = $('<pre><code></code></pre>');
      var htmlTxt = _.template(
        '<html>\n' +
        '  <head>' +
        '<%= head %>\n' +
        '  </head>\n' +
        '  <body>' +
        '<%= body %>\n' +
        '  </body>\n' +
        '</html>'
      )({
        head: $('head').html().replace(/\s+$/, '').replace(/\n/g, '\n  '),
        body: $('body').html().replace(/\s+$/, '').replace(/\n/g, '\n  ')
      });
      $('.block-source--html').append($highlight.clone().append($codeLang.clone().text('index.html'))).append($preCode.clone().text(htmlTxt));

      var cssFileArr = [
        'css/breakpoint.css',
        'css/screen.css'
      ];

      var $blockSrcCss = $('.block-source--css');
      cssFileArr.forEach(function (fileName) {
        $.ajax({
          url: fileName,
          dataType: 'text',
          success: function (res) {
            var cssTxt = res;
            var $elm = $preCode.clone();

            $('.block-source--css').append($highlight.clone().append($codeLang.clone().text(fileName))).append($preCode.clone().text(cssTxt));
          }
        });
      });
    }());
  });
}(window.licker, window.jQuery));
