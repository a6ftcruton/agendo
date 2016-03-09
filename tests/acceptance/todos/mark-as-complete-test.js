import { test } from 'qunit';
import moduleForAcceptance from 'agendo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos/crud');

test('it marks all existing todos as complete', function(assert) {
  assert.expect(2);
  server.createList('todo', 3);

  visit('/');

  andThen(() => {
    assert.equal(find('.mark-as-complete:checked').length, 0);
    click('.complete-all');
    andThen(() => {
      assert.equal(find('.mark-as-complete:checked').length, 3);
    });
  });
});
