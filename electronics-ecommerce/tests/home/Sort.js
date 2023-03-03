
  
this.Sort = $page("Sort Page", {
  // surveyPopup:"button[value='no']",
  select: "select[id='sort-by-select']",
  option: "option[value='Price-High-To-Low']",
  sortAs: function () {
    // if(surveyPopup){
    // this.surveyPopup.click();}
    // else
    this.select.click();
    Thread.sleep(5000);
    this.option.click();
  },
});