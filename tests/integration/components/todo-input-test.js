import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-input', 'Integration | Component | todo input', {
  integration: true
});

//TODO
skip('it renders', function(assert) {
  assert.expect(1);
  const description = "value property can be set";
  
  const todo = "abc";
  this.render(hbs`{{todo-input}}`);

  let $input = this.$('.new-todo input');
  $input.val(todo);

  assert.equal($input.val(), todo, description);
});

//TODO
test('it submits input value to action if params are valid', function(assert) {
  assert.expect(1);

  const todo = "abc";
  this.set('externalAction', (attrs) => assert.deepEqual(attrs, todo));
  this.render(hbs`{{todo-input value=todo submit=(action externalAction)}}`);

  let $input = this.$('.new-todo input');
  $input.val(todo);

  // this.on('submit', a => assert.deepEqual(a, true));
  $input.trigger('submit');
  // $input.submit();
});

skip('it does not submit input value to action if params are valid', function(assert) {
  assert.expect(1);

  const todo = "abc";
  this.set('externalAction', (attrs) => assert.deepEqual(attrs, todo));
  this.render(hbs`{{todo-input value=todo submit=(action externalAction)}}`);

  let $input = this.$('.new-todo input');
  $input.val(todo);

  // this.on('submit', a => assert.deepEqual(a, true));
  $input.trigger('submit');
  // $input.submit();
});
