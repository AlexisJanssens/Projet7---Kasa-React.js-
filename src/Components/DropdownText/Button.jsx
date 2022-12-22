import ArrowDown from '../../assets/VectorDropdownArrow.png'
import styled from 'styled-components'
import { useState } from 'react'
import { device } from '../../utils/style/variable'

function Button({ isOpen, setOpen }) {
  // hook useState for rotate icon
  const [rotateIcon, setRotateIcon] = useState(false)

  // Rotate icon & show text
  function handleRotation() {
    setRotateIcon(!rotateIcon)
    setOpen(!isOpen)
  }

  // rotate is the value of transform for CSS animation
  const rotate = rotateIcon ? 'rotate(180deg)' : 'rotate(0)'

  return (
    <ButtonDown
      style={{ transform: rotate, transition: 'all 200ms ease' }}
      onClick={handleRotation}
    >
      <img src={ArrowDown} alt="flèche pour ouvrir ou fermer le texte"></img>
    </ButtonDown>
  )
}

//Css from styled-components
const ButtonDown = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 2em;
  :hover {
    cursor: pointer;
  }
  @media (${device.mobile}) {
    margin-right: 10px;
  }

  img {
    @media (${device.mobile}) {
      height: 9px;
      width: 15px;
    }
  }
`

export default Button
