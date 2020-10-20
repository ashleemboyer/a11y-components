import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Listbox.module.scss';

const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ESCAPE = 27;
const ENTER = 13;

const Listbox = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref
  };
  delete passableProps.label;
  delete passableProps.onChange;
  delete passableProps.options;
  delete passableProps.value;

  const buttonRef = React.createRef();
  const listboxRef = React.createRef();

  const [isOpen, setIsOpen] = useState(false);
  const [indexOfSelectedOption, setIndexOfSelectedOption] = useState(0);
  const [listboxWasBlurred, setListboxWasBlurred] = useState(false);

  useEffect(() => {
    if (isOpen && listboxRef.current) {
      listboxRef.current.focus();
    }
  }, [listboxRef, isOpen]);

  const selectedOption = props.options.find((option) => {
    if (props.value) {
      return option.id === props.value;
    } else {
      return option.id === props.options[indexOfSelectedOption].id;
    }
  });

  const focusPreviousOption = () => {
    let newIndex;

    if (indexOfSelectedOption === 0) {
      newIndex = props.options.length - 1;
    } else {
      newIndex = indexOfSelectedOption - 1;
    }

    setIndexOfSelectedOption(newIndex);
  };

  const focusNextOption = () => {
    let newIndex;

    if (indexOfSelectedOption === props.options.length - 1) {
      newIndex = 0;
    } else {
      newIndex = indexOfSelectedOption + 1;
    }

    setIndexOfSelectedOption(newIndex);
  };

  const handleButtonKeyDown = (e) => {
    if (e.keyCode === ARROW_DOWN || e.keyCode === ARROW_UP) {
      setIsOpen(true);
    }
  };

  const handleListboxKeyDown = (e) => {
    if (e.keyCode === ARROW_UP) {
      focusPreviousOption();
    } else if (e.keyCode === ARROW_DOWN) {
      focusNextOption();
    } else if (e.keyCode === ENTER) {
      setIsOpen(false);
    } else if (e.keyCode === ESCAPE) {
      setIsOpen(false);
      buttonRef.current.focus();
    }
  };

  const listboxLabel = `listboxLabel-${new Date().getTime()})`;

  return (
    <div className={styles.Listbox}>
      <label id={listboxLabel}>{props.label}</label>
      <button
        ref={buttonRef}
        aria-labelledby={listboxLabel}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        onClick={() => {
          // Don't reopen the listbox if it was blurred then clicked
          if (listboxWasBlurred) {
            setListboxWasBlurred(false);
            return;
          }

          setIsOpen(!isOpen);
        }}
        onKeyDown={handleButtonKeyDown}
      >
        {selectedOption.id ? selectedOption.label : 'Choose'}
      </button>
      {isOpen && (
        <ul
          ref={listboxRef}
          tabIndex={isOpen ? '0' : '-1'}
          role='listbox'
          aria-activedescendant={selectedOption.id}
          onKeyDown={handleListboxKeyDown}
          onBlur={() => {
            setListboxWasBlurred(true);
            setIsOpen(false);
          }}
        >
          {props.options.map((option, index) => (
            <li
              id={option.id}
              key={option.id}
              role='option'
              aria-selected={option.id === selectedOption.id}
              onClick={() => {
                setIndexOfSelectedOption(index);
                setIsOpen(false);
                props.onChange(option.id);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

Listbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  value: PropTypes.string
};

Listbox.defaultProps = {
  onChange: () => {},
  value: undefined
};

export default Listbox;
