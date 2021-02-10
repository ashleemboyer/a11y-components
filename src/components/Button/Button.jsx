import React, { forwardRef } from 'react';

export const Button = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref,
  };

  delete passableProps.children;

  return <button {...passableProps}>{props.children}</button>;
});
