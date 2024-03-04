import styled from 'styled-components'
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`

const Viewer = () => {
  return (
    <div>
      {/* Usamos el componente Title en lugar de <h1> */}
      <Title>Mentorización</Title>
      <div style={{ color: 'var(--general80)', fontSize: '18px' }}>
        {/* Aquí irían los botones estilizados */}
      </div>
    </div>
  )
}

export default Viewer
