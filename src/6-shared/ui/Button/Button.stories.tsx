import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './Button'

const meta = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'neutral']
    },
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    disabled: false
  }
}
