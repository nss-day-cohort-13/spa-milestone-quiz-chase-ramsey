
var Carlot = (function(aug) {

	var inventory = [];

	function CarObj(item, id) {
		this.item = item;
		this.id = id;
	}

	aug.loadInventory = function(newCar) {
		var data = JSON.parse(this.responseText);
		for (var i = 0; i < data.cars.length; i++) {
			newCar = new CarObj(data.cars[i], `car${i}`);
			inventory.push(newCar);
		}
		Carlot.populatePage(inventory);
		console.log("inventory: ", inventory);
	};

	aug.getInventory = function() {
		return inventory;
	};

	return aug;

}(Carlot || {}));
