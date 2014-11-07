Session.setDefault("sendingEmail", false);

Template.contact.helpers({
  page: function () {
    return Pages.findOne({ name: "contact" });
  },
  sendingEmail: function() {
    return Session.get("sendingEmail");
  }
});

Template.contact.events({
    'submit form': function(evt,tmpl){
        evt.preventDefault();

        var name    = $(evt.target).find('[id=name]'),
            email   = $(evt.target).find('[id=email]'),
            subject = $(evt.target).find('[id=subject]'),
            message = $(evt.target).find('[id=message]');

        // VisualCaptcha.validateCaptcha(function(){
            Session.set("sendingEmail", true);

            Meteor.call("sendContactEmail", email.val(), subject.val(), message.val());

            name.val("");
            email.val("");
            subject.val("");
            message.val("");
        // });
    }
});