import { useEffect, useRef, useReducer } from 'react'

const status = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success'
}

const init = {
  status: 'idle',
  error: null,
  data: []
}

const reducer = (state, action) => {
  switch (action.type) {
  case status.LOADING:
    return { ...init, status: status.LOADING }
  case status.SUCCESS:
    return { ...init, status: status.SUCCESS, data: action.payload }
  case status.ERROR:
    return { ...init, status: status.ERROR, error: action.payload }
  default:
    return state
  }
}

export const useFetch = url => {
  const cache = useRef(new Map())
  const [state, dispatch] = useReducer(reducer, init)

  useEffect(() => {
    if (!url) {
      throw new Error('please provide a valid URL')
    }

    const fetcher = async () => {
      dispatch({ type: status.LOADING })

      if (cache.current.get(url)) {
        dispatch({ type: status.SUCCESS, payload: cache.current.get(url) })
      } else {
        try {
          const res = await fetch(url)
          if (!res.ok) {
            const error = await res.json()
            return dispatch({ type: status.ERROR, payload: error })
          }
          const payload = await res.json()
          cache.current.set(url, payload)
          dispatch({ type: status.SUCCESS, payload })
        } catch (error) {
          dispatch({ type: status.ERROR, payload: error.message })
        }
      }
    }

    fetcher()
  }, [url])

  return {
    ...state,
    isLoading: state.status === status.LOADING,
    isSuccess: state.status === status.SUCCESS,
    isError: state.status === status.ERROR
  }
}
