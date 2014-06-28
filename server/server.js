if (Meteor.isServer) {

    // Prefill data
    if(Projects.find().count() == 0){
        for(var i = 1; i <= 10; i++)
        {
            Projects.insert({
                name: 'Project ' + i,
                slug:"project" + i,
                description: "Lorem ipsum...",
                completed: true,
                techniques: [
                    {name:"ASP.NET"},
                    {name:"Entity Framework"},
                    {name:"Bootstrap"},
                    {name:"Angular"}
                ]
            });
        }
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