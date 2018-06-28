const assert = require('assert');
const page = require('../../page/page.js');

describe('webdriver.io page', () => {
	it('should have the right title', () => {
		browser.url('http://webdriver.io');
		const pageTitle = page.getPageTitle();
 	assert.equal(pageTitle, 'WebdriverIO - WebDriver bindings for Node.js');
	});
});
