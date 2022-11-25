import Banner from '../../Components/Banner/Banner'
import Gallery from '../../Components/Gallery/Gallery'
import { LogementData } from '../Logement/LogementData'

function Home() {
  console.log(LogementData)

  return (
    <div>
      <Banner />
      <Gallery />
    </div>
  )
}

export default Home
