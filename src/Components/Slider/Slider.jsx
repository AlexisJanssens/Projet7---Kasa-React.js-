import { useState } from 'react'
import styled from 'styled-components'
import { device, fonts } from '../../utils/style/variable'
import ButtonSliderLeft from './ButtonSliderLeft'
import ButtonSliderRight from './ButtonSliderRight'
import './Slider.css'

function Slider(props) {
  // This hook will define which picture is active
  const [slideIndex, setSlideIndex] = useState(1)

  // functions for change pictures
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

  return (
    <ContainerSlider>
      {props.pictures.map((obj, index) => {
        return (
          <div
            // this className will change dynamicaly whith the slideIndex and the active slide will be shown
            className={slideIndex === index + 1 ? 'slideActive' : 'slide'}
            key={index}
          >
            <SlideImg src={obj} alt="appart slide" />
          </div>
        )
      })}
      <Gradient></Gradient>
      {/* show SlideInfo if they are many pictures */}
      {props.pictures.length > 1 ? (
        <SlideInfo>
          {slideIndex}/{props.pictures.length}
        </SlideInfo>
      ) : null}
      <ButtonSliderLeft
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

// Css by styled-components
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
    margin-top: 50px;
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

export default Slider
