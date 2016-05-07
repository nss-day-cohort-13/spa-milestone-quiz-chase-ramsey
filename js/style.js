
var Carlot = (function(aug) {

	var currentEdit;
	var currentList;
	var currentInventory;

	aug.cardFocus = function (editElem) {
		editElem.classList.add("card-focus");
		var descList = editElem.querySelector("dl");
		descList.removeAttribute("style");
		descList.classList.add("card-focus-border");
		currentEdit = editElem;
		currentList = descList;
		Carlot.cardEdit();
	};

	aug.cardEdit = function () {
		inventory = Carlot.getInventory();
		currentInventory = inventory.find(function(car) {
			return car.id === currentEdit.id;
		});
		textInput.value = currentInventory.item.description;
	}

	aug.cardFocusOff = function() {
		currentInventory.item.description = textInput.value;
		currentEdit.classList.remove("card-focus");
		currentList.classList.remove("card-focus-border");
		textInput.removeAttribute("disabled", "false");
		textInput.setAttribute("disabled", "true");
		textInput.value = "";
		editMode = false;
		Carlot.editInventory(currentInventory);
	}

	return aug;

}(Carlot || {}));
