// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4445/wd/hub',
  specs: ['spec.js', 'spec2.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
	showColors: true,
  }
};