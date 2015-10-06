import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['navigation'],

  // navigation model
  model: null,

  didInsertElement: function () {
    var $elem = this.$(),
      $well = $elem.find('.navigation-well'),
      $channel = $well.find('.navigatable-channel');

    if (this.get('model')) {
      this.set('model.element', this.$());
    }
    $channel.css({'width': $well.width() + 'px'});
  }
});
