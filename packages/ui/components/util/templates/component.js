module.exports = (componentName) => ({
  content: `import React from 'react';
import { I${componentName}Props } from './${componentName}.types';
import './${componentName}.module.scss';

const ${componentName}: React.FC<I${componentName}Props> = ({ foo }) => (
  <div data-testid="${componentName}" className="container">
    {foo}
  </div>
);

export default ${componentName};
`,
  extension: `.tsx`,
});
