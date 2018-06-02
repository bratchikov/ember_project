import Ember from 'ember';

export default Ember.Helper.extend({
  compute([broadcastsArray, index]) {
    // const minDate = broadcastsArray.reduce((prev, current) => (prev.data.date < current.data.date) ? prev : current);
    // return broadcastsArray[index].data.date === minDate.data.date ? 'active' : '';

    const minDate = broadcastsArray.reduce((prev, current) => (prev.startTime < current.startTime) ? prev : current);
    return broadcastsArray[index].startTime === minDate.startTime ? 'active' : '';
  }
});
