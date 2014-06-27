Template.project.project = function(){
    return Projects.findOne({ slug: this.params.slug });
}
