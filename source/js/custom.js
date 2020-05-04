'use strict';

(function(){ 

// Ниже код развернуть текст price
	var priceMoreBtn = document.querySelector(".price__button--more");
	var priceInfo = document.querySelector(".price-information");

	var priceHandler = function() {
		if (priceInfo.classList.contains('price-information--closed')) {
			priceMoreBtn.textContent = "Свернуть";
			priceMoreBtn.classList.add('price__button--more--opened');
			priceMoreBtn.classList.remove('price__button--more--closed');
			priceInfo.classList.add('price-information--opened');
			priceInfo.classList.remove('price-information--closed');

		} else if (priceInfo.classList.contains('price-information--opened')) {
			priceMoreBtn.textContent = "Подробнее";
			priceMoreBtn.classList.add('price__button--more--closed');
			priceMoreBtn.classList.remove('price__button--more--opened');
			priceInfo.classList.add('price-information--closed');
			priceInfo.classList.remove('price-information--opened');	
		};
	};

	priceMoreBtn.addEventListener('click', function(evt) {
		evt.preventDefault();
		priceHandler();
	});

// Ниже код развернуть текст price

	var priceMobileBtn = document.querySelector(".price__button--mobile");
	var priceMobile = document.querySelector(".price__tablet-show");

	var priceTableHandler = function() {
		if (priceMobile.classList.contains('price__tablet-show--closed')) {
			priceMobileBtn.textContent = "Свернуть";
			priceMobileBtn.classList.add('price__button--mobile-arrow-up');
			priceMobileBtn.classList.remove('price__button--mobile-arrow-down');
			priceMobile.classList.add('price__tablet-show--opened');
			priceMobile.classList.remove('price__tablet-show--closed');

		} else if (priceMobile.classList.contains('price__tablet-show--opened')) {
			priceMobileBtn.textContent = "Развернуть";
			priceMobileBtn.classList.add('price__button--mobile-arrow-down');
			priceMobileBtn.classList.remove('price__button--mobile-arrow-up');
			priceMobile.classList.add('price__tablet-show--closed');
			priceMobile.classList.remove('price__tablet-show--opened');
		};
	};

	priceMobileBtn.addEventListener('click', function(evt) {
		evt.preventDefault();
		priceTableHandler();
	});

// Ниже код развернуть текст about-us

	var aboutUsBtn = document.querySelector(".about-us__button");
	var aboutUsMore = document.querySelector(".about-us--more");

	var aboutUsBtnHandler = function() {
		if (aboutUsMore.classList.contains('about-us--more--closed')) {
			aboutUsBtn.classList.add('about-us__button--opened');
			aboutUsBtn.classList.remove('about-us__button--closed');
			aboutUsBtn.textContent = "Свернуть";
			aboutUsBtn.classList.remove('about-us__button--closed');
			aboutUsMore.classList.add('about-us--more--opened');
			aboutUsMore.classList.remove('about-us--more--closed');

		} else if (aboutUsMore.classList.contains('about-us--more--opened')) {
			aboutUsBtn.classList.add('about-us__button--closed');
			aboutUsBtn.classList.remove('about-us__button--opened');
			aboutUsBtn.textContent = "Читать больше";
			aboutUsMore.classList.add('about-us--more--closed');
			aboutUsMore.classList.remove('about-us--more--opened');
		};
	};

	aboutUsBtn.addEventListener('click', function(evt) {
		evt.preventDefault();
		aboutUsBtnHandler();
	});

// Ниже код развернуть гарантии

	var garantyButton = document.querySelector(".garanty__button");
	var garantyMore = document.querySelector(".garanty__text--more");

	var garantyButtonHandler = function() {
		if (garantyMore.classList.contains('garanty__text--more--closed')) {
			garantyButton.textContent = "Читать меньше";
			garantyButton.classList.add('garanty__arrow-up');
			garantyButton.classList.remove('garanty__arrow-down');
			garantyMore.classList.add('garanty__text--more--opened');
			garantyMore.classList.remove('garanty__text--more--closed');

		} else if (garantyMore.classList.contains('garanty__text--more--opened')) {
			garantyButton.textContent = "Читать больше";
			garantyButton.classList.add('garanty__arrow-down');
			garantyButton.classList.remove('garanty__arrow-up');
			garantyMore.classList.add('garanty__text--more--closed');
			garantyMore.classList.remove('garanty__text--more--opened');
		};
	};

	garantyButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		garantyButtonHandler();
	});

// Ниже код развернуть бренды

	var brandsButton = document.querySelector(".brands__button--more");
	var brandsMore = document.querySelector(".brands__text--more");

	var brandsButtonHandler = function() {
		if (brandsMore.classList.contains('brands__text--more--closed')) {
			brandsButton.textContent = "Читать меньше";
			brandsButton.classList.add('brands__button__arrow-up');
			brandsButton.classList.remove('brands__button__arrow-down');
			brandsMore.classList.add('brands__text--more--opened');
			brandsMore.classList.remove('brands__text--more--closed');

		} else if (brandsMore.classList.contains('brands__text--more--opened')) {
			brandsButton.textContent = "Читать больше";
			brandsButton.classList.add('brands__button__arrow-down');
			brandsButton.classList.remove('brands__button__arrow-up');
			brandsMore.classList.add('brands__text--more--closed');
			brandsMore.classList.remove('brands__text--more--opened');
		};
	};

	brandsButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		brandsButtonHandler();
	});

}());