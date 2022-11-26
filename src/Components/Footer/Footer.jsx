import styled from 'styled-components'
import logoFooter from '../../assets/LOGOLogoFooter.svg'

const FooterContainer = styled.div`
  background-color:black;
  height: 209px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LogoFooter = styled.img`
  height: 40px;
  margin-bottom: 30px;
`

const Copyright = styled.p`
  color: white;
  text-align: center;
  font-size: 24px;
  margin: 0;
`

function Footer() {
  return (
    <FooterContainer>
      <LogoFooter src={logoFooter} alt="logo Kasa"></LogoFooter>
      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </FooterContainer>)
}

export default Footer
