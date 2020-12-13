import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('renders a native button element with the correct text', () => {
    const { getByRole } = render(<Button>test</Button>);
    expect(getByRole('button')).toHaveTextContent('test');
  });

  it('invokes onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>test</Button>);
    fireEvent.click(getByText('test'));
    expect(onClick).toHaveBeenCalled();
  });
});
