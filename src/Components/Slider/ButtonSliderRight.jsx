import styled from 'styled-components'
import rightArrow from '../../assets/VectorArrowRight.png'

const BtnConatiner = styled.div`
  position: absolute;
  top: 210px;
  right: 0;
`
const Btn = styled.button`
  background: none;
  border: none;
`

function ButtonSliderRight({ moveNextSlide }) {
  return (
    <BtnConatiner>
      <Btn onClick={moveNextSlide}>
        <img src={rightArrow} alt="next slide"></img>
      </Btn>
    </BtnConatiner>
  )
}

export default ButtonSliderRight
