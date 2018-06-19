import Ember from 'ember';

export default Ember.Service.extend({
  broadcastName: null,
  broadcastInfo: null,
  minDate: null,

  // Лучше было назвать setNameAndInfo. Ну и логично было бы в пару иметь метод getNameAndInfo, наверное.
  addNameAndInfo(name, info) {
    this.set('broadcastName', name);
    this.set('broadcastInfo', info);
  },
});
