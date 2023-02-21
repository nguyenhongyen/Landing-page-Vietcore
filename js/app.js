
(() => {
	const initTyping = () => {
		let typed = $('#typed');
		if (typed.length === 0) return false;

		new Typed('#typed', {
			stringsElement: '#type-string ',
			typeSpeed: 50,
			backSpeed: 0,
			backDelay: 600,
			startDelay: 0,
			loop: true,
		});

	}
	const handleSwiperTablePrice = function () {
		if ($('.table-price').length) {
			new Swiper('.table-price .swiper', {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 20,
				autoplay: {
					delay: 3500,
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},

				breakpoints: {
					576: {
						slidesPerView: 1
					},
					768: {
						slidesPerView: 1.5
					},
					992: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 2,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleHeaderSlider = function () {
		if ($('#swiper-image').length) {
			new Swiper('#swiper-image .swiper', {
				spaceBetween: 10,
				centeredSlides: true,
				autoplay: {
					delay: 2500,
				},
			});
		}
	}
	const handleHeaderSliderTwo = function () {
		if ($('#swiper-image-two').length) {
			new Swiper('#swiper-image-two .swiper', {
				spaceBetween: 10,
				centeredSlides: true,
				autoplay: {
					delay: 3500,
				},
			});
		}
	}
	const itemCollapseCourse = $('#accordion-question .accordion-button[aria-expanded]');
	itemCollapseCourse.on('click', function () {
		if ($(this).hasClass('show')) return false;
		$('#accordion-question .accordion-collapse.show').each((_, element) => {
			new bootstrap.Collapse(element, {
				show: false
			});
		});
	});

	const handleSectionService = function () {
		if ($('#section-service').length) {
			let elmDescription = $('#section-service');

			let scrollHeight = elmDescription.find('.content').get(0).scrollHeight;

			elmDescription.css('--height', scrollHeight + 'px');

			if (scrollHeight <= elmDescription.innerHeight() + 4) {
				$('#expand-button').remove();
			} else {
				$('#expand-button').click(function () {
					if (elmDescription.hasClass('is-show')) {
						elmDescription.removeClass('is-show');
						$(this).html('Xem thêm <i class="fal fa-angle-down"></i>');
					} else {
						elmDescription.addClass('is-show');
						$(this).html('Thu gọn <i class="fal fa-angle-up"></i>');
					}
				});
			}
		}
	}

	$(function () {
		AOS.init({
			once: true
		});

		initTyping();
		handleHeaderSlider();
		handleHeaderSliderTwo();
		handleSectionService();
		handleSwiperTablePrice();
	});

})();
