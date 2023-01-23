import { styled } from '../../styles'

import { Content } from '@radix-ui/react-tooltip'

export const TooltipContent = styled(Content, {
  padding: '12px 16px',
  gap: '8px',
  background: '$gray900',
  color: '$gray100',
  borderRadius: '5px',
  fontWeight: '500',
  lineHeight: '140%',
})
