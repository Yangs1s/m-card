import React from 'react'
import Button from '@shared/Button'
import { collection, doc, writeBatch } from 'firebase/firestore'
import { adBanners } from '../../mock/data'
import { store } from '@remote/firebase'
import { COLLECTIONS } from '@constants/index'
const BannerListAddButton = () => {
  const handleClick = async () => {
    const batch = writeBatch(store)

    adBanners.forEach((card) => {
      const docRef = doc(collection(store, COLLECTIONS.ADDBANNER))

      batch.set(docRef, card)
    })

    await batch.commit()

    alert('배너 추가 완료')
  }

  return <Button onClick={handleClick}>배너 버튼 추가하기</Button>
}

export default BannerListAddButton
