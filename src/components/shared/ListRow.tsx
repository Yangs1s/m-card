import { css } from '@emotion/react'
import React from 'react'
import Flex from '@components/shared/Flex'
import Text from '@components/shared/Text'
interface ListRowProps {
  left?: React.ReactNode
  right?: React.ReactNode
  content?: React.ReactNode
  withArrow?: boolean
  onClick?: () => void
}

export default function ListRow({
  left,
  content,
  withArrow,
  right,
  onClick,
}: ListRowProps) {
  return (
    <Flex align={'center'} as={'li'} css={listRowContainer} onClick={onClick}>
      <Flex css={listLeftStyle}>{left}</Flex>
      <Flex css={listRowContentStyle}>{content}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <IconArrowRight /> : null}
    </Flex>
  )
}

const listRowContainer = css`
  padding: 8px 24px;
`

const listLeftStyle = css`
  margin-right: 14px;
`
const listRowContentStyle = css`
  flex: 1;
`
function ListRowTexts({
  title,
  subTitle,
}: {
  title: string
  subTitle: string
}) {
  return (
    <Flex direction={'column'}>
      <Text bold>{title}</Text>
      <Text typography={'t7'}>{subTitle}</Text>
    </Flex>
  )
}

function IconArrowRight() {
  return <img src="/icon/right-arrow.svg" alt="오른쪽" width={20} height={20} />
}
ListRow.Texts = ListRowTexts
