import { css } from '@emotion/react'
import { getAdBanner } from '@remote/adbanner'
import { useQuery } from 'react-query'
import Text from '@shared/Text'
import Flex from '@shared/Flex'
import { Swiper, SwiperSlide } from 'swiper/react'
import { colors } from '@style/color-palette'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import 'swiper/css'

function AdBanner() {
  const { data } = useQuery(['adBanners'], async () => await getAdBanner())

  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((adBanner) => {
          return (
            <SwiperSlide key={adBanner.id}>
              <Link to={adBanner.link} key={adBanner.link}>
                <Flex direction="column" css={BannerContainerStyles}>
                  <Text bold>{adBanner.title}</Text>
                  <Text typography={'t7'}>{adBanner.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`

const BannerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.gray};
  border-radius: 4px;
`

export default AdBanner
