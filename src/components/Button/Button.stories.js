import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button } from '.';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const button = () => <Button>{text('Text', 'Click me!')}</Button>;
