const { I } = inject();

// page class can be extended
class HomePage {
    locators = {
        searchInput: "input.input__control"
    };

    open() {
        I.amOnPage("/");
        I.wait
     }

    searchInput(keyword) {
        I.waitForVisible(this.locators.searchInput, 3);
        I.click(this.locators.searchInput);
        I.type(keyword)
    }

    doSearch() {
        I.pressKey('Enter');
    }

    verifyDisplay(text, locator) {
        I.waitForVisible(locator, 3);
        I.see(text,locator);
    }
}

module.exports = new HomePage();
