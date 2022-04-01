let logIn = document.querySelector('.header-logIn');
let popup = document.querySelector('.popup');
let close = document.querySelector('.popup__close');

logIn.addEventListener('click', function() {
    popup.classList.add('open');
    document.body.style.overflowY = 'hidden';
});

close.addEventListener('click', function() {
    popup.classList.remove('open');
    document.body.style.overflowY = 'visible';
});