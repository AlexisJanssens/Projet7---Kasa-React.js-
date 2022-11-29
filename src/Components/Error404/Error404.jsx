import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fonts } from '../../utils/style/colors'

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
`

const ErrorText = styled.p`
  font-size: ${fonts.mediumSize};
  color: ${colors.primary};
  font-weight: ${fonts.normalWeight};
  margin: 0.5em 0;
`
const StyledLink = styled(Link)`
  font-size: ${fonts.smallsize};
  color: ${colors.primary};
  font-weight: ${fonts.normalWeight};
  margin: 12em 0 6em 0;
`

function Error404() {
  return (
    <Container>
      <Error>404</Error>
      <ErrorText>Oups ! La page que vous demandez n'existe pas.</ErrorText>
      <StyledLink to={'/'}>Retourner à la page d'accueil</StyledLink>
    </Container>
  )
}

export default Error404
