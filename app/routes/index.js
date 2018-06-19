import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
    // Для чего это?
    this.replaceWith('channels');
  }
});
