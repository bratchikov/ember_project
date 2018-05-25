import Ember from 'ember';

const {Route, set} = Ember;

let a = [
  {
    'id': 0,
    "broadcastId": "1",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast_1",
    "info": "1_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    'id': 1,
    "broadcastId": "2",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast_2",
    "info": "2_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    'id': 2,
    "broadcastId": "3",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast_3",
    "info": "3_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    'id': 3,
    "broadcastId": "4",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast_4",
    "info": "4_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    'id': 4,
    "broadcastId": "5",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast_5",
    "info": "5_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    'id': 5,
    "broadcastId": "6",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast_6",
    "info": "6_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    'id': 6,
    "broadcastId": "1",
    "programId": "1",
    "channelId": "2",
    "name": "broadcast_1",
    "info": "1_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    'id': 7,
    "broadcastId": "2",
    "programId": "1",
    "channelId": "2",
    "name": "broadcast_2",
    "info": "2_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    'id': 8,
    "broadcastId": "3",
    "programId": "2",
    "channelId": "2",
    "name": "broadcast_3",
    "info": "3_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "per"
  }, {
    'id': 9,
    "broadcastId": "4",
    "programId": "2",
    "channelId": "2",
    "name": "broadcast_4",
    "info": "4_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "per"
  }, {
    'id': 10,
    "broadcastId": "5",
    "programId": "2",
    "channelId": "2",
    "name": "broadcast_5",
    "info": "5_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "per"
  }, {
    'id': 11,
    "broadcastId": "6",
    "programId": "2",
    "channelId": "2",
    "name": "broadcast_6",
    "info": "6_Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "per"
  },
];

export default Route.extend({
  model() {
    return a;
    // return this.store.findAll('channel');
  },
  setupController(controller, model) {
    set(controller, 'channels', model);
  },
});
