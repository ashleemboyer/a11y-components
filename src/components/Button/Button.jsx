import React, { forwardRef } from 'react';

const Button = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref,
  };

  delete passableProps.children;

  return <button {...passableProps}>{props.children}</button>;
});

export default Button;
