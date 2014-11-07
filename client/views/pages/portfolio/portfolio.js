Template.portfolio.helpers({
  page: function () {
    return Pages.findOne({ name: "portfolio" });
  },
  projects: function() {
    return Projects.find();
  },
  hasProjects: function() {
    return Projects.find().count() > 0;
  }
});