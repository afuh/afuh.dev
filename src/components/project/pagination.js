import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import styled, { css } from 'styled-components'
import mousetrap from 'mousetrap'

import { usePagination, useViewedProject } from '../../utils/hooks'
import { Arrow } from '../../utils/UI/icons'
import { Button } from '../../utils/UI/'

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
  const { addViewedProject } = useViewedProject()

  useEffect(() => {
    mousetrap.bind('right', () => {
      navigate(next)
      addViewedProject(next)
    })
    mousetrap.bind('left', () => {
      navigate(prev)
      addViewedProject(prev)
    })

    return () => {
      mousetrap.unbind('left')
      mousetrap.unbind('right')
    }
  })

  return (
    <Wrapper>
      <Button
        aria-label='previous page'
        onClick={() => {
          navigate(prev)
          addViewedProject(prev)
        }}
      >
        <Arrow.left />
      </Button>
      <Button
        aria-label='next page'
        slug={next}
        onClick={() => {
          navigate(next)
          addViewedProject(next)
        }}
      >
        <Arrow.right />
      </Button>
    </Wrapper>
  )
}

export default Pagination
