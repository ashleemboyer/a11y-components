import React from 'react';
import { shallow } from 'enzyme';

import { Input } from '.';

describe('<Input />', () => {
  it('it renders successfully', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
