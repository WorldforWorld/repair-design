/* document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalHidden = document.querySelector('.modal__dialog');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const closeBtns = document.querySelector('.modal--visible');
  

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key == 27) {

      modal.classList.remove('modal--visible');
    }
}, false);
  modal.addEventListener('click', function (e) {
    const target = e.target;
    const modalHiddens = target == modalHidden || modalHidden.contains(target);
    if (!modalHiddens) {
      modal.classList.remove('modal--visible');
    }
  }, false);
}); */

$(document).ready(function () {
  var modal = $('.modal'),
      message = $('.message'),
      modalBtn = $('[data-toggle=modal]'),
      closelBtn = $('.modal__close'),
      closelMessageBtn = $('.message__close'),
      modalHidden = $('.modal__dialog');
      modalHiddenMessage = $('.message__dialog');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closelBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closelMessageBtn.on('click', function () {
    message.toggleClass('message--visible');
  });
  /* --------------------------------- */
  jQuery(function($){
    modal.mouseup(function (e){ // событие клика по веб-документу
        if (!modalHidden.is(e.target) && modalHidden.has(e.target).length === 0) { //если клик был не по нашему блоку и не по его дочерним элементам
          modal.toggleClass('modal--visible');// скрываем его
        }
    });
    message.mouseup(function (e){ // событие клика по веб-документу
      if (!modalHiddenMessage.is(e.target) && modalHiddenMessage.has(e.target).length === 0) { //если клик был не по нашему блоку и не по его дочерним элементам
        message.toggleClass('message--visible');// скрываем его
      }
    });
  });
  /* -------------------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
  });
  $('#upbutton').click(function() {
      $('html, body').stop().animate({scrollTop : 0}, 800);
  });
  /* --------------------------------------------- */
  var one = $('.one');
  var two = $('.two');
  var three = $('.three');
  var four = $('.four');


  var mySwiper = new Swiper (one, {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var mySwiper2 = new Swiper (two, {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var mySwiper3 = new Swiper (three, {
    loop: true,
    pagination: {
      el: '.five',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  var swiper = new Swiper (four, {
    loop: true,
    pagination: {
      el: '.swiper-paginations',
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + ' yulya' + '">' + '<span class="' + ' yulyas' + '">' + 0 + (index + 1)  + '</span>' + '<br>' + '<span class="' + ' yulyass' + '">' + 'Выезд на замер помещения' + '</span>' + '</span>';
    },
    },
  });
  var next =$('.swiper-button-next');
  var nexts =$('.nexts');
  var prev =$('.swiper-button-prev');
  var bullets =$('.swiper-pagination');

  bullets.css('left', prev.width()+25);
  next.css('left', prev.width() +10 + bullets.width() + 30);
  nexts.css('left', prev.width() +10 + bullets.width() + 100);
  /* var yulya = $('.yulya');
  var umnichka = $('#two');
  jQuery(function($){
    document.removeClass('.swiper-slide-active');
      yulya.on('click', function (index) {
        umnichka.toggleClass('.swiper-slide-active');
      });
    }); */
  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения
    errorElement: "div",
    messages: {
      userName: {
        required:"Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Слишком длинное имя"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          message.toggleClass('message--visible');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName2: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone2: "required",
    }, // сообщения
    errorElement: "div",
    messages: {
      userName2: {
        required:"Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Слишком длинное имя"
      },
      userPhone2: "Заполните поле",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          message.toggleClass('message--visible');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName3: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone3: "required",
      userQuestion: "required",
    }, // сообщения
    errorElement: "div",
    messages: {
      userName3: {
        required:"Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Слишком длинное имя"
      },
      userPhone3: "Заполните поле",
      userQuestion: "Введите свой вопрос",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          message.toggleClass('message--visible');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });
  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

  // создание yandex карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.208901, 39.631539],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
        var  bigMap = false;
        function toggle () {
          bigMap = !bigMap;
      
          // Добавляем/убираем CSS-класс, определяющий размеры контейнера карты,
          // заданные в абсолютных единицах (300x200 px).
          if (bigMap) {
              $('#map').removeClass('smallMap');
          } else {
              $('#map').addClass('smallMap');
          }
      
          // Если выставлен флаг, сообщаем карте, что ей следует
          // привести свои размеры к размерам контейнера.
          if ($('#checkbox').prop('checked')) {
              myMap.container.fitToViewport();
          }
      }
    myMap.geoObjects
        .add(myPlacemark);
});
});

