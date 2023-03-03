this.HomePage = $page("Home Page", {
  shopDog: "li[id='menu-item-1197']",
  shopCat: "li[id='menu-item-13193']",
  brands: "li[id='menu-item-400443']",
  service: "li[id='menu-item-3657']",

  homeAs: function () {
    this.shopDog.hover();
    Thread.sleep(3000);
    this.shopCat.hover();
    Thread.sleep(3000);
    this.brands.hover();
    Thread.sleep(3000);
    this.service.hover();
  },
});
