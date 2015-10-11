import Ember from 'ember';

export default Ember.Object.extend({
  type: '',
  title: '',
  rows: [],

  isCollection: Ember.computed.equal('type', 'collection'),
  isSelect: Ember.computed.equal('type', 'select'),

  init: function () {
    this.rows = (this.rows || Ember.A()).map(function (row) {
      return this.createRow(row);
    }, this);
  },

  createRow: function (json) {
    json.section = this;
    return this.container.lookupFactory('ui-model:' + json.type + '-row').create(json);
  }
});
