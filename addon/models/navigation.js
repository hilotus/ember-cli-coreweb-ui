import Ember from 'ember';
import NavigatableVaryMixin from 'ember-cli-coreweb-ui/mixins/navigatable-vary';

export default Ember.Object.extend(NavigatableVaryMixin, {
  navs: [],

  generateFromJson: function (json) {
    if (!json.navs) {
      json.navs = [];
    }

    this.navs = json.navs.map(function (nav) {
      return this.generateNavFromJson(nav);
    }, this);
    return this;
  },

  generateNavFromJson: function (json) {
    if (!json.sections) {
      json.sections = [];
    }

    json.sections = json.sections.map(function (section) {
      if (!section.rows) {
        section.rows = [];
      }

      section.rows = section.rows.map(function (row) {
        return this.container.lookupFactory('ui-model:' + row.type + '-row').create(row);
      }, this);
      return this.container.lookupFactory('ui-model:section').create(section);
    }, this);
    return this.container.lookupFactory('ui-model:navigatable').create(json);
  }
});
