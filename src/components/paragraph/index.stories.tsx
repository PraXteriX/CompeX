import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Paragraph } from './';

export default {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  args: {},
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: {
    size: 'normal',
  },
  children:
    'Incididunt magna ex elit nostrud pariatur irure enim laboris in mollit eu irure aliqua culpa. Ea mollit nisi nostrud proident exercitation fugiat ipsum reprehenderit non nulla minim tempor aute labore fugiat.',
};

export const Sizes: ComponentStory<typeof Paragraph> = (args) => (
  <>
    <Paragraph {...{ options: { size: 'small' } }}>
      This is a paragraph using the small font size Voluptate pariatur irure qui
      quis sit deserunt proident commodo quis occaecat. Incididunt duis
      reprehenderit reprehenderit veniam aute et magna exercitation aliqua ex
      minim voluptate est. Eiusmod id anim aute tempor nisi ut quis incididunt
      reprehenderit aliqua ut.
    </Paragraph>
    <Paragraph {...{ options: { size: 'x-small' } }}>
      This is a paragraph using the x-small font size Voluptate pariatur irure
      qui quis sit deserunt proident commodo quis occaecat. Incididunt duis
      reprehenderit reprehenderit veniam aute et magna exercitation aliqua ex
      minim voluptate est. Eiusmod id anim aute tempor nisi ut quis incididunt
      reprehenderit aliqua ut.
    </Paragraph>
  </>
);
