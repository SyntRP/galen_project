
this.HomePage = $page("Home Page", {

men:"a[aria-label='Men']",
women:"a[aria-label='Women']",
kids:"a[aria-label='Kids']",

  homeAs: function () {
   this.men.hover();
   Thread.sleep(3000)
   this.women.hover();
   Thread.sleep(3000)
   this.kids.hover();
  },
});
