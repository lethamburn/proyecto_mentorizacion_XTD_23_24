import styled, { keyframes } from 'styled-components'

const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const rotateLeft = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
`

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: var(--general30);
  color: var(--general150);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`

export const Logo = styled.img`
  height: 50px;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 650px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const DeveloperPhoto = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 10px;
`

export const MenuIcon = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})`
  display: none;
  @media (max-width: 650px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
    animation: ${({ isOpen }) => (isOpen ? rotateLeft : rotateRight)} 0.3s forwards;
    background: -webkit-linear-gradient(var(--general100), var(--purple80));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Name = styled.span`
  @media (max-width: 650px) {
    display: none;
  }
`

export const Id = styled.span`
  display: none;
  @media (max-width: 650px) {
    display: inline;
  }
`
