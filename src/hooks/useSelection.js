import { useState, useEffect } from 'react'
import developers from '../data/developers'

export const useSelection = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState(developers[0])
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 650)

  useEffect(() => {
    const handleResize = () => setIsSidebarOpen(window.innerWidth > 650)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const firstComponent = selectedDeveloper.components.length > 0 ? selectedDeveloper.components[0] : null
    setSelectedComponent(firstComponent)
  }, [selectedDeveloper])

  return {
    selectedDeveloper,
    setSelectedDeveloper,
    selectedComponent,
    setSelectedComponent,
    isSidebarOpen,
    setIsSidebarOpen
  }
}
