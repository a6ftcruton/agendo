import { moduleForModel, test } from 'ember-qunit';

moduleForModel('todo', 'Unit | Model | todo', {
  // Specify the other units that are required for this test.
  needs: ['model:tag']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
