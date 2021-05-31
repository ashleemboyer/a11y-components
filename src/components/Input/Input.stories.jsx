import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    value: {
      control: {
        type: 'text',
      },
      defaultValue: 'Hello!',
    },
  },
};

export const Basic = (props) => <Input {...props} />;
