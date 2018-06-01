import DS from 'ember-data';

const {attr, Model} = DS;

export default DS.Model.extend({
  name: attr('string'),
  allTime: attr('number'),
  broadcastName: attr('string'),
  info: attr('string'),
  channelId: attr('number'),
  programId: attr('number'),
});
