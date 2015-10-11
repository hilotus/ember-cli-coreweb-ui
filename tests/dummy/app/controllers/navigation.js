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
                { title: 'email', value: 'xxx@sina.com', doSave: function () { window.alert('have saved!'); }, type: 'update' },
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
                          type: 'collection',
                          canCreate: true,
                          createInputPlaceholder: 'create a new item',
                          doCreate: function (inputValue) {
                            this.pushItem(this.createItem({title: inputValue}));
                          },
                          canEdit: true,
                          doSave: function (item) {
                            console.log(item.title);
                          },
                          canDelete: true,
                          doDelete: function (item) {
                            this.removeItem(item);
                          },
                          collection: [
                            { title: 'Record 1' },
                            { title: 'Record 2' },
                            { title: 'Record 3' },
                            { title: 'Record 4' },
                            { title: 'Record 5' },
                            { title: 'Record 6' },
                            { title: 'Record 7' },
                          ]
                        }
                      ]
                    });
                  }.bind(this)
                },
                { placeholder: 'Please input your username.', onEnter: function (inputVaule) { window.alert(inputVaule); }, type: 'input' },
                { title: 'Button Title', onClick: function () { window.alert('default button'); }, type: 'button' },
                { title: 'Button Title', onClick: function () { window.alert('delete button'); }, type: 'button', mode: 'delete' }
              ]
            },
            {
              type: 'select',
              title: 'Select Language',
              selectedValue: 'en-us',
              onSelect: function (option) { console.log(option.value); },
              options: [
                {title: 'English (US)', value: 'en-us'},
                {title: 'Simple Chinese', value: 'zh-cn'}
              ]
            }
          ]
        }
      ]
    });

    this.set('navigation', navigation);
  }
});
