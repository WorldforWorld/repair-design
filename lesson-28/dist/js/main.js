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
  var three = $('.three');
  var four = $('.four');


  var swiper = new Swiper (one, {
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
  var mySwiper = new Swiper (three, {
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
  var mySwiper4 = new Swiper (four,  {
    loop: true,
    progressbarOpposite: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        if (index == 0) {
          return '<span class="' + className  + ' steps__bullet' + '">' + '<span class="' + 'steps__index' + '">' + 0 + (index + 1) + '</span>'  + '<span class="' + 'steps__name' + '">' + 'Выезд на замер помещения' + '</span>' + '</span>';
        }
        if (index == 1) {
          return '<span class="' + className  + ' steps__bullet' + '">' + '<span class="' + 'steps__index' + '">' + 0 + (index + 1) + '</span>'  + '<span class="' + 'steps__name' + '">' + 'Составление сметы' + '</span>' + '</span>';
        }
        if (index == 2) {
          return '<span class="' + className  + ' steps__bullet' + '">' + '<span class="' + 'steps__index' + '">' + 0 + (index + 1) + '</span>'  + '<span class="' + 'steps__name' + '">' + 'Разработка  дизайн проекта' + '</span>' + '</span>';
        }
        if (index == 3) {
          return '<span class="' + className  + ' steps__bullet' + '">' + '<span class="' + 'steps__index' + '">' + 0 + (index + 1) + '</span>'  + '<span class="' + 'steps__name' + '">' + 'Закупка расходных материалов' + '</span>' + '</span>';
        }
        if (index == 4) {
          return '<span class="' + className  + ' steps__bullet' + '">' + '<span class="' + 'steps__index' + '">' + 0 + (index + 1) + '</span>'  + '<span class="' + 'steps__name' + '">' + 'Ремонтно-отделочные работы' + '</span>' + '</span>';
        }
        if (index == 5) {
          return '<span class="' + className  + ' steps__bullet' + '">' + '<span class="' + 'steps__index' + '">' + 0 + (index + 1) + '</span>'  + '<span class="' + 'steps__name' + '">' + 'Приемка-сдача работ' + '</span>' + '</span>';
        }
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    controller: {
      control: mySwiper,
      by: mySwiper,
    }
  });
  mySwiper.update();

  
  var next =$('.swiper-button-next');
  var nexts =$('.nexts');
  var prev =$('.swiper-button-prev');
  var bullets =$('.swiper-pagination');

  bullets.css('left', prev.width()+25);
  next.css('left', prev.width() +10 + bullets.width() + 30);
  nexts.css('left', prev.width() +10 + bullets.width() + 120);
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
      },
      policyCheckboxs: {
        required: true
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
      },
      policyCheckboxs: {
        required: "Подтвердите соглашение"
      }
    },

    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
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
  $('.offer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userNameoffer: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneoffer: "required",
      // правило-объект (блок)
      userEmailoffer: {
        required: true,
        email: true
      },
      policyCheckboxoffer: {
        required: true
      }
    }, // сообщения
    errorElement: "div",
    messages: {
      userNameoffer: {
        required:"Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Слишком длинное имя"
      },
      userPhoneoffer: "Заполните поле",
      userEmailoffer: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckboxoffer: {
        required: "Подтвердите соглашение"
      }
    },

    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          message.toggleClass('message--visible');
          $(form)[0].reset();
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
      policyCheckbox: {
        required: true
      }
    }, // сообщения
    errorElement: "div",
    messages: {
      userName2: {
        required:"Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Слишком длинное имя"
      },
      userPhone2: "Заполните поле",
      policyCheckbox: {
        required: "Подтвердите соглашение"
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
      policyCheckboxss: {
        required: true
      }
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
      policyCheckboxss: {
        required: "Подтвердите соглашение"
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
  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [47.208901, 39.631539], // координаты центра на карте
    zoom: 9, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([47.208901, 39.631539], {
    hintContent: 'Наш офис',
    balloonContent: 'Вход со двора'
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/marker.png',
      // Размеры метки.
      iconImageSize: [32, 32],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=a0935634-5e5a-4ebb-94cb-26085c4739f8&lang=ru_RU", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
  };
  
  $(function() {
  
    //Запускаем основную функцию
    ymap();
  
  });

});

