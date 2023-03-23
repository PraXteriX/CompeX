import { create } from '@storybook/theming';
import logo from './public/axis_logo_white.svg';

export default create({
  base: 'dark',

  colorPrimary: '#fc3',
  colorSecondary: '#fc3',

  // UI
  appBg: '#222',
  appContentBg: '#333',
  appBorderColor: '#555',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#fff',
  textInverseColor: '#333',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#ccc',
  barBg: '#222',

  // Form colors
  inputBg: '#222',
  inputBorder: '#666',
  inputTextColor: '#fff',
  inputBorderRadius: 4,

  brandTitle: 'Axis.com component library react',
  brandUrl: 'https://axis.com',
  brandImage: logo,
});
