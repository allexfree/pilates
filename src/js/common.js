'use strict';

$(document).ready(function () {

  $('.reviews__slider').slick({
    mobileFirst: true,
    dots: true,
    dotsClass: 'reviews__slider-pagination',
    arrows: false,
    centerMode: true,
    variableWidth: true
  });

});
