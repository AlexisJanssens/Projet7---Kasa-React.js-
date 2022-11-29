import { useState } from 'react'
import styled from 'styled-components'
import Button from '../../Components/DropdownText/Button'
import DropdownText from '../../Components/DropdownText/DropdownText'
import { colors, fonts } from '../../utils/style/colors'

const DropdownBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary};
  color: white;
  font-weight: ${fonts.normalWeight};
  font-size: ${fonts.mediumSize};
  border-radius: 5px;
`

const Title = styled.h2`
  font-size: ${fonts.normalSize};
  font-weight: ${fonts.normalWeight};
  margin-left: 1em;
`
const TextBox = styled.div`
  margin-bottom: 2em;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

function DropdownBox(title, text) {
  const [isOpen, setOpen] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [isOpen3, setOpen3] = useState(false)
  const [isOpen4, setOpen4] = useState(false)

  return (
    <div>
      <TextBox>
        <DropdownBar>
          <Title>{title}</Title>
          <Button isOpen={isOpen} setOpen={setOpen}></Button>
        </DropdownBar>
        <DropdownText isOpen={isOpen} setOpen={setOpen} text={text} />
      </TextBox>
    </div>
  )
}

export default DropdownBox
