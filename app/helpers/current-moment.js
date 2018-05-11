import Ember from 'ember';

export function currentMoment(params, a/*, hash*/) {
  return params == 0 ? 'active' : '';
}

export default Ember.Helper.helper(currentMoment);
