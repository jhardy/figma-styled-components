import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require('../stories/index.tsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);
addDecorator(withInfo);
