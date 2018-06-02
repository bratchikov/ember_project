import Ember from 'ember';

export default Ember.Helper.extend({
  compute([id, index]) {

    return id == null ? 'реклама (5мин.)' : id;
  }
});
