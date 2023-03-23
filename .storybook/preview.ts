import axis from './axisTheme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// We import the built stylesheet.
import '../dist/style.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    theme: axis,
  },
  layout: 'centered',
  backgrounds: {
    default: 'light',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
