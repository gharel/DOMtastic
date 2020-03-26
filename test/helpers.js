(function (global) {
	global.$helpers = {
		isJSDOM: function () {
			return navigator.userAgent.indexOf('jsdom') !== -1;
		},
		getRndStr: function () {
			return (Math.random() + 1).toString(36).substring(7);
		},
		isSupportsDataSet: 'dataset' in document.documentElement,
		isSupportsTableInnerHTML: (function () {
			try {
				document.createElement('table').innerHTML = '<tr><td></td></tr>';
				return true;
			} catch(err) {
				return false;
			}
		})()
	};
})(typeof global !== 'undefined' ? global : window);
