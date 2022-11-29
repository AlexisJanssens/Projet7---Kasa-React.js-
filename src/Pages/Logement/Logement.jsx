import { useParams } from 'react-router-dom'
import DropdownBox from '../../Components/DropdownBox/DropdownBox'
import { LogementData } from './LogementData'

function Logement() {
  const { idLogement } = useParams()
  const data = LogementData
  const Logement = data.find((element) => element.id === idLogement)
  console.log(Logement)
  console.log(data)
  return (
    <div>
      <div>
        <img src={Logement.pictures} alt="logement"></img>
        <h1>{Logement.title}</h1>
        <h2>{Logement.location}</h2>

        {Logement.tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <div>
        <p>{Logement.host.name}</p>
        <img src={Logement.host.picture} alt="host"></img>
        <p>{Logement.rating}</p>
      </div>
      <div>
        <DropdownBox
          title={'Description'}
          text={Logement.description}
        ></DropdownBox>
      </div>
    </div>
  )
}

export default Logement
