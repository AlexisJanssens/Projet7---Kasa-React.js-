import styled from 'styled-components'
import Banner from '../../Components/Banner/Banner'
import Gallery from '../../Components/Gallery/Gallery'
import { LogementData } from '../Logement/LogementData'

function Home() {
  console.log(LogementData)

  const Container = styled.div`
    padding-left: 25px;
    padding-right: 25px;
  `

  return (
    <Container>
      <Banner />
      <Gallery />
    </Container>
  )
}

export default Home
