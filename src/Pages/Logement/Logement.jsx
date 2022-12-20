import { Navigate, useParams } from 'react-router-dom'
import DropdownBox from '../../Components/DropdownBox/DropdownBox'
import { LogementData } from './LogementData'
import Slider from '../../Components/Slider/Slider'
import styled from 'styled-components'
import { colors, device, fonts } from '../../utils/style/variable'
import RatingStar from './RatingStar/RatingStar'

const PageContainer = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  max-width: 1440px;
  margin: auto;
`

const Title = styled.h1`
  font-size: ${fonts.mediumSize};
  color: ${colors.primary};
  font-weight: ${fonts.normalWeight};
  margin: 0;
  @media (${device.mobile}) {
    font-size: ${fonts.smallsize};
  }
`
const Location = styled.h2`
  font-size: ${fonts.smallsize};
  font-weight: ${fonts.normalWeight};
  color: ${colors.primary};
  @media (${device.mobile}) {
    font-size: ${fonts.mobileNormalSize};
  }
`

const Tags = styled.p`
  background-color: ${colors.primary};
  color: ${colors.tertiary};
  border-radius: 10px;
  font-size: 14px;
  font-weight: ${fonts.normalWeight};
  padding: 3px 40px;
  margin-right: 10px;
  @media (${device.mobile}) {
    font-size: ${fonts.mobileNormalSize};
    font-weight: ${fonts.lightWeight};
    padding: 3px 20px;
    white-space: nowrap;
    margin: 5px 10px 5px 0;
    border-radius: 5px;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const HostName = styled.p`
  font-size: ${fonts.smallsize};
  font-weight: ${fonts.normalSize};
  color: ${colors.primary};
  width: min-content;
  padding-right: 10px;
  margin: auto 0;
  @media (${device.mobile}) {
    font-size: ${fonts.mobileSmallSize};
  }
`
const HostImg = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  @media (${device.mobile}) {
    height: 32px;
    width: 32px;
  }
`
const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14px;
  @media (${device.mobile}) {
    flex-direction: column;
  }
`

const HostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const SecondContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  @media (${device.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  @media (${device.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`

const HostAndRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (${device.mobile}) {
    flex-direction: row-reverse;
    margin-top: 11px;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Equipements = styled.div`
  margin: 0;
`

function Logement() {
  const { idLogement } = useParams()
  const data = LogementData
  const logement = data.find((element) => element.id === idLogement)
  console.log(logement)
  console.log(data)

  if (logement === undefined) {
    console.log('OK')
    return (
      <Navigate to="/Error" replace={true}/>
    )
  } 

  return (
    <PageContainer>
      <Slider pictures={logement.pictures} />
      <FirstContainer>
        <LeftContainer>
          <Title>{logement.title}</Title>
          <Location>{logement.location}</Location>
          <TagContainer>
            {logement.tags.map((tag, index) => (
              <Tags key={index}>{tag}</Tags>
            ))}
          </TagContainer>
        </LeftContainer>
        <HostAndRatingContainer>
          <HostContainer>
            <HostName>{logement.host.name}</HostName>
            <HostImg src={logement.host.picture} alt="host"></HostImg>
          </HostContainer>
          <RatingStar rating={logement.rating} />
        </HostAndRatingContainer>
      </FirstContainer>
      <SecondContainer>
        <DropdownBox
          title={'Description'}
          text={logement.description}
          width={40}
        />
        <DropdownBox
          title={'Equipements'}
          text={logement.equipments.map((equip, index) => (
            <Equipements key={index}>- {equip}</Equipements>
          ))}
        />
      </SecondContainer>
    </PageContainer>
  )
}

export default Logement
