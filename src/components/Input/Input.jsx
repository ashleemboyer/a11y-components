import React, { forwardRef } from 'react';
import { buildPropTypes } from '../../helpers/buildPropTypes';
import styles from './Input.module.scss';

const Input = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref
  };

  delete passableProps.label;
  delete passableProps.style;

  return (
    <div className={styles.Input} style={props.style}>
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
  },
  style: {
    type: 'shape'
  }
};

Input.propTypes = buildPropTypes(Input.publicPropTypes);

export default Input;
