import styled from 'styled-components'
import leftArrow from '../../assets/VectorArrowLeft.png'

const BtnConatiner = styled.div`
  position: absolute;
  top: 210px;
`
const Btn = styled.button`
  background: none;
  border: none;
`
function ButtonSliderLeft({ movePrevSlide, btnLeft }) {
  return (
    <BtnConatiner className={btnLeft}>
      <Btn onClick={movePrevSlide}>
        <img src={leftArrow} alt="previous slide"></img>
      </Btn>
    </BtnConatiner>
  )
}

export default ButtonSliderLeft
