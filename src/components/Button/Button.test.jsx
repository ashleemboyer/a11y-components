import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '.';

const setup = () => shallow(<Button>test</Button>);

describe('<Button />', () => {
  it('renders a <button> with the correct text', () => {
    const button = setup().find('button');
    expect(button).toHaveLength(1);
    expect(button.text()).toBe('test');
  });
});
