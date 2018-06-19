import Ember from 'ember';

export default Ember.Controller.extend({
  broadcastManager: Ember.inject.service(),

  init(){
    this._super(...arguments);
    this.get('broadcastManager'); // Зачем эта строка?
  },
  broadcastManagerObservation: Ember.observer('broadcastManager.broadcastName', function() {
    // Зачем это здесь?
    console.log('Changed a broadcast name inside of the broadcast-manager');
  }),
});
