import { useState } from 'react'
import styled from 'styled-components'
import Button from '../../Components/DropdownText/Button'
import DropdownText from '../../Components/DropdownText/DropdownText'
import { colors, fonts } from '../../utils/style/variable'
import { device } from '../../utils/style/variable'

const DropdownBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary};
  color: white;
  border-radius: 5px;
`

const Title = styled.h2`
  font-size: ${fonts.normalSize};
  font-weight: ${fonts.normalWeight};
  margin-left: 1em;
  @media (${device.mobile}) {
    font-size: 15px;
    margin: 10px;
  }
`
const TextBox = styled.div`
  margin-bottom: 2em;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media (${device.mobile}) {
    margin-bottom: 1em;
    width: 100%;
  }
`

function DropdownBox(props) {
  const [isOpen, setOpen] = useState(false)

  return (
    <TextBox style={props.style}>
      <DropdownBar>
        <Title>{props.title}</Title>
        <Button isOpen={isOpen} setOpen={setOpen}></Button>
      </DropdownBar>
      <DropdownText isOpen={isOpen} setOpen={setOpen} text={props.text} />
    </TextBox>
  )
}

export default DropdownBox
