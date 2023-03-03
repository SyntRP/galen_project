load("home/HomePage.js");
load("home/Search.js");
load("home/Filter.js");
load("home/Sort.js");
load("home/ViewItem.js");
load("home/Quantity.js");
load("home/CheckOut.js");
load("home/Payment.js");


// forAll(
//   [
//     ["mobile", "400x700"],
//     ["tablet", "600x800"],
//     ["desktop", "1024x768"],
//   ],
//   (deviceName, size) => {
//     test("Home page on " + deviceName + " device", function () {
//       const driver = createDriver("https://www.bestbuy.com ",sizes);
//       //  checkLayout(driver, "specs/home.gspec", [deviceName]);
//     });
//   }
// );
test("Home page on " + "desktop" + " device", function () {
  const driver = createDriver("https://www.bestbuy.com/", "1024x768");
  Thread.sleep(5000);
  const homePage = new HomePage(driver).waitForIt();
  homePage.homeAs();
  Thread.sleep(10000);
  checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
  const searchPage = new Search(driver).waitForIt();
  searchPage.searchAs();
  Thread.sleep(5000);
  driver.executeScript("window.scrollBy(0,400)");
  Thread.sleep(3000);
  const sortPage = new Sort(driver).waitForIt();
  sortPage.sortAs();
  driver.executeScript("window.scrollBy(0,200)");
  Thread.sleep(6000);
  const viewItemPage = new ViewItem(driver).waitForIt();
  viewItemPage.viewItemAs();
  Thread.sleep(10000);
  const PaymentPage = new Payment(driver).waitForIt();
  PaymentPage.PaymentAs();
  Thread.sleep(6000);
  // driver.executeScript("window.scrollBy(0,200)");
  const checkOutPage = new CheckOut(driver).waitForIt();
  checkOutPage.checkOutAs();
  Thread.sleep(6000);
  driver.quit()
});

