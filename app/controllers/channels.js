import Ember from 'ember';

export default Ember.Controller.extend({
  programManager: Ember.inject.service(),

  init(){
    this._super(...arguments);
    this.get('programManager');
  },
  programManagerObservation: Ember.observer('programManager.programName', function() {
    console.log('Changed a program name inside of the program-manager');
  }),
});
