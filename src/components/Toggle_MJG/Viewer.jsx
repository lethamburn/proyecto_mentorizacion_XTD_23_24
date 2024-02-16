import { useState } from 'react'
import Toggle from './Toggle'
import styled from 'styled-components'

const ToggleViewerContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`

const MainTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--general100);
  margin-bottom: 25px;
`

const ToggleSizeTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--general60);
  margin-bottom: 10px;
`

const TogglesContainer = styled.div`
  display: flex;
  gap: 20px;
`

const ToggleLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--general100);
  display: flex;
  align-items: center;
  gap: 10px;
`

const ToggleViewer = () => {
  const [checked, setChecked] = useState({ small: false, medium: false, large: false })

  const handleChange = (size) => {
    setChecked(prevState => ({ ...prevState, [size]: !prevState[size] }))
  }

  return (
    <ToggleViewerContainer>
      <MainTitle>Toggle</MainTitle>
      <ToggleSizeTitle>Toggle Size</ToggleSizeTitle>
      <TogglesContainer>
        <ToggleLabel>
          <Toggle size="large" checked={checked.large} onChange={() => handleChange('large')} />
          <span>Large</span>
        </ToggleLabel>

        <ToggleLabel>
          <Toggle size="medium" checked={checked.medium} onChange={() => handleChange('medium')} />
          <span>Medium</span>
        </ToggleLabel>

        <ToggleLabel>
          <Toggle size="small" checked={checked.small} onChange={() => handleChange('small')} />
          <span>Small</span>
        </ToggleLabel>
      </TogglesContainer>
    </ToggleViewerContainer>
  )
}

export default ToggleViewer
