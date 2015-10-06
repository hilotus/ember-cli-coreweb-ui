module.exports = {
  description: 'Blueprint for ember-cli-coreweb-ui',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('coreweb-css', 'git://github.com/hilotus/coreweb-css.git');
  }
};
