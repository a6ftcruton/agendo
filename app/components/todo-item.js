import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['todo-item'],

  isEditing: false,

  // isComplete: Ember.computed.reads('isComplete'),

  actions: {
    edit() {
      this.set('isEditing', true);
    },
    update(data) {
      this.sendAction('action', data);
      this.set('isEditing', false);
    },
    cancelEdit() {
      console.log("hitting cancel edit in todo-item");
    },
    deleteTodo(data) {
      //weirdness = we define the button action as expected {{action "deleteTodo" todo}}
      //we can even get so far as handing this action off from the button to the parent todo-item controller...
      //but we can't send the action using sendAction b/c the component isn't aware of an action w/ that name--we didn't pass it in at the top level.
      //--we could use a component instead of a button here and follow our normal pattern of handing off actions from child to parent to route...but nahhh
      this.sendAction('deleteTodo', data);
    }
  }
});
