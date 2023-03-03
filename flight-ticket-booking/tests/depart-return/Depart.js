this.Depart = $page("Depart Page", {
  departSelectDate:"div[aria-label='Fri Mar 24 2023']",
  selectDateAs: function () {
    this.departSelectDate.click();
  },
});
