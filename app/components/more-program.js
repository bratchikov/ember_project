import Ember from 'ember';
import moreProgram from '../../utils/more-program';

export default Ember.Component.extend({
  broadcastArray: null,
  getProgramOfBroadcasts: Ember.computed('broadcastArray', function() {
    const broadcastArray = Ember.get(this, 'broadcastArray')
    console.log('lol')
    return moreProgram(broadcastArray)
  })
});
