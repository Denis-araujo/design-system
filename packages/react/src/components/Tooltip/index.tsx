import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipContent } from './styles'

export interface TooltipProps {
  children: ReactNode
  name: string
}

export function Tooltip({ children, name }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>

        <TooltipRadix.Portal>
          <TooltipContent sideOffset={3}>
            {name}
            <TooltipRadix.Arrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
