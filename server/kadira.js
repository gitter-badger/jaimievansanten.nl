Meteor.startup(function() {
  if(process.env.NODE_ENV !== "development") {
    Kadira.connect(process.env.KADIRA_API_KEY, process.env.KADIRA_API_SECRET);
  }
});
