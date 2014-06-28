
Template.projectDetails.project = function(){
    return Projects.findOne(Router.current().params.slug);
}
