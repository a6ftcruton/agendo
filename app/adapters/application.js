import ENV from "../config/environment";
import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
export default DS.JSONAPIAdapter.extend({
  // Set host and namespace from config/environment
  host: ENV.APP.host,
  namespace: ENV.APP.namespace,

  //TODO - overriding ajax method to see requests being sent -- debugging only
  ajax(url, type, options) {
    console.log( "~~~~~ REQUEST INFO ~~~~~");
    console.log( "url ==>", url);
    console.log( "type ==>", type);
    console.log( "options ==>", options);
    return this._super(...arguments);
  }
});

console.log( "CURRENT ENVIRONMENT ==>", ENV.environment);
console.log( "CURRENT HOST ==>", ENV.APP.host);
console.log( "CURRENT NAMESPACE ==>", ENV.APP.namespace);
