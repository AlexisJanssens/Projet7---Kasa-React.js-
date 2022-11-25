import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/LOGO.png'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
const Logo = styled.img`
  height: 40px;
`

const StyledLink = styled(Link)`
  margin-right: 10px;
  color: #ff6060;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
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
