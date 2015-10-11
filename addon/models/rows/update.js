import Row from '../row';

export default Row.extend({
  type: 'update',
  title: '',
  value: '',

  doSave: function (newValue) {
    console.log(newValue);
  }
});
