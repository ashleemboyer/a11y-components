import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
