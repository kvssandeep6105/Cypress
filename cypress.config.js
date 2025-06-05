const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/Integration/Examples/*.js",
  },
  env: {
    url : 'https://www.automationexercise.com/',
  },
});
