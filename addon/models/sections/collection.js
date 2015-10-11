import Ember from 'ember';
import Section from '../section';
import CollectionItemMixin from 'ember-cli-coreweb-ui/mixins/collection-item';
import { collectionItemExt } from 'ember-cli-coreweb-ui/mixins/collection-item';

var Model = Ember.Object.extend(CollectionItemMixin, {});

function injectMixin(collection) {
  return collection.map(function (item) {
    return this.createItem(item);
  }, this);
}

export default Section.extend({
  type: 'collection',
  title: '',

  // record collection
  collection: Ember.computed('', {
    set: function (key, value) {
      value = injectMixin.call(this, value);
      return value;
    }
  }),

  collectionItemTitleKey: 'title',
  canCreate: false,
  canDelete: false,
  canEdit: false,

  doCreate: Ember.K,
  doSave: Ember.K,
  doDelete: Ember.K,

  removeItem: function (item) {
    if (item) {
      (this.get('collection') || Ember.A()).removeObject(item);
    }
  },

  pushItem: function (item) {
    item = this.createItem(item);
    var collection = this.get('collection') || Ember.A();
    if (!collection.contains(item)) {
      collection.pushObject(item);
    }
  },

  /*
    json: {title: ''}
  */
  createItem: function (json) {
    json.section = this;
    if (json instanceof Ember.Object) {
      if ('function' !== typeof json.doEdit) {
        json.reopen(collectionItemExt);
      }
      return json;
    } else {
      return Model.create(json);
    }
  }
});
