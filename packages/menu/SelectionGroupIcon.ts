import type { SMUIComponent } from '../common/SMUIComponent';
import { classAdderBuilder } from '@smui/common/internal';
import Graphic from '@smui/list/Graphic.svelte';

export default classAdderBuilder({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic as typeof SMUIComponent,
});