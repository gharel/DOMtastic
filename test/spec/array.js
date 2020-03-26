describe('array', function () {
	it('should have proper filter (selector)', function () {
		var expected = $('#testFragment li[class]');
		var actual = $('#testFragment li').filter('[class]');
		assert.deepEqual(actual, expected);
		assert(actual.length === 3);
	});

	it('should provide a chainable API', function () {
		var expected = $('#testFragment li');
		var actual = expected.each(function () {
			return this;
		}).reverse().filter(function () {
			return true;
		}).reverse();
		assert.deepEqual(actual, expected);
	});
});
