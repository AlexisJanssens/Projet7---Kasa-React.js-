import styled from 'styled-components'
import logoFooter from '../../assets/LOGOLogoFooter.svg'
import { colors, fonts, media } from '../../utils/style/colors'

const FooterContainer = styled.div`
  background-color: black;
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
  color: ${colors.tertiary};
  text-align: center;
  font-size: ${fonts.normalSize};
  margin: 0;
  @media (max-width: ${media.mobile}) {
    font-size: 14px;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <LogoFooter src={logoFooter} alt="logo Kasa"></LogoFooter>
      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </FooterContainer>
  )
}

export default Footer
