import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':row', ':button-row', 'model.disabled:disabled', 'modeClass'],

  // row model
  model: null,

  modeClass: Ember.computed('model.mode', function () {
    return this.get('model.mode');
  }),

  click: function (event) {
    if (this.model && 'function' === typeof this.model.onClick) {
      this.model.onClick();
    }
    event.preventDefault();
  }
});
