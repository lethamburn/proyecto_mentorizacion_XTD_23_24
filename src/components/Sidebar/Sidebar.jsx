import { SidebarContainer, SidebarTitle, ComponentList, ComponentListItem, DeveloperSelectContainer } from './StyledSidebar'
import developers from '../../data/developers'

const Sidebar = ({ onSelectComponent, selectedDeveloper, onSelectDeveloper, components, isVisible }) => {
  const getIconClass = (name) => {
    switch (name) {
      case 'Buttons':
        return 'fa-square'
      case 'Spinners':
        return 'fa-spinner'
      case 'Toggles':
        return 'fa-toggle-on'
      default:
        return 'fa-puzzle-piece'
    }
  }

  const handleDeveloperChange = (e) => {
    const developerId = e.target.value
    const developer = developers.find((d) => d.id === developerId)
    onSelectDeveloper(developer)
  }

  return (
    <SidebarContainer isVisible={isVisible}>
      <DeveloperSelectContainer>
        <label htmlFor="developer-selector">Developer:</label>
        <select id="developer-selector" value={selectedDeveloper.id} onChange={handleDeveloperChange}>
          {developers.map((developer) => (
            <option key={developer.id} value={developer.id}>
              {developer.name}
            </option>
          ))}
        </select>
      </DeveloperSelectContainer>
      <SidebarTitle>Components</SidebarTitle>
      <ComponentList>
        {components.map(({ id, name }) => (
          <ComponentListItem key={id} onClick={() => onSelectComponent(id)}>
            <i className={`fa ${getIconClass(name)}`} aria-hidden="true"></i> {name}
          </ComponentListItem>
        ))}
      </ComponentList>
    </SidebarContainer>
  )
}

export default Sidebar
