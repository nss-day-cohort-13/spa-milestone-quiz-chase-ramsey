
var Carlot = (function(aug) {

	var inventory = [];

	aug.loadInventory = function() {
		var data = JSON.parse(this.responseText);
		data.cars.forEach(function (car) {inventory.push(car);});
	};

	aug.getInventory = function() {
		return inventory;
	};

	return aug;

}(Carlot || {}));
