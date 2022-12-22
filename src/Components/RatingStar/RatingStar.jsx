import fullStar from '../../assets/VectorFullStar.png'
import emptyStar from '../../assets/VectorEmptyStar.png'
import styled from 'styled-components'
import { device } from '../../utils/style/variable'

function RatingStar(props) {
  // create array for map()
  const ratingArray = [1, 2, 3, 4, 5]

  return (
    <RatingContainer>
      {/* loop for display stars */}
      {ratingArray.map((star, index) =>
        star <= props.rating ? (
          <img src={fullStar} alt="full star rating" key={index} />
        ) : (
          <img src={emptyStar} alt="empty star rating" key={index} />
        )
      )}
    </RatingContainer>
  )
}

// css by styled-components
const RatingContainer = styled.div`
  text-align: end;
  margin: 13px 0;
  min-width: 150px;
  @media (${device.mobile}) {
    text-align: start;
    margin: auto 0;
    img {
      height: 15px;
      width: 15px;
      margin-right: 5px;
    }
  }
`

export default RatingStar
