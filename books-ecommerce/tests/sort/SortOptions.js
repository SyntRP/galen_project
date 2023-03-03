
this.SortOptions = $page("SortOptions Page", {
    option: "a[rel='/s/Che+Guevara?Ns=P_Sale_Price%7C1']",
    sortAs: function () {
      this.option.click();
    },
  });
  