this.Sort = $page("Sort Page", {
  // cookies: "button[data-var='closeBtn']",
  select: "button[aria-label='Price: High-Low']",
  sortAs: function () {
    // this.cookies.click();
    // Thread.sleep(3000);
    this.select.click();
    Thread.sleep(5000);
    // this.Item.click();
  },
});
