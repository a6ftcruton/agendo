import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createTodo(data) {
      //create the record in the store
      if(Ember.isEmpty(data.trim())) {
        alert("Sorry. Todos cannot be blank.");
      } else {
        let todo = this.store.createRecord('todo', {title: data});

        //clear input immediately
        Ember.$('.new-todo input').val('');

        //persist the record to the server
        todo.save().then(() => {
          // TODO - success and failure functions
        });
      }
    },
    editTodo(data) {
      if(Ember.isEmpty(data.get('title').trim())) {
        alert("Sorry. Todos cannot be blank.");
        data.rollbackAttributes();
      } else {
        this.store.findRecord('todo', data.get('id')).then((record) => {
          record.set('title', data.get('title'));
        });
      }
    },
    deleteTodo(data) {
      this.store.findRecord('todo', data.get('id')).then((record) => {
        record.deleteRecord();
        record.save();
        //OR record.destroy();
      });
    }
  }
});
