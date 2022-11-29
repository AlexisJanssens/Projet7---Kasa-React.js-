import { useState } from 'react'
import styled from 'styled-components'
import Banner from '../../Components/Banner/Banner'
import Button from '../../Components/DropdownText/Button'
import DropdownText from '../../Components/DropdownText/DropdownText'
import background from '../../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1background.png'

const Container = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  max-width: 1440px;
  margin: auto;
`

const DropdownBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ff6060;
  color: white;
  font-weight: 500;
  font-size: 24px;
  border-radius: 5px;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-left: 1em;
`
const TextBox = styled.div`
  margin-bottom: 2em;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const BoxesContainer = styled.article`
  width: 85%;
  margin: auto;
  padding-top: 2em;
  padding-bottom: 2em;
`

function About() {
  const [isOpen, setOpen] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [isOpen3, setOpen3] = useState(false)
  const [isOpen4, setOpen4] = useState(false)

  return (
    <Container>
      <Banner background={background} text={''} />
      <BoxesContainer>
        <TextBox>
          <DropdownBar>
            <Title>Fiabilité</Title>
            <Button isOpen={isOpen} setOpen={setOpen}></Button>
          </DropdownBar>
          <DropdownText
            isOpen={isOpen}
            setOpen={setOpen}
            text={
              'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
            }
          />
        </TextBox>
        <TextBox>
          <DropdownBar>
            <Title>Respect</Title>
            <Button isOpen={isOpen2} setOpen={setOpen2}></Button>
          </DropdownBar>
          <DropdownText
            isOpen={isOpen2}
            setOpen={setOpen2}
            text={
              'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
            }
          />
        </TextBox>
        <TextBox>
          <DropdownBar>
            <Title>Service</Title>
            <Button isOpen={isOpen3} setOpen={setOpen3}></Button>
          </DropdownBar>
          <DropdownText
            isOpen={isOpen3}
            setOpen={setOpen3}
            text={`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`}
          />
        </TextBox>
        <TextBox>
          <DropdownBar>
            <Title>Sécurité</Title>
            <Button isOpen={isOpen4} setOpen={setOpen4}></Button>
          </DropdownBar>
          <DropdownText
            isOpen={isOpen4}
            setOpen={setOpen4}
            text={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`}
          />
        </TextBox>
      </BoxesContainer>
    </Container>
  )
}

export default About
