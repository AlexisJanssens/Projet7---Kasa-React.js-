import { LogementData } from '../../Pages/Logement/LogementData'
import styled from 'styled-components'
import Card from '../Card/Card'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`

function Gallery() {
  return (
    <div>
      <CardsContainer>
        {LogementData.map((logement, index) => (
          <Card key={index} title={logement.title} cover={logement.cover} />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Gallery
