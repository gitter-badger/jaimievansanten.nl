Template.home.helpers({
  page: function() {
    return Pages.findOne({ name: "home" });
  }
});

Template.home.events({
  
});