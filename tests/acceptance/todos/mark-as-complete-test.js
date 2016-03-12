import { test } from 'qunit';
import moduleForAcceptance from 'agendo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos/mark as complete');

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

test('toggles show/hide for completed todos', function(assert) {
  assert.expect(3);
  server.create('todo', {complete: true});
  server.create('todo', {complete: false});

  let desc1 = "all todos are visible by default";
  let desc2 = "clicking 'Hide visible' hides completed todos";
  let desc3 = "clicking 'Show visible' shows completed todos";

  visit('/');

  andThen(() => {
    assert.equal(find('.todo-item:visible').length, 2, desc1);
    click('.toggle-visibility:contains("Hide completed")');
    andThen(() => {
      assert.equal(find('.todo-item:visible').length, 1, desc2);
      andThen(() => {
        click('.toggle-visibility:contains("Show completed")');
        andThen(() => {
          assert.equal(find('.todo-item:visible').length, 2, desc3);
        });
      });
    });
  });
});
