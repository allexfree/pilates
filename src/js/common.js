'use strict';

$(document).ready(function () {

  $('.reviews__slider').slick({
    mobileFirst: true,
    dots: true,
    dotsClass: 'reviews__slider-pagination',
    arrows: false,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 763,
        settings: {
          arrows: true,
          appendArrows: $('.reviews__slider'),
          prevArrow: '<button class="reviews__slider-btn" type="button" aria-label="Предыдущий слайдер"></button>',
          nextArrow: '<button class="reviews__slider-btn" type="button" aria-label="Следующий слайдер"></button>',
          //centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

});
