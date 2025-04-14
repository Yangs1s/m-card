import React, { Fragment, use } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import ListRow from '@shared/ListRow'
import { getCards } from '@remote/card'
import { flatten } from 'lodash'

const CardList = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      console.log('pageParam', pageParam)
      return getCards()
    },
    {
      getNextPageParam: (snapShot) => {
        console.log('snapShot', snapShot)
        return snapShot.lastVisible
      },
    },
  )
  const cards = flatten(data?.pages.map(({ items }) => items))

  if (!data) return null

  return (
    <div>
      <button onClick={() => fetchNextPage()}>데이터 불러오기</button>
      <ul>
        {cards?.map((card, index) => (
          <Fragment key={index}>
            <ListRow
              withArrow
              left={<div>&nbsp;</div>}
              right={card.payback != null ? <div>{card.payback}</div> : null}
              content={
                <ListRow.Texts title={`${index + 1}위`} subTitle={card.name} />
              }
            />
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export default CardList
