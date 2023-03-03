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
//       const driver = createDriver("https://www.theelectriconline.com ",size);
//    
//       //  checkLayout(driver, "specs/home.gspec", [deviceName]);
//  
//     });
//   }
// );

test("Home page on " + "desktop" + " device", function () {
  const driver = createDriver("https://www.theelectriconline.com/", "1024x768");
  Thread.sleep(5000);
  const homePage = new HomePage(driver).waitForIt();
  homePage.homeAs();
  Thread.sleep(5000);
  checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
  Thread.sleep(5000);
  const searchPage = new Search(driver).waitForIt();
  searchPage.searchAs();
  Thread.sleep(5000);
  driver.executeScript("window.scrollBy(0,400)");
  Thread.sleep(3000);
  const filterPage = new Filter(driver).waitForIt();
  filterPage.filterAs();
  Thread.sleep(2000);
  driver.executeScript("window.scrollBy(0,-400)");
  Thread.sleep(3000);
  const sortPage = new Sort(driver).waitForIt();
  sortPage.sortAs();
  Thread.sleep(3000);
  const viewItemPage = new ViewItem(driver).waitForIt();
  viewItemPage.viewItemAs();
  Thread.sleep(6000);
  const choosingVariant = new Quantity(driver).waitForIt();
  choosingVariant.quantityAs();
  Thread.sleep(1000);
  const checkOutPage = new CheckOut(driver).waitForIt();
  checkOutPage.checkOutAs();
  Thread.sleep(6000);
  const PaymentPage = new Payment(driver).waitForIt();
  PaymentPage.PaymentAs();
  Thread.sleep(3000);
  driver.quit()
});

