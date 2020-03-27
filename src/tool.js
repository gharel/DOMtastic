/**
 * @module Tool
 */

/**
 * Check if touch device
 *
 * @return {Boolean}
 */

export const isTouch = () => Boolean('ontouchstart' in window);

/**
 * Check if mobile with media queries
 *
 * @param {Number|String} [width] Width under that mobile is true
 * @return {Boolean}
 */

export const isMobileByMQ = (width) => 'matchMedia' in window && window.matchMedia(`(max-width:${width}px)`).matches;

/**
 * Convert value into int correctly
 *
 * @param {Number|String} [value] Value under that mobile is true
 * @return {Int}
 */

export const int = (value) => parseInt(value, 10);
