import Ember from 'ember';

export default Ember.Object.extend({
  // row type
  type: '',

  isDescript: Ember.computed.equal('type', 'descript'),
  isUpdate: Ember.computed.equal('type', 'update'),
  isClick: Ember.computed.equal('type', 'click'),
  isInput: Ember.computed.equal('type', 'input'),
  isButton: Ember.computed.equal('type', 'button')
});
