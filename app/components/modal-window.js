import Ember from 'ember';

export default Ember.Component.extend({
  broadcastManager: Ember.inject.service(),

  broadcastName: Ember.computed('broadcastManager.broadcastName', function() {
    return this.get('broadcastManager.broadcastName');
  }),
  broadcastInfo: Ember.computed('broadcastManager.broadcastInfo', function() {
    return this.get('broadcastManager.broadcastInfo');
  }),
});
