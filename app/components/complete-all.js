import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'p',
  classNames: ['complete-all'],

  click() {
    this.sendAction('action');
  }
});
