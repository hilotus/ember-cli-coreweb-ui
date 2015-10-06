import Ember from 'ember';
import Row from '../row';

export default Row.extend({
  type: 'delete',
  title: '',

  // bind to edit input value
  bufferedTitle: '',
  isEditing: false,
  canDelete: false,

  cancelEditing: function () {
    this.set('isEditing', false);
    // discard edit input value
    this.set('bufferedTitle', this.get('title'));
  },

  doneEditing: function () {
    // set value new value
    this.set('title', this.get('bufferedTitle'));
    this.set('isEditing', false);
  },

  edit: function () {
    // reset edit input value
    this.set('bufferedTitle', this.get('title'));
    this.set('isEditing', true);
  },

  delete: Ember.K
});
