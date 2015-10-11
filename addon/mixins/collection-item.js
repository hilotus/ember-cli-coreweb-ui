import Ember from 'ember';

export var collectionItemExt = {
  modelTitle: Ember.computed('', function () {
    return this.get(this.section.collectionItemTitleKey);
  }).volatile(),

  // bind to edit input value
  bufferedTitle: '',
  isEditing: false,

  cancelEditing: function () {
    this.set('isEditing', false);
    // discard edit input value
    this.set('bufferedTitle', this.get(this.section.collectionItemTitleKey));
  },

  doneEditing: function () {
    var title = this.get(this.section.collectionItemTitleKey);

    // set value new value
    if (Ember.isEmpty(this.get('bufferedTitle'))) {
      this.set('bufferedTitle', title);
      this.set('isEditing', false);
    } else {
      if (title !== this.get('bufferedTitle')) {
        this.set(this.section.collectionItemTitleKey, this.get('bufferedTitle'));
        this.section.doSave(this);
      }
      this.set('isEditing', false);
    }
  },

  // Go to edit
  doEdit: function () {
    // reset edit input value
    this.set('bufferedTitle', this.get(this.section.collectionItemTitleKey));
    this.set('isEditing', true);
  }
};

export default Ember.Mixin.create(collectionItemExt);
