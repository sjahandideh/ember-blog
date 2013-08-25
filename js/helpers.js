Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).format('d MMMM YYYY');
});

var converter = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('md', function(text) {
  //return new Ember.Handlebars.SafeString(converter.makeHtml(text));
  return Ember.String.htmlSafe(converter.makeHtml(text));
});
