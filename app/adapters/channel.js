import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://www.mocky.io',
  namespace: 'v2',

  pathForType() {
    return '5af835b73200004e0086aea8';
  },
});