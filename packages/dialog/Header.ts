import { classAdderBuilder } from '@smui/common/internal';
import { Div } from '@smui/common/elements';

export default classAdderBuilder({
  class: 'mdc-dialog__header',
  component: Div,
  contexts: {
    'SMUI:icon-button:context': 'dialog:header',
  },
});