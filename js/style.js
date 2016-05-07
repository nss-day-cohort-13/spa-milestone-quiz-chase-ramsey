
var Carlot = (function(aug) {

	aug.cardFocus = function (editElem) {
		editElem.classList.add("card-focus");
	};

	aug.cardFocusOff = function(editElem) {
		editElem.classList.remove("card-focus");
	}

	return aug;

}(Carlot || {}));
