import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showAlert111: function() {
      window.alert(111);
    },

    showAlert: function() {
      window.alert(222);
    }
  }
});
