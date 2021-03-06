/**
 * @module Selector (extra)
 */

import { each } from '../util';
import { $, matches } from './index';

/**
 * Return children of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').children();
 *     $('.selector').children('.filter');
 */

export const children = function (selector) {
	const nodes = [];
	each(this, (element) => {
		if (element.children) {
			each(element.children, (child) => {
				if (!selector || selector && matches(child, selector)) {
					nodes.push(child);
				}
			});
		}
	});
	return $(nodes);
};

/**
 * Return a collection containing only the one at the specified index.
 *
 * @param {Number} index
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').eq(1)
 *     // The second item; result is the same as doing $($('.items')[1]);
 */

export const eq = function (index) {
	return slice.call(this, index, index + 1);
};

/**
 * Return a collection containing only the first item.
 *
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').first()
 *     // The first item; result is the same as doing $($('.items')[0]);
 */

export const first = function () {
	return slice.call(this, 0, 1);
};

/**
 * Return the DOM element at the specified index.
 *
 * @param {Number} index
 * @return {Node} Element at the specified index
 * @example
 *     $('.items').get(1)
 *     // The second element; result is the same as doing $('.items')[1];
 */

export const get = function (index) {
	return this[index];
};

/**
 * Return the parent elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').parent();
 *     $('.selector').parent('.filter');
 */

export const parent = function (selector) {
	const nodes = [];
	each(this, (element) => {
		if (!selector || selector && matches(element.parentNode, selector)) {
			nodes.push(element.parentNode);
		}
	});
	return $(nodes);
};

/**
 * Create a new, sliced collection.
 *
 * @param {Number} start
 * @param {Number} end
 * @return {Object} New wrapped collection
 * @example
 *     $('.items').slice(1, 3)
 *     // New wrapped collection containing the second, third, and fourth element.
 */

export const slice = function (start, end) { // eslint-disable-line no-unused-vars
	return $([].slice.apply(this, arguments));
};
