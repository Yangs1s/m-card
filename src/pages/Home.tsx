import React from 'react'
import Top from '@shared/Top'

import AdBanner from '@components/home/AdBanners'
import CardList from '@components/home/CardList'

function Home() {
  return (
    <div>
      <Top
        title="혜택이 좋은 카드"
        subTitle={'혜택에 알맞는 카드를 추천해드립니다.'}
      />
      <AdBanner />
      <CardList />
    </div>
  )
}

export default Home
