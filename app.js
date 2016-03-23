// MASONRY CONFIG
var grid = document.querySelector('.grid');
function masonry () {
	var iso = new Isotope( grid, {
	  layoutMode: 'packery',
	  itemSelector: '.grid-item',
	});
};

(function () {
	grid.style.opacity = '0';

	for (var i = 0; i < 50; i++) {
		var gridItem = document.createElement('div');
		gridItem.className = 'grid-item';
		gridItem.innerHTML = '<div class="itemOverlay"></div>';
		grid.appendChild(gridItem);

		if (i % 3 === 0) {
			gridItem.id = 'wide';
		} else if (i % 5 === 0) {
			gridItem.id = 'tall';
		}
	}
})();

setTimeout(function () {
	masonry();
	grid.style.opacity = '1';
}, 500);