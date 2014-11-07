Template.blog.helpers({
    page: function() {
      return Pages.findOne({ name: "blog" });
    },
    posts: function () {
        return Posts.find({ published: true });
    },

    hasPosts: function() {
        return Posts.find().count() > 0;
    }
});