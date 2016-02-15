import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createTodo(data) {
      //create the record in the store
      let todo = this.store.createRecord('todo', {title: data});

      //clear input immediately
      Ember.$('input').val('');
      // this.controllerFor('todos/index').set('todo', '');

      //persist the record to the server
      todo.save().then(() => {
        // TODO - success and failure functions
      });
    }
  }
});
