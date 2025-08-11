import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    scheme: { control: 'select', options: ['filled', 'outline', 'subtle'] },
    color: {
      control: 'select',
      options: ['primary', 'error', 'success', 'neutral']
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    size: 'medium',
    scheme: 'filled',
    color: 'primary',
    fullWidth: false,
    disabled: false,
    onClick: () => {}
  }
}

export const AllVariants: Story = {
  args: {
    children: 'Button',
    onClick: () => {}
  },
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Filled Buttons</h3>
        <div className="space-x-2">
          <Button
            color="primary"
            scheme="filled"
            onClick={() => {}}>
            Primary
          </Button>
          <Button
            color="error"
            scheme="filled"
            onClick={() => {}}>
            Error
          </Button>
          <Button
            color="success"
            scheme="filled"
            onClick={() => {}}>
            Success
          </Button>
          <Button
            color="neutral"
            scheme="filled"
            onClick={() => {}}>
            Neutral
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Outline Buttons</h3>
        <div className="space-x-2">
          <Button
            color="primary"
            scheme="outline"
            onClick={() => {}}>
            Primary
          </Button>
          <Button
            color="error"
            scheme="outline"
            onClick={() => {}}>
            Error
          </Button>
          <Button
            color="success"
            scheme="outline"
            onClick={() => {}}>
            Success
          </Button>
          <Button
            color="neutral"
            scheme="outline"
            onClick={() => {}}>
            Neutral
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Subtle Buttons</h3>
        <div className="space-x-2">
          <Button
            color="primary"
            scheme="subtle"
            onClick={() => {}}>
            Primary
          </Button>
          <Button
            color="error"
            scheme="subtle"
            onClick={() => {}}>
            Error
          </Button>
          <Button
            color="success"
            scheme="subtle"
            onClick={() => {}}>
            Success
          </Button>
          <Button
            color="neutral"
            scheme="subtle"
            onClick={() => {}}>
            Neutral
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="space-x-2 items-center flex">
          <Button
            size="small"
            onClick={() => {}}>
            Medium
          </Button>
          <Button
            size="medium"
            onClick={() => {}}>
            Large
          </Button>
          <Button
            size="large"
            onClick={() => {}}>
            Extra Large
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="space-x-2">
          <Button onClick={() => {}}>Normal</Button>
          <Button
            disabled
            onClick={() => {}}>
            Disabled
          </Button>
          <Button
            fullWidth
            onClick={() => {}}>
            Full Width
          </Button>
        </div>
      </div>
    </div>
  )
}
