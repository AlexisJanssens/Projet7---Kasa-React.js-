import styled from 'styled-components'

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  height: 223px;
  ::before {
    content: '';
    background-image: url(/IMGBannerHomePage.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    filter: brightness(70%);
    border-radius: 25px;
  }
`

const BannerText = styled.p`
  position: relative;
  margin: auto;
  color: white;
  font-weight: 500;
  font-size: 48px;
`

function Banner() {
  return (
    <BannerContainer>
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    </BannerContainer>
  )
}

export default Banner
