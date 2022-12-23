import { LogementData } from '../../utils/data/LogementData'
import styled from 'styled-components'
import Card from '../Card/Card'
import { colors, device } from '../../utils/style/variable'

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

// Css by styled-components
const Container = styled.div`
  background-color: ${colors.secondary};
  margin-top: 43px;
  margin-bottom: 43px;
  border-radius: 25px;
  max-width: 1440px;
  @media (${device.mobile}) {
    background-color: transparent;
    margin: 25px 0;
  }
`

const CardsGrid = styled.div`
  display: grid;
  padding: 3.5vw;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: max-content;
  gap: 3.5vw;
  @media (${device.mobile}) {
    grid-template-columns: 1fr;
    padding: 0;
    gap: 20px;
  }
  @media (${device.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Gallery
