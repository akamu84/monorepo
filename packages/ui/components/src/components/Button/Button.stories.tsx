import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import { IButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  buttonColor: 'red',
  label: 'Click Me',
  variant: 'primary',
};

export const Loading = Template.bind({});
Loading.args = {
  buttonColor: 'red',
  label: 'Click Me',
  variant: 'primary',
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttonColor: 'red',
  label: 'Click Me',
  variant: 'primary',
  disabled: true,
};

export const HasIcon = Template.bind({});
HasIcon.args = {
  buttonColor: 'red',
  label: 'Click Me',
  variant: 'primary',
  iconProps: {
    name: 'avatar',
    position: 'top',
  },
};
