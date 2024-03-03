import { useState } from 'react'
import Spinner from './Spinner'
import CodeButton from '../CodeButton_MJG/CodeButton'
import styled from 'styled-components'

const SpinnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 5px;
  margin-top: 5px;
`

const SectionTitle = styled.h2`
  margin-bottom: 25px;
  width: 100%;
  color: var(--general100);
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
`

const SpinnersWrapper = styled.div`
  border: 1px solid var(--general50);
  border-radius: 8px;
  padding: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`

const SpinnersGroup = styled.div`
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

const SpinnersRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

const SpinnerLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  color: var(--general100);
`

const SpinnerViewer = () => {
  const [showCode, setShowCode] = useState(null)

  const handleToggleShowCode = (group) => {
    setShowCode(prev => (prev === group ? null : group))
  }

  const spinnerGroups = [
    { title: 'Circles', colorCodes: ['primary100', 'red100', 'general80', 'purple90'], type: 'circle' },
    { title: 'Dots', colorCodes: ['primary100', 'red100', 'general80', 'purple90'], type: 'dot' },
    { title: 'Bar Loader', colorCodes: ['primary100', 'red100', 'general80', 'purple90'], type: 'barLoader' }
  ]

  const generateCodeString = (group) => {
    return group.colorCodes.map(colorCode =>
      `<Spinner size="large" color="${colorCode}" type="${group.type}" />\n` +
      `<Spinner size="medium" color="${colorCode}" type="${group.type}" />\n` +
      `<Spinner size="small" color="${colorCode}" type="${group.type}" />`
    ).join('\n\n')
  }

  return (
    <SpinnersContainer>
      {spinnerGroups.map((group) => (
        <div key={group.title}>
          <SectionTitle>{group.title}</SectionTitle>
          <CodeButton
            selected={showCode === group.title ? 'optiontwo' : 'optionone'}
            onChange={() => handleToggleShowCode(group.title)}
            codeToShow={showCode === group.title ? generateCodeString(group) : ''}
          />
          {showCode !== group.title && (
            <SpinnersWrapper>
              {group.colorCodes.map((colorCode, index) => (
                <SpinnersGroup key={index}>
                  <GroupTitle>{colorCode === 'primary100' ? 'Blue' : colorCode === 'red100' ? 'Red' : colorCode === 'general80' ? 'Grey' : 'Purple'}</GroupTitle>
                  <SpinnersRow>
                    <SpinnerLabel>
                      <Spinner size="large" color={colorCode} type={group.type} />
                      <span>Large</span>
                    </SpinnerLabel>
                    <SpinnerLabel>
                      <Spinner size="medium" color={colorCode} type={group.type} />
                      <span>Medium</span>
                    </SpinnerLabel>
                    <SpinnerLabel>
                      <Spinner size="small" color={colorCode} type={group.type} />
                      <span>Small</span>
                    </SpinnerLabel>
                  </SpinnersRow>
                </SpinnersGroup>
              ))}
            </SpinnersWrapper>
          )}
        </div>
      ))}
    </SpinnersContainer>
  )
}

export default SpinnerViewer
