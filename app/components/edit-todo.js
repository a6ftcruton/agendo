import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['edit-todo'],

  actions: {
    editTodo() {
      this.sendAction('action', this.get('param'));
    }
  }
});
