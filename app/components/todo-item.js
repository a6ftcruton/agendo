import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['todo-item'],
  classNameBindings: ['isComplete:complete', 'displayTodo:hidden'],

  isComplete: computed.reads('todo.complete'),

  isHidden: computed.reads('hidden'),

  displayTodo: computed('isComplete', 'isHidden', function() {
    return this.get('isHidden') && this.get('isComplete');
  }),

  isEditing: false,

  actions: {
    edit() {
      if(!this.get('isComplete')) {
        this.set('isEditing', true);
      }
    },
    update(data) {
      this.sendAction('action', data);
      this.set('isEditing', false);
    },
    cancel() {
      this.get('todo').rollbackAttributes();
      this.set('isEditing', false);
    },
    deleteTodo(data) {
      this.sendAction('deleteTodo', data);
    },
    toggleCompleted() {
      let todo = this.get('todo');
      todo.toggleProperty('complete');
      this.send('update', todo);
    }
  }
});
