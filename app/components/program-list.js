import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tbody',
  sortedPrograms: Ember.computed.sort('programs', 'sortDefinition'),
  sortDefinition: Ember.computed(function() {
    return [`date:asc`];
  }),
  actions: {
    openModalPanel() {
      console.log('click');
      return true;
    }
  },
});
