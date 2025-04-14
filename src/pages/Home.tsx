import React, { useEffect } from 'react'
import Top from '@shared/Top'

import AdBanner from '@components/home/AdBanners'
import CardList from '@components/home/CardList'

function Home() {
  return (
    <div>
      <Top title="Home" subTitle={'Home page'} />

      <AdBanner />
      <CardList />
    </div>
  )
}

export default Home
