import Ember from 'ember';

const { computed, $, Component } = Ember;

export default Component.extend({
  hideCompleted : false,

  hasTodos: computed('todos.length', function() {
    return this.get('todos.length') > 0;
  }),

  allCompleted: computed('todos.@each.complete', function() {
    return this.get('hasTodos') && this.get('todos').isEvery('complete');
  }), //better way to do this in newer versions of Ember?

  toggleCompleted: function(value) {
    //is there a better way to update the view? setting it in route doesn't check the boxes either
    $('.mark-as-complete').prop('checked', value);

    let todos = this.get('todos');
    todos.forEach((todo) => {
      todo.set('complete', value);
      this.sendAction('update', todo);
    });
  },

  actions: {
    update(data) {
      this.sendAction('update', data);
    },
    deleteTodo(data) {
      this.sendAction('deleteTodo', data);
    },

    toggleComplete() {
      if (!this.get('allCompleted')) {
        this.toggleCompleted(true);
      } else if (this.get('allCompleted')) {
        this.toggleCompleted(false);
      }
    },
    toggleVisible() {
      this.toggleProperty('hideCompleted');
    },
    destroyAll() {
      this.sendAction('deleteAll');
    }
  }
});
