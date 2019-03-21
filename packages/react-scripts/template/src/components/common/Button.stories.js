import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module).add('a button!', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));
