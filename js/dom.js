
var Carlot = (function(aug) {

	var outputDiv = document.getElementById("output");
	var textInput = document.getElementById("input");
	textInput.setAttribute("disabled", "true");

	aug.populatePage = function (inventory) {
		var buildHTML = "";
		inventory.forEach(function(car) {
			buildHTML += `<div id="${car.id}" class="card column col-lg-3">` +
											`<h2>${car.item.make} ${car.item.model}</h2>` +
									 		`<dl style="border-color:${car.item.color}">` +
									 			`<dt>Year</dt><dd>${car.item.year}</dd>` +
									 			`<dt>Price</dt><dd>$${car.item.price}</dd>` +
									 			`<dt>Color</dt><dd class="text-capitalize">${car.item.color}</dd>` +
									 			`<dt>Description</dt><dd class="text-justify">${car.item.description}</dd>` +
									 			`<dt>Availability</dt>`;
									 			if (car.item.purchased === "false") {
									 			buildHTML += `<dd class="available">Available</dd>`;
									 			} else {
									 				buildHTML += `<dd class="backorder">On backorder</dd>`;
									 			}
			buildHTML +=		`</dl>` +
								 		`</div>` +
								 		`<div class="column col-lg-1"></div>`;
		});
		outputDiv.innerHTML = buildHTML;
		Carlot.activateEvents();
	};

	aug.activateEvents = function () {
		var cards = Array.from(document.getElementsByClassName("card"));
		cards.forEach(function(card) {
			card.addEventListener("click", function() {
				textInput.removeAttribute("disabled", "true");
				textInput.focus("true");
				var editElem = document.getElementById(this.id);
				Carlot.cardFocus(editElem);
			});
		});
	};

	return aug;

}(Carlot || {}));
