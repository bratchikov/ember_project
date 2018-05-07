import Ember from 'ember';

let channels = [
  {
    'id': '1',
    'programs': [
      {
        "id": "1",
        "name": "program1",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "14:00"
      }, {
        "id": "2",
        "name": "program2",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "14:00"
      }
    ]
  }, {
    'id': '2',
    'programs': [
      {
        "id": "1",
        "name": "program1",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "14:00"
      }, {
        "id": "2",
        "name": "program2",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "14:00"
      }, {
        "id": "3",
        "name": "program3",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "14:00"
      }
    ]
  }, {
    'id': '3',
    'programs': [
      {
        "id": "1",
        "name": "program1",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem.",
        "date": "14:00"
      }
    ]
  }
]

export default Ember.Route.extend({
  model() {
    return channels;
  }
});
