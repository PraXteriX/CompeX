import { StoryObj, Meta } from '@storybook/react';

import { Tracks } from './tracks';

export default {
  title: 'New/Tracks',
  component: Tracks,
  args: {},
} as Meta<typeof Tracks>;

export const Default: StoryObj<typeof Tracks> = {
  parameters: {},
};
