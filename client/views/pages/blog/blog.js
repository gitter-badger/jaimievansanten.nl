Template.blog.helpers({
    posts: function () {
        return Posts.find({ published: true });
    }
});