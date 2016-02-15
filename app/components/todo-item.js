import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['todo-item'],

  isEditing: false,

  //translate a primitive action into a named action sent out of the component
  click() {
    this.set('isEditing', true);
  },
  actions: {
    editTodo(data) {
      this.sendAction('action', data);
      this.set('isEditing', false);
    }
  }
});
