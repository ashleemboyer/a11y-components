import React, { forwardRef } from 'react';
import { buildPropTypes } from '../../helpers/buildPropTypes';

export const Button = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref,
  };

  delete passableProps.children;

  return <button {...passableProps}>{props.children}</button>;
});

Button.publicPropTypes = {
  children: {
    type: 'node',
    isRequired: true,
  },
};

Button.propTypes = buildPropTypes(Button.publicPropTypes);
