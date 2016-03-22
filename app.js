var grid = document.querySelector('.grid');

function masonry () {
	var iso = new Isotope( grid, {
	  // options...
	  itemSelector: '.grid-item',
		masonry: {
		  columnWidth: 260
		}
	});
}


(function () {
	console.log(DATA);
	var mockData = DATA;
	grid.style.opacity = '0';

	function shuffleArray(mockData) {
	    for (var i = mockData.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = mockData[i];
	        mockData[i] = mockData[j];
	        mockData[j] = temp;
	    }
	    return mockData;
	}

	shuffleArray(mockData);

	for (var i = 0; i < mockData.length; i++) {
		var gridItem = document.createElement('div');
		gridItem.className = 'grid-item';
		gridItem.innerHTML = "<img src='" + mockData[i].thumbnail + "' >";
		grid.appendChild(gridItem);
	}
})();

setTimeout(function () {
	masonry();
	grid.style.opacity = '1';
}, 500);	