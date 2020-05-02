'use strict';

(function(){
	var mainNav = document.querySelector('.main-nav__container');
	var mainNavBurger = document.querySelector('.main-nav__show-menu');
	var pageMain = document.querySelector('.page-header__container');


	mainNav.classList.remove('main-nav--nojs');

	var burgerHandler = function() {
		if (mainNav.classList.contains('main-nav--closed')) {
			mainNav.classList.add('main-nav--opened');
			mainNav.classList.remove('main-nav--closed');
			mainNavBurger.classList.add('main-nav__show-menu--opened');
			mainNavBurger.classList.remove('main-nav__show-menu--closed');
			pageMain.classList.add('page-header__container--opened');
			pageMain.classList.remove('page-header__container--closed');

		} else if (mainNav.classList.contains('main-nav--opened')) {
			mainNav.classList.add('main-nav--closed');
			mainNav.classList.remove('main-nav--opened');
			mainNavBurger.classList.remove('main-nav__show-menu--opened');
			mainNavBurger.classList.add('main-nav__show-menu--closed');
			pageMain.classList.add('page-header__container--closed');
			pageMain.classList.remove('page-header__container--opened');
		};
	};

	mainNavBurger.addEventListener('click', function(evt) {
		evt.preventDefault();
		burgerHandler();
	});

	var priceMoreBtn = document.querySelector(".price__button--more");
	var priceInfo = document.querySelector(".price-information");

	var priceHandler = function() {
		if (priceInfo.classList.contains('price-information--closed')) {
			priceMoreBtn.textContent = "Свернуть";
			priceInfo.classList.add('price-information--opened');
			priceInfo.classList.remove('price-information--closed');

		} else if (priceInfo.classList.contains('price-information--opened')) {
			priceMoreBtn.textContent = "Подробнее";
			priceInfo.classList.add('price-information--closed');
			priceInfo.classList.remove('price-information--opened');	
		};
	};

	priceMoreBtn.addEventListener('click', function(evt) {
		evt.preventDefault();
		priceHandler();
	});

var goTopBtn = document.querySelector('.back_to_top');
	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

}());