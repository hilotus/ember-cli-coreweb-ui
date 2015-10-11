import Ember from 'ember';
import Row from '../row';

export default Row.extend({
  type: 'input',

  inputType: 'text',
  value: '',
  placeholder: '',

  onEnter: Ember.K
});
