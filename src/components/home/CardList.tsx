import React, { Fragment, use, useCallback } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import ListRow from '@shared/ListRow'
import { getCards } from '@remote/card'
import { flatten } from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'
import Badge from '@shared/Badge'
import { useNavigate } from 'react-router-dom'
const CardList = () => {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      console.log(hasNextPage, isFetching)
      return getCards(pageParam)
    },
    {
      getNextPageParam: (snapShot) => {
        console.log('snapShot', snapShot)
        return snapShot.lastVisible
      },
    },
  )
  const navigate = useNavigate()
  const cards = flatten(data?.pages.map(({ items }) => items))

  const loadMore = useCallback(() => {
    if (!hasNextPage || isFetching) {
      return null
    } else {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetching])
  if (!data) return null

  return (
    <div>
      <InfiniteScroll
        scrollThreshold={'100px'}
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
      >
        <ul>
          {cards?.map((card, index) => (
            <Fragment key={index}>
              <ListRow
                withArrow
                left={<div>&nbsp;</div>}
                right={
                  card.payback != null ? <Badge label={card.payback} /> : null
                }
                content={
                  <ListRow.Texts
                    title={`${index + 1}위`}
                    subTitle={card.name}
                  />
                }
                onClick={() => {
                  navigate(`/card/${card.id}`)
                }}
              />
            </Fragment>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default CardList
