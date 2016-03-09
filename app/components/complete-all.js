import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  classNames: ['complete-all'],

  hasTodos: function() {
    return this.get('model.length') > 0
  },

  //TODO - need this to be computed off change to any model's 'complete' property?
  allCompleted: function() {
    return this.get('model').isEvery('complete');
  },

  click() {
    if (this.hasTodos && !this.allCompleted()) {

      //is there a better way to update the view? setting it in route doesn't check the boxes either
      Ember.$('.mark-as-complete').prop('checked', true);

      let todos = this.get('model');
      todos.forEach((todo) => {
        todo.set('complete', true);
        this.sendAction('update', todo);
      });
    }
  }
});
