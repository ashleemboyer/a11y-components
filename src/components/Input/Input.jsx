import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref
  };

  delete passableProps.label;

  return (
    <div className={styles.Input}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...passableProps} />
    </div>
  );
});

Input.publicPropTypes = {
  id: {
    type: 'string'
  },
  label: {
    type: 'string'
  }
};

Input.propTypes = Object.entries(Input.publicPropTypes).reduce(
  (accumulator, [key, value]) => {
    accumulator[key] = PropTypes[value.type];

    if (value.isRequired) {
      accumulator[key] = accumulator[key].isRequired;
    }

    return accumulator;
  },
  {}
);

export default Input;
