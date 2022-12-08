import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/LOGO.png'
import { colors, fonts, media } from '../../utils/style/colors'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 60px;
  padding-left: 25px;
  padding-right: 25px;
  max-width: 1440px;
  @media (max-width: ${media.mobile}) {
    padding: 0 20px;
    margin: 20px 0;
  }
`
const Logo = styled.img`
  height: 40px;
`

const StyledLink = styled(Link)`
  margin-left: 57px;
  color: ${colors.primary};
  font-weight: ${fonts.normalWeight};
  font-size: ${fonts.normalSize};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: ${media.mobile}) {
    margin-left: 10px;
    font-size: 14px;
    text-transform: uppercase;
  }
`
function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo}></Logo>
      <nav>
        <StyledLink to={'/'}>Accueil</StyledLink>
        <StyledLink to={'/About'}>A Propos</StyledLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
