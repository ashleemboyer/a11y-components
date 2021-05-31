import React from 'react';
import Listbox from './Listbox';

export default {
  title: 'Listbox',
  component: Listbox,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    options: {
      control: {
        type: 'object',
      },
      defaultValue: [
        { label: 'Option 1', id: 'option-1' },
        { label: 'Option 2', id: 'option-2' },
        { label: 'Option 3', id: 'option-3' },
      ],
    },
    onChange: {
      action: 'changed',
    },
    value: {
      control: {
        type: 'text',
      },
      defaultValue: 'option-2',
    },
  },
};

export const Basic = (props) => <Listbox {...props} />;
