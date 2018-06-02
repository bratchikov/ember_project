import Ember from 'ember';
import getProgramCollection from '../utils/get-program-collection';

export default Ember.Component.extend({
  tagName: 'tbody',
  classNames: ['tbody'],

  broadcastArray: [],

  getProgramOfBroadcasts: Ember.computed('broadcastArray', function() {
    const broadcastArray = this.get('broadcastArray');

    return getProgramCollection(broadcastArray);
  })
});
