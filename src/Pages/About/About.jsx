import styled from 'styled-components'
import Banner from '../../Components/Banner/Banner'
import background from '../../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1background.png'
import DropdownBox from '../../Components/DropdownBox/DropdownBox'
import { device } from '../../utils/style/variable'

function About() {
  return (
    <Container>
      <Banner background={background} text={''} />
      <BoxesContainer>
        <DropdownBox
          title={'Fiabilité'}
          text={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
          }
        ></DropdownBox>
        <DropdownBox
          title={'Respect'}
          text={`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`}
        ></DropdownBox>
        <DropdownBox
          title={'Service'}
          text={`
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`}
        ></DropdownBox>
        <DropdownBox
          title={'Sécurité'}
          text={`
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`}
        ></DropdownBox>
      </BoxesContainer>
    </Container>
  )
}

// Css by styled-components
const Container = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  max-width: 1440px;
  margin: auto;
`

const BoxesContainer = styled.article`
  width: 85%;
  margin: auto;
  padding-top: 2em;
  padding-bottom: 2em;
  @media (${device.mobile}) {
    width: 100%;
  }
  @media (${device.tablet}) {
    width: 100%;
  }
`

export default About
