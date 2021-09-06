module.exports = (componentName) => ({
  content: `import React from 'react';
import { render } from '@testing-library/react';
import ${componentName} from './${componentName}';
import { I${componentName}Props } from './${componentName}.types';

describe('${componentName}', () => {
  let props: I${componentName}Props;
  beforeEach(() => {
    props = {
      foo: 'bar',
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it('should render text correctly', () => {
    props.foo = 'test text';
    const { getByTestId } = renderComponent();
    const component = getByTestId('${componentName}');
    expect(component).toHaveTextContent('test text');
  });
});
`,
  extension: `.test.tsx`,
});
