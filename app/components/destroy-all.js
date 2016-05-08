import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['delete-all'],

  click() {
    let confirmation = confirm("Are you sure? This will delete all your todos and any associated data.");
    if(confirmation) {
      Ember.$('.todo-item').fadeOut(1000); //class this up a bit and use css instead
      this.sendAction('action');
    }
  }
});
