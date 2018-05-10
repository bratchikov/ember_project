import Ember from 'ember';

export function firstProgram(index/*, hash*/) {
  return index == 0 ? 'active' : '';
}

export default Ember.Helper.helper(firstProgram);
