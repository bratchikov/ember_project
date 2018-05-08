import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleBody() {
      console.log('rerer');
      this.toggleProperty('isShowingBody');
    }
  }
});
