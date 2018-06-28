const defaultTimeoutInterval = 600000;
const debugTimeoutInterval = (24 * 60 * 60 * 1000);
const defaultCapabilities = [ { browserName: 'chrome' } ];
const debugCapability = [ { browserName: 'chrome', phatform: 'debug' } ];
const defaultSepcs =  [ './test/specs/**/*.js' ];
const debugSpec = [process.env.SPEC];

const debug  = process.env.WDIO_DEBUG;
const config = {
	specs: debug ? debugSpec: defaultSepcs,
	maxInstances: debug ? 1 : 5, // Only one instance of the browser when debugging
	capabilities: debug ? debugCapability : defaultCapabilities, // Only one capability when debugging
	debug: debug, // Allow debugging for wdio
 execArgv: debug ? ['--inspect-brk'] : [], // Allow node to inspect
	sync: true,
	logLevel: 'silent',
	coloredLogs: true,
	screenshotPath: './errorShots/',
	baseUrl: 'http://localhost',
	waitforTimeout: 10000,
	services: [ 'selenium-standalone' ],
	framework: 'mocha',
	mochaOpts: {
		ui: 'bdd',
  timeout: debug ? debugTimeoutInterval : defaultTimeoutInterval // Extend timeout when debugging
	}
};
module.exports = {
	config
};
