import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['row', 'update-row'],

  // row model
  model: null,

  // bind to edit input value
  bufferedValue: '',
  isEditing: false,

  cancelEditing: function () {
    this.set('isEditing', false);
    // discard edit input value
    this.set('bufferedValue', this.get('model.value'));
  },

  doneEditing: function () {
    // set value new value
    if (Ember.isEmpty(this.get('bufferedValue'))) {
      this.set('bufferedValue', this.get('model.value'));
      this.set('isEditing', false);
    } else {
      if (this.get('model.value') !== this.get('bufferedValue')) {
        var promise = this.get('model').doSave(this.get('bufferedValue'));
        if (promise && typeof promise.then === 'function') {
          promise
            .then(function () {
              this.set('model.value', this.get('bufferedValue'));
            }.bind(this))
            .catch(function () {
              this.set('bufferedValue', this.get('model.value'));
            }.bind(this))
            .finally(function () {
              this.set('isEditing', false);
            }.bind(this));
        } else {
          this.set('model.value', this.get('bufferedValue'));
          this.set('isEditing', false);
        }
      } else {
        this.set('isEditing', false);
      }
    }
  },

  click: function (event)  {
    if (!this.get('isEditing')) {
      // reset edit input value
      this.set('bufferedValue', this.get('model.value'));
      this.set('isEditing', true);
    }
    event.preventDefault();
  }
});
