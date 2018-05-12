import Ember from 'ember';

let broadcasts = [
  {
    "id": "1",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast1",
    "info": "1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    "id": "2",
    "programId": "1",
    "channelId": "2",
    "name": "broadcast2",
    "info": "2-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "once"
  }, {
    "id": "3",
    "programId": "1",
    "channelId": "3",
    "name": "broadcast3",
    "info": "3-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    "id": "4",
    "programId": "1",
    "channelId": "2",
    "name": "broadcast4",
    "info": "4-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "once"
  }, {
    "id": "5",
    "programId": "1",
    "channelId": "2",
    "name": "broadcast5",
    "info": "5-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "once"
  }, {
    "id": "6",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast6",
    "info": "6-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "per"
  }, {
    "id": "7",
    "programId": "1",
    "channelId": "3",
    "name": "broadcast7",
    "info": "7-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "once"
  }, {
    "id": "8",
    "programId": "1",
    "channelId": "3",
    "name": "broadcast8",
    "info": "8-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "per"
  }, {
    "id": "9",
    "programId": "1",
    "channelId": "2",
    "name": "broadcast9",
    "info": "9-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "per"
  }, {
    "id": "10",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast10",
    "info": "10-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "per"
  }, {
    "id": "11",
    "programId": "1",
    "channelId": "1",
    "name": "broadcast11",
    "info": "11-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "per"
  }
];

export default Ember.Route.extend({
  model() {
    return broadcasts;
  },
});
