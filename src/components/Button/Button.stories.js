import React from 'react';
import { Button } from '.';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const button = () => <Button>{text('Text', 'Click me!')}</Button>;
