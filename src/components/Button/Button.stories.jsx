import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Click me!',
      description: 'Children to render inside of the button.',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export const Basic = (props) => {
  return <Button {...props} />;
};
