Router.configure({
    layoutTemplate: 'layout',
    //loadingTemplate: 'loading'
});
Router.map(function() {
    this.route('home', {
        path: '/',
    });
    this.route('about', {
        path: '/about'
    });
    this.route('blog', {
        path: '/blog',
        waitOn: function() {
            return [Meteor.subscribe('posts')];
        },
        data: function() {
            return Posts.find();
        }
    });
    this.route('postDetails', {
        path: '/blog/:slug',
        waitOn: function() {
            return [Meteor.subscribe('posts')];
        },
        data: function() {
            return Posts.findOne({
                slug: this.params.slug
            });
        }
    });
    this.route('portfolio', {
        path: '/portfolio',
        waitOn: function() {
            return [Meteor.subscribe('projects')];
        },
        data: function() {
            return Projects.find();
        }
    });
    this.route('projectDetails', {
        path: '/portfolio/:slug',
        waitOn: function() {
            return [Meteor.subscribe('projects')];
        },
        data: function() {
            return Projects.findOne({
                slug: this.params.slug
            });
        }
    });
    this.route('contact', {
        path: '/contact',
    });
    this.route('notFound', {
        path: '*'
    });
});
//Router.onBeforeAction('loading');