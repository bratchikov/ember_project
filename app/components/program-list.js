import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tbody',
  sortedPrograms: Ember.computed.sort('programs', 'sortDefinition'),
  sortDefinition: Ember.computed(function() {
    return [`date:asc`];
  }),
  actions: {
    showDetails() {
      this.toggleProperty('showDetails');
      console.log('lol2');
      return true;
    },
    openModal: function(name) {
      Ember.$('.ui.' + name + '.modal').modal('show');
      console.log('lol');
    },

  },
});
