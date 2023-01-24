import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    open: true,
    title: 'Agendamento',
    subTitle: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    onOpenChange: { open: true },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
