import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['row', 'click-row'],

  // row model
  model: null,

  click: function (event) {
    if (this.model && 'function' === typeof this.model.onClick) {
      this.model.onClick();
    }
    event.preventDefault();
  }
});
