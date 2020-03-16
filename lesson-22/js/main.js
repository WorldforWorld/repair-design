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
      modalBtn = $('[data-toggle=modal]'),
      closelBtn = $('.modal__close'),
      modalHidden = $('.modal__dialog');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closelBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  /* --------------------------------- */
  jQuery(function($){
    modal.mouseup(function (e){ // событие клика по веб-документу
        if (!modalHidden.is(e.target) && modalHidden.has(e.target).length === 0) { //если клик был не по нашему блоку и не по его дочерним элементам
          modal.toggleClass('modal--visible');// скрываем его
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
});

