import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
  buttonSwitchMap,
} from '@style/button'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

export const Button = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
  ({ color = 'primary', weak = false }) =>
    weak ? buttonSwitchMap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,

  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
        `
      : undefined,
)

export default Button
