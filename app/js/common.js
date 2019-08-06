$(function() {

  $(".greeting_content").owlCarousel({
    loop: true,
    mouseDrag: true,
    margin: 0,
    items: 1,
    autoPlay: true,
    URLhashListener: true,
    startPosition: 'URLHash',
    navSpeed: 500
  });

  $(".partners_carousel").owlCarousel({
    loop: true,
    mouseDrag: true,
    nav: true,
    navText: ['<img src="img/arrow-right1.png">', '<img src="img/arrow-left1.png">'],
    margin: 0,
    slideBy: 5,
    items: 3,
    navSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      650: {
        items: 3,
      },
    }
  });

  $(".traveling_carousel").owlCarousel({
    loop: true,
    mouseDrag: true,
    nav: true,
    navText: ['<img src="img/arrow-right2.png">', '<img src="img/arrow-left2.png">'],
    margin: 10,
    items: 4,
    navSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      440: {
        items: 2,
      },
      600: {
        items: 3,
      },
      750: {
        items: 4,
      },
      920: {
        items: 2,
      },
      980: {
        items: 2,
      },
      1400: {
        items: 3,
      },
      1700: {
        items: 4,
      },
    }
  });

  $(".carousel_quality").owlCarousel({
    loop: true,
    mouseDrag: true,
    nav: true,
    navText: ['<img src="img/arrow-right2.png">', '<img src="img/arrow-left2.png">'],
    margin: 0,
    items: 5,
    navSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      630: {
        items: 3,
      },
      970: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    }
  });

  $(".user-phone").mask("+7(999) 999-9999");

  $(".content .media .media_content .item").on("click", function () {
    $(".content .media .media_content .item").removeClass("item_active");
    $(this).addClass("item_active");
    return false;
  });

  $("body").on("click", function () {
    $(".content .media .media_content .item").removeClass("item_active");
  });

  $(".header_top-center, .header_top-center .mnu").on("click", function (e) {
    e.stopPropagation();
    $(".head_menu").fadeIn(400);
    return false;
  });

  $(".close-btn, body").on("click", function (e) {
    e.stopPropagation();
    $(".head_menu").fadeOut(400);
  });

});

$(document).ready(function () { // модальное окно форма обратной связи
  $('.popup-btn').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400,
        function () {
          $('#modal_form')
              .css('display', 'block')
              .animate({opacity: 1, top: '50%'}, 200);
        });
  });

  $('.modal_close, #overlay').click(function () {
    $('#modal_form')
        .animate({opacity: 0, top: '45%'}, 200,
            function () {
              $(this).css('display', 'none');
              $('#overlay').fadeOut(400);
            }
        );
  });
});

$(document).ready(function () { // модальное окно форма обратной связи
  $('.popup-btn2').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400,
        function () {
          $('#modal_form2')
              .css('display', 'block')
              .animate({opacity: 1, top: '50%'}, 200);
        });
  });

  $('.modal_close, #overlay').click(function () {
    $('#modal_form2')
        .animate({opacity: 0, top: '45%'}, 200,
            function () {
              $(this).css('display', 'none');
              $('#overlay').fadeOut(400);
            }
        );
  });
});

$(document).ready(function () { // модальное окно форма обратной связи
  $('.popup-btn3').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400,
        function () {
          $('#modal_form3')
              .css('display', 'block')
              .animate({opacity: 1, top: '50%'}, 200);
        });
  });

  $('.modal_close, #overlay').click(function () {
    $('#modal_form3')
        .animate({opacity: 0, top: '45%'}, 200,
            function () {
              $(this).css('display', 'none');
              $('#overlay').fadeOut(400);
            }
        );
  });
});

$(document).ready(function () { // модальное окно форма обратной связи
  $('.popup-btn4').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400,
        function () {
          $('#modal_form4')
              .css('display', 'block')
              .animate({opacity: 1, top: '50%'}, 200);
        });
  });

  $('.modal_close, #overlay').click(function () {
    $('#modal_form4')
        .animate({opacity: 0, top: '45%'}, 200,
            function () {
              $(this).css('display', 'none');
              $('#overlay').fadeOut(400);
            }
        );
  });
});

$(document).ready(function () { // модальное окно форма обратной связи
  $('.popup-btn5').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400,
        function () {
          $('#modal_form5')
              .css('display', 'block')
              .animate({opacity: 1, top: '50%'}, 200);
        });
  });

  $('.modal_close, #overlay').click(function () {
    $('#modal_form5')
        .animate({opacity: 0, top: '45%'}, 200,
            function () {
              $(this).css('display', 'none');
              $('#overlay').fadeOut(400);
            }
        );
  });
});

$(document).ready(function () { //плавный скролл
  $('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
    }
    return false;
  });
});

$(document).ready(function() {

  $(".form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $(".form").trigger("reset");
    });
    return false;
  });

});
