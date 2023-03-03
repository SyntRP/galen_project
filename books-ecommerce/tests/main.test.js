load("home/HomePage.js");
load("home/Search.js");
load("filter/Filter.js");
load("filter/PriceFilter.js");
load("sort/Sort.js");
load("sort/SortOptions.js");
load("viewItem/ViewItem.js");
load("addToCart/AddToCart.js");
load("addToCart/ShoppingCart.js");
load("addToCart/ViewCart.js");
load("checkOut/CheckOut.js");



// forAll(
//   [
//     ["mobile", "400x700"],
//     ["tablet", "600x800"],
//     ["desktop", "1024x768"],
//   ],
//   (deviceName, size) => {
//     test("Home page on " + deviceName + " device", function () {
//       const driver = createDriver("https://www.barnesandnoble.com/ ",size);
//       //  checkLayout(driver, "specs/home.gspec", [deviceName]);
//     });
//   }
// );

test("Home page on " + "desktop" + " device", function () {
  const driver = createDriver("https://www.barnesandnoble.com/", "1024x768");
  Thread.sleep(7000);
  const homePage = new HomePage(driver).waitForIt();
  homePage.homeAs();
  Thread.sleep(5000)
  checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
  Thread.sleep(5000);
  const searchPage = new Search(driver).waitForIt();
  searchPage.searchAs();
  Thread.sleep(10000);
  const filterPage = new Filter(driver).waitForIt();
  filterPage.filterAs();
  Thread.sleep(5000);
  // const filterPage1 = new PriceFilter(driver).waitForIt();
  // filterPage1.filterAs();
  // Thread.sleep(2000);
  // driver.executeScript("window.scrollBy(0,-400)");
  // Thread.sleep(3000);
  const sortPage = new Sort(driver).waitForIt();
  sortPage.sortAs();
  Thread.sleep(3000);
  const sortPage1 = new SortOptions(driver).waitForIt();
  sortPage1.sortAs();
  Thread.sleep(3000);
  const viewItemPage = new ViewItem(driver).waitForIt();
  viewItemPage.viewBook();
  Thread.sleep(6000);
  // const choosingVariant = new Quantity(driver).waitForIt();
  // choosingVariant.quantityAs();
  // Thread.sleep(1000);
  driver.executeScript("window.scrollBy(0,400)")
  Thread.sleep(5000);
  const addToCartPage = new AddToCart(driver).waitForIt();
  addToCartPage.addToCartAs();
  Thread.sleep(5000);
  const addToCartPage1 = new ShoppingCart(driver).waitForIt();
  addToCartPage1.addToCartAs();
  Thread.sleep(3000);
  const addToCartPage2 = new ViewCart(driver).waitForIt();
  addToCartPage2.addToCartAs();
  Thread.sleep(7000);
  const checkOutPage = new CheckOut(driver).waitForIt();
  checkOutPage.checkOutAs();
  Thread.sleep(6000);
});

