
Template.projectDetails.helpers ({
    project: function(){
        return Projects.findOne(Router.current().params.slug);
    }
});

Template.projectDetails.rendered = function () {
  // Deps.autorun(function() {
  //   $(function() {
  //     // $('#screenshot-carousel').carousel();
  //     // $("#screenshot-carousel > ol > li:nth-child(1)").addClass("active");
  //     // $("#screenshot-carousel > div > div:nth-child(1)").addClass("active");
  //   });
  // });
};