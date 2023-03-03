this.TravellersIndex = $page("TravellersIndex Page", {
  travellers: "div[data-cy='flightTraveller']",

  travellersClassAs: function () {
    this.travellers.click();
  },
});
