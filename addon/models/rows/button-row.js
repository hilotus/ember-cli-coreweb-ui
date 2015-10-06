import Ember from 'ember';
import Row from '../row';

export default Row.extend({
  type: "button",
  title: '',
  disabled: false,

  onClick: Ember.K
});
