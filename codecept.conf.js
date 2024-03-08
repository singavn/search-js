// load env variables - this should be the first line of config
require('dotenv-extended').config({
    path: './tests/acceptance/config/codecept.dev.env',
    defaults: './tests/acceptance/config/codecept.env',
});
require('ts-node/register');

const { configure, cleanReports } = require('codeceptjs-configure');
const REPORT_OUTPUT_DIR = './tests/acceptance/report';

let conf = {
    name: 'Codeceptjs BDD',

    repository: 'https://github.com/singavn/upload-js',

    output: REPORT_OUTPUT_DIR,
    plugins: {
        allure: {
          enabled: true,
          require: '@codeceptjs/allure-legacy',
        }
      },
    bootstrap: (callback) => {
        cleanReports({ path: REPORT_OUTPUT_DIR, relativePath: '/', callback });
    },

    /********************** Enable additional plugins
     * 
     * plugins: {
        retryFailedTests: {
            enabled: false,
            retries: 1,
            require: 'codeceptjs-configure/plugins/retry-failed-tests.plugin.js',
        },
    },
     */
};

/**
 * This is an example of passing user-specific Sauce Browser. Kept empty intentionally, but you can add your required custom Sauce Browsers.
 * To configure Saucelabs Browser, pls take a look codeceptjs-saucelabs/packages/codeceptjs-saucelabs/lib/browsers.conf.js
 */

exports.config = configure.create(conf);
