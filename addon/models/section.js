import Ember from 'ember';

export default Ember.Object.extend({
  type: 'custom',
  title: '',
  rows: [],

  isCustom: Ember.computed.equal('type', 'custom'),
  isSelect: Ember.computed.equal('type', 'select'),
  isCollection: Ember.computed.equal('type', 'collection')
});
