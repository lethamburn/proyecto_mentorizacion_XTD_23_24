import { useState, useEffect } from 'react'

export const useResponsiveSidebar = (breakpoint = 650) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > breakpoint)

  useEffect(() => {
    const handleResize = () => setIsSidebarOpen(window.innerWidth > breakpoint)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return [isSidebarOpen, setIsSidebarOpen]
}
