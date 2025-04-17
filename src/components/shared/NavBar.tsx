import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'
import { Link, useNavigate } from 'react-router-dom'
import { colors } from '@style/color-palette'
import { useLocation } from 'react-router-dom'
const NavBar = () => {
  const location = useLocation()

  const showSignButton =
    ['/signIn', '/signUp'].includes(location.pathname) === false
  return (
    <Flex direction={'row'} justify={'space-between'} css={navBarContainer}>
      <Link to={'/'}>
        <Text bold typography={'t3'}>
          홈
        </Text>
      </Link>
      {showSignButton ? (
        <Link to={'/signUp'}>
          <Button>로그인/회원가입</Button>
        </Link>
      ) : null}
    </Flex>
  )
}

const navBarContainer = css`
  padding: 20px;
  position: sticky;
  background-color: ${colors.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
export default NavBar
