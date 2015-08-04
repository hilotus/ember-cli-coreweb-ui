import Ember from 'ember';
import ClickElseWhereMixin from 'ember-cli-coreweb-ui/mixins/click-else-where';

export default Ember.Component.extend(ClickElseWhereMixin, {
  tagName: 'li',
  classNameBindings: [':dropdown', 'isActive:open'],

  isActive: false,
  // menu option
  options: [],

  primaryAction: Ember.computed('options', function() {
    return this.get('options').findBy('primary', true);
  }),

  optionsWithoutPrimaryAction: Ember.computed.filter('options', function(option) {
    return !option.primary;
  }),

  actions: {
    toggleActive: function(event)  {
      var isOutside = false,
        $self;

      if (event && ($self = this.$()[0])) {
        isOutside = !$self.contains(event.target);
        if (isOutside) {
          this.set('isActive', false);
        }
      } else {
        this.set('isActive', !this.get('isActive'));
      }
    },

    sendAc: function(action) {
      if (action) {
        this.set('menuClick', action);
        this.sendAction('menuClick', this.get('context'));
      }
    }
  }
});
