Meteor.publish("projects", function(){
  return Projects.find({ completed: true });
});

Meteor.publish("posts", function(){
  return Posts.find({ published: true });
});