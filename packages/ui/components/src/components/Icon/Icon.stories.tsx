import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from './Icon';
import { IIconProps } from './Icon.types';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const Template: Story<IIconProps> = (args) => <Icon {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'avatar',
  size: 64,
  viewBox: '0 0 50 50',
  color: '#000',
};
