import Ember from 'ember';

export default Ember.Object.extend({
  title: '',

  hasLeftButton: false,
  leftButtonAction: Ember.K,
  leftButtonTitle: '',

  hasRightButton: false,
  rightButtonAction: Ember.K,
  rightButtonTitle: '',

  sections: [],

  init: function () {
    this.sections = (this.sections || Ember.A()).map(function (section) {
      return this.createSection(section);
    }, this);
  },

  createSection: function (json) {
    json.navigatable = this;
    if (json.type === 'collection') {
      return this.container.lookupFactory('ui-model:collection-section').create(json);
    } else if (json.type === 'select') {
      return this.container.lookupFactory('ui-model:select-section').create(json);
    } else {
      return this.container.lookupFactory('ui-model:section').create(json);
    }
  }
});
