import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['todo-item'],

  isEditing: false,

  actions: {
    edit() {
      this.set('isEditing', true);
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
    }
  }
});
