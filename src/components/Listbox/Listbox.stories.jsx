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
      defaultValue: 'Who is your favorite Golden Girl?',
    },
    options: {
      control: {
        type: 'object',
      },
      defaultValue: [
        { label: 'Blanche Devereaux', id: 'blanche-devereaux' },
        { label: 'Rose Nylynd', id: 'rose-nylynd' },
        { label: 'Sophia Petrillo', id: 'sophia-petrillo' },
        { label: 'Dorothy Zbornak', id: 'dorothy-zbornak' },
      ],
    },
    onChange: {
      action: 'changed',
    },
  },
};

export const Basic = (props) => <Listbox {...props} />;
