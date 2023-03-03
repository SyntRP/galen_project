const from = readFile("config.json");
const to = readFile("config.json");

this.Search = $page("Search Page", {
  from: "input[id='fromCity']",
  to: "input[id='toCity']",
  depart: "label[for='departure']",
  return: "div[data-cy='returnArea']",
  fromAs: function () {
    this.from.typeText(JSON.parse(from).from);
  },
  toAs: function () {
    this.to.typeText(JSON.parse(to).to);
  },
  departAs: function () {
    this.depart.click();
  },
  returnAs: function () {
    this.return.click();
  },
});
