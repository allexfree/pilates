'use strict';

$(document).ready(function () {

  //menu

  $(window).resize(function() {
    $('.main-menu').css('display', 'none');
    $('.main-menu').css('opacity', '0');
  });

  $('.menu-burger').click(function() {
    $('.main-menu').css('display', 'flex');
    $('.main-menu').offset({
      top: 0,
    });
    $('.main-menu').fadeTo(100, 1);
  });

  $('.main-menu__btn-close').click(function() {
    if ($(window).width() < 764) {
      $('.main-menu').offset({
        top: - $('.page-header').outerHeight()
      });
    } else if ($(window).width() === 764 || $(window).width() < 1366) {
      $('.main-menu').offset({
        top: - $('.page-header').outerHeight()
      });
    } else {
      $('.main-menu').offset({
        top: - $('.page-header').outerHeight()
      });
    }
    $('.main-menu').fadeTo(100, 0);
  });

  $('.main-menu__link').click(function() {
    $('html, body').stop().animate({
    scrollTop: $(this.hash).offset().top
    }, 1000);
  })


  //popups

  $('.schedule__content-item-btn').click(function() {
    $('.popups-overlay').css('display', 'flex');
    $('.pre-entry-popup').css('display', 'flex');
  });

  $('#close-pre-entry-popup').click(function() {
    $('.popups-overlay').css('display', '');
    $('.pre-entry-popup').css('display', '');
    $('.pre-entry-popup__form input').val('');
    $('#user-confirm').prop('checked', false);
    if ($('#pre-entry-form-submit').attr('disabled') === undefined) {
      $('#pre-entry-form-submit').attr('disabled', '')
    }
  });

  $('#user-confirm').click(function() {
    if ($(this).prop('checked')) {
      $('#pre-entry-form-submit').removeAttr('disabled')
    } else {
      $('#pre-entry-form-submit').attr('disabled', '')
    }
  });


  //slider

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
          prevArrow: '<button class="reviews__slider-btn" type="button" aria-label="Предыдущий слайд"></button>',
          nextArrow: '<button class="reviews__slider-btn" type="button" aria-label="Следующий слайд"></button>',
          //centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

});
