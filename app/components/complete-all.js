import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['complete-all'],

  click() {
    this.sendAction('action');
  }
});
