import React from 'react';
import { storiesOf, action, linkTo  } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module).add('secondary large', () => <Button
                isSecondary={false}
                text={"Hey"}
                type={'large'}></Button>);
