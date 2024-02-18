import Sidebar from './Sidebar'

const Viewer = () => {
  const components = [
    { name: 'Test Component 1', component: () => <div>Component 1</div>, code: 'Code 1' },
    { name: 'Test Component 2', component: () => <div>Component 2</div>, code: 'Code 2' }
  ]

  return (
    <div>
      <Sidebar components={components} onSelect={(component) => console.log(component)} />
    </div>
  )
}

export default Viewer
