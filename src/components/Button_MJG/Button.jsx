import StyledButton from './StyledButton'

const Button = ({ children, iconOnly, width, height, bgColor, hoverColor, hoverTextColor, textColor, white }) => {
  return (
    <StyledButton
      $iconOnly={iconOnly}
      width={width}
      height={height}
      $bgColor={bgColor}
      $textColor={textColor}
      $hoverColor={hoverColor}
      $hoverTextColor={hoverTextColor}
      $white={white}
    >
      {children}
    </StyledButton>
  )
}

export default Button
