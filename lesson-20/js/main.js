document.addEventListener("DOMContentLoaded", function(event) {
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
  /* ----------------------------------------------- */
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
});

