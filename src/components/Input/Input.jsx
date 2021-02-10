import React, { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref,
  };

  delete passableProps.label;
  delete passableProps.style;

  return (
    <div style={props.style}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...passableProps} />
    </div>
  );
});
