import Ember from 'ember';

export default Ember.Controller.extend({
  navigation: null,

  init: function () {
    this._super.apply(this, arguments);

    var navigation = this.container.lookupFactory('ui-model:navigation').create().generateFromJson({
      navs: [
        {
          title: 'Navigatable One',
          hasLeftButton: true,
          leftButtonTitle: 'Left',
          hasRightButton: true,
          rightButtonTitle: 'Right',
          sections: [
            {
              title: 'Section Title',
              rows: [
                { title: 'name', description: 'Wei Luo', type: 'descript' },
                { key: 'email', value: 'xxx@sina.com', type: 'update' },
                {
                  title: 'Profile',
                  type: 'click',
                  onClick: function () {
                    this.get('navigation').push({
                      title: 'Navigatable Two',
                      hasLeftButton: true,
                      leftButtonAction: function () {
                        this.get('navigation').pop();
                      }.bind(this),
                      leftButtonTitle: 'Back',
                      sections: [
                        {
                          title: 'Section Two',
                          rows: [
                            { title: 'Record 1', canDelete: true, delete: function () { window.alert(1); }, type: 'delete' },
                            { title: 'Record 2', canDelete: true, delete: function () { window.alert(2); }, type: 'delete' },
                            { title: 'Record 3', canDelete: true, delete: function () { window.alert(3); }, type: 'delete' },
                            { title: 'Record 4', canDelete: true, delete: function () { window.alert(4); }, type: 'delete' },
                            { title: 'Record 5', canDelete: true, delete: function () { window.alert(5); }, type: 'delete' },
                            { title: 'Record 6', canDelete: false, delete: function () { window.alert(6); }, type: 'delete' },
                            { title: 'Record 7', canDelete: false, delete: function () { window.alert(7); }, type: 'delete' },
                          ]
                        }
                      ]
                    });
                  }.bind(this)
                },
                { placeholder: 'Please input your username.', onEnter: function () { window.alert('input'); }, type: 'input' },
                { title: 'I can be deleted.', canDelete: true, delete: function () { window.alert('delete'); }, type: 'delete' },
                { title: 'Button Title', onClick: function () { window.alert(2); }, type: 'button' }
              ]
            },
            {
              type: 'select',
              title: 'Select Language',
              selectedValue: 'en-us',
              rows: [
                {type: 'select-option', title: 'English (US)', value: 'en-us'},
                {type: 'select-option', title: 'Simple Chinese', value: 'zh-cn'}
              ]
            }
          ]
        }
      ]
    });

    this.set('navigation', navigation);
  }
});
