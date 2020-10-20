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

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};

export default Input;
