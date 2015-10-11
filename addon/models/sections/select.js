import Ember from 'ember';
import Section from '../section';

var Model = Ember.Object.extend({});

function rebuildOption(options) {
  return options.map(function (option) {
    return this.createOption(option);
  }, this);
}

export default Section.extend({
  type: 'select',
  title: '',

  // selected option's value
  selectedValue: '',

  // record collection
  options: Ember.computed('', {
    set: function (key, value) {
      value = rebuildOption.call(this, value);
      return value;
    }
  }),

  // on option selected.
  onSelect: Ember.K,

  removeOption: function (option) {
    if (option) {
      (this.get('options') || Ember.A()).removeObject(option);
    }
  },

  pushOption: function (option) {
    option = this.createOption(option);
    var options = this.get('options') || Ember.A();
    if (!options.contains(option)) {
      options.pushObject(option);
    }
  },

  /*
    json: {title: '', value: ''}
  */
  createOption: function (json) {
    json.section = this;
    if (json instanceof Ember.Object) {
      return json;
    } else {
      return Model.create(json);
    }
  }
});
