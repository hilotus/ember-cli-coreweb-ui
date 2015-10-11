import Ember from 'ember';
import NavigatableVaryMixin from 'ember-cli-coreweb-ui/mixins/navigatable-vary';

export default Ember.Object.extend(NavigatableVaryMixin, {
  navs: [],

  generateFromJson: function (json) {
    this.navs = (json.navs || Ember.A()).map(function (nav) {
      return this.createNavigatable(nav);
    }, this);
    return this;
  },

  generateNavFromJson: function (json) {
    json.navigation = this;
    return this.container.lookupFactory('ui-model:navigatable').create(json);
  },

  createNavigatable: function (json) {
    json.navigation = this;
    return this.container.lookupFactory('ui-model:navigatable').create(json);
  }
});
