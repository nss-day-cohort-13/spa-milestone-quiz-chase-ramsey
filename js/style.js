
var Carlot = (function(aug) {

	var currentEdit;

	aug.cardFocus = function (editElem) {
		editElem.classList.add("card-focus");
		currentEdit = editElem;
	};

	aug.cardFocusOff = function() {
		currentEdit.classList.remove("card-focus");
		textInput.removeAttribute("disabled", "false");
		textInput.setAttribute("disabled", "true");
		editMode = false;
	}

	return aug;

}(Carlot || {}));
