import Ember from 'ember';

export default Ember.Service.extend({
  count: 0,

  add(item) {
    console.log('1 = ', this.count);

    this.count = this.count + 1;

    console.log('2 = ', this.count);
  },
});
