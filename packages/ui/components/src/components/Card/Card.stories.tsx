import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card from './Card';
import { ICardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<ICardProps> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Test Value',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Test Value',
  image: {
    src: 'https://picsum.photos/200',
    alt: 'image',
  },
};

export const AllProps = Template.bind({});
AllProps.args = {
  title: 'Test Value',
  image: {
    src: 'https://picsum.photos/200',
    alt: 'image',
  },
  children: <p>Test Content</p>,
};
