import Ember from 'ember';

export default Ember.Mixin.create({
  onClickElsewhere: function(event) {
    // send action to component.
    this.send('toggleActive', event);
  },

  didRender: function() {
    this._super.apply(this, arguments);
    return Ember.$(document).on('click', Ember.$.proxy(this.get('onClickElsewhere'), this));
  },

  willDestroyElement: function() {
    this._super.apply(this, arguments);
    Ember.$(document).off('click', Ember.$.proxy(this.get('onClickElsewhere'), this));
  }
});
