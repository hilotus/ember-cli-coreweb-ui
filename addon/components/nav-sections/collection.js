import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['section', 'collection-section'],

  // section model
  model: null,

  newItemTitle: '',

  actions: {
    onEnter: function (inputValue) {
      if (inputValue && this.model && 'function' === typeof this.model.doCreate) {
        this.model.doCreate(inputValue);
      }
      this.set('newItemTitle', '');
    }
  }
});
