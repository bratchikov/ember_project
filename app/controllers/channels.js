import Ember from 'ember';

export default Ember.Controller.extend({
  broadcastManager: Ember.inject.service(),

  init(){
    this._super(...arguments);
    this.get('broadcastManager');
  },
  broadcastManagerObservation: Ember.observer('broadcastManager.broadcastName', function() {
    console.log('Changed a broadcast name inside of the broadcast-manager');
  }),
});
