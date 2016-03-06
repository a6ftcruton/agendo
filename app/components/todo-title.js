import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',

  click() {
    this.sendAction('action');
  }
});
