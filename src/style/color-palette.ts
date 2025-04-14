import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
    --white: #fff;
    --black: #212121;
    --gray: #efefef;
  }
`
export const colors = {
  red: 'var(--red)',
  blue: 'var(--blue)',
  green: 'var(--green)',
  black: 'var(--black)',
  white: 'var(--white)',
  gray: 'var(--gray)',
}

export type Color = keyof typeof colors
