
this.DoctorInfo = $page("DoctorInfo Page", {
    doctorInfo: "li[data-qa-id='info-tab']",
  
    appoinmentAs: function () {
      this.doctorInfo.click();
    },
  });
  