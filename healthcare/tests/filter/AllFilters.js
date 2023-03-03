

this.AllFilters = $page("AllFilters Page", {

    allFilters: "span[data-qa-id='all_filters']",
 
    filterAs: function () {
      this.allFilters.click();

    },
  });
  