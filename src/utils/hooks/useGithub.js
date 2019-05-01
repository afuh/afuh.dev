import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/afuh/repos'

const options = {
  per_page: 5,
  sort: 'pushed',
  direction: 'DESC',
  type: 'all'
}

const query = "?" + Object.keys(options)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`)
  .join('&')

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

export const useGithub = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url + query)
        const data = await res.json()
        const repos = filterData(data)

        setData(repos)
        setLoading(false)
      } catch (err) {
        console.log(err.message)
        setLoading(true)
      }
    }

    fetchData()
  }, [])

  return {
    data,
    loading
  }
}
