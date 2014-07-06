
Template.projectDetails.helpers ({
    project: function(){
        return Projects.findOne(Router.current().params.slug);
    }
});

Template.projectDetails.rendered = function () {
    $(".carousel .item:first-child").addClass("active");
};