import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  // btn btn-primary, btn btn-success, btn btn-link...
  style: '',

  // tiny, small, default, medium, large
  size: 'default',

  // Icons use font-awesome.
  leadingIcon: null,
  trailingIcon: null,

  label: null,

  classNameBindings: ['styleClass', 'sizeClass'],

  styleClass: Ember.computed('style', function() {
    return this.get('style');
  }),

  sizeClass: Ember.computed('size', function() {
    return this.get('size');
  }),

  attributeBindings: ['disabled'],
  disabled: false,

  action: null,

  // if target is null, the action is in actions of controller: {},
  // otherwise, the action is in target.
  target: null,

  click: function (event) {
    event.preventDefault();
    if (!this.disabled) {
      if (Ember.isBlank(this.target)) {
        if (this.action) {
          this.sendAction('action', this.get('context'));
        }
      } else {
        this.action.call(this.target);
      }
    }
  }
});
