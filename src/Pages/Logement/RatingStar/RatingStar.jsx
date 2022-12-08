import fullStar from '../../../assets/VectorFullStar.png'
import emptyStar from '../../../assets/VectorEmptyStar.png'
import styled from 'styled-components'

const RatingContainer = styled.div`
  text-align: end;
  margin: 13px 0;
  min-width: 150px;
`

function RatingStar(props) {
  const ratingArray = [1, 2, 3, 4, 5]

  return (
    <RatingContainer>
      {ratingArray.map((star) =>
        star <= props.rating ? (
          <img src={fullStar} alt="full star rating" />
        ) : (
          <img src={emptyStar} alt="empty star rating" />
        )
      )}
    </RatingContainer>
  )
}

export default RatingStar
