import React from 'react';
import { shallow, mount } from 'enzyme';

import { Listbox } from '.';

const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ESCAPE = 27;
const ENTER = 13;

const testLabel = 'Favorite Golden Girl';
const testOptions = [
  { id: 'blanche_devereaux', label: 'Blanche Devereaux' },
  { id: 'rose_nylund', label: 'Rose Nylund' },
  { id: 'sophia_petrillo', label: 'Sophia Petrillo' },
  { id: 'dorothy_zbornak', label: 'Dorothy Zbornak' }
];

describe('<Listbox />', () => {
  it('renders successfully with the correct aria attributes', () => {
    const wrapper = shallow(
      <Listbox label={testLabel} options={testOptions} />
    );

    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
    expect(label.text()).toBe(testLabel);

    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.prop('aria-labelledby')).toBe(label.prop('id'));
    expect(button.prop('aria-haspopup')).toBe('listbox');
    expect(button.prop('aria-expanded')).toBeFalsy();
    expect(button.text()).toBe(testOptions[0].label);
  });

  describe('button onClick', () => {
    it('expands and has the correct aria attributes', () => {
      const wrapper = shallow(
        <Listbox label={testLabel} options={testOptions} />
      );
      let button = wrapper.find('button');
      button.simulate('click');

      button = wrapper.find('button');
      expect(button.prop('aria-expanded')).toBeTruthy();

      const ul = wrapper.find('ul');
      expect(ul).toHaveLength(1);
      expect(ul.prop('tabIndex')).toBe('0');
      expect(ul.prop('role')).toBe('listbox');
      expect(ul.prop('aria-activedescendant')).toBe(testOptions[0].id);

      const li = wrapper.find('li');
      expect(li).toHaveLength(testOptions.length);
      expect(li.first().prop('id')).toBe(testOptions[0].id);
      expect(li.first().prop('role')).toBe('option');
      expect(li.first().prop('aria-selected')).toBeTruthy();
    });

    it('collapses and has the correct aria attributes', () => {
      const wrapper = shallow(
        <Listbox label={testLabel} options={testOptions} />
      );
      wrapper.find('button').simulate('click');
      wrapper.find('button').simulate('click');

      const button = wrapper.find('button');
      expect(button.prop('aria-expanded')).toBeFalsy();
      expect(wrapper.find('ul')).toHaveLength(0);
    });
  });

  describe('listbox onClick', () => {
    it('selects the option that was clicked and collapses', () => {
      const wrapper = shallow(
        <Listbox label={testLabel} options={testOptions} />
      );
      wrapper.find('button').simulate('click');

      const lastListItem = wrapper.find('li').last();
      expect(lastListItem.prop('aria-selected')).toBeFalsy();
      lastListItem.simulate('click');
      expect(wrapper.find('ul')).toHaveLength(0);

      wrapper.find('button').simulate('click');
      expect(wrapper.find('li').last().prop('aria-selected')).toBeTruthy();
    });
  });

  describe('button onKeyDown', () => {
    describe('when collapsed', () => {
      it('expands on ARROW_DOWN', () => {
        const wrapper = shallow(
          <Listbox label={testLabel} options={testOptions} />
        );
        wrapper.find('button').simulate('keydown', {
          keyCode: ARROW_DOWN
        });

        expect(wrapper.find('ul')).toHaveLength(1);
      });

      it('expands on ARROW_UP', () => {
        const wrapper = shallow(
          <Listbox label={testLabel} options={testOptions} />
        );
        wrapper.find('button').simulate('keydown', {
          keyCode: ARROW_UP
        });

        expect(wrapper.find('ul')).toHaveLength(1);
      });
    });

    describe('when expanded', () => {
      it('collapses on ESCAPE', () => {
        const wrapper = mount(
          <Listbox label={testLabel} options={testOptions} />
        );
        wrapper.find('button').simulate('click');
        wrapper.find('ul').simulate('keydown', {
          keyCode: ESCAPE
        });

        const button = wrapper.find('button');
        expect(button.prop('aria-expanded')).toBeFalsy();
        expect(wrapper.find('ul')).toHaveLength(0);
      });

      it('collapses on ENTER', () => {
        const wrapper = shallow(
          <Listbox label={testLabel} options={testOptions} />
        );
        wrapper.find('button').simulate('click');
        wrapper.find('ul').simulate('keydown', {
          keyCode: ENTER
        });

        const button = wrapper.find('button');
        expect(button.prop('aria-expanded')).toBeFalsy();
        expect(wrapper.find('ul')).toHaveLength(0);
      });
    });
  });

  describe('listbox onKeyDown', () => {
    // todo
  });
});
