var livereload = require('livereload'),
	server = livereload.createServer();

function watch(d) {
	if (d[0] !== '/') {
		d = process.cwd() + '/' + d;
	}

	server.watch(d);
	console.log('Watching ' + d);
}

console.log('Started livereload server.');

if (process.argv.length > 2) {
	process.argv.slice(2).forEach(watch);
} else {
	watch('.');
}