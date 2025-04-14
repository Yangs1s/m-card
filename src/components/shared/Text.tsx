import { typographyMap, TypographyProps } from '@style/typography'
import { Color, colors } from '@style/color-palette'
import { CSSProperties } from 'react'
import styled from '@emotion/styled'
interface TextProps {
  typography?: TypographyProps
  color?: Color
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
}

const Text = styled.span<TextProps>(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
    display,
    width: '100%',
  }),
  ({ typography = 't5' }) => typographyMap[typography],
)

export default Text
