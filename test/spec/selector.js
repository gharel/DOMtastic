describe('selectors', function () {
	var html = '<article><section><p>foo</p><p>bar</p></section></article>';

	it('should return the wrapped object', function () {
		var expected = $('#testFragment li');
		var actual = $(expected);
		assert(actual === expected);
	});

	it('should return an empty NodeList for falsey selectors', function () {
		assert(typeof $().find === 'function');
		assert($().length === 0);
		assert($(null).length === 0);
		assert($('').length === 0);
		assert($(0).length === 0);
	});

	it('should return queried elements', function () {
		var elements = $('#testFragment li');
		assert(elements.length === 5);
	});

	it('should return queried elements within provided context', function () {
		var elements = $('li', document.getElementById('testFragment'));
		assert(elements.length === 5);
	});

	it('should return queried elements within provided context (string)', function () {
		var elements = $('li', '#testFragment');
		assert(elements.length === 5);
	});

	it('should return the provided element', function () {
		assert($(window)[0] === window);
		assert($(document)[0] === document);
		assert($(document.body)[0] === document.body);
	});

	it('should create a DOM fragment from string', function () {
		var fragment = $(html);
		assert(fragment[0].outerHTML === html);
	});

	it('should create a DOM fragment from string (self-closing tag)', function () {
		var fragment = $('<span/>');
		assert(fragment[0].outerHTML === '<span></span>');
	});

	it('should create a DOM fragment from string (tag)', function () {
		var fragment = $('<div></div>');
		assert(fragment[0].outerHTML === '<div></div>');
	});

	it('should create a comment node from string', function () {
		var actual = $('<!--comment-->');
		assert(actual.length === 1);
		assert(actual[0].nodeType === 8);
		assert(actual[0].textContent === 'comment');
	});

	describe('find', function () {
		it('should return queried descendants from each element in collection', function () {
			var actual = $('#testFragment li').find('span');
			var expected = $('#testFragment li span');
			assert(actual.length === 5);
			assert.deepEqual(actual, expected);
		});

		it('should return unique elements', function () {
			var parent = $('#testFragment')[0];
			var collection = $([parent, parent]);
			var actual = collection.find('li');
			var expected = $('#testFragment li');
			assert(actual.length === 5);
			assert.deepEqual(actual, expected);
		});
	});

	it('should provide a chainable API', function () {
		var element = $('body').find('#testFragment').find('.two');
		assert(element[0] === $('.two')[0]);
	});
});
