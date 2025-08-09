import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  async viteFinal(config) {
    const tailwindcss = (await import('@tailwindcss/vite')).default
    config.plugins = [...(config.plugins || []), tailwindcss()]
    return config
  }
}
export default config
