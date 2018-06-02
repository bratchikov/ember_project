import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tbody',
  classNames: ['tbody'],
  // attributeBindings: ['tbodyStyle:style'],
  // tbodyStyle: 'background-color: blue; font-size: .9em;',
  broadcasts: null,
  activeRatingArray: [],

  broadcastManager: Ember.inject.service(),

  sortedBroadcasts: Ember.computed.sort('broadcasts', 'sortDefinition'),
  sortDefinition: Ember.computed(function() {
    return [`startTime:asc`];
  }),

  getActiveRating: Ember.computed('activeRatingArray', function() {
    const rating = this.get('activeRatingArray');

    console.log(rating)
  }),

  didRender() {
    this._super(...arguments);
    const activeRatingArray = this.get('activeRatingArray');

    activeRatingArray.map(index => {
      Ember.$(`.ui.rating.${index}`).find('.ui.rating').find('.icon').addClass('active');
    });
  },

  actions: {
    toggleModalWindow(broadcastName, broadcastInfo) {
      this.get('broadcastManager').addNameAndInfo(broadcastName, broadcastInfo);
      Ember.$('.ui.profile.modal').modal('show');
    },
    activeRating(index) {
      const someIndex = item => item == index;
      const activeRatingArray = this.get('activeRatingArray');

      if(!activeRatingArray.some(someIndex)) {
        activeRatingArray.push(index);
      } else {
        const getIndexRemovingItem = activeRatingArray.indexOf(index);
        activeRatingArray.splice(getIndexRemovingItem, 1);
      }
    }
  },
});
