var livereload = require('livereload'),
	server = livereload.createServer();

console.log('Started livereload server.')

process.argv.slice(2).forEach(function (d) {
	if (d[0] !== '/') {
		d = process.cwd() + '/' + d;
	}
	server.watch(d);
	console.log('Watching ' + d);
});