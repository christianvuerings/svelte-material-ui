import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import Img from '@smui/common/Img.svelte';

export default classAdderBuilder({
  class: 'mdc-image-list__image',
  component: Img as typeof SMUIComponent,
});