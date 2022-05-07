const wrap = document.querySelector('.nav-wrap');
const menuTogle = document.querySelector('.menu-togle');
const nav = document.querySelector('.ul');
menuTogle.addEventListener('click', function () {
  nav.classList.toggle('slide');
  menuTogle.classList.toggle('burger');
  wrap.classList.toggle('wrap-active');
});

document.querySelectorAll('li').forEach(function (li) {
  li.addEventListener('click', function () {
    nav.classList.remove('slide');
    menuTogle.classList.remove('burger');
    wrap.classList.remove('wrap-active');
  });
});

var selector = '#z-nav li';

$(selector).on('click', function () {
  $(selector).removeClass('active');
  $(this).addClass('active');
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('nav').classList.add('nav-color');
    document.querySelector('nav').classList.remove('nav-transparent');
  } else {
    document.querySelector('nav').classList.add('nav-transparent');
    document.querySelector('nav').classList.remove('nav-color');
  }
};