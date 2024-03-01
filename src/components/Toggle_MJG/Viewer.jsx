import { useState } from 'react'
import Toggle from './Toggle'
import styled from 'styled-components'

const ToggleViewerContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  margin-top: 5px;
`

const CategoryContainer = styled.div`
border: 1px solid var(--general50);
  border-radius: 8px;
  padding: 20px;
  padding-bottom: 30px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`

const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: var(--general100);
  width: 100%;
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
    standard: { blue: { small: false, medium: false, large: false }, red: { small: false, medium: false, large: false }, grey: { small: false, medium: false, large: false }, purple: { small: false, medium: false, large: false } },
    icon: { blue: { small: false, medium: false, large: false }, red: { small: false, medium: false, large: false }, grey: { small: false, medium: false, large: false }, purple: { small: false, medium: false, large: false } },
    text: { blue: { small: false, medium: false, large: false }, red: { small: false, medium: false, large: false }, grey: { small: false, medium: false, large: false }, purple: { small: false, medium: false, large: false } }
  })

  const handleChange = (type, color, size) => {
    setChecked(prevState => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        [color]: { ...prevState[type][color], [size]: !prevState[type][color][size] }
      }
    }))
  }

  const renderToggleGroup = (type, color) => (
    <ToggleGroup key={`${type}-${color}`}>
      <ToggleGroupTitle>{color.charAt(0).toUpperCase() + color.slice(1)}</ToggleGroupTitle>
      <TogglesRow>
        {['large', 'medium', 'small'].map(size => (
          <ToggleLabel key={size}>
            <Toggle size={size} color={color} checked={checked[type][color][size]} onChange={() => handleChange(type, color, size)} type={type} />
            <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
          </ToggleLabel>
        ))}
      </TogglesRow>
    </ToggleGroup>
  )

  return (
    <ToggleViewerContainer>
      <MainTitle>Standard Toggles</MainTitle>
      <CategoryContainer>
        {['blue', 'red', 'grey', 'purple'].map(color => renderToggleGroup('standard', color))}
      </CategoryContainer>

      <MainTitle>Toggles with Icons</MainTitle>
      <CategoryContainer>
        {['blue', 'red', 'grey', 'purple'].map(color => renderToggleGroup('icon', color))}
      </CategoryContainer>

      <MainTitle>Toggles with Text</MainTitle>
      <CategoryContainer>
        {['blue', 'red', 'grey', 'purple'].map(color => renderToggleGroup('text', color))}
      </CategoryContainer>
    </ToggleViewerContainer>
  )
}

export default ToggleViewer
