import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export const text = 'Hello, Button!';
export const actions = {
  onClick: action('click'),
};

storiesOf('Button', module).add('default', () => (
  <Button onClick={actions.onClick}>{text}</Button>
));
