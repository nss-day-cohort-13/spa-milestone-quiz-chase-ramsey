
var Carlot = (function(aug) {

	aug.cardFocus = function (editElem) {
		console.log("click");
		editElem.classList.toggle("card-focus");
	};

	return aug;

}(Carlot || {}));
