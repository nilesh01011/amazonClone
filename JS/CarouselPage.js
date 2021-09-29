'use strict';

var swiper = new Swiper('#swiper_container', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ===================Banner section End==========================

// ==========================carousel secion=====================\

let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let slider = document.getElementById('slider');
let prevBtn_Two = document.getElementById('prevBtn_Two');
let nextBtn_Two = document.getElementById('nextBtn_Two');
let slider_Two = document.getElementById('slider_Two');
let prevBtn_Three = document.getElementById('prevBtn_Three');
let nextBtn_Three = document.getElementById('nextBtn_Three');
let slider_Three = document.getElementById('slider_Three');

prevBtn.addEventListener('click', () => {
  slider.scrollLeft -= 775;
});
nextBtn.addEventListener('click', () => {
  slider.scrollLeft += 775;
});
prevBtn_Two.addEventListener('click', () => {
  slider_Two.scrollLeft -= 775;
});
nextBtn_Two.addEventListener('click', () => {
  slider_Two.scrollLeft += 775;
});
prevBtn_Three.addEventListener('click', () => {
  slider_Three.scrollLeft -= 775;
});
nextBtn_Three.addEventListener('click', () => {
  slider_Three.scrollLeft += 775;
});

// ==========================carousel secion End=====================\
