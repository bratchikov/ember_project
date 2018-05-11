import Ember from 'ember';

let programs = [
  {
    "id": "1",
    "channelId": "1",
    "name": "program1",
    "info": "1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    "id": "2",
    "channelId": "2",
    "name": "program2",
    "info": "2-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "once"
  }, {
    "id": "3",
    "channelId": "3",
    "name": "program3",
    "info": "3-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "per"
  }, {
    "id": "4",
    "channelId": "2",
    "name": "program4",
    "info": "4-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "once"
  }, {
    "id": "5",
    "channelId": "2",
    "name": "program5",
    "info": "5-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "once"
  }, {
    "id": "6",
    "channelId": "1",
    "name": "program6",
    "info": "6-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "per"
  }, {
    "id": "7",
    "channelId": "3",
    "name": "program7",
    "info": "7-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "14:00",
    "type": "once"
  }, {
    "id": "8",
    "channelId": "3",
    "name": "program8",
    "info": "8-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "15:00",
    "type": "per"
  }, {
    "id": "9",
    "channelId": "2",
    "name": "program9",
    "info": "9-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "per"
  }, {
    "id": "10",
    "channelId": "1",
    "name": "program10",
    "info": "10-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "per"
  }, {
    "id": "11",
    "channelId": "1",
    "name": "program11",
    "info": "11-Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
    "date": "16:00",
    "type": "per"
  }
];

export default Ember.Route.extend({
  model() {
    return programs;
  },
});
