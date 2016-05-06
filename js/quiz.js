
var requestData = new XMLHttpRequest();
requestData.addEventListener("load", Carlot.loadInventory);
requestData.open("GET", "js/inventory.json");
requestData.send();
