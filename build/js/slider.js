$('.slider').slick({
  draggable: true,
  centerMode: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  mobileFirst: true,
  prevArrow: '<button class="slider__arrow slider__arrow--left"></button>',
  nextArrow: '<button class="slider__arrow slider__arrow--right"></button>',
  respondTo: 'slider',
  responsive: [
    // {
    //   breakpoint: 1367,
    //   settings: {
    //     initialSlide: 0,
    //     centerMode: false,
    //     infinite: true,
    //     centerPadding: '0',
    //     slidesToShow: 3,
    //     variableWidth: true,
    //     dots: true,
    //     speed: 900,
    //     accessibility: false,
    //     draggable: false
    //   }
    // },
    {
      breakpoint: 1021,
      settings: {
        initialSlide: 0,
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 3,
        variableWidth: true,
        dots: true,
        speed: 900,
        accessibility: false,
        draggable: true
        }
      }
     
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

    $(window).on('resize', function() {
        $('.carousel').slick('resize');
    });