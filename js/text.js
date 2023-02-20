;(function ($) {
	'use strict';

	const optionProject = $('#option-project')
	const selectProject = $('#section-project')

	const product = {
		categories: [
			{
				category_id: 1,
				name: "Tất cả",
				text: 'tat-ca'
			},
			{
				category_id: 2,
				name: "Xe hơi",
				text: 'xe-hoi'

			},
			{
				category_id: 3,
				name: "Bán hàng",
				text: 'ban-hang'
			},
			{
				category_id: 4,
				name: "Du lịch",
				text: 'du-lich'
			},
			{
				category_id: 5,
				name: "Sàn Thương mại điện tử",
				text: 'thuong-mai-dien-tu'
			}
		],
		projects: [
			{
				id: 1,
				name: "Quảng Bình Ford",
				link: "https://quangninhford.com.vn/",
				image: "img/web-1.jpg",
				category_id: 2,
				text: 'xe-hoi',
			},
			{
				id: 2,
				name: "Honda",
				link: "https://quangninhford.com.vn/",
				image: "img/web-2.jpg",
				category_id: 2,
				text: 'xe-hoi',
			},
			{
				id: 3,
				name: "Bánh ướt cây me",
				link: "https://banhuotcayme.vn/",
				image: "img/web-3.jpg",
				category_id: 3,
				text: 'ban-hang',
			},
			{
				id: 4,
				name: "Du lịch",
				link: "https://patravel.com.vn/",
				image: "img/web-4.jpg",
				category_id: 4,
				text: 'du-lich',
			},
			{
				id: 5,
				name: "Cần Thơ Ford",
				link: "https://quangninhford.com.vn/",
				image: "img/web-5.jpg",
				category_id: 2,
				text: 'xe-hoi',
			},
			{
				id: 6,
				name: "Quảng Bình Ford 2222",
				link: "https://quangninhford.com.vn/",
				image: "img/web-6.jpg",
				category_id: 5,
				text: 'thuong-mai-dien-tu',
			},
			{
				id: 7,
				name: "demo",
				link: "https://quangninhford.com.vn/",
				image: "img/web-5.jpg",
				category_id: 3,
				text: 'ban-hang',
			},
			{
				id: 8,
				name: "Cần Thơ Ford 444",
				link: "https://quangninhford.com.vn/",
				image: "img/web-5.jpg",
				category_id: 2,
				text: 'xe-hoi',
			},
			{
				id: 9,
				name: "Quảng Bình Ford 99",
				link: "https://quangninhford.com.vn/",
				image: "img/web-6.jpg",
				category_id: 5,
				text: 'thuong-mai-dien-tu',
			},
			{
				id: 10,
				name: "demo 0000",
				link: "https://quangninhford.com.vn/",
				image: "img/web-5.jpg",
				category_id: 2,
				text: 'xe-hoi',
			},
			{
				id: 11,
				name: "demo 1",
				link: "https://quangninhford.com.vn/",
				image: "img/web-5.jpg",
				category_id: 2,
				text: 'xe-hoi',
			},
			{
				id: 12,
				name: "demo 2",
				link: "https://quangninhford.com.vn/",
				image: "img/web-5.jpg",
				category_id: 2,
				text: 'xe-hoi',
			},
			{
				id: 13,
				name: "demo 3",
				link: "https://quangninhford.com.vn/",
				image: "img/web-5.jpg",
				category_id: 2,
				text: 'xe-hoi',
			},
		],
		render: function () {
			renderOption(product)
			renderProject(product)
		}

	}

	const renderOption = function (product) {
		const itemSelect = product.categories.map((category) => {
			return `<option data-id="${category.category_id}" value="${category.text}">${category.name}</option>`
		})
		optionProject.html(itemSelect.join(''));
	}

	const renderProject = function (product) {
		const itemProject = product.projects.map(project => {

			return `
				 <div class="product col name tat-ca ${project.text}" data-id="${project.category_id}">
					 <div class="section-theme__item">
						 <div class="ratio ratio-16x9">
						 <img src="${project.image}" class="background-contain" alt="${project.name}">
						 </div>
					 <div class="section-theme__content">
						 <div class="theme-inner">
							 <div class="theme-title">${project.name}</div>
							<div class="theme-text">${product.categories.find(item => item.category_id === project.category_id).name}</div>
						 </div>
						<a href="${project.link}" class="link-blog link-default btn-project">Demo</a>
					 </div>
					</div>
				</div>`;

		})
		selectProject.html(itemProject.join(''));
	}

	$(document).ready(() => {
		product.render()

		const $grid = $('#section-project').isotope({
			itemSelector: '.product',
			layoutMode: 'fitRows',
			filter: product.projects.length >= 12 ? ':nth-child(-n+6)' : ''
		});

		const filterFns = {
			2: function () {
				const name = $(this).find('.name').text();
				return name.match(/2$/);
			}
		};

		$('#option-project').change(function (event) {
			let filterValue = this.value;
			filterValue = filterFns[filterValue] || filterValue;
			if (filterValue === 'tat-ca') {
				filterValue += ':nth-child(-n+6)';
			}

			$grid.isotope({
				filter: `.${filterValue}`,
			});

		});

	});
})(jQuery);
