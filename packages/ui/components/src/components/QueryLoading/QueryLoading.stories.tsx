import React from 'react';
import { Story, Meta } from '@storybook/react';
import QueryLoading from './QueryLoading';
import { IQueryLoadingProps } from './QueryLoading.types';

export default {
  title: 'Components/QueryLoading',
  component: QueryLoading,
} as Meta;

const Template: Story<IQueryLoadingProps> = (args) => <QueryLoading {...args} />;

export const Basic = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Loading...',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
