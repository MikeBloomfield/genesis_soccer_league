document.addEventListener('DOMContentLoaded', function () {
  $(
    '.hero__card-wrapper, .hero__card-wrapper-abs-inner, .hero__card-wrapper-abs-2-inner, .hero__card-wrapper-abs-3-inner',
  ).addClass('active');

  setTimeout(function () {
    $('.hero__card').find('.card-1').removeClass('show');
    $('.hero__card').find('.card-2').addClass('show');
    $('.hero__card-wrapper').each(function () {
      (function ($set) {
        setInterval(function () {
          var $cur = $set.find('.show').removeClass('show');
          var $next = $cur.next().length ? $cur.next() : $set.children().eq(0);
          $next.addClass('show');
        }, 5000);
      })($(this));
    });
  }, 3300);

  // loader
  setTimeout(function () {
    document.querySelector('body').classList.remove('loaded');
  }, 400);

  new WOW().init();
  // lazy load
  // setTimeout(function () {
  // 	$(".js-bg").each(function () {
  // 		$(this).css('background-image', 'url(' + $(this).data("bg") + ')');
  // 	});
  // 	$(".js-img").each(function () {
  // 		$(this).attr('src', $(this).data("src"));
  // 	});
  // }, 200);

  $('.hero__wrapper').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  /* components */

  /*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	*/

  /* components */

  //prevent drag img and a
  const imagesAndLinks = document.querySelectorAll('img, a');
  if (imagesAndLinks) {
    imagesAndLinks.forEach(function (item, i, arr) {
      item.addEventListener('dragstart', function (e) {
        e.preventDefault();
      });
    });
  }

  const handlerResize = function () {
    let viewport_wid = viewport().width;
    let viewport_height = viewport().height;

    // if (viewport_wid <= 991) {

    // }
  };

  window.addEventListener('load', handlerResize);
  window.addEventListener('resize', handlerResize);
});

/* viewport width */
function viewport() {
  let e = window,
    a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return { width: e[a + 'Width'], height: e[a + 'Height'] };
}
/* viewport width */
