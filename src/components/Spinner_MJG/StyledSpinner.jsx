import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0)
  }
  40% {
    transform: scale(1.0)
  }
`

const StyledSpinner = styled.div.attrs(props => ({
  className: props.type
}))`
  display: inline-block;

  &.circular {
    border: 4px solid var(--general50);
    border-radius: 50%;
    border-top: 4px solid var(--primary100);
    width: 40px;
    height: 40px;
    animation: ${rotate} 2s linear infinite;
  }

  &.dots {
    display: flex;

    div {
      width: 8px;
      height: 8px;
      background-color: var(--primary100);
      border-radius: 50%;
      animation: ${bounce} 1.4s infinite ease-in-out both;
    }

    div:nth-child(1) { animation-delay: -0.32s }
    div:nth-child(2) { animation-delay: -0.16s }
  }
`

const SpinnerComponent = ({ type }) => (
  <StyledSpinner type={type}>
    {type === 'dots' && <><div></div><div></div><div></div></>}
  </StyledSpinner>
)

export default SpinnerComponent
