load("home/HomePage.js");
load("home/Search.js");
load("home/FromSelect.js");
load("home/ToSelect.js");
load("depart-return/Depart.js");
load("depart-return/Return.js");
load("travellers-class/Travellers.js");
load("travellers-class/TravellersIndex.js");
load("viewPrice/ViewPrice.js");
load("viewPrice/ContinueView.js");



// forAll(
//   [
//     ["mobile", "400x700"],
//     ["tablet", "600x800"],
//     ["desktop", "1024x768"],
//   ],
//   (deviceName, size) => {
//     test("Home page on " + deviceName + " device", function () {
//       const driver = createDriver("http://DXL.com ","1024x768");
//       const loginPage=new LoginPage(driver).waitForIt( {time: "30s"});
//       loginPage.loginAs("t-shirt");
//       //  checkLayout(driver, "specs/home.gspec", [deviceName]);
//       // const logoutpage=new LogoutPage(driver);
//       // logoutpage.logoutAs();
//       // driver.quit();
//     });
//   }
// );
// const driver=createDriver("http://testphp.vulnweb.com/login.php","1024x768");
// const loginPage=new LoginPage(driver).waitForIt();
// loginPage.loginAs("test","test");
// test("Home page", function() {
//    driver = createDriver("https://www.radiustheme.com/demo/wordpress/themes/homlisti/home-5",
//                             "1024x768");
//   checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
// });
test("Home page on " + "desktop" + " device", function () {
  const driver = createDriver("https://www.makemytrip.com/", "1024x768");
  Thread.sleep(10000);
  const homePage = new HomePage(driver).waitForIt();
  homePage.homeAs();
  Thread.sleep(5000)
  checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
  Thread.sleep(5000);
  const searchPage = new Search(driver).waitForIt();
  searchPage.fromAs();
  Thread.sleep(5000);
  const searchPage1 = new FromSelect(driver).waitForIt();
  searchPage1.selectAs();
  Thread.sleep(2000);
  searchPage.toAs();
  Thread.sleep(5000);
  const searchPage2 = new ToSelect(driver).waitForIt();
  searchPage2.selectAs();
  // Thread.sleep(5000);
  // searchPage.departAs();
  Thread.sleep(5000);
  const departPage = new Depart(driver).waitForIt();
  departPage.selectDateAs()
  Thread.sleep(5000);
  searchPage.returnAs();
  Thread.sleep(5000);
  const returnPage = new Return(driver).waitForIt();
  returnPage.selectDateAs()
  Thread.sleep(5000);
  const travellersPage = new TravellersIndex(driver).waitForIt();
  travellersPage.travellersClassAs();
  Thread.sleep(5000);
  const travellersPage1 = new Travellers(driver).waitForIt();
  travellersPage1.travellersAs();
  Thread.sleep(5000);
  travellersPage1.searchAs();
  Thread.sleep(10000);
  const viewPricePage = new ViewPrice(driver).waitForIt();
  viewPricePage.viewPriceAs();
  Thread.sleep(6000);
  const viewPricePage1 = new ContinueView(driver).waitForIt();
  viewPricePage1.viewPriceAs();
  Thread.sleep(2000);
  const driver1 = createDriver("https://www.makemytrip.com/flight/reviewDetails/?itineraryId=a6f1b1fd6ab1c505966b4fa73dbc8a7aae4708d8&crId=d53b1fa3-f4b3-4ce8-ac44-5ac778c0b69e&cur=INR&xflt=eyJjIjoiRSIsInAiOiJBLTJfQy0yX0ktMCIsInQiOiIiLCJzIjoiTUFBLVNGTy0yMDIzMDMyNCRTRk8tTUFBLTIwMjMwNDE0In0=&rKey=RKEY:8118694c-9220-401e-8636-f5a2ebe058ff:49_0&ccde=IN", "1024x768");
  driver.quit()
  Thread.sleep(5000)
  driver.executeScript("window.scrollBy(0,400)");
  Thread.sleep(3000)
  driver.executeScript("window.scrollBy(0,400)");
  Thread.sleep(3000)
  driver.executeScript("window.scrollBy(0,400)");
  Thread.sleep(3000)
  driver.executeScript("window.scrollBy(0,400)");
  Thread.sleep(3000)
  driver1.quit()
});

