import Ember from 'ember';
import Row from '../row';

export default Row.extend({
  type: "click",
  title: '',
  // default use awesome-font.
  icon: 'fa fa-angle-right',

  onClick: Ember.K
});
