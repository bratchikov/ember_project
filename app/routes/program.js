import Ember from 'ember';

// В чём тайный смысл все переменные объявлять константами?
const channels = [
  {
    'id': 0,
    'programArray': [
      {
        'id': 0,
        'broadcastArray': [
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
          }
        ]
      }, {
        'id': 1,
        'broadcastArray': [
          {
            'id': 0,
            'startTime': '05:30',
            'allTime': 150,
            'broadcastName': 'Broadcast_1',
            'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
            'channelId': 0,
            'programId': 1
          },
          {
            'id': 1,
            'startTime': '08:00',
            'allTime': 60,
            'broadcastName': 'Broadcast_2',
            'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
            'channelId': 0,
            'programId': 1
          }
        ]
      }
    ]
  }, {
    'id': 1,
    'programArray': [
      {
        'id': 0,
        'broadcastArray': [
          {
            'id': 0,
            'startTime': '00:00',
            'allTime': 135,
            'broadcastName': 'Broadcast_1',
            'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
            'channelId': 1,
            'programId': 0
          },
          {
            'id': 1,
            'startTime': '02:15',
            'allTime': 75,
            'broadcastName': 'Broadcast_2',
            'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
            'channelId': 1,
            'programId': 0
          },
          {
            'id': 2,
            'startTime': '03:30',
            'allTime': 60,
            'broadcastName': 'Broadcast_3',
            'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
            'channelId': 1,
            'programId': 0
          }
        ]
      }, {
        'id': 1,
        'broadcastArray': [
          {
            'id': 0,
            'startTime': '04:30',
            'allTime': 90,
            'broadcastName': 'Broadcast_1',
            'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
            'channelId': 1,
            'programId': 1
          },
          {
            'id': 1,
            'startTime': '06:00',
            'allTime': 120,
            'broadcastName': 'Broadcast_2',
            'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
            'channelId': 1,
            'programId': 1
          },
          {
            'id': 2,
            'startTime': '08:00',
            'allTime': 60,
            'broadcastName': 'Broadcast_3',
            'info': 'infooooooooooooooooooooooooooooooooooooooooooooooooofni',
            'channelId': 1,
            'programId': 1
          }
        ]
      }
    ]
  }
];

const getBroadcastArray = (programId, channelId) => {
  const programs = channels.find(channel => {
    return channel.id == channelId ? true : false; //находим нужный канал
  });

  const broadcastArray = programs.programArray.find(program => {
    return program.id == programId ? true : false; //находим нужную программу
  });

  // Не самое удачное название для свойства.
  return broadcastArray.broadcastArray; //массив передач одной программы
};

export default Ember.Route.extend({
  model(params) {
    return getBroadcastArray(params.programId, params.channelId);
  }
});
