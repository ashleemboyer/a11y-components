import React, { forwardRef, useState, useEffect } from 'react';
import { buildPropTypes } from '../../helpers/buildPropTypes';
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

  const selectedOption =
    props.options.find((option) => {
      if (props.value) {
        return option.id === props.value;
      } else {
        return option.id === props.options[indexOfSelectedOption].id;
      }
    }) || {};

  const setOption = (indexOfOption) => {
    setIndexOfSelectedOption(indexOfOption);
    props.onChange(props.options[indexOfOption].id);
  };

  const focusPreviousOption = () => {
    let newIndex;

    if (indexOfSelectedOption === 0) {
      newIndex = props.options.length - 1;
    } else {
      newIndex = indexOfSelectedOption - 1;
    }

    setOption(newIndex);
  };

  const focusNextOption = () => {
    let newIndex;

    if (indexOfSelectedOption === props.options.length - 1) {
      newIndex = 0;
    } else {
      newIndex = indexOfSelectedOption + 1;
    }

    setOption(newIndex);
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
                setOption(index);
                setIsOpen(false);
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

Listbox.publicPropTypes = {
  label: {
    type: 'string',
    isRequired: true
  },
  onChange: {
    type: 'func'
  },
  options: {
    type: 'arrayOf',
    isRequired: true,
    shape: {
      id: {
        type: 'string',
        isRequired: true
      },
      label: {
        type: 'string',
        isRequired: true
      }
    }
  },
  value: {
    type: 'string'
  }
};

Listbox.propTypes = buildPropTypes(Listbox.publicPropTypes);

Listbox.defaultProps = {
  onChange: () => {},
  value: undefined
};

export default Listbox;
