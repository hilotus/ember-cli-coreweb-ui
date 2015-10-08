import Ember from 'ember';

export default Ember.Component.extend({
  // row model
  model: null,

  // select option, is selected
  selectedValue: null,

  actions: {
    onClick: function (option) {
      this.set('selectedValue', option.value);
    }
  }
});
