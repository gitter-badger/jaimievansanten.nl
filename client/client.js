if (Meteor.isClient) {
  Handlebars.registerHelper("title", function(title) {
      if(title) {
          document.title = title + " / Jaimie van Santen";
      } else {
          document.title = "Jaimie van Santen";
      }
  });

}

// for(var i = 1; i < 1000; i++){ Projects.insert({name: "TestProject " + i, published:true}); }