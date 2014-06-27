
Template.projectDetails.project = function(){
    var project = Projects.findOne(Router.current().params.slug);
    console.log(project);
    return project;
}
