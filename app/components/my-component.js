import Ember from 'ember';

export default Ember.Component.extend({
  card: Ember.inject.service('first-service'),

  example() {
    let count = this.get('card').count;
    console.log('count', count);
  },
});
