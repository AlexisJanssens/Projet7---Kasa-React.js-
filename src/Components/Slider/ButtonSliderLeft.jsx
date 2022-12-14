import styled from 'styled-components'
import leftArrow from '../../assets/VectorArrowLeft.png'
import { device } from '../../utils/style/variable'

const BtnConatiner = styled.div`
  position: absolute;
  top: 210px;
  @media (${device.mobile}) {
    top: 115px;
  }
`
const Btn = styled.button`
  background: none;
  border: none;
  img {
    @media (${device.mobile}) {
      height: 20px;
    }
  }
`
function ButtonSliderLeft({ movePrevSlide, btnLeft, length }) {
  if (length > 1) {
    return (
      <BtnConatiner className={btnLeft}>
        <Btn onClick={movePrevSlide}>
          <img src={leftArrow} alt="previous slide"></img>
        </Btn>
      </BtnConatiner>
    )
  }
}

export default ButtonSliderLeft
