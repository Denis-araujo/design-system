import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    name: 'Teste',
    children: <button>Testando o elemento Tooltip</button>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
