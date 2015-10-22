if ($('#hero').length > 0) {
  (function () {
    var $navbar = $('.navbar');
    var transparentColor = 'rgba(0, 0, 0, 0.2)';
    var solidColor = 'rgb(55, 90, 127)';
    var transitioning = false;
    var speed = 200;

    function transistionColor(event) {
      transitioning = true;
      if ($(window).scrollTop() > 796) {
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

    $(window).scroll(function (e) {
      if (transitioning) {
        return
      } else {
        transistionColor(e);
      }
    });

    $(function () {
      if ($(window).scrollTop() > 796) {
        $navbar.css('background-color', solidColor);
      } else {
        $navbar.css('background-color', transparentColor);
      }
    });
  })();
}
