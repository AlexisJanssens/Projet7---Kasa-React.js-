import styled from 'styled-components'
import Banner from '../../Components/Banner/Banner'
import Gallery from '../../Components/Gallery/Gallery'
import homeBackground from '../../assets/IMGBannerHomePage.png'
import { device } from '../../utils/style/variable'

function Home() {
  return (
    <Container>
      <Banner
        background={homeBackground}
        text={'Chez vous, partout et ailleurs'}
      />
      <Gallery />
    </Container>
  )
}

//Css by styled-components
const Container = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  max-width: 1440px;
  margin: auto;
  @media (${device.mobile}) {
    padding: 0 20px;
  }
`

export default Home
