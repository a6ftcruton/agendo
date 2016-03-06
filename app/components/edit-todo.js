import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['edit-todo'],

  actions: {
    update() {
      this.sendAction('action', this.get('param'));
    },
    cancel() {
      this.sendAction('cancel');
    }
  }
});
