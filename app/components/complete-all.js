import Ember from 'ember';

const { computed, $, Component } = Ember;

export default Component.extend({
  tagName: 'p',
  classNames: ['complete-all'],

  hasTodos: computed('model.length', function() {
    return this.get('model.length') > 0
  }),

  allCompleted: computed('model.@each.complete', function() {
    return this.get('hasTodos') && this.get('model').isEvery('complete');
  }), //better way to do this in newer versions of Ember?

  toggleAll: function(value) {
    //is there a better way to update the view? setting it in route doesn't check the boxes either
    $('.mark-as-complete').prop('checked', value);

    let todos = this.get('model');
    todos.forEach((todo) => {
      todo.set('complete', value);
      this.sendAction('update', todo);
    });
  },

  click() {
    if (!this.get('allCompleted')) {
      this.toggleAll(true);
    } else if (this.get('allCompleted')) {
      this.toggleAll(false);
    }
  }
});
