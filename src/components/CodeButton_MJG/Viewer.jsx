import { useState } from 'react'
import CodeButton from './CodeButton'

const Viewer = () => {
  const [selectedOption, setSelectedOption] = useState('optionone')

  const handleChange = (option) => {
    setSelectedOption(option)
  }

  return (
    <CodeButton selected={selectedOption} onChange={handleChange} />
  )
}

export default Viewer
