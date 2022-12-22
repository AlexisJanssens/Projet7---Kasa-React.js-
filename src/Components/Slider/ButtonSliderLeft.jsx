import styled from 'styled-components'
import leftArrow from '../../assets/VectorArrowLeft.png'
import { device } from '../../utils/style/variable'

function ButtonSliderLeft({ movePrevSlide, btnLeft, length }) {
  // display button only if they are many pictures
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

// Css by styled-components
const BtnConatiner = styled.div`
  position: absolute;
  top: 210px;
  @media (${device.mobile}) {
    top: 115px;
  }
  @media (${device.tablet}) {
    top: 150px;
  }
`
const Btn = styled.button`
  background: none;
  border: none;
  img {
    @media (${device.mobile}) {
      height: 20px;
    }
    @media (${device.tablet}) {
      height: 50px;
    }
  }
`

export default ButtonSliderLeft
