module.exports = {  
    siteURL: "https://angularjs.org",
    locators: {
         pageTitle: "//span[contains(text(),'Worklist')]",
         logoutIcn: "//button[@data-role='logout']",
         logoutDropDn: "//bb-icon-ui[@name='toggle-down']",
         leftsidebar: {
            menuItem: "//app-essentials-workspace-navigation//li[normalize-space()='{0}']",
            worklistTable: "//tcb-onboarding-ops-{0}",
            worklistTab: "//tcb-onboarding-ops-tasklist//a[normalize-space()='{0}']"
         },
         filterBtn: "//bb-icon-ui[@name='filter']",
         searchInput: "//label[text()='{0}']/..//child::input",
         searchBtn:"//button[normalize-space()='{0}']",
         searchResultTbl:"//*[@class='table-responsive']",
         itemInTable:"//*[@class='table-responsive']//a[contains(.,'{0}')]",
         caseInfo: {
            page: "//tcb-tcb-onboarding-case-detail-widget/div",
            uploadLink: "//input[@type='file']",
            uploadedFile: "//span[contains(.,'{0}')]",
         }
        }
    }
