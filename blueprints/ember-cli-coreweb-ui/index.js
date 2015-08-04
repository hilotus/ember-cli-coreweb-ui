module.exports = {
  description: 'Blueprint for ember-cli-coreweb-ui',

  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return self.addBowerPackageToProject('font-awesome', '~4.4.0').then(function(){
      return self.addBowerPackageToProject('coreweb-css', '~0.1.5');
    });
  }
};
