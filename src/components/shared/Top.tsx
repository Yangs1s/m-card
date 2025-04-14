import React from 'react'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import { css } from '@emotion/react'

interface TopProps {
  title: string
  subTitle: string
}

const containerStyle = css`
  padding: 24px;
`

const Top = ({ title, subTitle }: TopProps) => {
  return (
    <Flex direction={'column'} css={containerStyle}>
      <Text bold typography={'t3'}>
        {title}
      </Text>
      <Text>{subTitle}</Text>
    </Flex>
  )
}

export default Top
