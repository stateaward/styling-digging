module.exports = {
   stories: ['../src/stories/**/*.story.@(js|mdx)'],
   logLevel: 'debug',
   addons: [
      '@storybook/addon-docs',
      '@storybook/addon-controls',
      '@storybook/addon-actions',
      '@storybook/addon-knobs',
      '@storybook/addon-links',
      '@storybook/addon-viewport',
      '@storybook/addon-storysource',
   ],
};
