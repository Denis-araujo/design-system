import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastContainer,
  TitleToast,
  DescriptionToast,
  CloseToast,
} from './styles'

export interface ToastProps {
  open: boolean
  onOpenChange: () => void
  subTitle: string
  title: string
  swipeDirection: 'down' | 'left' | 'right' | 'up'
}

export function Toast({
  open,
  onOpenChange,
  subTitle,
  title,
  swipeDirection = 'right',
}: ToastProps) {
  return (
    <ToastRadix.Provider swipeDirection={swipeDirection}>
      <ToastContainer open={open} onOpenChange={onOpenChange}>
        <div>
          <TitleToast>{title}</TitleToast>
          <DescriptionToast>{subTitle}</DescriptionToast>
        </div>
        <CloseToast>
          <X size={20} />
        </CloseToast>
      </ToastContainer>

      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}
