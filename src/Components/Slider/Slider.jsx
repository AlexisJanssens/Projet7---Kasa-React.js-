import {useState} from 'react'
import styled from 'styled-components'
import ButtonSliderLeft from './ButtonSliderLeft'
import ButtonSliderRight from './ButtonSliderRight'
import './Slider.css'

const ContainerSlider = styled.div`
width: 100% ;
height: 500px;
margin: 100px auto 50px;
position: relative;
overflow: hidden;
box-shadow: 0 10px 20px rgba(0,0,0,0.2);
`

const SlideImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
function Slider(props) {

    const [slideIndex, setSlideIndex] = useState(1)
    
    function nextSlide() {
        setSlideIndex(slideIndex + 1)
    }

    function previousSlide() {
        setSlideIndex(slideIndex - 1)
    }

    console.log(slideIndex)
    return (
        <ContainerSlider>
            {props.pictures.map((obj, index) => {
                return (
                    <div className={ slideIndex === (index + 1) ? "slideActive" : "slide"} key={index}>
                        <SlideImg src={obj} alt='appart slide' />
                    </div>
                )
            })}
            {slideIndex > 1 ? 
                <ButtonSliderLeft movePrevSlide={previousSlide}/> : null 
            }
            {slideIndex < props.pictures.length ?
                <ButtonSliderRight moveNextSlide={nextSlide}/> : null 
            }

        </ContainerSlider>
    )
}



export default Slider