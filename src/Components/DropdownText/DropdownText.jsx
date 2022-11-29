import styled, { keyframes } from 'styled-components'
import { colors, fonts } from '../../utils/style/colors'

const test = keyframes`
  0% {
    transform :translateY(-100px);
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
  animation: ${test} 650ms;
`
const Text = styled.p`
  font-size: ${fonts.normalSize};
  margin: 0;
  padding: 0.7em;
  padding-top: 1.4em;
  color: ${colors.primary};
`

function DropdownText({ text, isOpen }) {
  if (isOpen === true) {
    return (
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
    )
  }
}

export default DropdownText
