import styled, { keyframes } from 'styled-components'

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
  background-color: #f6f6f6;
  border-radius: 5px;
  position: relative;
  bottom: 1em;
  z-index: -1;
  animation: ${test} 650ms;
`
const Text = styled.p`
  font-size: 24px;
  margin: 0;
  padding: 0.7em;
  padding-top: 1.4em;
  color: #ff6060;
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
