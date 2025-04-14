import { collection, getDocs } from 'firebase/firestore'
import { store } from './firebase'

import { COLLECTIONS } from '@constants/index'
import { AdBanner } from '@models/card'
export async function getAdBanner() {
  const adBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.ADDBANNER),
  )

  return adBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner),
  }))
}
