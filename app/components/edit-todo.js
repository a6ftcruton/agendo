import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['edit-todo'],

  actions: {
    update() {
      this.sendAction('action', this.get('param'));
    },
    cancelEdit() {
      console.log("hitting cancel edit in edit-todo");
      this.sendAction('cancelEdit');
      return true;
    }
  }
});
