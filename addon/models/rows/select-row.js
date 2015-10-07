import Row from '../row';

export default Row.extend({
  type: 'select',

  /**
    [
      {title: '', value: ''},
      ...
    ]
  **/
  model: [],
  selectedValue: null,

  onClick: function (item) {
    this.set('selectedValue', item.value);
  }
});
