import PropTypes from 'prop-types';

export const buildPropTypes = (propTypes) => {
  return Object.entries(propTypes).reduce((accumulator, [key, value]) => {
    accumulator[key] = PropTypes[value.type];

    if (value.shape) {
      accumulator[key] = accumulator[key](
        PropTypes.shape(buildPropTypes(value.shape))
      );
    }

    if (value.isRequired) {
      accumulator[key] = accumulator[key].isRequired;
    }

    return accumulator;
  }, {});
};
