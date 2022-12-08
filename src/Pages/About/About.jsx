import { useState } from 'react'
import styled from 'styled-components'
import Banner from '../../Components/Banner/Banner'
import background from '../../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1background.png'
import DropdownBox from '../../Components/DropdownBox/DropdownBox'

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
`

function About() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Container>
      <Banner background={background} text={''} />
      <BoxesContainer>
        <DropdownBox
          isOpen={isOpen}
          setOpen={setOpen}
          title={'Fiabilité'}
          text={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
          }
        ></DropdownBox>
        <DropdownBox
          isOpen={isOpen}
          setOpen={setOpen}
          title={'Respect'}
          text={`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`}
        ></DropdownBox>
        <DropdownBox
          isOpen={isOpen}
          setOpen={setOpen}
          title={'Service'}
          text={`
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`}
        ></DropdownBox>
        <DropdownBox
          isOpen={isOpen}
          setOpen={setOpen}
          title={'Sécurité'}
          text={`
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`}
        ></DropdownBox>
      </BoxesContainer>
    </Container>
  )
}

export default About
