import { useState, useEffect } from 'react'

export const useResponsiveSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 650)

  useEffect(() => {
    const handleResize = () => setIsSidebarOpen(window.innerWidth > 650)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return [isSidebarOpen, setIsSidebarOpen]
}
