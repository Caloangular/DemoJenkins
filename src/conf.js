// conf.js
exports.config = {
   	directConnect: true,
	framework: 'jasmine',
	chromeDriver: 'Chromedriver-2.6_HOME',
	specs: ['spec.js', 'spec2.js'],
	capabilities: {
		browserName: 'chrome'
	},
	jasmineNodeOpts: {
		showColors: true,
	}
};
