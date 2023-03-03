this.SelectFromTo = $page("SelectFromTo Page", {
    fromSelect: "li[id='react-autowhatever-1-section-0-item-0']",
    toSelect: "li[id='react-autowhatever-1-section-0-item-0']",

    selectFromAs: function () {
      this.fromSelect.click();
    },
    selectToAs: function () {
      this.toSelect.click();
    },
  
  });
  