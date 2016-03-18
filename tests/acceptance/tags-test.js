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

skip('it allows new tags to be added from the drawer', function(assert) { });

skip('it displays associated tags next to each todo', function(assert) { });

skip('it displays "add tag" option next to each todo', function(assert) { });


//later...
skip('it allows new tags to be added from the sidebar', function(assert) { });
