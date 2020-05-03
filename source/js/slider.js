$('.slider').slick({
  centerMode: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  prevArrow: '<button class="slider__arrow slider__arrow--left"></button>',
  nextArrow: '<button class="slider__arrow slider__arrow--right"></button>',
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        initialSlide: 1,
      	centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 3,
        variableWidth: true,
        dots: true,
        speed: 900,
        accessibility: false,
        draggable: false
      }
     }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});