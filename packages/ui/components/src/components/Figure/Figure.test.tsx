import React from 'react';
import { render } from '@testing-library/react';
import Figure from './Figure';
import { IFigureProps } from './Figure.types';

describe('Figure', () => {
  let props: IFigureProps;
  beforeEach(() => {
    props = {
      src: 'bar',
      alt: 'image',
    };
  });

  const renderComponent = () => render(<Figure {...props} />);

  it('should render text correctly', () => {
    props.src = 'bar';
    const { getByTestId } = renderComponent();
    const component = getByTestId('Figure');
    expect(component).toHaveTextContent('test text');
  });
});
