import Ember from 'ember';

export default Ember.Helper.extend({
  compute([getProgramOfBroadcasts, startTime, id, index]) {
    let activeClass = '';

    // Довольно небезопасный код. Очень легко в таком варианте получить undefined при обращении по индексу, нужна обработка ошибок.
    if((getProgramOfBroadcasts[index].id != 0 && getProgramOfBroadcasts[index-1].endProgramTime == startTime) || 
      (getProgramOfBroadcasts[index].id == 0 && id == 0)) {
      activeClass = 'active';
    }

    return activeClass;
  }
});
