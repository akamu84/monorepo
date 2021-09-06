import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';
import { IIconProps } from './Icon.types';

describe('Icon', () => {
  let props: IIconProps;
  beforeEach(() => {
    props = {
      name: 'avatar',
    };
  });

  const renderComponent = () => render(<Icon {...props} />);

  it('should render text correctly', () => {
    props.name = 'avatar';
    const { getByTestId } = renderComponent();
    const component = getByTestId('Icon');
    expect(component).toHaveTextContent('test text');
  });
});
