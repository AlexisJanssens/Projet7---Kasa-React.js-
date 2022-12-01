import styled from 'styled-components'
import leftArrow from '../../assets/VectorArrowLeft.png'

const BtnConatiner = styled.div`
position: absolute;
`

function ButtonSliderLeft ({movePrevSlide}) {

    return (
        <BtnConatiner>
            <button onClick={movePrevSlide}>
                <img src={leftArrow} alt='previous slide'></img>
            </button>
        </BtnConatiner>
    )
}

export default ButtonSliderLeft