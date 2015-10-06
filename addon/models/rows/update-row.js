import { K } from 'ember';
import Row from '../row';

export default Row.extend({
  type: 'update',
  key: '',
  value: '',

  // bind to edit input value
  bufferedValue: '',
  isEditing: false,
  canDelete: false,

  cancelEditing: function () {
    this.set('isEditing', false);
    // discard edit input value
    this.set('bufferedValue', this.get('value'));
  },

  doneEditing: function () {
    // set value new value
    this.set('value', this.get('bufferedValue'));
    this.set('isEditing', false);
  },

  edit: function () {
    // reset edit input value
    this.set('bufferedValue', this.get('value'));
    this.set('isEditing', true);
  },

  delete: K
});
