describe('selectors (extra)', function () {
	describe('children', function () {
		it('should return children', function () {
			var actual = $('#testFragment ul').children();
			var expected = $('#testFragment li');
			assert(actual.length === 5);
			assert.deepEqual(actual, expected);
		});

		it('should return only elements', function () {
			var children = $('<ul><li></li><!-- --><li></li>foo<li></li></ul>').children();
			assert(children.length === 3);
			assert(children[1].nodeType === 1);
			assert(children[2].nodeType === 1);
		});

		it('should not return elements from comment node', function () {
			var children = $('<!--warning-->').children();
			assert(children.length === 0);
		});

		it('should return filtered children', function () {
			var actual = $('#testFragment ul').children('[class]');
			var expected = $('#testFragment li[class]');
			assert(actual.length === 3);
			assert.deepEqual(actual, expected);
		});
	});

	describe('eq', function () {
		it('should reduce to one', function () {
			var expected = $('#testFragment li.three');
			var actual = $('#testFragment li').eq(2);
			assert(actual[0] === expected[0]);
		});

		it('should reduce to one (negative index)', function () {
			var expected = $('#testFragment li.fourth');
			var actual = $('#testFragment li').eq(-2);
			assert(actual[0] === expected[0]);
		});
	});

	describe('first', function () {
		it('should reduce to one', function () {
			var expected = $('#testFragment li[data-id="1"]');
			var actual = $('#testFragment li').first();
			assert(actual.length === 1);
			assert(actual[0] === expected[0]);
		});

		it('should be empty with empty result set', function () {
			var actual = $('#testFragment li#doesnotexist').first();
			assert(actual.length === 0);
		});
	});

	describe('get', function () {
		it('should return DOM element', function () {
			var expected = $('#testFragment li.three');
			var actual = $('#testFragment li').get(2);
			assert(actual === expected[0]);
		});
	});

	describe('parent', function () {
		it('should return single direct parent', function () {
			var actual = $('#testFragment ul').parent();
			var expected = $('#testFragment');
			assert(actual.length === 1);
			assert.deepEqual(actual, expected);
		});

		it('should return direct parents', function () {
			var actual = $('#testFragment li span').parent();
			var expected = $('#testFragment li');
			assert(actual.length === 5);
			assert.deepEqual(actual, expected);
		});

		it('should return filtered parents', function () {
			var actual = $('#testFragment li span').parent('[class]');
			var expected = $('#testFragment li[class]');
			assert(actual.length === 3);
			assert.deepEqual(actual, expected);
		});
	});

	describe('slice', function() {
		it('should slice the elements', function() {
			var expected = $('#testFragment li');
			var actual = $('#testFragment li').slice(-3, -1);
			assert(actual.length === 2);
			assert(actual[0] === expected[2]);
			assert(actual[1] === expected[3]);
		});
	});

	it('should provide a chainable API', function () {
		var expected = $('.two span');
		var actual = $('#testFragment ul').children('[class]').slice().children();
		assert(actual.length === 3);
		assert(actual[0] === expected[0]);
	});
});
