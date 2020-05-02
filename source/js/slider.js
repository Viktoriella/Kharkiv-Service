$('.slider').slick({
  centerMode: false,
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  prevArrow: '<button class="slider__arrow slider__arrow--left"></button>',
  nextArrow: '<button class="slider__arrow slider__arrow--right"></button>',
  responsive: [
    {
      breakpoint: 1920,
      settings: {
      	centerMode: true,
        infinite: false,
        centerPadding: '0',
        centerPadding: '0',
        slidesToShow: 3,
        variableWidth: true,
        dots: true
      }
     }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});