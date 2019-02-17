const config = {
  gridSize: 12,
  gutterWidth: 1,
  gutterCompensation: -0.5,
  halfGutterWidth: 0.5,
  breakpointNames: ['xs', 'sm', 'md', 'lg', 'xl'],
  breakpointOffsetNames: [
    'xsOffset',
    'smOffset',
    'mdOffset',
    'lgOffset',
    'xlOffset',
  ],
  breakpoints: {
    xs: 0,
    sm: 36,
    md: 48,
    lg: 62,
    xl: 75,
  },
  container: {
    sm: 35,
    md: 47,
    lg: 61,
    xl: 74,
  },
  viewport: {
    sm: 'only screen and (min-width: 36em)',
    md: 'only screen and (min-width: 48em)',
    lg: 'only screen and (min-width: 62em)',
    xl: 'only screen and (min-width: 75em)',
  },
};

export default config;
