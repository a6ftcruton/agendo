import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  isOpen: true,

  //Computed Properties
  arrow: computed('isOpen', function() {
    console.log( "this.get('isOpen') ==>", this.get('isOpen'));
    return this.get('isOpen') ? '\u25C0' : '\u25B6';
  }),

  actions: {
    toggleDrawer() {
      console.log("hitting todos/idex controller action");
      this.toggleProperty('isOpen');
    }
  }
});
