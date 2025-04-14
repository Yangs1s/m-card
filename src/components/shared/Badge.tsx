import styled from '@emotion/styled'

import { colors } from '@style/color-palette'
import Text from '@shared/Text'

interface BadgeProps {
  label: string
}

export default function Badge({ label }: BadgeProps) {
  return (
    <Container>
      <Text typography={'t7'} bold color={'white'}>
        {label}
      </Text>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 12px;
  background: ${colors.blue};
  padding: 2px 8px;
`
