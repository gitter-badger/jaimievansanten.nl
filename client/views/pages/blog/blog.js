Template.blog.helpers({
    posts: function () {
        return Posts.find({ published: true });
    },

    hasPosts: function() {
        return Posts.find().count() > 0;
    }
});