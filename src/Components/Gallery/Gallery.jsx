import { LogementData } from '../../Pages/Logement/LogementData'
import styled from 'styled-components'
import Card from '../Card/Card'
import { colors, media } from '../../utils/style/colors'

const Container = styled.div`
  background-color: ${colors.secondary};
  margin-top: 43px;
  margin-bottom: 43px;
  border-radius: 25px;
  max-width: 1440px;
  @media (max-width: ${media.mobile}) {
    background-color: transparent;
    margin: 25px 0;
  }
`

const CardsGrid = styled.div`
  display: grid;
  padding: 56px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: max-content;
  gap: 45px;
  @media (max-width: ${media.mobile}) {
    grid-template-columns: 1fr;
    padding: 0;
    gap: 20px;
  }
`

function Gallery() {
  return (
    <Container>
      <CardsGrid>
        {LogementData.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
            id={logement.id}
          />
        ))}
      </CardsGrid>
    </Container>
  )
}

export default Gallery
