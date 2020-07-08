import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import styled, { css } from 'styled-components'
import mousetrap from 'mousetrap'

import ArrowLeft from '../../assets/arrow-left.icon.svg'
import ArrowRight from '../../assets/arrow-right.icon.svg'
import { usePagination, useTrackProject } from '../../utils/hooks'
import { Button } from '../shared'

const Wrapper = styled.div`
  display: flex;

  button  {
    width: 60px;
    margin-left: 10px;

    svg {
      height: 1.2rem;
    }

    ${({ theme }) => theme.media.phone(css`
      margin-top: 4px;
      margin-left: 4px;
    `)}
  }
`

const Pagination = () => {
  const { next, prev } = usePagination()
  const { addTrackedProject } = useTrackProject()

  const goTo = slug => {
    navigate(`/${slug}`)
    addTrackedProject(slug)
  }

  useEffect(() => {
    mousetrap.bind('right', () => goTo(next))
    mousetrap.bind('left', () => goTo(prev))

    return () => {
      mousetrap.unbind('left')
      mousetrap.unbind('right')
    }
  })

  return (
    <Wrapper>
      <Button
        aria-label='previous page'
        onClick={() => goTo(prev)}
      >
        <ArrowLeft />
      </Button>
      <Button
        aria-label='next page'
        slug={next}
        onClick={() => goTo(next)}
      >
        <ArrowRight />
      </Button>
    </Wrapper>
  )
}

export default Pagination
