import { test } from 'qunit';
import moduleForAcceptance from 'agendo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos/crud');

test('visiting root', function(assert) {
  assert.expect(1);
  const description = "it displays existing todos";
  server.createList('todo', 3);

  visit('/');

  andThen(function() {
    assert.ok(find('.todo-item').length > 0, description);
  });
});

test('creating a new todo', function(assert) {
  // assert.expect(2);
  const description  = "it displays a newly created todo in the todos list";
  const description2 = "it clears the input field once record persists";
  // TODO
  // refactor using string interpolation
  const todoTitle   = "new todo here";

  visit('/');
  andThen(() => {
    fillIn('.new-todo input', todoTitle);
    andThen(() => {
      find('.new-todo input').trigger('submit');
      // keyEvent('input', 'keyup', 13); //trigger the 'enter' keypress (doesn't jive with the acceptance test)
      andThen(() => {
        assert.ok(find(`.todo-item:contains(${{todoTitle}}))`), description);
        assert.equal(find('.new-todo input').val(), '', description2);
      });
    });
  });

});

test('editing a todo', function(assert) {
  server.create('todo', {title: "initial idea"});
  const description  = "edit input disappears after submit";
  const description1 = "edited todo is visible on page with updated text";

  visit('/');
  andThen(() => {
    click('.todo-item:contains("initial idea)');
    andThen(() => {
      fillIn('.edit-todo input', "better idea");
      andThen(() => {
        find('.edit-todo input').trigger('submit');
        andThen(() => {
          assert.equal(find('.edito-todo input').length, 0, description);
          assert.equal(find('todo-item:contains:("better idea")').length, 1, description1);
        });
      });
    });
  });
});
