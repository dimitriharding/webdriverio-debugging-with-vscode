class Page {
	//selectors
	get txtSearchInput() { return $('#docsearch input')}

	//methods
	getPageTitle() {
		return browser.getTitle();
	}
}
module.exports = new Page();
