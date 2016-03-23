// MOCK DATA
// var json = [{"name":"Minions Prism","project_id":10001,"client":"Minions","campaign":"The Minions Movie","vertical":"Entertainment","goals":["Engagement","Awareness"],"theme":"default", "importance": 3},{"name":"Sony Captivate","project_id":10002,"client":"Sony","campaign":"Alpha A7R II","vertical":"Electronics","goals":["Engagement","Awareness"],"theme":"default", "importance": 3},{"name":"Land Rover Pushdown","project_id":10003,"client":"Land Rover","campaign":"Discovery Sport","vertical":"Automotive","goals":["Awareness"],"theme":"default"},{"name":"Dyson Xplore","project_id":10004,"client":"Dyson","campaign":"Cinetic","vertical":"CPG","goals":["Engagement","Awareness"],"theme":"default"},{"name":"Nordstrom Expandables","project_id":10005,"client":"Nordstrom","campaign":"Spring Look","vertical":"Retail","goals":["Awareness","Conversion"],"theme":"default", "importance": 2},{"name":"Momma G's Billboard","project_id":10006,"client":"Momma G's","campaign":"Wrap Yourself","vertical":"Restaurant","goals":["Awareness","Conversion"],"theme":"default", "importance": 2}, {"name":"Sony Captivate","project_id":10002,"client":"Sony","campaign":"Alpha A7R II","vertical":"Electronics","goals":["Engagement","Awareness"],"theme":"default"}];

// var DATA = json.concat(json).concat(json);

// MASONRY CONFIG
var grid = document.querySelector('.grid');
function masonry () {
	var iso = new Isotope( grid, {
	  // options...
	  layoutMode: 'packery',
	  itemSelector: '.grid-item',
	});
}


(function () {
	// console.log(DATA);
	// var mockData = DATA;
	grid.style.opacity = '0';

	// function shuffleArray(mockData) {
	//     for (var i = mockData.length - 1; i > 0; i--) {
	//         var j = Math.floor(Math.random() * (i + 1));
	//         var temp = mockData[i];
	//         mockData[i] = mockData[j];
	//         mockData[j] = temp;
	//     }
	//     return mockData;
	// }

	// shuffleArray(mockData);

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