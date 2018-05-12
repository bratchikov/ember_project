import Ember from 'ember';

export default Ember.Component.extend({
  programManager: Ember.inject.service(),

  programName: Ember.computed('programManager.programName', function() {
    return this.get('programManager.programName');
  }),
  programInfo: Ember.computed('programManager.programInfo', function() {
    return this.get('programManager.programInfo');
  }),
});
