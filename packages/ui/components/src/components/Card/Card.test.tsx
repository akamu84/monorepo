import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { ICardProps } from './Card.types';

describe('Card', () => {
  let props: ICardProps;
  beforeEach(() => {
    props = {
      title: 'test text',
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it('should render text correctly', () => {
    props.title = 'test text';
    const { getByTestId } = renderComponent();
    const component = getByTestId('Card');
    expect(component).toHaveTextContent('test text');
  });
});
