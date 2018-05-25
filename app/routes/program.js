import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log('params=',params)
    return this.store.findRecord('channel', params.id)
  }
});
