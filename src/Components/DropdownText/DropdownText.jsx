import styled from 'styled-components'

const TextContainer = styled.div`
  background-color: #f6f6f6;
  border-radius: 5px;
  position: relative;
  bottom: 1em;
  z-index: -1;
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
