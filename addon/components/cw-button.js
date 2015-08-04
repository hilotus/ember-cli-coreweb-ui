import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  // primary, success, default, link
  style: 'default',
  leadingIcon: null,
  trailingIcon: null,
  label: null,

  classNameBindings: [':btn', 'styleClass'],
  styleClass: Ember.computed('style', function() {
    return 'btn-' + this.get('style')
  }),

  attributeBindings: ['disabled'],
  disabled: false,

  action: null,
  // if target is null, the action is in actions of controller: {},
  // otherwise, the action is in target.
  target: null,

  click: function(event) {
    event.preventDefault()
    if (!this.disabled) {
      if (Ember.isBlank(this.target)) {
        this.sendAction('action', this.get('context'));
      } else {
        this.action.call(this.target);
      }
    }
  }
});
