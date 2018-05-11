import Ember from 'ember';

export default Ember.Component.extend({
  card: Ember.inject.service('first-service'),

  tagName: 'tbody',
  sortedPrograms: Ember.computed.sort('programs', 'sortDefinition'),
  sortDefinition: Ember.computed(function() {
    return [`date:asc`];
  }),
  actions: {
    openModal: function(programId, channelId) {
      Ember.$('.ui.profile.' + `${programId}-${channelId}` + '.modal').modal('show');
    },
    componentAction: function() {
      this.get('card').add('a');
    }
  },
});
