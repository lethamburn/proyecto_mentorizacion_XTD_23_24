import Spinner from './Spinner'
import styled from 'styled-components'

const SpinnerViewerContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`

const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--general100);
  margin-bottom: 25px;
`

const SpinnerSizeTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--general60);
  margin-bottom: 10px;
`

const SpinnersContainer = styled.div`
  display: flex;
  gap: 20px;
`

const SpinnerLabel = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--general100);
  display: flex;
  align-items: center;
  gap: 10px;
`

const SpinnerViewer = () => {
  return (
    <SpinnerViewerContainer>
      <MainTitle>Spinners</MainTitle>
      <SpinnerSizeTitle>Spinner Size</SpinnerSizeTitle>
      <SpinnersContainer>
        <SpinnerLabel>
          <Spinner size="large" />
          <span>Large</span>
        </SpinnerLabel>

        <SpinnerLabel>
          <Spinner size="medium" />
          <span>Medium</span>
        </SpinnerLabel>

        <SpinnerLabel>
          <Spinner size="small" />
          <span>Small</span>
        </SpinnerLabel>
      </SpinnersContainer>
    </SpinnerViewerContainer>
  )
}

export default SpinnerViewer
