import styled from 'styled-components'
import Spinner from './Spinner'

const SpinnersContainer = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`

const SpinnerViewer = () => {
  return (
    <SpinnersContainer>
      <Spinner type='circular' />
      <Spinner type='dots' />
    </SpinnersContainer>
  )
}

export default SpinnerViewer
