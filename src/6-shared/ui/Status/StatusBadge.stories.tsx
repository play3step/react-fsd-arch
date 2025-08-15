import type { Meta, StoryObj } from '@storybook/react-vite'

import { StatusBadge } from './StatusBadge'

const meta = {
  title: 'Shared/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'progress', 'error', 'wait', 'hold']
    }
  }
} satisfies Meta<typeof StatusBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    status: 'success'
  }
}
