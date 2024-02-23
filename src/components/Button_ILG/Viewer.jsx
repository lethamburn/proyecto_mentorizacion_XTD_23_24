import Button from './Button'

const Viewer = () => {
  return (
    <div>
      <h1 style={{ color: 'var(--general100)', marginBottom: '20px' }}>Mentorización</h1>
      <div style={{ color: 'var(--general80)', fontSize: '18px' }}>
        <Button>Click</Button>
        <Button primary>Primary</Button>
      </div>
    </div>
  )
}

export default Viewer
