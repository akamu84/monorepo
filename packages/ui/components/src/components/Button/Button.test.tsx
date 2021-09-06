import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import { IButtonProps } from './Button.types';

describe('Button', () => {
  let props: IButtonProps;
  beforeEach(() => {
    props = {
      label: 'text',
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should render text correctly', () => {
    props.label = 'text';
    const { getByTestId } = renderComponent();
    const component = getByTestId('Button');
    expect(component).toHaveTextContent('test text');
  });
});
