import Ember from 'ember';

export default Ember.Helper.extend({
  compute([broadcastsArray, index]) {
    // Закомментированный код не нужен.
    // const minDate = broadcastsArray.reduce((prev, current) => (prev.data.date < current.data.date) ? prev : current);
    // return broadcastsArray[index].data.date === minDate.data.date ? 'active' : '';

    // Не рекомендую увлекаться таким сжатым вариантом кода, поскольку читать это довольно тяжело. Плюс обработки ошибок явно не хватает.
    const minDate = broadcastsArray.reduce((prev, current) => (prev.startTime < current.startTime) ? prev : current);
    return broadcastsArray[index].startTime === minDate.startTime ? 'active' : '';
  }
});
