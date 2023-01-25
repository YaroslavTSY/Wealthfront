import Swiper, { Pagination, Scrollbar } from 'swiper';

export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	};

	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function scrollTop() {
	const scrollBtn = document.createElement("button");
	scrollBtn.appendChild(document.createElement('span'));
	scrollBtn.setAttribute("id", "scroll-btn");
	document.body.appendChild(scrollBtn);
	const scrollBtnDisplay = function () {
		window.scrollY + 500 > window.innerHeight
			? scrollBtn.classList.add("show")
			: scrollBtn.classList.remove("show");
	};
	window.addEventListener("scroll", scrollBtnDisplay);
	const footerScrollBtn = document.querySelector('#back2top');
	const scrollWindow = function () {
		if (window.scrollY != 0) {
			setTimeout(function () {
				window.scrollTo(0, window.scrollY - 50);
				scrollWindow();
			}, 10);
		}
	};
	scrollBtn.addEventListener("click", scrollWindow);
	footerScrollBtn.addEventListener("click", scrollWindow);
};

export function documentActions(e) {
	const targetElement = e.target;
	const menuLink = document.querySelectorAll('.menu__link');

	if (targetElement.closest('[data-goto]')) {
		const goTo = targetElement.closest('[data-goto]').dataset.goto;
		const goToElement = document.querySelector(goTo);
		const headerHeight = document.querySelector('.header').offsetHeight;

		if (goToElement) {
			window.scrollTo({
				top: goToElement.offsetTop - (headerHeight + 15),
				behavior: "smooth"
			});
		}
		e.prevantDefault;
	}
}

export function sliderTestimonial() {
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
	testimonialSlider;
}