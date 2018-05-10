import Ember from 'ember';

let channels = [
  {
    'id': '1',
    'programs': [
      {
        "id": "1",
        "name": "program1",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "14:00",
        "type": "per"
      }, {
        "id": "2",
        "name": "program2",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "15:00",
        "type": "once"
      }
    ]
  }, {
    'id': '2',
    'programs': [
      {
        "id": "1",
        "name": "program1",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "14:00",
        "type": "per"
      }, {
        "id": "2",
        "name": "program2",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "16:00",
        "type": "once"
      }, {
        "id": "3",
        "name": "program3",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "15:00",
        "type": "once"
      }, {
        "id": "4",
        "name": "program4",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "15:00",
        "type": "per"
      }
    ]
  }, {
    'id': '3',
    'programs': [
      {
        "id": "1",
        "name": "program1",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "14:00",
        "type": "once"
      }, {
        "id": "2",
        "name": "program2",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "15:00",
        "type": "per"
      }, {
        "id": "3",
        "name": "program3",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "16:00",
        "type": "per"
      }
    ]
  }
];

export default Ember.Route.extend({
  model() {
    return channels;
  },
});
