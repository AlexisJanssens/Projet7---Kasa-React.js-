import { useState } from 'react'
import styled from 'styled-components'
import { device, fonts } from '../../utils/style/variable'
import ButtonSliderLeft from './ButtonSliderLeft'
import ButtonSliderRight from './ButtonSliderRight'
import './Slider.css'

const ContainerSlider = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  margin: 100px auto 50px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  @media (${device.mobile}) {
    height: 250px;
    margin: 1.5rem auto 1rem;
  }
  @media (${device.tablet}) {
    height: 350px;
  }
`

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Gradient = styled.div`
  position: absolute;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0) 80%,
    rgba(0, 0, 0, 0.2) 100%
  );
  width: 100%;
  height: 100%;
`

const SlideInfo = styled.div`
  position: absolute;
  color: white;
  top: 90%;
  left: 50%;
  font-size: ${fonts.smallsize};
  @media (${device.mobile}) {
    font-size: ${fonts.mobileNormalSize};
  }
`

const StyledLeftBtn = styled(ButtonSliderLeft)`
  width: 300px;
`
function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(1)

  function nextSlide() {
    if (slideIndex === props.pictures.length) {
      setSlideIndex(1)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }

  function previousSlide() {
    if (slideIndex === 1) {
      setSlideIndex(props.pictures.length)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }

  console.log(slideIndex)
  return (
    <ContainerSlider>
      {props.pictures.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? 'slideActive' : 'slide'}
            key={index}
          >
            <SlideImg src={obj} alt="appart slide" />
          </div>
        )
      })}
      <Gradient></Gradient>
      <SlideInfo>
        {slideIndex}/{props.pictures.length}
      </SlideInfo>

      <StyledLeftBtn
        movePrevSlide={previousSlide}
        length={props.pictures.length}
      />
      <ButtonSliderRight
        moveNextSlide={nextSlide}
        length={props.pictures.length}
      />
    </ContainerSlider>
  )
}

export default Slider
