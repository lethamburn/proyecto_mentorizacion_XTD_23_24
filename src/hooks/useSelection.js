import { useState, useEffect } from 'react'

export const useSelection = (developersData) => {
  const [selectedDeveloper, setSelectedDeveloper] = useState(developersData[0])
  const [selectedComponent, setSelectedComponent] = useState(null)

  useEffect(() => {
    setSelectedComponent(
      selectedDeveloper?.components && selectedDeveloper.components.length > 0
        ? { id: selectedDeveloper.components[0], component: null }
        : null
    )
  }, [selectedDeveloper])

  return {
    selectedDeveloper,
    setSelectedDeveloper,
    selectedComponent,
    setSelectedComponent
  }
}
