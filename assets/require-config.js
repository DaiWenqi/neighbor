/* eslint-disable */
!(function () {
	var baseUrl;

	var req = document.getElementById('requirejs');
	if (req) {
		baseUrl = req.getAttribute('base-path');
	}

	requirejs.config({
		baseUrl: baseUrl,
		paths: {
			fnModule: 'js',
			fnLib: 'lib'
		}
	});
})();
