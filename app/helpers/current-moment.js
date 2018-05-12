import Ember from 'ember';

export default Ember.Helper.extend({
  compute([programsArray, index]) {
    const minDate = programsArray.reduce((prev, current) => (prev.date < current.date) ? prev : current).date;

    return programsArray[index].date === minDate ? 'active' : '';
  }
});