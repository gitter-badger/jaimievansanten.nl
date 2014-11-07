if (Meteor.isClient) {
 Meteor.startup(function() {
    Meteor.subscribe("pages");

    $(".typed").each(function(element) {
      $(element).typed({
        strings: element.val(),
        typeSpeed: 0
      });
    }); 
  });
}
