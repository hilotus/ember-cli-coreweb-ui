import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['row', 'input-row'],

  // row model
  model: null,

  actions: {
    onEnter: function (inputValue) {
      if (this.model && 'function' === typeof this.model.onEnter) {
        this.model.onEnter(inputValue);
      }
    }
  }
});
