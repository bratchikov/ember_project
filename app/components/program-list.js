import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tbody',
  sortedPrograms: Ember.computed.sort('programs', 'sortDefinition'),
  sortDefinition: Ember.computed(function() {
    return [`date:asc`];
  }),
  actions: {
    openModal: function(name) {
      Ember.$('.ui.' + name + '.modal').modal('show');
      console.log('lol');
    },
  },
});
