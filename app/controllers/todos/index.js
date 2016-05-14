import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  isOpen: true,

  //Computed Properties
  arrow: computed('isOpen', function() {
    return this.get('isOpen') ? '\u25C0' : '\u25B6';
  }),

  actions: {
    toggleDrawer() {
      this.toggleProperty('isOpen');
    }
  }
});
