import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '.';

describe('<Button />', () => {
  it('it renders its children successfully', () => {
    const wrapper = shallow(<Button>hello</Button>);
    expect(wrapper.find('button').text()).toBe('hello');
  });
});
