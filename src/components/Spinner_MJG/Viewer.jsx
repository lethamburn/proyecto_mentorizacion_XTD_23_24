import Spinner from './Spinner'
import styled from 'styled-components'

const SpinnersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
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

const SpinnerViewer = () => (
  <SpinnersContainer>
    <SectionTitle>Circles</SectionTitle>
    {['primary100', 'red100', 'general80'].map((color, index) => (
      <SpinnersGroup key={index}>
        <GroupTitle>{color === 'primary100' ? 'Blue' : color === 'red100' ? 'Red' : 'Grey'}</GroupTitle>
        <SpinnersRow>
          <SpinnerLabel>
            <Spinner size="large" color={color} type="circle" />
            <span>Large</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="medium" color={color} type="circle" />
            <span>Medium</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="small" color={color} type="circle" />
            <span>Small</span>
          </SpinnerLabel>
        </SpinnersRow>
      </SpinnersGroup>
    ))}
    <SectionTitle>Dots</SectionTitle>
    {['primary100', 'red100', 'general80'].map((color, index) => (
      <SpinnersGroup key={index}>
        <GroupTitle>{color === 'primary100' ? 'Blue' : color === 'red100' ? 'Red' : 'Grey'}</GroupTitle>
        <SpinnersRow>
          <SpinnerLabel>
            <Spinner size="large" color={color} type="dot" />
            <span>Large</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="medium" color={color} type="dot" />
            <span>Medium</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="small" color={color} type="dot" />
            <span>Small</span>
          </SpinnerLabel>
        </SpinnersRow>
      </SpinnersGroup>
    ))}
   <SectionTitle>Bar Loader</SectionTitle>
    {['primary100', 'red100', 'general80'].map((color) => (
      <SpinnersGroup key={color}>
        <GroupTitle>{color === 'primary100' ? 'Blue' : color === 'red100' ? 'Red' : 'Grey'}</GroupTitle>
        <SpinnersRow>
          <SpinnerLabel>
            <Spinner size="large" color={color} type="barLoader" />
            <span>Large</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="medium" color={color} type="barLoader" />
            <span>Medium</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="small" color={color} type="barLoader" />
            <span>Small</span>
          </SpinnerLabel>
        </SpinnersRow>
      </SpinnersGroup>
    ))}
  </SpinnersContainer>
)

export default SpinnerViewer
