import Ember from 'ember';

const {Route, set} = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('channel');
  },
  setupController(controller, model) {
    set(controller, 'channels', model);
  }
});
