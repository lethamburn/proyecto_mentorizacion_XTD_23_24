import { useState, useEffect } from 'react'
import StyledProgressMarker from './StyledProgressMarker'

const ProgressMarker = ({ size, color, type }) => {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          setTimeout(() => setPercentage(0), 2000)
          return prevPercentage
        }
        return prevPercentage + 1
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <StyledProgressMarker size={size} color={color} type={type}>
      {type === 'wave' && Array.from({ length: 5 }, (_, index) => <div key={index} />)}
      {(type === 'circleWithPercentage' || type === 'bar' || type === 'wave') && (
  <span style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: type === 'bar' ? 'white' : color,
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px'
  }}>
    {`${percentage}%`}
  </span>
      )}
    </StyledProgressMarker>
  )
}

export default ProgressMarker
