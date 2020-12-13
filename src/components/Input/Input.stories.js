import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Input } from '.';

export default {
  title: 'Input',
  decorators: [withKnobs],
};

export const input = () => <Input label={text('Label', 'First name')} />;
