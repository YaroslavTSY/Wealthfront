import * as functions from "./modules/functions.js";
import Swiper, { Pagination, Scrollbar } from 'swiper';
functions.isWebp();
functions.isMobile;


//! Checking Mobile or PC device
if (functions.isMobile.any()) {
	document.body.classList.add('_touch');
	//! Opening second menu (add class "_active" while click on point) 
	let menuArrows = document.querySelectorAll('.menu__open-link')
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

//! Menu Burger
let iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menu = document.querySelector('.menu__body');
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}



window.onload = function () {
	//! Swiper Slider
	const testimonialSlider = new Swiper('.testimonial__slider', {
		modules: [Pagination, Scrollbar],
		enabled: true,
		slidesPerView: 1,
		spaceBetween: 16,
		autoHeight: true,
		pagination: {
			enabled: true,
			el: '.swiper-pagination',
			type: 'bullets',
		},
		scrollbar: {
			enabled: true,
			el: '.swiper-scrollbar',
			draggable: true,
			dragClass: 'swiper-scrollbar-drag',
			snapOnRelease: true,
		},
		breakpoints: {
			992: {
				enabled: false,
				scrollbar: false,
			}
		}
	});
}