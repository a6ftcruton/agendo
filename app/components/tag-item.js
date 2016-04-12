import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['tag'],

  actions: {
    createTag(data) {
      this.sendAction('action', data);
    },
    destroyTag(data) {
      this.sendAction('destroyTag', data);
    }
  }
});
