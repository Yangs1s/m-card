import React from 'react'
import styled from '@emotion/styled'

interface SpacingProps {
  size: number
  direction?: 'horizontal' | 'vertical'
}

const Spacing = styled.div<SpacingProps>`
  ${({ size, direction }) =>
    direction === 'vertical' ? `height: ${size}px;` : `width: ${size}px;`}
`

export default Spacing
