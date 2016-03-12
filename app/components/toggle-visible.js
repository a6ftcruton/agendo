import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['toggle-visibility'],

  click() {
    this.sendAction('action');
  }
});
