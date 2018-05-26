import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tbody',
  classNames: ['tbody'],
  // attributeBindings: ['tbodyStyle:style'],
  // tbodyStyle: 'background-color: blue; font-size: .9em;',
  broadcasts: null,

  broadcastManager: Ember.inject.service(),

  sortedBroadcasts: Ember.computed.sort('broadcasts', 'sortDefinition'),
  sortDefinition: Ember.computed(function() {
    return [`startTime:asc`];
  }),

  actions: {
    toggleModalWindow(broadcastName, broadcastInfo) {
      this.get('broadcastManager').addNameAndInfo(broadcastName, broadcastInfo);
      Ember.$('.ui.profile.modal').modal('show');
    },
  },
});
