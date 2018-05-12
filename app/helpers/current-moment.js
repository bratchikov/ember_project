import Ember from 'ember';

export default Ember.Helper.extend({
  compute([broadcastsArray, index]) {
    const minDate = broadcastsArray.reduce((prev, current) => (prev.date < current.date) ? prev : current).date;

    return broadcastsArray[index].date === minDate ? 'active' : '';
  }
});