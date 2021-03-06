/**
 * @module DOM (extra)
 */

import { $ } from '../selector/index';
import { each } from '../util';
import { append } from './index';

/**
 * Append each element in the collection to the specified element(s).
 *
 * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').appendTo(container);
 */

export const appendTo = function (element) {
	const context = typeof element === 'string' ? $(element) : element;
	append.call(context, this);
	return this;
};

/**
 * Empty each element in the collection.
 *
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').empty();
 */

export const empty = function () {
	return each(this, (element) => element.innerHTML = '');
};

/**
 * Remove the collection from the DOM.
 *
 * @return {Array} Array containing the removed elements
 * @example
 *     $('.item').remove();
 */

export const remove = function () {
	return each(this, (element) => {
		if (element.parentNode) {
			element.parentNode.removeChild(element);
		}
	});
};

/**
 * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').text('New content');
 */

export const text = function (value) {
	if (value === undefined) {
		return this[0].textContent;
	}

	return each(this, (element) => element.textContent = String(value));
};

/**
 * Get the `value` from the first, or set the `value` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('input.firstName').val('New value');
 */

export const val = function (value) {
	if (value === undefined) {
		return this.length > 0 ? this[0].value : undefined;
	}

	return each(this, (element) => element.value = value);
};
