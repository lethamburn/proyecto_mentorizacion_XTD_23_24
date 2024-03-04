import styled from 'styled-components'

const StyledSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* Espacio entre las diapositivas */
  gap: 10px;

  /*Los estilos para cada diapositiva */
  & > div {
    flex: 0 0 auto;
    width: 100vw;
    scroll-snap-align: start;
    background-color: #ddd; /* Color de fondo de las diapositivas */
    padding: 20px; 
    border-radius: 8px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra */
  }
`

const Slider = ({ children }) => {
  return <StyledSlider>{children}</StyledSlider>
}

export default Slider
