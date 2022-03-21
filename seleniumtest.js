var webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const chromedriver = require('chromedriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.edge()).
   build();
 
driver.get('http://www.lambdatest.com');
driver.quit();