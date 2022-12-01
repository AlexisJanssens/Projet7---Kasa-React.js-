import styled from 'styled-components'
import rightArrow from '../../assets/VectorArrowRight.png'

const BtnConatiner = styled.div`
position: absolute;
right: 0;
`
function ButtonSliderRight ({moveNextSlide}) {
    return (
        <BtnConatiner>
            <button onClick={moveNextSlide}>
                <img src={rightArrow} alt='next slide'></img>
            </button>
        </BtnConatiner>
    )
}

export default ButtonSliderRight