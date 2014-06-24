Projects = new Meteor.Collection('projects');
Posts = new Meteor.Collection('posts');

if(Projects.count === 0){
    for(var i = 1; i <= 10; i++)
    {
        Projects.insert({ name: 'Project ' + i,
                          description: "Lorem ipsum...",
                          completed: true });
    }
}

// db.projects.insert({ name: 'Project', description: "Lorem ipsum...", completed: true });