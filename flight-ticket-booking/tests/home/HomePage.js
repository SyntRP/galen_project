this.HomePage = $page("Home Page", {
  cookies: "span[data-cy='handleSnackbarClose']",

  homeAs: function () {
    this.cookies.click();
  },

});
