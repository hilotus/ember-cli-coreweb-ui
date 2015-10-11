import Ember from 'ember';
import Row from '../row';

export default Row.extend({
  type: 'click',
  title: '',

  onClick: Ember.K
});
