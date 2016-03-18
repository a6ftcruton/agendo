import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.findAll('todo');
    return Ember.RSVP.hash({
      todos: this.store.findAll('todo'),
      tags: this.store.findAll('tag')
    });
  }
});
