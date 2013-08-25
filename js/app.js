App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 13,
  adapter:  'DS.FixtureAdapter'
});

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return App.Post.find();
  }
});

App.Post = DS.Model.extend({
  title:       DS.attr('string'),
  author:      DS.attr('string'),
  intro:       DS.attr('string'),
  extended:    DS.attr('string'),
  publishedAt: DS.attr('date')
});

App.PostController = Ember.ObjectController.extend({
  editingMode: false,

  doneEditing: function() {
    this.set('editingMode', false);
  },

  edit: function() {
    this.set('editingMode', true);
  }
});

App.Post.FIXTURES = [{
  id: 1,
  title: "Ruby Meta Programming",
  author: "Dave Thomas",
  intro:  "this is the introduction to Ruby Metaprogramming",
  extended: "I don't know yet",
  publishedAt: new Date('2-13-2012')
}, {
  id: 2,
  title: "Ruby on Rails",
  author: "DHH",
  intro:  "#h1 Hello *World*!",
  extended: "Work in progress",
  publishedAt: new Date('12-27-2011')
}];
