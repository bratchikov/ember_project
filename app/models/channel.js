import DS from 'ember-data';

const {attr, Model} = DS;

export default DS.Model.extend({
  broadcastId: attr('string'),
  programId: attr('string'),
  channelId: attr('string'),
  name: attr('string'),
  info: attr('string'),
  date: attr('string'),
  type: attr('string'),
});
