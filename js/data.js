
var Carlot = (function(aug) {

	var inventory = [];

	function CarObj(item, id) {
		this.item = item;
		this.id = id;
	}

	aug.loadInventory = function(newCar) {
		var requestData = new XMLHttpRequest();
		requestData.addEventListener("load", function () {
			var data = JSON.parse(this.responseText);
			for (var i = 0; i < data.cars.length; i++) {
				newCar = new CarObj(data.cars[i], `car${i}`);
				inventory.push(newCar);
			}
		Carlot.populatePage(inventory);
		});
		requestData.open("GET", "js/inventory.json");
		requestData.send();
	};

	aug.getInventory = function() {
		return inventory;
	};

	aug.editInventory = function(editedItem) {
		var toChange = inventory.find(function(car) {
			return car.id === editedItem.id;
		});
		toChange.item.description = editedItem.item.description;
		toChange.item.purchased = editedItem.item.purchased;
		Carlot.populatePage(inventory);
	}

	return aug;

}(Carlot || {}));
