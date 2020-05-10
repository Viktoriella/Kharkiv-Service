'use strict';

(function(){
	var showPopupButtons = document.querySelectorAll('.video--play');
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

		overlay.addEventListener('click', function(evt) {
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
	
	// showPopupButton.addEventListener('click', function(evt) {
	// 	evt.preventDefault();
	// 	popupHandler();
	// });

	showPopupButtons.forEach(function(button) {
		button.addEventListener('click', function(evt) {
		evt.preventDefault();
		popupHandler();
		});
	})

}());