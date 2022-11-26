import { LogementData } from '../../Pages/Logement/LogementData'
import styled from 'styled-components'
import Card from '../Card/Card'

const Container = styled.div`
background-color: #F6F6F6;
margin-top: 43px;
margin-bottom: 43px;
border-radius: 25px;
max-width: 1440px;
`

const CardsGrid = styled.div`
  display: grid;
  padding: 56px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: max-content;
  gap: 45px;
`

function Gallery() {
  return (
    <Container>
      <CardsGrid>
        {LogementData.map((logement, index) => (
          <Card key={index} title={logement.title} cover={logement.cover} />
        ))}
      </CardsGrid>
    </Container>
  )
}

export default Gallery
