const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // Setup Cucumber plugin
  await addCucumberPreprocessorPlugin(on, config);

  // Set up browserify for handling .feature files
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions))
  );

  // Setup mochawesome reporter
  require("cypress-mochawesome-reporter/plugin")(on);

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/Integration/Examples/*.js",
    supportFile: "cypress/support/e2e.js",
    experimentalStudio: true
  },
  env: {
    url: "https://www.automationexercise.com/",
  },
});
