import styled from 'styled-components'

export const SidebarContainer = styled.div.withConfig({
  shouldForwardProp: prop => !['isVisible'].includes(prop)
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--general30);
  color: var(--general150);
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.1);
  min-height: calc(100vh - 50px);
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
 
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;

  @media (max-width: 650px) {
    margin-top: ${props => props.isVisible ? '50px' : '50px'};
  }

  @media (min-width: 650px) {
    position: relative;
    transform: translateX(0);
  }
`

export const DeveloperSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 15px;

  label {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid var(--general90);
    background-color: var(--general50);
    color: var(--general150);

    &:focus {
      outline: none;
      border-color: var(--highlight);
    }
  }
`

export const SidebarTitle = styled.h2`
  margin-top: 25px;
`

export const ComponentList = styled.ul`
  list-style: none;
  width: 100%;
`

export const ComponentListItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--general90);
    color: var(--general30);
  }
`
