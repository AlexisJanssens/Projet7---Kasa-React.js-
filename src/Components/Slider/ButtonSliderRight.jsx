import styled from 'styled-components'
import rightArrow from '../../assets/VectorArrowRight.png'
import { device } from '../../utils/style/variable'

const BtnConatiner = styled.div`
  position: absolute;
  top: 210px;
  right: 0;
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

function ButtonSliderRight({ moveNextSlide, length }) {
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

export default ButtonSliderRight
