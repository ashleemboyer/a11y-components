import React, { forwardRef, useEffect, useState } from 'react';

const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ESCAPE = 27;
const ENTER = 13;

const printWarnings = (componentProps) => {
  const { className } = componentProps;

  if (className) {
    console.warn(
      'The className property is ignored. Please use buttonClassName, containerClassName, labelClassName, listItemClassName, or unorderedListClassName instead.'
    );
  }
};

const Listbox = forwardRef((props, ref) => {
  const passableProps = {
    ...props,
    ref,
  };

  delete passableProps.label;
  delete passableProps.onChange;
  delete passableProps.options;
  delete passableProps.value;
  delete passableProps.buttonClassName;
  delete passableProps.containerClassName;
  delete passableProps.labelClassName;
  delete passableProps.listItemClassName;
  delete passableProps.unorderedListClassName;

  printWarnings(props);

  const buttonRef = React.createRef();
  const listboxRef = React.createRef();

  const [isOpen, setIsOpen] = useState(false);
  const [indexOfSelectedOption, setIndexOfSelectedOption] = useState(0);
  const [listboxWasBlurred, setListboxWasBlurred] = useState(false);

  const label = props && props.label ? props.label : '';
  const options = props && props.options ? props.options : [];

  useEffect(() => {
    if (isOpen && listboxRef.current) {
      listboxRef.current.focus();
    }
  }, [listboxRef, isOpen]);

  const selectedOption =
    options.find((option) => {
      if (props.value) {
        return option.id === props.value;
      } else {
        return option.id === options[indexOfSelectedOption].id;
      }
    }) || {};

  const setOption = (indexOfOption) => {
    setIndexOfSelectedOption(indexOfOption);
    props.onChange(options[indexOfOption].id);
  };

  const focusPreviousOption = () => {
    let newIndex;

    if (indexOfSelectedOption === 0) {
      newIndex = options.length - 1;
    } else {
      newIndex = indexOfSelectedOption - 1;
    }

    setOption(newIndex);
  };

  const focusNextOption = () => {
    let newIndex;

    if (indexOfSelectedOption === options.length - 1) {
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
  const {
    buttonClassName,
    containerClassName,
    labelClassName,
    listItemClassName,
    unorderedListClassName,
  } = props;
  return (
    <div className={containerClassName}>
      <label className={labelClassName} id={listboxLabel}>
        {label}
      </label>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={listboxLabel}
        className={buttonClassName}
        onClick={() => {
          // Don't reopen the listbox if it was blurred then clicked
          if (listboxWasBlurred) {
            setListboxWasBlurred(false);
            return;
          }

          setIsOpen(!isOpen);
        }}
        onKeyDown={handleButtonKeyDown}
        ref={buttonRef}
      >
        {selectedOption.id ? selectedOption.label : 'Choose'}
      </button>
      {isOpen && (
        <ul
          aria-activedescendant={selectedOption.id}
          className={unorderedListClassName}
          onBlur={() => {
            setListboxWasBlurred(true);
            setIsOpen(false);
          }}
          onKeyDown={handleListboxKeyDown}
          ref={listboxRef}
          role="listbox"
          tabIndex={isOpen ? '0' : '-1'}
        >
          {options.map((option, index) => (
            <li
              aria-selected={option.id === selectedOption.id}
              className={listItemClassName}
              id={option.id}
              key={option.id}
              onClick={() => {
                setOption(index);
                setIsOpen(false);
              }}
              role="option"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default Listbox;
