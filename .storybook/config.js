import React from 'react';
import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src/components', true, /.stories.js$/);
  console.log(req);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

