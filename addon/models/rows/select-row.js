import Row from '../row';

export default Row.extend({
  type: "select",

  /**
    [
      {title: '', value: ''},
      ...
    ]
  **/
  model: [],
  selectedModel: null,

  onClick: function (item) {
    this.set('selectedModel', item);
  }
});
