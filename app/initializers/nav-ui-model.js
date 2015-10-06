import Navigation from 'ember-cli-coreweb-ui/models/navigation';
import Navigatable from 'ember-cli-coreweb-ui/models/navigatable';
import Section from 'ember-cli-coreweb-ui/models/section';
import DescriptRow from 'ember-cli-coreweb-ui/models/rows/descript-row';
import UpdateRow from 'ember-cli-coreweb-ui/models/rows/update-row';
import ClickRow from 'ember-cli-coreweb-ui/models/rows/click-row';
import InputRow from 'ember-cli-coreweb-ui/models/rows/input-row';
import DeleteRow from 'ember-cli-coreweb-ui/models/rows/delete-row';
import ButtonRow from 'ember-cli-coreweb-ui/models/rows/button-row';
import SelectRow from 'ember-cli-coreweb-ui/models/rows/select-row';

export default {
  name: 'nav-ui-model',

  initialize: function (registry) {
    registry.register('ui-model:navigation', Navigation, { instantiate: false, singleton: true });
    registry.register('ui-model:navigatable', Navigatable, { instantiate: false, singleton: true });
    registry.register('ui-model:section', Section, { instantiate: false, singleton: true });
    registry.register('ui-model:descript-row', DescriptRow, { instantiate: false, singleton: true });
    registry.register('ui-model:update-row', UpdateRow, { instantiate: false, singleton: true });
    registry.register('ui-model:click-row', ClickRow, { instantiate: false, singleton: true });
    registry.register('ui-model:input-row', InputRow, { instantiate: false, singleton: true });
    registry.register('ui-model:delete-row', DeleteRow, { instantiate: false, singleton: true });
    registry.register('ui-model:button-row', ButtonRow, { instantiate: false, singleton: true });
    registry.register('ui-model:select-row', SelectRow, { instantiate: false, singleton: true });
  }
};
