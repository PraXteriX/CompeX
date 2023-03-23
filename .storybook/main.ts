import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['./public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y', 'storybook-addon-pseudo-states'],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  features: {
    interactionsDebugger: true
  },
  async viteFinal(config, options) {
    // Add your configuration here
    return config;
  },
  docs: {
    autodocs: true
  }
};
export default config;