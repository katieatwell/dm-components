import React from 'react';
import { storiesOf, action, linkTo  } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module).add('with text', () => <Button text={"Yay Let's GO"}></Button>);
