import ArrowDown from '../../assets/VectorDropdownArrow.png'
import ArrowUp from '../../assets/VectorDropdownArrowUp.png'
import styled from 'styled-components'

const ButtonDown = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 2em;
`

const ButtonUp = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 2em;
`
function Button({ isOpen, setOpen }) {
  if (isOpen === false) {
    return (
      <ButtonDown onClick={() => setOpen(true)}>
        <img src={ArrowDown} alt="flèche pour ouvrir ou fermer le texte"></img>
      </ButtonDown>
    )
  } else {
    return (
      <ButtonUp onClick={() => setOpen(false)}>
        <img src={ArrowUp} alt="flèche pour ouvrir ou fermer le texte"></img>
      </ButtonUp>
    )
  }
}

export default Button
