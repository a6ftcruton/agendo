import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['new-todo'],

  isValid: computed('todo', function() {
    let todo = this.get('todo');
    return todo && !Ember.isEmpty(todo.trim());
  }),

  //translate a primitive action into a named action sent out of the component
  submit: function(e) {
    e.preventDefault();
    // we're technically only using a form to hook into the 'submit' event. there are certainly other ways of doing this. we could listen for the keyPress event, and send the action if the keyCode = '13' (for enter), for now we'll avoid the bike-shedding and just agree to lean on the submit action as a convenience and prevent the browser default since we're handling it in a way we like better. If this really bugs you, you can always add 'refine todo submission' to your todo list.
    // aside: submitting the form will work, but part of the beauty of ember data is the 'instant' feeling we get from adding a new record directly to the page without having to sit through a needless refresh...

      this.sendAction('action', this.get('todo'));
  },
});
