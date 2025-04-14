import React from 'react'
import { createPortal } from 'react-dom'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import Button from '@shared/Button'
import Flex from '@shared/Flex'
import { colors } from '@style/color-palette'

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
}
function FixedBottomButton({ label, onClick }: FixedBottomButtonProps) {
  const $portalRoot = document.getElementById('root-portal')

  if ($portalRoot == null) {
    return null
  }
  return createPortal(
    <Container>
      <Button size={'medium'} full onClick={onClick} css={buttonStyles}>
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

export default FixedBottomButton

const slideUp = keyframes`
    to{transform: translateY(0);}
    
`

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.white};
  padding: 20px;
  transform: translateY(100%);
  animation: ${slideUp} 0.5s ease-in-out forwards;
`

const buttonStyles = css`
  border-radius: 8px;
`
