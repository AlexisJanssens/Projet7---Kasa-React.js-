import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, device, fonts } from '../../utils/style/variable'

function Error404() {
  return (
    <Container>
      <Error>404</Error>
      <ErrorText>Oups ! La page que vous demandez n'existe pas.</ErrorText>
      <StyledLink to={'/'}>Retourner à la page d'accueil</StyledLink>
    </Container>
  )
}

// Css by styled-components
const Container = styled.div`
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const Error = styled.h1`
  font-size: ${fonts.XXLSize};
  color: ${colors.primary};
  margin: 0;
  margin-top: 0.1em;
  @media (${device.mobile}) {
    font-size: 96px;
    margin-top: 1em;
  }
  @media (${device.tablet}) {
    font-size: 150px;
  }
`

const ErrorText = styled.p`
  font-size: ${fonts.mediumSize};
  color: ${colors.primary};
  font-weight: ${fonts.normalWeight};
  margin: 0.5em 0;
  @media (${device.mobile}) {
    font-size: 18px;
    width: 70%;
    margin: auto;
  }
  @media (${device.tablet}) {
    font-size: 28px;
  }
`
const StyledLink = styled(Link)`
  font-size: ${fonts.smallsize};
  color: ${colors.primary};
  font-weight: ${fonts.normalWeight};
  margin: 12em 0 6em 0;
  @media (${device.mobile}) {
    margin: 8em 0 4em;
    font-size: 14px;
  }
  @media (${device.tablet}) {
    margin: 6em 0 4em;
  }
`

export default Error404
