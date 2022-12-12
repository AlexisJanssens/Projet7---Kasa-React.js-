import styled from 'styled-components'
import leftArrow from '../../assets/VectorArrowLeft.png'
import { media } from '../../utils/style/colors'

const BtnConatiner = styled.div`
  position: absolute;
  top: 210px;
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
