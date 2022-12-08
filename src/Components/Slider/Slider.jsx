import { useState } from 'react'
import styled from 'styled-components'
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
      <StyledLeftBtn movePrevSlide={previousSlide} />
      <ButtonSliderRight moveNextSlide={nextSlide} />
    </ContainerSlider>
  )
}

export default Slider
