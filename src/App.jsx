import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import developers from './data/developers'
import ButtonViewer from './components/Demo/Viewer'
import ButtonMJG from './components/Button_MJG/Viewer'
import SpinnerMJG from './components/Spinner_MJG/Viewer'
import ToggleMJG from './components/Toggle_MJG/Viewer'
import { useResponsiveSidebar } from './hooks/useResponsiveSidebar'
import { useSelection } from './hooks/useSelection'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useResponsiveSidebar()
  const {
    selectedDeveloper,
    setSelectedDeveloper,
    selectedComponent,
    setSelectedComponent
  } = useSelection()

  const components = selectedDeveloper.components.map((componentId) => {
    switch (componentId) {
      case 'Button_MJG':
        return { id: componentId, name: 'Buttons', component: ButtonMJG }
      case 'Spinner_MJG':
        return { id: componentId, name: 'Spinners', component: SpinnerMJG }
      case 'Toggle_MJG':
        return { id: componentId, name: 'Toggles', component: ToggleMJG }
      case 'ButtonViewer':
        return { id: componentId, name: 'Buttons', component: ButtonViewer }
      default:
        return null
    }
  }).filter(component => component !== null)

  const handleSelectComponent = (componentId) => {
    const component = components.find(c => c.id === componentId)
    setSelectedComponent(component)
    setIsSidebarOpen(false)
  }

  return (
    <>
      <Header
        developer={selectedDeveloper}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <div style={{ display: 'flex', height: '100vh', paddingTop: '50px' }}>
        <Sidebar
          isVisible={isSidebarOpen}
          developers={developers}
          selectedDeveloper={selectedDeveloper}
          onSelectDeveloper={(developer) => {
            setSelectedDeveloper(developer)
          }}
          components={components}
          onSelectComponent={handleSelectComponent}
        />
        <div style={{ flex: 1, padding: '50px 30px' }}>
          {selectedComponent && selectedComponent.component ? React.createElement(selectedComponent.component) : <div>No component selected</div>}
        </div>
      </div>
    </>
  )
}

export default App
