import Ember from 'ember';
import Row from '../row';

export default Row.extend({
  type: 'select-option',

  title: '',
  value: '',

  // select section callback
  select: Ember.K
});
