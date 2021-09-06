import React from 'react';
import { Story, Meta } from '@storybook/react';
import Figure from './Figure';
import { IFigureProps } from './Figure.types';

export default {
  title: 'Components/Figure',
  component: Figure,
} as Meta;

const Template: Story<IFigureProps> = (args) => <Figure {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  src: 'https://picsum.photos/200',
  alt: 'image',
  children: 'Test Caption',
  size: 'is-128x128',
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://picsum.photos/200',
  alt: 'image',
  children: 'Test Caption',
  isRound: true,
  size: 'is-128x128',
};
