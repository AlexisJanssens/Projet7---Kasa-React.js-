import styled from 'styled-components'
import rightArrow from '../../assets/VectorArrowRight.png'
import { media } from '../../utils/style/colors'

const BtnConatiner = styled.div`
  position: absolute;
  top: 210px;
  right: 0;
  @media (max-width: ${media.mobile}) {
    top: 115px;
  }
`
const Btn = styled.button`
  background: none;
  border: none;
  img {
    @media (max-width: ${media.mobile}) {
      height: 20px;
    }
  }
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
