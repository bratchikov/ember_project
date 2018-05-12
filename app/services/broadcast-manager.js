import Ember from 'ember';

export default Ember.Service.extend({
  broadcastName: null,
  broadcastInfo: null,
  minDate: null,

  addNameAndInfo(name, info) {
    this.set('broadcastName', name);
    this.set('broadcastInfo', info);
  },
});
