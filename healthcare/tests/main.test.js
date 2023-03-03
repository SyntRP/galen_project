load("home/HomePage.js");
load("home/Search.js");
load("filter/AvailabilityFilter.js");
load("filter/AvailabilityDate.js");
load("filter/AllFilters.js");
load("filter/FeesFilter.js");
load("sort/Sort.js");
load("sort/PriceSort.js");
load("doctor/ViewDoctor.js");
load("appointment/DoctorInfo.js");
load("appointment/BookAppoinment.js");
load("appointment/NextAvailability.js");
load("appointment/BookingTime.js");
load("home/CheckOut.js");
load("home/Payment.js");
// load("Address.js");

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
  const driver = createDriver("https://www.practo.com/", "1024x768");
  Thread.sleep(5000);
  checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
  Thread.sleep(5000);

  const homePage = new HomePage(driver).waitForIt();
  homePage.homeAs();
  // Thread.sleep(5000);

  Thread.sleep(5000);
  const searchPage = new Search(driver).waitForIt();
  searchPage.searchAs();

  Thread.sleep(5000);
  // driver.executeScript("window.scrollBy(0,400)");
  // Thread.sleep(3000);
  const filterPage = new AvailabilityFilter(driver).waitForIt();
  filterPage.filterAs();
  Thread.sleep(2000);
  const filterPage1 = new AvailabilityDate(driver).waitForIt();
  filterPage1.filterAs();
  Thread.sleep(2000);
  const filterPage2 = new AllFilters(driver).waitForIt();
  filterPage2.filterAs();
  Thread.sleep(2000);
  const filterPage3 = new FeesFilter(driver).waitForIt();
  filterPage3.filterAs();
  // Thread.sleep(2000);
  // driver.executeScript("window.scrollBy(0,-400)");
  Thread.sleep(3000);
  const sortPage = new Sort(driver).waitForIt();
  sortPage.sortAs();
  Thread.sleep(3000);
  const sortPage1 = new PriceSort(driver).waitForIt();
  sortPage1.sortAs();
  // Thread.sleep(3000);
  // const viewDoctorPage = new ViewDoctor(driver).waitForIt();
  // viewDoctorPage.viewDoctorAs();
  Thread.sleep(4000);
  const driver1 = createDriver(
    "https://www.practo.com/coimbatore/doctor/dr-krishnasamy-s-pediatrician?practice_id=1194446&specialization=Fever%20treatment&referrer=doctor_listing&category_name=service&category_id=144555",
    "1024x768"
  );
  driver.quit();
  // Thread.sleep(4000);
  // const appointmentPage = new DoctorInfo(driver1).waitForIt();
  // appointmentPage.appointmentAs();
  // driver1.executeScript("window.scrollBy(0,400)")
  // Thread.sleep(3000);
  const appointmentPage1 = new BookAppoinment(driver1).waitForIt();
  appointmentPage1.appointmentAs();
  Thread.sleep(2000);
  const appointmentPage2 = new NextAvailability(driver1).waitForIt();
  appointmentPage2.appointmentAs();
  Thread.sleep(2000);
  const appointmentPage3 = new BookingTime(driver1).waitForIt();
  appointmentPage3.appointmentAs();
  Thread.sleep(2000);

  // driver.quit()
});
