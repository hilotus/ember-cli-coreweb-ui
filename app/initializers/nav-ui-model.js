import Navigation from 'ember-cli-coreweb-ui/models/navigation';
import Navigatable from 'ember-cli-coreweb-ui/models/navigatable';
import Section from 'ember-cli-coreweb-ui/models/section';
import CollectionSection from 'ember-cli-coreweb-ui/models/sections/collection';
import SelectSection from 'ember-cli-coreweb-ui/models/sections/select';
import DescriptRow from 'ember-cli-coreweb-ui/models/rows/descript';
import UpdateRow from 'ember-cli-coreweb-ui/models/rows/update';
import ClickRow from 'ember-cli-coreweb-ui/models/rows/click';
import InputRow from 'ember-cli-coreweb-ui/models/rows/input';
import ButtonRow from 'ember-cli-coreweb-ui/models/rows/button';

export default {
  name: 'nav-ui-model',

  initialize: function (registry) {
    registry.register('ui-model:navigation', Navigation, { instantiate: false, singleton: true });
    registry.register('ui-model:navigatable', Navigatable, { instantiate: false, singleton: true });
    registry.register('ui-model:section', Section, { instantiate: false, singleton: true });
    registry.register('ui-model:collection-section', CollectionSection, { instantiate: false, singleton: true });
    registry.register('ui-model:select-section', SelectSection, { instantiate: false, singleton: true });
    registry.register('ui-model:descript-row', DescriptRow, { instantiate: false, singleton: true });
    registry.register('ui-model:update-row', UpdateRow, { instantiate: false, singleton: true });
    registry.register('ui-model:click-row', ClickRow, { instantiate: false, singleton: true });
    registry.register('ui-model:input-row', InputRow, { instantiate: false, singleton: true });
    registry.register('ui-model:button-row', ButtonRow, { instantiate: false, singleton: true });
  }
};
