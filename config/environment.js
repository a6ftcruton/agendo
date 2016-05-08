/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'agendo',
    environment: environment,
    // baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
    ENV.APP.host = 'https://agendo-api.herokuapp.com';
    ENV.APP.namespace = 'api/v1'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.host = 'http://localhost:8080';
    ENV.APP.namespace = 'api/v1'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV['ember-cli-mirage'] = {
      enabled: true
    }  
  }

  if (environment === 'production') {
    // TODO - set host and namespace for prod
    // ENV.host = 'https://agendo-api.herokuapp.com';
    // ENV.namespace = 'api/v1'
  }

  //TODO - whitelisted everything to get around CSP during development...
  ENV.contentSecurityPolicy = {
    'script-src': "'self' *",
    'connect-src': "'self' *",
  }

  return ENV;
};
