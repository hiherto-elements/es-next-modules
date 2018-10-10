var ghpages = require('gh-pages');
 
ghpages.publish('site', function(err) {
	console.log('build done', err)
});
