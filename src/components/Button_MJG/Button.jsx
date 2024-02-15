import StyledButton from './StyledButton'

const Button = ({ children, iconOnly, width, height, bgColor, hoverColor, hoverTextColor, white }) => {
  return (
    <StyledButton
      $iconOnly={iconOnly}
      width={width}
      height={height}
      $bgColor={bgColor}
      $hoverColor={hoverColor}
      $hoverTextColor={hoverTextColor}
      $white={white}
    >
      {children}
    </StyledButton>
  )
}

export default Button
