Basic information about the source demo project

Language: Javascript, Gherkin

Tools: Playwright, Cucumber

Framework: CodeceptJS BDD

Report: Allure report

- 1 small features were selected to write test scripts: search. Access the link test/acceptance/features to see details of each scenario for each feature.
- To run test scripts:
   Install Nodejs and VScode.
   Open Terminal in VSCode, type: 
    - "npm install" to setup library node_modules.
    - "npx playwright install" to install Playwright.
- Access the path tests/acceptance/codecept.dev.env to select the environment
- To run test suite, type "npm run test" in Terminal
  ![Report](https://github.com/singavn/search-js/blob/main/tests/acceptance/search1.JPG)
- Report results after each run: Type "npm run report" in Terminal.
- Automatically capture screenshot when an error occurs then user can view in report.
- Automatically clean old report when run new suite.

![Report](https://github.com/singavn/search-js/blob/main/tests/acceptance/report.JPG)
