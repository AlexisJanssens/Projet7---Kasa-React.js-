import { useParams } from 'react-router-dom'
import DropdownBox from '../../Components/DropdownBox/DropdownBox'
import { LogementData } from './LogementData'
import Slider from '../../Components/Slider/Slider'
import styled from 'styled-components'
import { colors, fonts } from '../../utils/style/colors'

const PageContainer = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  max-width: 1440px;
  margin: auto;
`

const Title = styled.h1`
  font-size: ${fonts.mediumSize};
  color: ${colors.primary};
  font-weight: ${fonts.normalSize};
`
const Location = styled.h2`
  font-size: ${fonts.smallsize};
  font-weight: ${fonts.normalSize};
  color: ${colors.primary};
`

const Tags = styled.p`
 background-color: ${colors.primary};
 color: ${colors.tertiary};
 border-radius: 10px;
 font-size: 14px;
 font-weight: ${fonts.normalSize};
 padding: 3px 40px;
 margin-right: 10px;
`

const TagContainer = styled.div`
display: flex;
flex-direction: row;
`

const HostName = styled.p`
font-size: ${fonts.smallsize};
font-weight: ${fonts.normalSize};
color: ${colors.primary};
`
const HostImg = styled.img`
border-radius: 50%;
`

const FirstContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const HostContainer = styled.div`
display: flex;
flex-direction: row;
`

const SecondContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

function Logement() {
  const { idLogement } = useParams()
  const data = LogementData
  const logement = data.find((element) => element.id === idLogement)
  console.log(logement)
  console.log(data)
  return (
    <PageContainer>
      <Slider pictures = {logement.pictures}/>
      <FirstContainer>
        <div>
          <Title>{logement.title}</Title>
          <Location>{logement.location}</Location>
          <TagContainer>
          {logement.tags.map((tag, index) => (
            <Tags key={index}>{tag}</Tags>
          ))}
          </TagContainer>
        </div>
        <div>
          <HostContainer>
            <HostName>{logement.host.name}</HostName>
            <HostImg src={logement.host.picture} alt="host"></HostImg>
          </HostContainer>
            <p>{logement.rating}</p>
        </div>
      </FirstContainer>
      <SecondContainer>
        <DropdownBox
          changeWidth={width}
          title={'Description'}
          text={logement.description}
        />
        <DropdownBox
        changeWidth={width}
        title={'Equipements'}
        text={logement.equipments.map((equip, index) =>(
          <p key={index}>{equip}</p>
        ))}/>
      </SecondContainer>
    </PageContainer>
  )
}

export default Logement
