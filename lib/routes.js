Router.configure({
    layoutTemplate: 'layout',
    //loadingTemplate: 'loading'
});

Router.map(function(){
    this.route('home',      { path: '/'});
    this.route('about',     { path: '/about'});
    this.route('portfolio', {
        path: '/portfolio',
        waitOn: function(){
            return Meteor.subscribe('projects');
        },
        data: function() {
            return Projects.find(); }
    });
    this.route('projectDetails', {
        path: '/project/:slug',
        data: function() {
            return Projects.findOne({ slug: this.params.slug });
        }
    });
    this.route('contact', { path: '/contact'});

    this.route('notFound', {
      path: '*'
    });
});

//Router.onBeforeAction('loading');