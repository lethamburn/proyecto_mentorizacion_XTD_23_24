import { useState } from 'react'
import Toggle from './Toggle'
import styled from 'styled-components'

const ToggleViewerContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
  margin-top: 5px;
`

const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: var(--general100);
  width: 100%;
  margin-bottom: 10px;
`

const ToggleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ToggleGroupTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--general60);
  margin-bottom: 10px;
`

const TogglesRow = styled.div`
  display: flex;
  gap: 20px;
`

const ToggleLabel = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--general100);
  display: flex;
  align-items: center;
  gap: 10px;
`

const ToggleViewer = () => {
  const [checked, setChecked] = useState({
    blue: { small: false, medium: false, large: false },
    red: { small: false, medium: false, large: false },
    grey: { small: false, medium: false, large: false }
  })

  const handleChange = (color, size) => {
    setChecked(prevState => ({
      ...prevState,
      [color]: { ...prevState[color], [size]: !prevState[color][size] }
    }))
  }

  const renderToggleGroup = (color) => (
    <ToggleGroup key={color}>
      <ToggleGroupTitle>{color.charAt(0).toUpperCase() + color.slice(1)}</ToggleGroupTitle>
      <TogglesRow>
        {['large', 'medium', 'small'].map(size => (
          <ToggleLabel key={size}>
            <Toggle size={size} color={color} checked={checked[color][size]} onChange={() => handleChange(color, size)} />
            <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
          </ToggleLabel>
        ))}
      </TogglesRow>
    </ToggleGroup>
  )

  return (
    <ToggleViewerContainer>
      <MainTitle>Toggles</MainTitle>
      {['blue', 'red', 'grey'].map(color => renderToggleGroup(color))}
    </ToggleViewerContainer>
  )
}

export default ToggleViewer
