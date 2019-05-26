import React from 'react'
import styled, { css } from 'styled-components'

import { media } from '../utils/styles'
import { useGithub } from '../utils/hooks'

const mobilePadding = css`
  ${({ theme }) => theme.globalPadding()};
  padding-top: 40px !important;
  padding-bottom: 40px !important;
`

const Wrapper = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  max-width: 320px;
  margin-top: 40px;

  opacity: 0;
  visibility: hidden;

  padding: 10px 10px 10px 40px;
  border-left: 2px solid #f4f4f4;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ${({ loading }) => !loading && css`
    opacity: 1;
    visibility: visible;
  `};

  transition: opacity 1s ease;

  ${media.custom(800, css`
    position: inherit;
    max-width: 100%;
    margin-top: 0;
    border-left: none;
    border-top: 2px solid #f4f4f4;
    ${mobilePadding}
  `)}
`

const Card = styled.li`
  margin: 10px 0 15px;

  h3, p {
    margin: 4px 0;
    line-height: 1.2;
  }

  h3 {
    font-weight: 700;
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
    color: #747477;
  }

  a {
    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.gray};
    }
  }
`

const GithubBox = () => {
  const { data, loading, error } = useGithub({ user: 'afuh' })
  return (
    <Wrapper
      loading={loading}
    >
      {!loading && !error &&
        <>
          <h2>github</h2>
          <ul>
            {data.map(repo => (
              <Card key={repo.url}>
                <h3><a href={repo.url}>{repo.name}</a></h3>
                <p>{repo.description}</p>
                <p>✩ {repo.stars}</p>
              </Card>
            ))}
          </ul>
        </>
      }
    </Wrapper>
  )
}

export default GithubBox
