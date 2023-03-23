import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon as IconComponent } from './icon';

import  { icons } from './icons';

export default {
  title: 'New/Icon',
  component: IconComponent,
  argTypes: {
    name: {
      control: 'select', 
      options: icons,
    },
    color: { 
      control: { 
        type: 'color',
        presetColors: ['#000', '#fff'],
      },  
    },
    size: { 
      control: { 
        type: 'range', 
        min: 1, 
        max: 54,
      },
      defaultValue: 16,
    }
  }
} as ComponentMeta<typeof IconComponent>

const Template: ComponentStory<typeof IconComponent> = (args) => <IconComponent {...args}/>

export const Icon = Template.bind({});
Icon.args = {
  name: 'star-half',
}