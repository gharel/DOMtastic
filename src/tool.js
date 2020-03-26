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
 * @param width Width under that mobile is true
 * @return {Boolean}
 */

export const isMobileByMQ = (width) => 'matchMedia' in window && window.matchMedia(`(max-width:${width}px)`).matches;
