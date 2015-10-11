import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['section', 'select-section'],

  // section model
  model: null,

  actions: {
    select: function (option) {
      if (this.get('model.selectedValue') !== option.value) {
        this.set('model.selectedValue', option.value);
        if (this.model && 'function' === typeof this.model.onSelect) {
          this.model.onSelect(option);
        }
      }
    }
  }
});
