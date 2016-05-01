import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
export default DS.JSONAPIAdapter.extend({
  host: 'https://agendo-api.herokuapp.com',
  namespace: 'api/v1',
});
