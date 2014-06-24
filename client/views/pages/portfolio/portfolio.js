Template.portfolio.projects = function(){
    return Projects.find();
}

Template.portfolio.hasProjects = function(){
    return Projects.find().count() > 0;
}