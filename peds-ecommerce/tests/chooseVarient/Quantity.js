const quantity = readFile("config.json");

this.Quantity = $page("Quantity Page", {
  quantityInput: "input[id='quantity_640183f90ec28']",



  quantityAs: function () {
    this.quantityInput.clear();
    Thread.sleep(3000);
    this.quantityInput.typeText(JSON.parse(quantity).quantity);
    

    

  },
});
