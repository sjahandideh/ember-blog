App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 13,
  adapter:  DS.RESTAdapter.extend({
    url: 'http://localhost:4567'
  })
});

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('posts');
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return App.Post.find();
  }
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

App.Post = DS.Model.extend({
  title:       DS.attr('string'),
  author:      DS.attr('string'),
  intro:       DS.attr('string'),
  extended:    DS.attr('string'),
  publishedAt: DS.attr('date')
});
