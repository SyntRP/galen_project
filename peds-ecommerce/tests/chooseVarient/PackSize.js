this.PackSize = $page("PackSize Page", {
  packSize: "div[class='product_variable_option']",

  packSizeAs: function () {
    this.packSize.click();
  },
});
