import styled, { keyframes } from 'styled-components'
import { colors, device, fonts } from '../../utils/style/variable'

function DropdownText({ text, isOpen }) {
  if (isOpen === true) {
    return (
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
    )
  }
}

// Css by styled-components
const anim = keyframes`
  0% {
    transform :translateY(-100px);
    opacity: 0;
    }
  100% {
    transform :translateY(0px);
    opacity: 1;
  }
`

const animResponsive = keyframes`
 0% {
    transform :translateY(-100px);
    opacity: 0;
    }
  30% {
    opacity: 0;
  }
  100% {
    transform :translateY(0px);
    opacity: 1;
  }  
`

const TextContainer = styled.div`
  background-color: ${colors.secondary};
  border-radius: 5px;
  position: relative;
  bottom: 1em;
  z-index: -1;
  animation: ${anim} 650ms;
  @media (${device.mobile}) {
    animation: ${animResponsive} 650ms;
  }
  @media (${device.tablet}) {
    animation: ${animResponsive} 650ms;
  }
`
const Text = styled.p`
  font-size: ${fonts.normalSize};
  margin: 0;
  padding: 0.7em;
  padding-top: 1.4em;
  color: ${colors.primary};
  @media (${device.mobile}) {
    font-size: 14px;
    padding: 1.5em 0.7em 0.7em;
  }
  @media (${device.tablet}) {
    font-size: ${fonts.smallsize};
  }
`

export default DropdownText
