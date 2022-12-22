import styled from 'styled-components'
import rightArrow from '../../assets/VectorArrowRight.png'
import { device } from '../../utils/style/variable'

function ButtonSliderRight({ moveNextSlide, length }) {
  // Display button only if they are many pictures
  if (length > 1) {
    return (
      <BtnConatiner>
        <Btn onClick={moveNextSlide}>
          <img src={rightArrow} alt="next slide"></img>
        </Btn>
      </BtnConatiner>
    )
  }
}

// Css by styled-components
const BtnConatiner = styled.div`
  position: absolute;
  top: 210px;
  right: 0;
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

export default ButtonSliderRight
