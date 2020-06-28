import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref
  };

  delete passableProps.children;

  return <button {...passableProps}>{props.children}</button>;
});

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
