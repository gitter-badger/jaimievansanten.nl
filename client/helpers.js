UI.registerHelper("title", function(title) {
  if(title) {
      document.title = title + " / Jaimie van Santen";
  } else {
      document.title = "Jaimie van Santen";
  }
});

UI.registerHelper('randomColor', function(context, options) {
    colors = ['default', 'primary', 'danger', 'warning', 'info', 'success', 'info'];

    return colors[Math.floor(Math.random() * colors.length)];
});

UI.registerHelper('formatDateFromNow', function(context, options) {
    return moment(context).calendar();
});

UI.registerHelper('ellipsis', function(context, options) {
    return context.slice(0, 360).replace(/.{3}$/g, '…');
});

UI.registerHelper('getYear', function(context, options) {
    return new Date(context).getFullYear();
});

UI.registerHelper('typed', function(context, options) {
    return 
    $.this("<p class='typed-paragraph' />").typed({
      strings: context,
      typeSpeed: 0
    });
});