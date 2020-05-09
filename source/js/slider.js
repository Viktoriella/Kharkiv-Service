$(document).ready(function() {
  $('.slider').slick({
  draggable: true,
  centerMode: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
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
        slidesToScroll: 3,
        variableWidth: true,
        dots: true,
        speed: 1000,
        accessibility: false,
        useTransform: true,
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


    $('.slick-cloned .video--play').on('click', function () {
          var overlay = document.querySelector('.popup__overlay');
          var popup = document.querySelector('.popup');
          var popupCloseButton = popup.querySelector('.popup__close');

          var closePopup = function() {
            popup.classList.remove('popup--show');
            overlay.classList.remove('popup__overlay--show');
          };

          var popupHandler = function() {
            popup.classList.add('popup--show');
            overlay.classList.add('popup__overlay--show');

            popupCloseButton.addEventListener('click', function(evt) {
              evt.preventDefault();
              closePopup();
            });

            var closePopupEsc = function(evt) {
              if (evt.keyCode === 27) {
                evt.preventDefault();
                closePopup();
                document.removeEventListener('keydown', closePopupEsc);
              }
            };
            document.addEventListener('keydown', closePopupEsc);
          };


          popup.classList.add('popup--show');
          overlay.classList.add('popup__overlay--show');

          popupCloseButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            closePopup();
          });

          var closePopupEsc = function(evt) {
            if (evt.keyCode === 27) {
              evt.preventDefault();
              closePopup();
              document.removeEventListener('keydown', closePopupEsc);
            }
          };
          document.addEventListener('keydown', closePopupEsc);
  });

});
