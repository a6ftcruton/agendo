import Ember from 'ember';

export default Ember.Route.extend({

  clearInput(selector) {
    Ember.$(selector).val('');
  },

  actions: {
    //===================================
    // Todos
    //===================================
    createTodo(data) {
      //create the record in the store
      if(Ember.isEmpty(data.trim())) {
        alert("Sorry. Todos cannot be blank.");
      } else {
        let todo = this.store.createRecord('todo', {title: data});

        this.clearInput('.new-todo input');

        //persist the record to the server
        todo.save().then(() => {
          // TODO - success and failure functions
        });
      }
    },
    update(data) {
      if(Ember.isEmpty(data.get('title').trim())) {
        alert("Sorry. Todos cannot be blank.");
        data.rollbackAttributes();
      } else {
        this.store.findRecord('todo', data.get('id')).then((record) => {
          // any reason to explicitly set these since they are being set already, just not saved to backend?
          //   - would this just be to inform the store they've changed?
          record.save();
        });
      }
    },
    deleteTodo(data) {
      this.store.findRecord('todo', data.get('id')).then((record) => {
        record.deleteRecord();
        record.save();
        //OR record.destroy();
      });
    },
    deleteAll() {
      this.store.findAll('todo').then((data)=> {
        data.forEach((record) => {
          record.destroyRecord();
        });
      });
    },

    //===================================
    // Tags
    //===================================
    createTag(data) {
      let tag = this.store.createRecord('tag', { name: data })
      this.clearInput('input.new-tag');

      tag.save();
    }
  }
});
