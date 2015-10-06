import Ember from 'ember';

export default Ember.Object.extend({
  title: '',

  hasLeftButton: false,
  leftButtonAction: Ember.K,
  leftButtonTitle: '',

  hasRightButton: false,
  rightButtonAction: Ember.K,
  rightButtonTitle: '',

  sections: []
});
