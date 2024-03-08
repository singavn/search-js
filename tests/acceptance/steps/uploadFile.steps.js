
const { I, ghHomePage } = inject();

Before(() => {
    
});

Given(/I am on the Microsoft page/, () => {
    ghHomePage.open();
});

When(/I input an App Name \"([^\"]*)\" in search bar/, (keyword) => {
    ghHomePage.searchInput(keyword);
});

When(/I click on the Search button/, () => {
    ghHomePage.doSearch();
});

Then(/I should see the list of \"([^\"]*)\" apps in result page/, async (name) => {
    ghHomePage.verifyDisplay(name, 'p.title.text-ellipsis');
});
