import Ember from 'ember';

export default Ember.Helper.extend({
  compute([id, index]) {
    let blockId = id;

    if(id == null) {
      blockId = 'реклама (5мин.)';
    } else if(id == 0) {
      blockId = `${id} (начало блока передачи)`;
    }

    return blockId;
  }
});
