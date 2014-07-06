Handlebars.registerHelper('randomColor', function(context, options) {
    colors = ['default', 'primary', 'danger', 'warning', 'info', 'success', 'info'];

    return colors[Math.floor(Math.random() * colors.length)];
});

Handlebars.registerHelper('formatDateFromNow', function(context, options) {
    return moment(context).calendar();
});

Handlebars.registerHelper('ellipsis', function(context, options) {
    return context.slice(0, 360).replace(/.{3}$/g, '…');
});

Handlebars.registerHelper('getYear', function(context, options) {
    return new Date(context).getFullYear();
});