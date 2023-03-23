import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { NavigationCard } from './';

export default {
  title: 'Components/Card/Navigation',
  component: NavigationCard,
  args: {
    href: 'string',
  },
} as ComponentMeta<typeof NavigationCard>;

const Template: ComponentStory<typeof NavigationCard> = (args) => (
  <NavigationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Quis incididunt culpa eiusmod tempor labore.',
  href: '#',
  title: 'Navigation card',
  image: {
    src: 'https://dummyimage.com/124x124.png',
    alt: '',
  },
  options: {
    isMultiple: false,
    imageSize: 'normal',
    decoratorLabel: '',
  },
  loading: false,
};

export const Multiple = Template.bind({});
Multiple.args = {
  ...Default.args,
};

Multiple.decorators = [
  () => (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <NavigationCard {...Default.args} title="Single card" />
      <NavigationCard
        {...Default.args}
        options={{ isMultiple: true }}
        title="Deck of cards"
      />
    </div>
  ),
];

Multiple.parameters = {
  layout: 'padded',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};
