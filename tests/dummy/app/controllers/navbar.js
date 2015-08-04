import Ember from 'ember';

export default Ember.Controller.extend({
  preferenceOptions: function() {
    var options = [];
    options.pushObject(Ember.Object.create({ label: 'Username', primary: true }));
    options.pushObject(Ember.Object.create({ label: 'Preference' }));
    options.pushObject(Ember.Object.create({ isDivider: true }));
    options.pushObject(Ember.Object.create({ label: 'LogOut', action: 'logOut' }));
    return options;
  }.property(),

  actions: {
    logOut: function() {
      window.alert('logOut action fire...(I am in Navbar controller)');
    }
  }
});
