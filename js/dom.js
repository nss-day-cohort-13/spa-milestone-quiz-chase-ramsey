
var Carlot = (function(aug) {

	var outputDiv = document.getElementById("output");

	aug.populatePage = function (inventory) {
		console.log("inventory: ", inventory);
		var buildHTML = "";
		inventory.forEach(function(car) {
			buildHTML += `<div class="card column col-lg-3">` +
											`<h2>${car.make} ${car.model}</h2>` +
									 		`<dl style="border-color:${car.color}">` +
									 			`<dt>Year</dt><dd>${car.year}</dd>` +
									 			`<dt>Price</dt><dd>$${car.price}</dd>` +
									 			`<dt>Color</dt><dd class="text-capitalize">${car.color}</dd>` +
									 			`<dt>Description</dt><dd class="text-justify">${car.description}</dd>` +
									 		`</dl>` +
								 		`</div>` +
								 		`<div class="column col-lg-1"></div>`;
		})
		outputDiv.innerHTML = buildHTML;
	};

	aug.activateEvents = function () {

	};

	return aug;

}(Carlot || {}));
