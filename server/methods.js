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