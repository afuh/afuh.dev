import { useContext, createContext } from 'react'

export const ProjectContext = createContext()

export const useProjectData = () => useContext(ProjectContext)
