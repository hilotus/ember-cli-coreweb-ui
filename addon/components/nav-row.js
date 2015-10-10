import Ember from 'ember';

export default Ember.Component.extend({
  // row model
  model: null,

  // select option, is selected
  selectedValue: null,

  actions: {
    onClick: function (model) {
      this.set('selectedValue', model.value);
      // select mdoel in select section
      model.select();
    }
  }
});
