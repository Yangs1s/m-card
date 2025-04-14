import styled from '@emotion/styled'
import { colors } from '@style/color-palette'

const Input = styled.input`
  padding: 0 16px;
  font-size: 16px;
  height: 48px;
  font-weight: 500;
  border: 1px solid ${colors.gray};
  width: 100%;
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.blue};
  }
  &[aria-invalid='true'] {
    border-color: ${colors.red};
  }
`

export default Input
