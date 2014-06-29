// String to slug
String.prototype.stringToSlug = function(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();
      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
               .replace(/\s+/g, '-') // collapse whitespace and replace by -
               .replace(/-+/g, '-'); // collapse dashes
      return str;
};

if (Meteor.isServer) {

    // Prefill data
    if(Techniques.find().count() == 0) {
        console.log("No techniques found, inserting sample data");

        Techniques.insert({ name:"ASP.NET MVC" });
        Techniques.insert({ name:"Entity Framework" });
        Techniques.insert({ name:"PHP" });
        Techniques.insert({ name:"Java" });
        Techniques.insert({ name:"NodeJS" });
        Techniques.insert({ name:"Foundation" });
        Techniques.insert({ name:"Bootstrap" });
        Techniques.insert({ name:"AngularJS" });
        Techniques.insert({ name:"Meteor" });
        Techniques.insert({ name:"jQuery" });
    }

    if(Projects.find().count() == 0){
        console.log("No projects found, inserting sample data");

        var technique1 = Techniques.findOne({ name: "ASP.NET MVC"}),
            technique2 = Techniques.findOne({ name: "Entity Framework"}),
            technique3 = Techniques.findOne({ name: "Bootstrap"}),
            technique4 = Techniques.findOne({ name: "jQuery"});

            var projectTitle = "Sample Project @@@",
                sluggedTitle = projectTitle
                                .replace(/^\s+|\s+$/g, '') // trim
                                .toLowerCase()
                                .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                                .replace(/\s+/g, '-') // collapse whitespace and replace by -
                                .replace(/-+/g, '-'); // collapse dashes

        Projects.insert({
            name: projectTitle,
            slug: sluggedTitle,
            description: "Lorem ipsum...",
            client: "Sample Client",
            website: "https://www.google.com",
            completed: true,
            techniques: [
                technique1, technique2, technique3, technique4
            ]
        });
    }

    Meteor.publish("projects", function(){
      return Projects.find();
    });

    Meteor.methods({

        sendContactEmail: function (from, subject, message) {

            // Let other method calls from the same client start running,
            // without waiting for the email sending to complete.
            this.unblock();

            Email.send({
              to: "rhoxus@gmail.com",
              from: "no-reply@jaimievansanten.nl",
              replyTo: from,
              subject: "[Contact Me] "+ subject,
              text: message
            });
        }
    });

}