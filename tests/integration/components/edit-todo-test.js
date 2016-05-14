import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-todo', 'Integration | Component | edit todo', {
  integration: true
});

test('it renders', function(assert) {
  let desc1 = "it has an input";
  let desc2 = "has a cancel option";
  
  this.render(hbs`{{edit-todo}}`);

  assert.ok(this.$('input'), desc1);
  assert.equal(this.$().text().trim(), 'Cancel', desc2);
});
