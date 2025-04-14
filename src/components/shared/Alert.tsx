import React from 'react'
import Dimmed from '@shared/Dimmed'
import styled from '@emotion/styled'
import { colors } from '@style/color-palette'
import Text from '@shared/Text'
import Flex from '@shared/Flex'
import Button from '@shared/Button'

interface IAlertProps {
  open?: boolean
  title: React.ReactNode
  description?: React.ReactNode
  buttonLabel?: string
  onButtonClick?: () => void
}

const Alert = ({
  open,
  title,
  description,
  buttonLabel = '확인',
  onButtonClick,
}: IAlertProps) => {
  if (!open) {
    return null
  }

  return (
    <Dimmed>
      <AlertContainer>
        <Text
          typography={'t3'}
          display={'block'}
          bold
          style={{ marginBottom: 0 }}
        >
          {title}
        </Text>
        {description && (
          <Text typography="t7" display={'block'}>
            {description}
          </Text>
        )}
        <Flex justify={'flex-end'}>
          <Button
            weak
            style={{ marginTop: 12, border: 'none' }}
            onClick={onButtonClick}
          >
            {buttonLabel}
          </Button>
        </Flex>
      </AlertContainer>
    </Dimmed>
  )
}

const AlertContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 8px;
  z-index: var(--alert-zindex);
  padding: 20px 24px;
  overflow: hidden;
  width: 320px;
  box-sizing: border-box;
`

export default Alert
