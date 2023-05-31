const { defineConfig } = require("cypress");

const screeptAiSetupNode = require("@screept/cypress/cyNodeSetup");
module.exports =  defineConfig({
  env: {
     SCREEPT_API_KEY:
         'MWZiZTMzYjktZTExOS00ZDFiLWJjNGYtMzA0ZTgxOTlkZGVkOmMwZTk0YTMzLWRmZjctNGFjOC1iNGUwLTVmYmU2NzkyYTdjZQ==',

  },
  "chromeWebSecurity": false,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      screeptAiSetupNode(on, config);
    },
  },
})
