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
    this.route('project', {
        path: '/portfolio/:_id',
        data: function() {
            return Projects.findOne(this.params._id);
        }
    });
    this.route('contact', { path: '/contact'});

    this.route('notFound', {
      path: '*'
    });
});

//Router.onBeforeAction('loading');