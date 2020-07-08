import React, { useState, createContext, useContext } from 'react'

const Context = createContext()

const TrackProjectProvider = ({ children }) => {
  const [trackedProjects, setTrackedProjects] = useState([])

  const addTrackedProject = project => {
    const viewed = new Set([...trackedProjects, project])
    setTrackedProjects(Array.from(viewed))
  }

  return (
    <Context.Provider value={{
      trackedProjects,
      addTrackedProject
    }}>
      {children}
    </Context.Provider>
  )
}

export const useTrackProject = () => useContext(Context)

export default TrackProjectProvider
