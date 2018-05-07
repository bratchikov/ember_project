import Ember from 'ember';

export function firstProgram(params/*, hash*/) {
  return params == 0 ? 'active' : '';
}

export default Ember.Helper.helper(firstProgram);
