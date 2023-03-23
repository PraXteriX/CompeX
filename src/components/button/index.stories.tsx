import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

import { Button } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Actions/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Button',
  options: {
    isPrimary: true,
    isInverted: false,
    isLocked: false,
    disabled: false,
  },
  onClick: () => console.log('Clicked button.'),
};

Default.play = async ({ canvasElement }) => {
  jest.spyOn(console, 'log');
  const canvas = await within(canvasElement);
  const button = canvas.getByText(/Button/i);

  await button.focus();
  expect(button).toHaveFocus();
  await userEvent.keyboard('{Enter}');
  expect(console.log).toHaveBeenCalled();

  expect(button).toBeEnabled();
};

export const Variants = Template.bind({});
Variants.parameters = {
  layout: 'padded',
};

Variants.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button {...Default.args} label={'primary'} />
        <Button
          {...{ options: { ...Default.args?.options, isPrimary: false } }}
          label={'secondary'}
        />
      </div>
    );
  },
];

export const InvertedVariants = Template.bind({});
InvertedVariants.parameters = {
  layout: 'padded',
  backgrounds: {
    default: 'dark',
  },
};

InvertedVariants.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button
          {...{ options: { ...Default.args?.options, isInverted: true } }}
          label={'Inverted'}
        />
        <Button
          {...{
            options: {
              ...Default.args?.options,
              isPrimary: false,
              isInverted: true,
            },
          }}
          label={'Inverted secondary'}
        />
      </div>
    );
  },
];

export const Locked = Template.bind({});
Locked.args = {
  ...Default.args,
  label: 'Locked button',
  options: {
    ...Default.args.options,
    isLocked: true,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled button',
  options: {
    ...Default.args.options,
    disabled: true,
  },
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);
  const button = canvas.getByText(/Button/i);
  expect(button).toBeDisabled();
};
