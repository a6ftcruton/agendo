import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({
  title: DS.attr('string'),
  isComplete: DS.attr('boolean'),

  isValid: computed('title', function() {
    return !Ember.isEmpty(this.get('title').trim()); 
  })
});

