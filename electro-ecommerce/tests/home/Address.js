const firstName = readFile("config.json");

this.Address = $page("Address Page", {
  FirstName: "input[name='firstname']",

  AddressAs: function () {
    this.FirstName.typeText(JSON.parse(firstName).FirstName);
  },
});
