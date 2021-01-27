import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      description: 'The children to render inside of the button.',
    },
    onClick: {
      description: 'Passed as the `<button>` onClick.',
    },
    style: {
      control: {
        type: 'object',
      },
      description: 'Used for dynamically generated inline styles.',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Click me!',
  onClick: () => {
    alert('The button was clicked!');
  },
  style: {
    fontSize: '1rem',
    padding: 8,
    border: '1px solid black',
    borderRadius: 8,
    backgroundColor: 'lightblue',
  },
};
