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
  //E-mail Ajax Send
	$('.contact__form').on('submit', function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

window.addEventListener('load', function () {
  let menu = document.querySelector('.header__menu-list');
  let links = menu.querySelectorAll('.header__menu-link');
  let btnUp = document.querySelector('.up__btn');
  let scrollTimeout;

  window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(actionsOnScroll, 200);
  });

  function actionsOnScroll() {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition > window.innerHeight) {
      btnUp.classList.add('up__btn-visible');
    } else {
      btnUp.classList.remove('up__btn-visible');
    }
  }

  menu.addEventListener('click', function (e) {
    let link = e.target;
    if (link.classList.contains('header__menu-link')) {
      e.preventDefault();
      scrollToAnchor(link.hash);
    }
  });

  if (location.hash !== '') {
    scrollToAnchor(location.hash);
  }

  btnUp.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  function scrollToAnchor(id) {
    let anchor = document.querySelector(id);
    if (anchor !== null) {
      let position = anchor.offsetTop; // если необходмо отступить от верха, вычесть нужное число (anchor.offsetTop - 70)
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  }
});
