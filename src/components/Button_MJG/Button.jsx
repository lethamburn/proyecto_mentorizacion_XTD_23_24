import StyledButton from './StyledButton'

const Button = ({ children, iconOnly, width, height, bgColor, hoverColor, hoverTextColor, textColor, borderColor }) => {
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
    >
      {children}
    </StyledButton>
  )
}

export default Button
