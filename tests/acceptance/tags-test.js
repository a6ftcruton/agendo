import { test } from 'qunit';
import moduleForAcceptance from 'agendo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tags');

test('it displays existing tags in the drawer', function(assert) { 
  assert.expect(1);
  server.create('tag', {name: "chores"});

  let tagName = "chores";
  let desc    = `${tagName} tag is visible on page`;

  visit('/');
  andThen(() => {
    assert.equal(find(`.drawer .tags-list li:contains(${tagName})`).length, 1, desc);
  });
});

test('it allows new tags to be added from the drawer', function(assert) {
  assert.expect(2);
  let tagTitle     = "chores";
  let description  = "tags are added to page after submit";
  let description2 = "input value is reset after tag submitted";

  visit('/');
  andThen(() => {
    fillIn('.drawer input.new-tag', tagTitle);
    andThen(() => {
      keyEvent('input.new-tag', 'keyup', '13');
      andThen(() => {
        assert.ok(find(`.drawer .tags-list li:contains(${tagTitle})`), description);
        assert.equal(find('input.new-tag').val(), '', description2);
      });
    });
  });
});

test('existing tags can be destrored from the drawer through a confirmation', function(assert) {
  assert.expect(1);
  server.create('tag', {name: "health"});
  let description = "it removes tag from drawer after delete";

  //stub confirmation dialogue
  window.confirm = function() { return true; };

  visit('/');
  andThen(() => {
    click('.remove-tag');
    andThen(() => {
      assert.equal(find('.tag').length, 0, description);
    });
  });
});

test('it displays associated tags next to each todo', function(assert) { 
  assert.expect(1);

  let tag = server.create('tag', {name: "chores"});
  let todo = server.create('todo', {title: "sweep the floor", tag_id: tag.id });
  let description = "";

  //stub confirmation dialogue

  visit('/');
  andThen(() => {
    console.log( "todo ==>", todo);
    console.log( "tag ==>", tag);
    pauseTest();
    assert.equal(find('.tag-display:contains("chores")').length, 1, description);
  });
});

// skip('it displays "add tag" option next to each todo', function(assert) { });
// skip('clicking existing tag in the sidebar filters tags shown in main panel', function(assert) { });
