import { useState } from 'react'
import Toggle from './Toggle'
import styled from 'styled-components'
import CodeButton from '../CodeButton_MJG/CodeButton'

const ToggleViewerContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`

const CategoryContainer = styled.div`
  border: 1px solid var(--general50);
  border-radius: 8px;
  padding: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
`

const FullWidthContainer = styled.div`
  width: 100%;
`

const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: var(--general100);
  width: 100%;
  margin-bottom: 26px;
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

const standardTogglesCodeString = `
<Toggle size="large" color="blue" checked={checked.standard.blue.large} />
<Toggle size="medium" color="blue" checked={checked.standard.blue.medium} />
<Toggle size="small" color="blue" checked={checked.standard.blue.small} />
<Toggle size="large" color="red" checked={checked.standard.red.large} />
<Toggle size="medium" color="red" checked={checked.standard.red.medium} />
<Toggle size="small" color="red" checked={checked.standard.red.small} />
`

const togglesWithIconsCodeString = `
<Toggle size="large" color="blue" type="icon" checked={checked.icon.blue.large} />
<Toggle size="medium" color="blue" type="icon" checked={checked.icon.blue.medium} />
<Toggle size="small" color="blue" type="icon" checked={checked.icon.blue.small} />
<Toggle size="large" color="red" type="icon" checked={checked.icon.red.large} />
<Toggle size="medium" color="red" type="icon" checked={checked.icon.red.medium} />
<Toggle size="small" color="red" type="icon" checked={checked.icon.red.small} />
`

const togglesWithTextCodeString = `
<Toggle size="large" color="blue" type="text" checked={checked.text.blue.large} />
<Toggle size="medium" color="blue" type="text" checked={checked.text.blue.medium} />
<Toggle size="small" color="blue" type="text" checked={checked.text.blue.small} />
<Toggle size="large" color="red" type="text" checked={checked.text.red.large} />
<Toggle size="medium" color="red" type="text" checked={checked.text.red.medium} />
<Toggle size="small" color="red" type="text" checked={checked.text.red.small} />
`

const ToggleViewer = () => {
  const [checked, setChecked] = useState({
    standard: { blue: { small: false, medium: false, large: false }, red: { small: false, medium: false, large: false }, grey: { small: false, medium: false, large: false }, purple: { small: false, medium: false, large: false } },
    icon: { blue: { small: false, medium: false, large: false }, red: { small: false, medium: false, large: false }, grey: { small: false, medium: false, large: false }, purple: { small: false, medium: false, large: false } },
    text: { blue: { small: false, medium: false, large: false }, red: { small: false, medium: false, large: false }, grey: { small: false, medium: false, large: false }, purple: { small: false, medium: false, large: false } }
  })

  const [showStandardCode, setShowStandardCode] = useState(false)
  const [showIconsCode, setShowIconsCode] = useState(false)
  const [showTextCode, setShowTextCode] = useState(false)

  const toggleStandardCode = () => setShowStandardCode(prev => !prev)
  const toggleIconsCode = () => setShowIconsCode(prev => !prev)
  const toggleTextCode = () => setShowTextCode(prev => !prev)

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
      <FullWidthContainer>
      <CodeButton
        codeString={standardTogglesCodeString}
        language="html"
        wrapLongLines={true}
        onToggleShowCode={toggleStandardCode}
        elementId="standardToggles"
      />
      </FullWidthContainer>
      {!showStandardCode && (
        <CategoryContainer>
          {['blue', 'red', 'grey', 'purple'].map(color => renderToggleGroup('standard', color))}
        </CategoryContainer>
      )}

      <MainTitle>Toggles with Icons</MainTitle>
      <FullWidthContainer>
      <CodeButton
        codeString={togglesWithIconsCodeString}
        language="html"
        wrapLongLines={true}
        onToggleShowCode={toggleIconsCode}
        elementId="iconToggles"
      />
      </FullWidthContainer>
      {!showIconsCode && (
        <CategoryContainer>
          {['blue', 'red', 'grey', 'purple'].map(color => renderToggleGroup('icon', color))}
        </CategoryContainer>
      )}

      <MainTitle>Toggles with Text</MainTitle>
      <FullWidthContainer>
      <CodeButton
        codeString={togglesWithTextCodeString}
        language="html"
        wrapLongLines={true}
        onToggleShowCode={toggleTextCode}
        elementId="textToggles"
      />
      </FullWidthContainer>
      {!showTextCode && (
        <CategoryContainer>
          {['blue', 'red', 'grey', 'purple'].map(color => renderToggleGroup('text', color))}
        </CategoryContainer>
      )}
    </ToggleViewerContainer>
  )
}

export default ToggleViewer
