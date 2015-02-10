(function() {
	if (location.protocol === 'http:') {
		location.protocol = 'https:';
	}

	window.addEventListener('DOMContentLoaded', function() {
		console.log('Hello World!');
	}, false);
})();
