import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['tags-list'],

  actions: {
    createTag(data) {
      this.sendAction('action', data);
    }
  }
});
