import React from 'react';
import { render } from '@testing-library/react';
import QueryLoading from './QueryLoading';
import { IQueryLoadingProps } from './QueryLoading.types';

describe('QueryLoading', () => {
  let props: IQueryLoadingProps;
  beforeEach(() => {
    props = {
      label: 'Loading...',
    };
  });

  const renderComponent = () => render(<QueryLoading {...props} />);

  it('should render text correctly', () => {
    props.label = 'Loading...';
    const { getByTestId } = renderComponent();
    const component = getByTestId('QueryLoading');
    expect(component).toHaveTextContent('test text');
  });
});
