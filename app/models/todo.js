import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({
  title: DS.attr('string'),
  complete: DS.attr('boolean', { defaultValue: false }),
  tags: DS.hasMany('tag'),

  isValid: computed('title', function() {
    return !Ember.isEmpty(this.get('title').trim()); 
  })
});

