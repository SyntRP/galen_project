
this.HomePage = $page("Home Page", {
  iframe: "iframe[id='webklipper-publisher-widget-container-notification-frame']",
  close: "a[id='webklipper-publisher-widget-container-notification-close-div']",

  homeAs: function () {
    this.close.click();
  },
});
