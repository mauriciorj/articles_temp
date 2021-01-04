const withTM = require("next-transpile-modules")(["wcl_articles"]);
module.exports = withTM({
  env: {
    APOLLO_SERVER_URL: "http://localhost:4000/graphql",
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
});
