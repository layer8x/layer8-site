if ($('#hero').length > 0) {
  (function () {
    var $navbar = $('.navbar');
    var transparentColor = 'rgba(0, 0, 0, 0.2)';
    var solidColor = 'rgb(55, 90, 127)';
    var transitioning = false;
    var speed = 200;
    var transistionOffset = $('#main-index').position().top - 80;

    function transistionColor(event) {
      transitioning = true;
      if ($(window).scrollTop() > transistionOffset) {
        if ($navbar.css('background-color') == transparentColor) {
          $navbar.animate({'background-color': solidColor}, speed);
        }
      } else {
        if ($navbar.css('background-color') == solidColor) {
          $navbar.animate({'background-color': transparentColor}, speed);
        }
      }
      transitioning = false;
    }

    function transitionCheck(event) {
      if (transitioning) {
        return
      } else {
        transistionColor(event);
      }
    }

    $(window).scroll(transitionCheck);

    $(window).resize(transitionCheck);

    $(function () {
      if ($(window).scrollTop() > transistionOffset) {
        $navbar.css('background-color', solidColor);
      } else {
        $navbar.css('background-color', transparentColor);
      }
    });
  })();
}
