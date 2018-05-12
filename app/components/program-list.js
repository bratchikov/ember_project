import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tbody',
  classNames: ['tbody'],
  // attributeBindings: ['tbodyStyle:style'],
  // tbodyStyle: 'background-color: blue; font-size: .9em;',
  programManager: Ember.inject.service(),
  
  sortedPrograms: Ember.computed.sort('programs', 'sortDefinition'),
  sortDefinition: Ember.computed(function() {
    return [`date:asc`];
  }),

  actions: {
    toggleModalWindow(programName, programInfo) {
      this.get('programManager').addNameAndInfo(programName, programInfo);
      Ember.$('.ui.profile.profile.modal').modal('show');
    },
  },
});
