import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tbody', // Для чего этот тег в JS-коде?
  classNames: ['tbody'], // Для чего этот класс в JS-коде?
  // Закомментированный код не нужен.
  // attributeBindings: ['tbodyStyle:style'],
  // tbodyStyle: 'background-color: blue; font-size: .9em;',
  
  // Хорошо бы писать комментарии с описанием свойств и методов. Рекомендуется использовать yuidoc: https://flexberry.github.io/ru/fp_ember-comments-style-yuidoc.html
  broadcasts: null,
  activeRatingArray: [],

  broadcastManager: Ember.inject.service(),

  sortedBroadcasts: Ember.computed.sort('broadcasts', 'sortDefinition'),
  sortDefinition: Ember.computed(function() {
    // Что это за магическая константа? Для чего тут computed-свойство?
    return [`startTime:asc`];
  }),

  // Заведено целое вычислимое свойство с непонятной целью с одной строкой логики. Зачем?
  getActiveRating: Ember.computed('activeRatingArray', function() {
    const rating = this.get('activeRatingArray');

    // Вывод отладочной информации зачем-то закоммичен.
    console.log(rating)
  }),

  // Лучше не увлекаться событием didRender(), эту же логику можно было реализовать на уровне свойств модели, т.е. в hbs привязаться к свойству class модели, а логику выставления этого класса нужному объекту в модели написать в роуте или контроллере.
  didRender() {
    this._super(...arguments);
    const activeRatingArray = this.get('activeRatingArray');

    activeRatingArray.map(index => {
      Ember.$(`.ui.rating.${index}`).find('.ui.rating').find('.icon').addClass('active');
    });
  },

  actions: {
    toggleModalWindow(broadcastName, broadcastInfo) {
      this.get('broadcastManager').addNameAndInfo(broadcastName, broadcastInfo);
      Ember.$('.ui.profile.modal').modal('show');
    },
    
    // Перечитал метод несколько раз, так и не понял, что тут происходит.
    activeRating(index) {
      const someIndex = item => item == index;
      const activeRatingArray = this.get('activeRatingArray');

      if(!activeRatingArray.some(someIndex)) {
        activeRatingArray.push(index);
      } else {
        const getIndexRemovingItem = activeRatingArray.indexOf(index);
        activeRatingArray.splice(getIndexRemovingItem, 1);
      }
    }
  },
});
