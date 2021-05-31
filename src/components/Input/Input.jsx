import React, { forwardRef } from 'react';

const printWarnings = (componentProps) => {
  const { className } = componentProps;

  if (className) {
    console.warn(
      'The className property is ignored. Please use containerClassName, labelClassName, or inputClassName instead.'
    );
  }
};

const Input = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref,
  };

  delete passableProps.containerClassName;
  delete passableProps.inputClassName;
  delete passableProps.label;
  delete passableProps.labelClassName;
  delete passableProps.style;

  printWarnings(props);

  const { containerClassName, inputClassName, labelClassName } = props;
  return (
    <div className={containerClassName} style={props.style}>
      {props.label && (
        <label className={labelClassName} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input {...passableProps} className={inputClassName} />
    </div>
  );
});

export default Input;
