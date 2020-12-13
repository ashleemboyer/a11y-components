import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '.';

describe('<Input />', () => {
  it('renders an <input> element successfully', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input')).toHaveLength(1);
  });

  describe('with the `label` prop', () => {
    it('renders a <label> element successfully', () => {
      const testLabel = 'First name';
      const wrapper = shallow(<Input label={testLabel} />);
      const label = wrapper.find('label');
      expect(label).toHaveLength(1);
      expect(label.text()).toBe(testLabel);
    });
  });
});
