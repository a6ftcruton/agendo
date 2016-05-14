import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('todo-item', 'Integration | Component | todo item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  
  const todo = Ember.Object.create({
    title: "my todo"
  });

  this.set('todo', todo);
  this.render(hbs`{{todo-item todo=todo}}`);

  assert.ok(this.$().text().indexOf(todo.title) >= 0);
});
