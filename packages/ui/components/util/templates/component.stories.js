module.exports = (componentName) => ({
  content: `import React from 'react';
import { Story, Meta } from '@storybook/react';
import ${componentName} from './${componentName}';
import { I${componentName}Props } from './${componentName}.types';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
} as Meta;

const Template: Story<I${componentName}Props> = (args) => <${componentName} {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  foo: 'Test Value',
};
`,
  extension: `.stories.tsx`,
});
