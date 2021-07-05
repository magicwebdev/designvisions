$(function(){
  $('.portfolio__slider').slick({
    centerMode: true,
    centerPadding: '210px',
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: true,
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
    prevArrow: '<button class="slick-arrow slick-arrow--prev"><img src="assets/images/icons/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next"><img src="assets/images/icons/arrow-right.svg" alt="arrow-right"></button>'
  });
});