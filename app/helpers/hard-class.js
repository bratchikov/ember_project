import Ember from 'ember';

export function hardClass(params/*, hash*/) {
  let hardClass = `profile ${params[0]}-${params[1]}`;
  return hardClass;
}

export default Ember.Helper.helper(hardClass);
