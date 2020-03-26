/**
 * @module API
 */

// Import modules to build up the API
import * as array from './array';
import BaseClass from './baseClass';
import * as css from './css';
import * as dom_attr from './dom/attr';
import * as dom_class from './dom/class';
import * as dom_contains from './dom/contains';
import * as dom_data from './dom/data';
import * as dom_extra from './dom/extra';
import * as dom_html from './dom/html';
import * as dom from './dom/index';
import * as event from './event/index';
import * as event_ready from './event/ready';
import * as event_trigger from './event/trigger';
import * as selector_closest from './selector/closest';
import * as selector_extra from './selector/extra';
import * as selector from './selector/index';
import * as type from './type';
import * as util from './util';

const api = {};
let $ = {};

if(typeof selector !== 'undefined') {
	$ = selector.$;
	$.matches = selector.matches;
	api.find = selector.find;
}

extend($, dom_contains, type);
extend(api, array, css, dom_attr, dom, dom_class, dom_data, dom_extra, dom_html, event, event_trigger, event_ready, selector_closest, selector_extra, util);

$.fn = api;

// Version
$.version = '__VERSION__';

// Util
$.extend = util.extend;

// Provide base class to extend from
if(typeof BaseClass !== 'undefined') {
	$.BaseClass = BaseClass($.fn);
}

// Export interface
export default $;
