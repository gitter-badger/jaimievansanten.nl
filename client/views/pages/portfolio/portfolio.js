Template.portfolio.projects = function(){
    return Projects.find();
}

Template.portfolio.hasProjects = function(){
    return Projects.find().count() > 0;
}

Template.portfolio.events({
  'click .project': function(evt, tmpl) {
    Router.go('projectDetails', { slug: this.slug })
  }
});