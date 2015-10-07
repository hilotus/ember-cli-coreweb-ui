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
                        { title: 'Section Two', rows: [] }
                      ]
                    });
                  }.bind(this)
                },
                { placeholder: 'Please input your username.', onEnter: function () { window.alert(1); }, type: 'input' },
                { title: 'I can be deleted.', canDelete: true, delete: function () { window.alert(3); }, type: 'delete' },
                { title: 'Button Title', onClick: function () { window.alert(2); }, type: 'button' }
              ]
            },
            {
              title: 'Language',
              rows: [
                {
                  type: 'select',
                  selectedValue: 'en-us',
                  model: [
                    {title: 'English (US)', value: 'en-us'},
                    {title: 'Simple Chinese', value: 'zh-cn'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    });

    this.set('navigation', navigation);
  }
});
