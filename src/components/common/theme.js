// Try this until figure out theming

const colors = {
  mainWhite: `#fff`,
  mainBlack: `#202020`,
  mainOrange: `#f15025`,
  mainYellow: `#d2aa5c`,
  mainYellowDark: `#F2AF29`,
  mainGreyDark: `#474747`,
  mainGrey: `#efefef`,
}

const textSlanted = `font-family:'Caveat', cursive;`

const transDefault = 'transition:all 0.5s ease-in-out'

const transFunction = (
  property = 'all',
  time = '0.5s',
  type = 'linear'
) => {
  return `transition:${property} ${time} ${type}`
}

const transObject = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

const transition = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}

const letterSpacing = ({ spacing = '0.1rem' }) => {
  return `letter-spacing:${spacing}`
}


export {
  colors,
  textSlanted,
  transDefault,
  transObject,
  transFunction,
  transition,
  border,
  letterSpacing
}