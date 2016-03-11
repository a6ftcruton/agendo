import { test } from 'qunit';
import moduleForAcceptance from 'agendo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos/crud');

test('it marks all existing todos as complete', function(assert) {
  assert.expect(3);
  server.createList('todo', 3);

  let desc1 = "todo items are unchecked by default";
  let desc2 = "clicking .complete-all marks all items as complete";
  let desc3 = "clicking .complete-all once all are complete unchecks all";

  visit('/');

  andThen(() => {
    assert.equal(find('.mark-as-complete:checked').length, 0, desc1);
    click('.complete-all');
    andThen(() => {
      assert.equal(find('.mark-as-complete:checked').length, 3, desc2);
      andThen(() => {
        click('.complete-all');
        andThen(() => {
          assert.equal(find('.mark-as-complete:checked').length, 0, desc3);
        });
      });
    });
  });
});
