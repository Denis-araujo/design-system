import { Title, Root, Description, Close } from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Root, {
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '6px',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '$3 $5',
  gap: '$1',
})

export const TitleToast = styled(Title, {
  fontWeight: 700,
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white',
})

export const DescriptionToast = styled(Description, {
  fontWeight: 400,
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})

export const CloseToast = styled(Close, {
  background: 'none',
  border: 'none',
  color: '$gray200',

  ':hover': {
    cursor: 'pointer',
  },
})
