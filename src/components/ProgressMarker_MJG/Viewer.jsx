import { useState } from 'react'
import ProgressMarker from './ProgressMarker'
import CodeButton from '../CodeButton_MJG/CodeButton'
import styled from 'styled-components'

const MarkersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: 5px;
`

const SectionTitle = styled.h2`
  width: 100%;
  color: var(--general100);
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  margin-bottom: 26px;
`

const MarkersWrapper = styled.div`
  border: 1px solid var(--general50);
  border-radius: 8px;
  padding: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
`

const MarkersGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const GroupTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--general60);
  margin-bottom: 15px;
`

const MarkersRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

const MarkerLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  color: var(--general100);
`

const circleWithPercentageCodeString = `
<ProgressMarker size="large" color="blue" type="circleWithPercentage" />
<ProgressMarker size="medium" color="red" type="circleWithPercentage" />
<ProgressMarker size="small" color="grey" type="circleWithPercentage" />
`

const barCodeString = `
<ProgressMarker size="large" color="blue" type="bar" />
<ProgressMarker size="medium" color="red" type="bar" />
<ProgressMarker size="small" color="grey" type="bar" />
`

const waveCodeString = `
<ProgressMarker size="large" color="blue" type="wave" />
<ProgressMarker size="medium" color="red" type="wave" />
<ProgressMarker size="small" color="grey" type="wave" />
`

const ProgressMarkerViewer = () => {
  const [showCircleWithPercentage, setShowCircleWithPercentage] = useState(true)
  const [showBar, setShowBar] = useState(true)
  const [showWave, setShowWave] = useState(true)

  return (
    <MarkersContainer>
      <SectionTitle>Circle with Percentage</SectionTitle>
      <CodeButton
        codeString={circleWithPercentageCodeString}
        language="jsx"
        wrapLongLines={true}
        onToggleShowCode={() => setShowCircleWithPercentage(prev => !prev)}
        elementId="circleWithPercentage"
      />
      {showCircleWithPercentage && (
        <MarkersWrapper>
          {['blue', 'red', 'grey'].map((color, index) => (
            <MarkersGroup key={index}>
              <GroupTitle>{color.charAt(0).toUpperCase() + color.slice(1)}</GroupTitle>
              <MarkersRow>
                <MarkerLabel>
                  <ProgressMarker size="large" color={color} type="circleWithPercentage" />
                  <span>Large</span>
                </MarkerLabel>
                <MarkerLabel>
                  <ProgressMarker size="medium" color={color} type="circleWithPercentage" />
                  <span>Medium</span>
                </MarkerLabel>
                <MarkerLabel>
                  <ProgressMarker size="small" color={color} type="circleWithPercentage" />
                  <span>Small</span>
                </MarkerLabel>
              </MarkersRow>
            </MarkersGroup>
          ))}
        </MarkersWrapper>
      )}

<SectionTitle>Bar</SectionTitle>
<CodeButton
  codeString={barCodeString}
  language="jsx"
  wrapLongLines={true}
  onToggleShowCode={() => setShowBar(prev => !prev)}
  elementId="bar"
/>
{showBar && (
  <MarkersWrapper>
    {['blue', 'red', 'grey'].map((color, index) => (
      <MarkersGroup key={index}>
        <GroupTitle>{color.charAt(0).toUpperCase() + color.slice(1)}</GroupTitle>
        <MarkersRow>
          <MarkerLabel>
            <ProgressMarker size="large" color={color} type="bar" />
            <span>Large</span>
          </MarkerLabel>
          <MarkerLabel>
            <ProgressMarker size="medium" color={color} type="bar" />
            <span>Medium</span>
          </MarkerLabel>
          <MarkerLabel>
            <ProgressMarker size="small" color={color} type="bar" />
            <span>Small</span>
          </MarkerLabel>
        </MarkersRow>
      </MarkersGroup>
    ))}
  </MarkersWrapper>
)}

<SectionTitle>Wave</SectionTitle>
<CodeButton
  codeString={waveCodeString}
  language="jsx"
  wrapLongLines={true}
  onToggleShowCode={() => setShowWave(prev => !prev)}
  elementId="wave"
/>
{showWave && (
  <MarkersWrapper>
    {['blue', 'red', 'grey'].map((color, index) => (
      <MarkersGroup key={index}>
        <GroupTitle>{color.charAt(0).toUpperCase() + color.slice(1)}</GroupTitle>
        <MarkersRow>
          <MarkerLabel>
            <ProgressMarker size="large" color={color} type="wave" />
            <span>Large</span>
          </MarkerLabel>
          <MarkerLabel>
            <ProgressMarker size="medium" color={color} type="wave" />
            <span>Medium</span>
          </MarkerLabel>
          <MarkerLabel>
            <ProgressMarker size="small" color={color} type="wave" />
            <span>Small</span>
          </MarkerLabel>
        </MarkersRow>
      </MarkersGroup>
    ))}
  </MarkersWrapper>
)}
</MarkersContainer>
  )
}

export default ProgressMarkerViewer
