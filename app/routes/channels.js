import Ember from 'ember';

const {Route, set} = Ember;

let broadcasts = [
  {
    'id': 0,
    'startTime': '00:00',
    'allTime': 90,
    'broadcastName': 'Broadcast_1',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 0
  },
  {
    'id': 1,
    'startTime': '01:30',
    'allTime': 120,
    'broadcastName': 'Broadcast_2',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 0
  },
  {
    'id': 2,
    'startTime': '03:30',
    'allTime': 45,
    'broadcastName': 'Broadcast_3',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 0
  },
  {
    'id': 3,
    'startTime': '04:15',
    'allTime': 75,
    'broadcastName': 'Broadcast_4',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 0
  },
  {
    'id': 4,
    'startTime': '05:30',
    'allTime': 150,
    'broadcastName': 'Broadcast_1',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 1
  },
  {
    'id': 5,
    'startTime': '08:00',
    'allTime': 60,
    'broadcastName': 'Broadcast_2',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 1
  },
  {
    'id': 6,
    'startTime': '00:00',
    'allTime': 135,
    'broadcastName': 'Broadcast_1',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 1,
    'programId': 0
  },
  {
    'id': 7,
    'startTime': '02:15',
    'allTime': 75,
    'broadcastName': 'Broadcast_2',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 1,
    'programId': 0
  },
  {
    'id': 8,
    'startTime': '03:30',
    'allTime': 60,
    'broadcastName': 'Broadcast_3',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 1,
    'programId': 0
  },
  {
    'id': 9,
    'startTime': '04:30',
    'allTime': 90,
    'broadcastName': 'Broadcast_1',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 1,
    'programId': 1
  },
  {
    'id': 10,
    'startTime': '06:00',
    'allTime': 120,
    'broadcastName': 'Broadcast_2',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 1,
    'programId': 1
  },
  {
    'id': 11,
    'startTime': '08:00',
    'allTime': 60,
    'broadcastName': 'Broadcast_3',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 1,
    'programId': 1
  }
];

export default Route.extend({
  model() {
    return broadcasts;
    // return this.store.findAll('channel');
  },
  // Можно было обойтись без этого метода, данные из хука model попадают в свойство model контроллера. Помещение модели в другое свойство контроллера только запутывает.
  setupController(controller, model) {
    set(controller, 'broadcasts', model);
  },
});
