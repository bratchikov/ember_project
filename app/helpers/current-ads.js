import Ember from 'ember';

export default Ember.Helper.extend({
  compute([id, index]) {
    return  id == null ? 'реклама' : id;
  }
});
