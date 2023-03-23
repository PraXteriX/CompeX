import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

import { Link } from './';

export default {
  title: 'Components/Actions/Link',
  component: Link,
  args: {
    href: 'string',
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link cta',
  href: '#',
  options: {
    slim: false,
  },
};

Default.play = async ({ canvasElement }) => {
  jest.spyOn(console, 'log');
  const canvas = await within(canvasElement);
  const link = canvas.getByText(/Link cta/i);

  await link.focus();
  expect(link).toHaveFocus();
  expect(link).toHaveAttribute('href', Default.args?.href);
};

export const States = Template.bind({});
States.args = {
  ...Default.args,
  options: { ...Default.args.options },
};
States.storyName = 'Default pseudo states';
States.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link id="one" href="#">
          Hover
        </Link>
        <Link id="two" href="#">
          Hover focus
        </Link>
      </div>
    );
  },
];
States.parameters = {
  pseudo: {
    hover: ['#one', '#two'],
    focus: ['#two'],
  },
  layout: 'padded',
};

export const Slim = Template.bind({});
Slim.args = {
  ...Default.args,
  children: 'Slim link cta',
  options: {
    slim: true,
  },
};

Slim.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link href="#" {...Slim.args}>
          Slim link
        </Link>
        <div style={{ width: '100px' }}>
          <Link href="#" {...Slim.args}>
            Wrapped slim link
          </Link>
        </div>
      </div>
    );
  },
];

Slim.parameters = {
  layout: 'padded',
};
