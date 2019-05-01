import React from 'react'
import styled, { css } from 'styled-components'

import { useGithub } from '../utils/hooks'

const Wrapper = styled.section`
  opacity: 0;
  visibility: hidden;

  padding: 10px 10px 10px 40px;
  border-left: 2px solid #f4f4f4;

  h2 {
    text-transform: uppercase;
    margin-top: 0;
    font-weight: 700;
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
`

const Card = styled.li`
  margin: 10px 0 15px;

  h3, p {
    margin: 4px 0;
    line-height: 1.2;
  }

  h3 {
    font-weight: 700;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
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

const GithubBox = props => {
  const { data, loading, error } = useGithub({ user: 'afuh', sort: 'stargazers' })

  return (
    <Wrapper
      {...props}
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
