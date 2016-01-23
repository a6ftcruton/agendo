import { test } from 'qunit';
import moduleForAcceptance from 'agendo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos/read');

test('visiting root', function(assert) {
  assert.expect(1);
  const test1 = "it displays existing todos";
  visit('/');

  andThen(function() {
    assert.ok(find('.todo-item').length > 0, test1);
  });
});
