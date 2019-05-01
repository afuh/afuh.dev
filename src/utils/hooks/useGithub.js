import { useEffect, useState } from 'react'
import fakeData from '../fakeGithubData'

const makeUrl = (user, query) => {
  const options = {
    per_page: 5,
    sort: 'pushed',
    direction: 'DESC',
    type: 'all',
    ...query
  }

  const stringQuery = Object.keys(options)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`)
    .join('&')

  return `https://api.github.com/users/${user}/repos?${stringQuery}`
}

const filterData = data => data
  .filter(repo => !repo.fork)
  .reduce((acc, { name, description, url, stargazers_count }) => [
    ...acc,
    {
      name,
      description,
      url,
      stars: stargazers_count
    }
  ], [])

export const useGithub = ({ user, query = {} }) => {
  if (process.env.NODE_ENV !== 'production') {
    return {
      loading: false,
      error: null,
      data: fakeData
    }
  }

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const url = makeUrl(user, query)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)

        if (res.status === 200) {
          const data = await res.json()
          const repos = filterData(data)
          setData(repos)
        } else {
          setError(res.statusText)
        }

      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return {
    data,
    loading,
    error
  }
}
