import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('tag-item', 'Integration | Component | tag item', {
  integration: true
});

test('it renders', function(assert) {
  
  let desc1 = "it renders passed in name"; 
  let desc2 = "it renders a cancel 'x'";
  let name  = "TAG";
  let tag   = Ember.Object.create({
    name: name
  });

  this.set('tag', tag);
  this.render(hbs`{{tag-item tag=tag}}`);

  assert.ok(this.$().text().indexOf(`${name}`) >= 0, desc1);
  assert.equal(this.$('.remove-tag').text().trim(), '\u00D7', desc2);
});
