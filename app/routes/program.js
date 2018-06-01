import Ember from 'ember';

let a = [
  'id': 0,
  'programArray': [
    'id': 0,
    'broadcastArray': [

    ]
  ]



  {
    'id': 0,
    'startTime': '00:00',
    'allTime': 60,
    'broadcastName': 'Broadcast_1',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 0
  },
  {
    'id': 1,
    'startTime': '01:00',
    'allTime': 120,
    'broadcastName': 'Broadcast_2',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 0
  },
  {
    'id': 2,
    'startTime': '03:00',
    'allTime': 60,
    'broadcastName': 'Broadcast_3',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 0
  },
  {
    'id': 3,
    'startTime': '04:00',
    'allTime': 60,
    'broadcastName': 'Broadcast_4',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 0
  },
  {
    'id': 4,
    'startTime': '05:00',
    'allTime': 120,
    'broadcastName': 'Broadcast_1',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 1
  },
  {
    'id': 5,
    'startTime': '07:00',
    'allTime': 60,
    'broadcastName': 'Broadcast_2',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 0,
    'programId': 1
  },
  {
    'id': 6,
    'startTime': '00:00',
    'allTime': 120,
    'broadcastName': 'Broadcast_1',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 1,
    'programId': 0
  },
  {
    'id': 7,
    'startTime': '02:00',
    'allTime': 60,
    'broadcastName': 'Broadcast_2',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 1,
    'programId': 0
  },
  {
    'id': 8,
    'startTime': '03:00',
    'allTime': 60,
    'broadcastName': 'Broadcast_3',
    'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
    'channelId': 1,
    'programId': 0
  },
  {
    'id': 9,
    'startTime': '04:00',
    'allTime': 120,
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
]

export default Ember.Route.extend({
  model(params) {
    // console.log('params=', this.store.findAll('channel', params.content))


    return this.store.query('channel', {programId: params.programId, chennelId: params.channelId} )
  }
});
