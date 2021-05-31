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
  printWarnings(props);

  const passableProps = {
    ...props,
    ref,
  };

  delete passableProps.containerClassName;
  delete passableProps.inputClassName;
  delete passableProps.label;
  delete passableProps.labelClassName;
  delete passableProps.style;

  const { containerClassName, id, inputClassName, label, labelClassName, style } = props;
  return (
    <div className={containerClassName} style={style}>
      {label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}
      <input {...passableProps} className={inputClassName} />
    </div>
  );
});

export default Input;
