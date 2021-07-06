$(function () {
  $('.portfolio__slider').slick({
    centerMode: true,
    centerPadding: '210px',

    dots: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          centerMode: false,
        }
      },
      {
        breakpoint: 530,
        settings: {
          centerMode: false,
          dots: false,
        },
      },
    ],
  });
  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow:
      '<button class="slick-arrow slick-arrow--prev"><img src="assets/images/icons/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button class="slick-arrow slick-arrow--next"><img src="assets/images/icons/arrow-right.svg" alt="arrow-right"></button>',
  });
  $('.header__toggle-btn').on('click', function () {
    $('.header__toggle-btn--1').toggleClass('active');
    $('.header__toggle-btn--2').toggleClass('active');
    $('.header__toggle-btn--3').toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('.header__menu-btn').toggleClass('active');
  });
});
