Template.about.helpers({
  page: function () {
    return Pages.findOne({ name: "about" });
  }
});