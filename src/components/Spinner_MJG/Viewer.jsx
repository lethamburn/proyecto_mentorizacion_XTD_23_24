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

const SpinnerViewer = () => {
  return (
    <SpinnersContainer>
      <SectionTitle>Circles</SectionTitle>
      <SpinnersGroup>
        <GroupTitle>Blue</GroupTitle>
        <SpinnersRow>
          <SpinnerLabel>
            <Spinner size="large" color="primary100" />
            <span>Large</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="medium" color="primary100" />
            <span>Medium</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="small" color="primary100" />
            <span>Small</span>
          </SpinnerLabel>
        </SpinnersRow>
      </SpinnersGroup>
      <SpinnersGroup>
        <GroupTitle>Red</GroupTitle>
        <SpinnersRow>
          <SpinnerLabel>
            <Spinner size="large" color="red100" />
            <span>Large</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="medium" color="red100" />
            <span>Medium</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="small" color="red100" />
            <span>Small</span>
          </SpinnerLabel>
        </SpinnersRow>
      </SpinnersGroup>
      <SpinnersGroup>
        <GroupTitle>Grey</GroupTitle>
        <SpinnersRow>
          <SpinnerLabel>
            <Spinner size="large" color="general80" />
            <span>Large</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="medium" color="general80" />
            <span>Medium</span>
          </SpinnerLabel>
          <SpinnerLabel>
            <Spinner size="small" color="general80" />
            <span>Small</span>
          </SpinnerLabel>
        </SpinnersRow>
      </SpinnersGroup>
    </SpinnersContainer>
  )
}

export default SpinnerViewer
