import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: 'li',
  classNames: ['todo-item'],
  classNameBindings: ['isComplete:complete'],

  isComplete: Ember.computed.reads('todo.complete'),
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
