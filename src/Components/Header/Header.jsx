import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/LOGO.png'

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
`
const Logo = styled.img`
  height: 40px;
`

const StyledLink = styled(Link)`
  margin-left: 57px;
  color: #ff6060;
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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
