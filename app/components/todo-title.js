import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  classNames: ['title'],

  click() {
    this.sendAction('action');
  }
});
