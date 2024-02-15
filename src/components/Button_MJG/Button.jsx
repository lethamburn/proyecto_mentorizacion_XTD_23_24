import StyledButton from './StyledButton'

const Button = ({ children, iconOnly, width, height, bgColor, hoverColor, hoverTextColor, textColor, borderColor, textSize }) => {
  return (
    <StyledButton
      $iconOnly={iconOnly}
      width={width}
      height={height}
      $bgColor={bgColor}
      $textColor={textColor}
      $hoverColor={hoverColor}
      $hoverTextColor={hoverTextColor}
      $borderColor={borderColor}
      $textSize={textSize}
    >
      {children}
    </StyledButton>
  )
}

export default Button
