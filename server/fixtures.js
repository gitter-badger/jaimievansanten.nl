if(Meteor.isServer) {
    // Prefill data
    if(Meteor.users.find().count() == 0) {
        console.log("No users found, inserting default user");

        Accounts.createUser({
            username: 'jaimievansanten',
            password: process.env.USUAL_PASSWORD,
            email: 'jaimie@jaimievansanten.nl',
            profile: {
                name: 'Jaimie van Santen'
            }
        });
    }

    if(Techniques.find().count() == 0) {
        console.log("No techniques found, inserting sample data");

        Techniques.insert({ name: "ASP.NET MVC" });
        Techniques.insert({ name: "Entity Framework" });
        Techniques.insert({ name: "PHP" });
        Techniques.insert({ name: "Java" });
        Techniques.insert({ name: "NodeJS" });
        Techniques.insert({ name: "Foundation" });
        Techniques.insert({ name: "Bootstrap" });
        Techniques.insert({ name: "AngularJS" });
        Techniques.insert({ name: "Meteor" });
        Techniques.insert({ name: "jQuery" });
        Techniques.insert({ name: "AngularJS"}),
        Techniques.insert({ name: "LESS"}),
        Techniques.insert({ name: "Ruby on Rails"}),
        Techniques.insert({ name: "Zend Framework"}),
        Techniques.insert({ name: "SQL Server"}),
        Techniques.insert({ name: "MySQL"}),
        Techniques.insert({ name: "MongoDB"});
        Techniques.insert({ name: "Meteor"});
    }

    if(Projects.find().count() == 0){
        console.log("No projects found, inserting sample data");

        var technique1 = Techniques.findOne({ name: "ASP.NET MVC"}),
            technique2 = Techniques.findOne({ name: "Entity Framework"}),
            technique3 = Techniques.findOne({ name: "Bootstrap"}),
            technique4 = Techniques.findOne({ name: "jQuery"});

        var projectTitle = "Co-Acting",
            sluggedTitle = projectTitle
                            .replace(/^\s+|\s+$/g, '') // trim
                            .toLowerCase()
                            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                            .replace(/\s+/g, '-') // collapse whitespace and replace by -
                            .replace(/-+/g, '-'); // collapse dashes

        Projects.insert({
            name: projectTitle,
            slug: sluggedTitle,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            client: "Möhle + Landman",
            website: "http://co-acting.nl",
            completed: true,
            date_created: new Date(),
            date_completed: new Date(),
            techniques: [
                technique1, technique2, technique3, technique4
            ],
            logo: "http://co-acting.nl/img/logo.png",
            screenshots: [
                { url: "http://co-acting.nl/img/portfolio/afspraak.png", alt: "Online afspraken maken", description: "Online afspraken maken", position: 0},
                { url: "http://co-acting.nl/img/portfolio/indicators.png", alt: "Indicators aanmaken", description: "Indicators aanmaken", position: 1},
                { url: "http://co-acting.nl/img/portfolio/dossier.png", alt: "Online rapportages uitdraaien", description: "Online rapportages uitdraaien", position: 2}
            ]
        });
    }

    if(Posts.find().count() == 0){
        console.log("No posts found, inserting sample data");

        var technique1 = Techniques.findOne({ name: "ASP.NET MVC"});

        var postTitle = "First Post",
            sluggedTitle = postTitle
                            .replace(/^\s+|\s+$/g, '') // trim
                            .toLowerCase()
                            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                            .replace(/\s+/g, '-') // collapse whitespace and replace by -
                            .replace(/-+/g, '-'); // collapse dashes

        Posts.insert({
            name: postTitle,
            slug: sluggedTitle,
            description: "Lorem ipsum...",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Jaimie van Santen",
            authorId: Meteor.users.findOne({ username: "jaimievansanten"})._id,
            published: true,
            date_created: new Date(),
            date_modified: new Date(),
            techniques: [
                technique1, technique2, technique3, technique4
            ]
        });
    }

    if(Pages.find().count() == 0){
        console.log("No pages found, inserting sample data");

        var pages = [
        {
            name: "home",
            title: "Welcome!",
            header: "Welcome to my humble website, feel free to have a look around :)"
        },
        {
            name: "about",
            title: "About me",
            header: "Hi there! My name is Jaimie van Santen."
        },
        {
            name: "blog",
            title: "Codeblogs",
            header: "Me, just babbling about something that caught my attention lately."
        },
        {
            name: "portfolio",
            title: "Portfolio",
            header: "Projects I've had some kind of contribution to."
        },
        {
            name: "contact",
            title: "Contact me",
            header: "Contact me about any questions or offerings."
        }
        ];

        for(var i = 0; i < pages.length; i++) {
            Pages.insert(pages[i]);
        }
    }

}