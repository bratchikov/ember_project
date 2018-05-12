import Ember from 'ember';

export default Ember.Service.extend({
  programName: null,
  programInfo: null,
  minDate: null,

  addNameAndInfo(name, info) {
    this.set('programName', name);
    this.set('programInfo', info);
  },
});
